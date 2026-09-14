const fs = require('fs');
const https = require('https');
const path = require('path');

const baseUrl = 'https://africa.backend-boxcom-site.box-com.com';
const username = 'Zakaria';
const password = process.env.BOXCOM_WP_APP_PASSWORD;

if (!password) {
  throw new Error('BOXCOM_WP_APP_PASSWORD is required.');
}

const auth = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;
const mediaCache = new Map();

async function request(apiPath, options = {}) {
  return new Promise((resolve, reject) => {
    const body = options.body || null;
    const headers = {
      Authorization: auth,
      'User-Agent': 'Kitline/1.0 (local development)',
      ...(options.headers || {}),
    };
    if (body) {
      headers['Content-Length'] = Buffer.byteLength(body);
    }

    const req = https.request(`${baseUrl}/wp-json${apiPath}`, {
      method: options.method || 'GET',
      headers,
      timeout: 180000,
    }, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf8');
        let parsed;
        try {
          parsed = JSON.parse(raw);
        } catch (error) {
          reject(new Error(`${response.statusCode} ${apiPath}: invalid JSON response`));
          return;
        }
        if (response.statusCode < 200 || response.statusCode >= 300) {
          reject(new Error(`${response.statusCode} ${apiPath}: ${parsed.message || raw}`));
          return;
        }
        resolve(parsed);
      });
    });

    req.on('timeout', () => req.destroy(new Error(`Timeout requesting ${apiPath}`)));
    req.on('error', reject);
    if (body) {
      req.write(body);
    }
    req.end();
  });
}

function slugify(value) {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function mimeType(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  return {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
  }[extension] || 'application/octet-stream';
}

async function uploadMedia(filePath, label) {
  if (mediaCache.has(filePath)) {
    return mediaCache.get(filePath);
  }

  const extension = path.extname(filePath).toLowerCase();
  const uploadName = `boxcom-${slugify(label)}${extension}`;
  const uploadSlug = slugify(path.basename(uploadName, extension));
  const existing = await request(`/wp/v2/media?context=edit&slug=${encodeURIComponent(uploadSlug)}&per_page=1`);

  let media;
  if (existing.length) {
    media = existing[0];
  } else {
    media = await request('/wp/v2/media', {
      method: 'POST',
      headers: {
        'Content-Disposition': `attachment; filename="${uploadName}"`,
        'Content-Type': mimeType(filePath),
      },
      body: fs.readFileSync(filePath),
    });
  }

  mediaCache.set(filePath, media.id);
  return media.id;
}

async function upsertPost(restBase, acfBase, item) {
  const existing = await request(`/wp/v2/${restBase}?context=edit&slug=${encodeURIComponent(item.slug)}&per_page=1`);
  const corePayload = {
    title: item.title,
    slug: item.slug,
    status: 'publish',
    menu_order: item.order,
    ...(item.content ? { content: item.content } : {}),
  };
  const post = existing.length
    ? await request(`/wp/v2/${restBase}/${existing[0].id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corePayload),
      })
    : await request(`/wp/v2/${restBase}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corePayload),
      });

  await request(`/acf/v3/${acfBase}/${post.id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: item.fields }),
  });
  return post.id;
}

async function syncServices() {
  const services = [
    {
      title: 'Media Relations', slug: 'media-relations',
      description: 'We find the strongest angle, take it to relevant journalists and editors, and keep the story moving through follow-up, interviews and editorial opportunities. Crisis management and consultancy sits within this work.',
      servicesPageDescription: 'For announcements, expert positioning, interviews, editorial opportunities and situations where the media narrative needs careful handling, including crisis management and consultancy.',
      image: 'public/assets/Services_Approved Images/Media Relations Image.webp',
    },
    {
      title: 'Media Events', slug: 'media-events',
      description: 'We turn launches, briefings and announcements into press moments that give journalists something useful to see, ask and report.',
      servicesPageDescription: 'For launches, press conferences, briefings, site visits and moments when journalists need access to people, places or proof.',
      image: 'public/assets/Services_Approved Images/Media Events Image.webp',
    },
    {
      title: 'Media Monitoring', slug: 'media-monitoring',
      description: 'We track coverage, sentiment and emerging issues, then help the client decide when to respond and how quickly to move.',
      servicesPageDescription: 'For tracking coverage, competitors and emerging issues, with analysis that helps the team decide what to do next.',
      image: 'public/assets/Services_Approved Images/Media Monitoring Image.webp',
    },
    {
      title: 'Social PR', slug: 'social-pr',
      description: 'We carry press stories into social channels without losing the facts, tone or intent behind them.',
      servicesPageDescription: 'For carrying press stories into social channels, following the response and managing the conversation around them.',
      image: 'public/assets/Services_Approved Images/Social PR Image.webp',
    },
    {
      title: 'PR Content Creation', slug: 'pr-content-creation',
      description: 'We develop releases, articles, speeches, statements and media assets that are clear, usable and adapted to the market.',
      servicesPageDescription: 'For press releases, articles, speeches, reports, media kits and content that needs to work across languages or markets.',
      image: 'public/assets/Services_Approved Images/PR Content Creation Image.webp',
    },
    {
      title: 'Influencer Relations', slug: 'influencer-relations',
      description: 'We build creator partnerships around relevance, local fit and the role each voice should play in the wider story.',
      servicesPageDescription: 'For creator partnerships where audience relevance, local context and a clear role in the wider campaign matter.',
      image: 'public/assets/Services_Approved Images/Influencer Relations Image.webp',
    },
  ];

  const ids = [];
  for (const [index, service] of services.entries()) {
    const imageId = await uploadMedia(service.image, `service-${service.slug}`);
    const id = await upsertPost('services', 'services', {
      title: service.title,
      slug: service.slug,
      order: index + 1,
      fields: {
        navigation_label: service.title,
        card_description: service.description,
        services_page_description: service.servicesPageDescription,
        card_image: imageId,
        show_on_homepage: true,
      },
    });
    ids.push(id);
    process.stdout.write(`Service: ${service.title}\n`);
  }
  return ids;
}

async function syncClients() {
  const prepared = 'public/assets/clients-upload';
  const clients = [
    ['Samsung', 'samsung', `${prepared}/samsung.webp`],
    ['AgriEdge', 'agriedge', 'public/assets/clients-pr/agriedge.png'],
    ['Air France', 'air-france', `${prepared}/air-france.webp`],
    ['Salon', 'salon', `${prepared}/salon.webp`],
    ['Fever', 'fever', `${prepared}/fever.webp`],
    ['DeFacto', 'defacto', `${prepared}/defacto.webp`],
    ['inDrive', 'indrive', `${prepared}/indrive.webp`],
    ['TotalEnergies', 'totalenergies', `${prepared}/totalenergies.webp`],
    ['Deloitte', 'deloitte', `${prepared}/deloitte.webp`],
    ['Nouvelair', 'nouvelair', `${prepared}/nouvelair.webp`],
    ['DHL', 'dhl', `${prepared}/dhl.webp`],
    ['Netafim', 'netafim', `${prepared}/netafim.webp`],
    ['NTT DATA', 'ntt-data', `${prepared}/ntt-data.webp`],
    ['GWM', 'gwm', `${prepared}/gwm.webp`],
    ['Garena', 'garena', `${prepared}/garena.webp`],
    ['Yamaha', 'yamaha', `${prepared}/yamaha.webp`],
    ['AXA', 'axa', 'public/assets/clients/axa.webp'],
    ['AVEVA', 'aveva', `${prepared}/aveva.webp`],
    ['TVS', 'tvs', `${prepared}/tvs.webp`],
    ['Modanisa', 'modanisa', `${prepared}/modanisa.webp`],
    ['DiliTrust', 'dilitrust', `${prepared}/dilitrust.webp`],
    ['Eqdom', 'eqdom', `${prepared}/eqdom.webp`],
    ['Garden Expo', 'garden-expo', `${prepared}/garden-expo.webp`],
    ['Elm', 'elm', `${prepared}/elm.webp`],
  ];

  for (const [index, [title, slug, image]] of clients.entries()) {
    const mediaLabel = slug === 'agriedge'
      ? 'client-agriedge'
      : slug === 'axa'
        ? 'client-axa-logo'
        : `client-${slug}-trimmed`;
    const logoId = await uploadMedia(image, mediaLabel);
    await upsertPost('clients', 'clients', {
      title, slug, order: index + 1,
      fields: { logo: logoId, website: '', logo_size: 'normal', show_on_homepage: true },
    });
    process.stdout.write(`Client: ${title}\n`);
  }
}

async function syncServicesPage() {
  const page = {
    title: 'Services',
    slug: 'services',
    seoDescription: 'Explore PR services in Morocco from BOXCOM Africa, including media relations, events, content creation, monitoring, Social PR and influencer relations.',
    hero: {
      title: 'PR Services in Morocco for Africa',
      introduction: 'Every brief has its own shape. Sometimes the answer is a focused media push; sometimes it is a PR services program in Morocco that connects content, events, monitoring, social and creators across African markets. We build around the story rather than forcing a fixed package.',
      image: 'public/assets/ServicesOverview_Approved_Images/services-overview-header.jpg',
      imageAlt: 'A spokesperson answering questions from the press',
    },
    catalog: {
      title: 'Where Should the Work Begin?',
      introduction: 'Choose the service closest to the immediate need. The wider plan can grow from there if the story calls for it.',
    },
    services: [
      ['Media Relations', 'media-relations', 'For announcements, expert positioning, interviews, editorial opportunities and situations where the media narrative needs careful handling, including crisis management and consultancy.', 'services-media-relations.jpg', 'A collection of broadcast microphones ready for a press statement'],
      ['Media Events', 'media-events', 'For launches, press conferences, briefings, site visits and moments when journalists need access to people, places or proof.', 'services-media-events.jpg', 'Communications professionals meeting at a media event'],
      ['PR Content Creation', 'pr-content-creation', 'For press releases, articles, speeches, reports, media kits and content that needs to work across languages or markets.', 'services-content-creation.jpg', 'A content creator preparing written communications material'],
      ['Media Monitoring', 'media-monitoring', 'For tracking coverage, competitors and emerging issues, with analysis that helps the team decide what to do next.', 'services-media-monitoring.jpg', 'A media analyst reviewing performance charts'],
      ['Social PR', 'social-pr', 'For carrying press stories into social channels, following the response and managing the conversation around them.', 'services-social-pr.jpg', 'A social media professional managing an online conversation'],
      ['Influencer Relations', 'influencer-relations', 'For creator partnerships where audience relevance, local context and a clear role in the wider campaign matter.', 'services-influencer-relations.jpg', 'A creator presenting live content to an online audience'],
    ],
    work: {
      title: 'How the Work Comes Together',
      introduction: 'A single launch shows how the disciplines connect: media relations secures the announcement coverage, the event gives journalists direct access, content carries the story into each language and monitoring tells the team how it landed. One story, one direction, several disciplines.',
      steps: [
        ['Frame the Brief', 'We clarify the moment, audience, market and pressure points before recommending the work.'],
        ['Build the Right Team', 'The specialists and local partners needed for the brief work from one direction and one core narrative.'],
        ['Review What Moved', 'We look at the coverage, sentiment and quality of the response to decide what should happen next.'],
      ],
    },
    faqs: [
      ['Which service should I start with?', 'Start with the immediate communication need. BOXCOM Africa can then recommend whether one focused service is enough or whether related work should be connected.'],
      ['Can BOXCOM Africa manage the full PR program?', 'Yes. As a PR agency in Morocco, BOXCOM Africa can coordinate media relations, content, events, monitoring, Social PR and creator work as one program when the brief requires it.'],
      ['Can services be delivered across several markets?', 'Yes. BOXCOM Africa directs regional work from Casablanca and brings in established local partners across African markets when a story needs in-market press access, language adaptation or a sharper reading of local context. The narrative, quality standard and reporting stay with one team throughout, so a multi-market program reads as one story told well in each place, not several stories drifting apart.'],
      ['How are results reviewed?', 'Reporting is shaped around the brief and may include share of voice, sentiment, quality of target coverage, narrative accuracy and recommended next steps.'],
    ],
    contact: {
      title: 'Bring Us the Brief',
      introduction: 'Describe the immediate need and the market it sits in; we will recommend where the work should begin.',
      buttonLabel: 'Discuss the Brief',
    },
  };

  const heroId = await uploadMedia(page.hero.image, 'services-overview-hero');
  const heroMedia = await request(`/wp/v2/media/${heroId}?_fields=id,source_url`);
  const serviceCards = [];

  for (const [title, slug, description, filename, imageAlt] of page.services) {
    const imageId = await uploadMedia(
      `public/assets/ServicesOverview_Approved_Images/${filename}`,
      `services-overview-${slug}`
    );
    const media = await request(`/wp/v2/media/${imageId}?_fields=id,source_url`);
    serviceCards.push({ title, slug, description, imageAlt, imageUrl: media.source_url });
  }

  const servicesHtml = serviceCards.map((service) => `
    <article data-service="${escapeHtml(service.slug)}">
      <img src="${escapeHtml(service.imageUrl)}" alt="${escapeHtml(service.imageAlt)}">
      <h3>${escapeHtml(service.title)}</h3>
      <p>${escapeHtml(service.description)}</p>
      <a href="#/services/${escapeHtml(service.slug)}">Learn More</a>
    </article>`).join('');
  const faqHtml = page.faqs.map(([question, answer]) => `
    <details>
      <summary>${escapeHtml(question)}</summary>
      <p>${escapeHtml(answer)}</p>
    </details>`).join('');
  const workHtml = page.work.steps.map(([title, description]) => `
    <article>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(description)}</p>
    </article>`).join('');
  const content = `
<section data-section="hero">
  <img src="${escapeHtml(heroMedia.source_url)}" alt="${escapeHtml(page.hero.imageAlt)}">
  <h1>${escapeHtml(page.hero.title)}</h1>
  <p>${escapeHtml(page.hero.introduction)}</p>
</section>
<section data-section="services-catalog">
  <h2>${escapeHtml(page.catalog.title)}</h2>
  <p>${escapeHtml(page.catalog.introduction)}</p>
  <div data-content="services">${servicesHtml}
  </div>
</section>
<section data-section="how-the-work-comes-together">
  <h2>${escapeHtml(page.work.title)}</h2>
  <p>${escapeHtml(page.work.introduction)}</p>
  <div>${workHtml}
  </div>
</section>
<section data-section="faq">
  <h2>Frequently Asked Questions</h2>${faqHtml}
</section>
<section data-section="contact">
  <h2>${escapeHtml(page.contact.title)}</h2>
  <p>${escapeHtml(page.contact.introduction)}</p>
  <a href="#/contact">${escapeHtml(page.contact.buttonLabel)}</a>
</section>`.trim();

  const existing = await request(`/wp/v2/pages?context=edit&slug=${page.slug}&per_page=1`);
  const payload = JSON.stringify({
    title: page.title,
    slug: page.slug,
    status: 'publish',
    content,
    excerpt: page.seoDescription,
    featured_media: heroId,
  });
  const wordpressPage = existing.length
    ? await request(`/wp/v2/pages/${existing[0].id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      })
    : await request('/wp/v2/pages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      });

  process.stdout.write(`Services page ID: ${wordpressPage.id}\n`);
  process.stdout.write(`${baseUrl}/wp-json/wp/v2/pages/${wordpressPage.id}\n`);
  process.stdout.write(`${baseUrl}/wp-json/wp/v2/pages?slug=${page.slug}\n`);
}

async function syncServicesPageAcf() {
  const pages = await request('/wp/v2/pages?context=edit&slug=services&per_page=1');
  if (!pages.length) {
    throw new Error('The Services page does not exist. Run BOXCOM_SYNC_SCOPE=services-page first.');
  }

  const pageId = pages[0].id;
  const heroId = await uploadMedia(
    'public/assets/ServicesOverview_Approved_Images/services-overview-header.jpg',
    'services-overview-hero'
  );
  const fields = {
    services_page_hero_first_line: 'PR Services in',
    services_page_hero_highlight: 'Morocco',
    services_page_hero_suffix: 'for Africa',
    services_page_hero_introduction: 'Every brief has its own shape. Sometimes the answer is a focused media push; sometimes it is a PR services program in Morocco that connects content, events, monitoring, social and creators across African markets. We build around the story rather than forcing a fixed package.',
    services_page_hero_image: heroId,
    services_page_catalog_heading: 'Where Should the Work Begin?',
    services_page_catalog_introduction: 'Choose the service closest to the immediate need. The wider plan can grow from there if the story calls for it.',
    services_page_work_heading: 'How the Work Comes Together',
    services_page_work_introduction: 'A single launch shows how the disciplines connect: media relations secures the announcement coverage, the event gives journalists direct access, content carries the story into each language and monitoring tells the team how it landed. One story, one direction, several disciplines.',
    services_page_work_step_1: {
      title: 'Frame the Brief',
      description: 'We clarify the moment, audience, market and pressure points before recommending the work.',
    },
    services_page_work_step_2: {
      title: 'Build the Right Team',
      description: 'The specialists and local partners needed for the brief work from one direction and one core narrative.',
    },
    services_page_work_step_3: {
      title: 'Review What Moved',
      description: 'We look at the coverage, sentiment and quality of the response to decide what should happen next.',
    },
    services_page_faq_heading: 'Frequently Asked Questions',
    services_page_faq_1: {
      question: 'Which service should I start with?',
      answer: 'Start with the immediate communication need. BOXCOM Africa can then recommend whether one focused service is enough or whether related work should be connected.',
    },
    services_page_faq_2: {
      question: 'Can BOXCOM Africa manage the full PR program?',
      answer: 'Yes. As a PR agency in Morocco, BOXCOM Africa can coordinate media relations, content, events, monitoring, Social PR and creator work as one program when the brief requires it.',
    },
    services_page_faq_3: {
      question: 'Can services be delivered across several markets?',
      answer: 'Yes. BOXCOM Africa directs regional work from Casablanca and brings in established local partners across African markets when a story needs in-market press access, language adaptation or a sharper reading of local context. The narrative, quality standard and reporting stay with one team throughout, so a multi-market program reads as one story told well in each place, not several stories drifting apart.',
    },
    services_page_faq_4: {
      question: 'How are results reviewed?',
      answer: 'Reporting is shaped around the brief and may include share of voice, sentiment, quality of target coverage, narrative accuracy and recommended next steps.',
    },
    services_page_contact_heading: 'Bring Us the Brief',
    services_page_contact_introduction: 'Describe the immediate need and the market it sits in; we will recommend where the work should begin.',
    services_page_contact_button_label: 'Discuss the Brief',
    services_page_seo_title: 'PR Services in Morocco for Africa | BOXCOM Africa',
    services_page_seo_description: 'Explore PR services in Morocco from BOXCOM Africa, including media relations, events, content creation, monitoring, Social PR and influencer relations.',
  };

  await request(`/acf/v3/pages/${pageId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  });
  await request(`/wp/v2/pages/${pageId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: '' }),
  });

  process.stdout.write(`Services ACF page ID: ${pageId}\n`);
  process.stdout.write(`${baseUrl}/wp-json/boxcom-africa/v1/services-page\n`);
}

async function syncProjects() {
  const projects = [
    ['inDrive', 'indrive', 'Media Relations', 'public/assets/CaseStudy_Approved Images/InDrive_CaseStudy.png'],
    ['Samsung', 'samsung', 'Product Launch', 'public/assets/CaseStudy_Approved Images/Samsung_Case_Study.png'],
    ['GWM', 'gwm', 'Media Events', 'public/assets/CaseStudy_Approved Images/GWM_CaseStudy.png'],
    ['Garena', 'garena', 'Gaming Community', 'public/assets/CaseStudy_Approved Images/Garena_CaseStudy.png'],
    ['MIFA', 'mifa', 'Exhibition Presence', 'public/assets/CaseStudy_Approved Images/Mifa_CaseStudy.png'],
    ['DeFacto', 'defacto', 'Celebrity PR', 'public/assets/CaseStudy_Approved Images/Defacto_Case Study.png'],
  ];
  for (const [index, [title, slug, category, image]] of projects.entries()) {
    const imageId = await uploadMedia(image, `project-${slug}`);
    await upsertPost('projects', 'projects', {
      title, slug, order: index + 1,
      fields: {
        category,
        project_image: imageId,
        case_study_link: slug === 'defacto' ? { url: '#/projects/defacto', title: 'View case study', target: '' } : '',
        show_on_homepage: true,
      },
    });
    process.stdout.write(`Project: ${title}\n`);
  }
}

async function syncCoverage() {
  const coverage = [
    ['Le Matin', 'le-matin-coverage-1', 'public/assets/imgs/logos/le-matin.png', 'public/assets/Our Media Coverage_Approved Images/LeMatin_Media Coverage.png'],
    ['2M', '2m-coverage-1', 'public/assets/imgs/logos/2M.png', 'public/assets/Our Media Coverage_Approved Images/2M_Media Coverage.png'],
    ['Hespress', 'hespress-coverage-1', 'public/assets/imgs/logos/HESPRESS.png', 'public/assets/Our Media Coverage_Approved Images/Hespress_Media Coverage.png'],
    ['Le Matin', 'le-matin-coverage-2', 'public/assets/imgs/logos/le-matin.png', 'public/assets/Our Media Coverage_Approved Images/LeMatin_Media Coverage.png'],
    ['2M', '2m-coverage-2', 'public/assets/imgs/logos/2M.png', 'public/assets/Our Media Coverage_Approved Images/2M_Media Coverage.png'],
  ];
  for (const [index, [publication, slug, logo, image]] of coverage.entries()) {
    const logoId = await uploadMedia(logo, `coverage-logo-${slugify(publication)}`);
    const imageId = await uploadMedia(image, `coverage-image-${slugify(publication)}`);
    await upsertPost('media-coverage', 'media-coverage', {
      title: `${publication} Media Coverage ${index + 1}`,
      slug,
      order: index + 1,
      fields: {
        publication_name: publication,
        publication_logo: logoId,
        coverage_image: imageId,
        article_url: '',
        publication_date: '',
        show_on_homepage: true,
      },
    });
    process.stdout.write(`Coverage: ${publication} ${index + 1}\n`);
  }
}

async function syncTestimonials() {
  const quote = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat purus non augue volutpat, porta semper dui consectetur.';
  const testimonials = [
    ['Amira Mazali', 'xerox-testimonial-1', 'Xerox', 'public/assets/clients/xerox.webp'],
    ['Amira Mazali', 'air-france-testimonial', 'AirFrance', 'public/assets/clients/air-france.webp'],
    ['Amira Mazali', 'xerox-testimonial-2', 'Xerox', 'public/assets/clients/xerox.webp'],
  ];
  for (const [index, [name, slug, company, logo]] of testimonials.entries()) {
    const logoId = await uploadMedia(logo, `testimonial-${slugify(company)}-logo`);
    await upsertPost('testimonials', 'testimonials', {
      title: name, slug, order: index + 1,
      fields: { company, company_logo: logoId, person_role: 'Head of Marketing.', quote, show_on_homepage: true },
    });
    process.stdout.write(`Testimonial: ${company} ${index + 1}\n`);
  }
}

async function syncFaqs() {
  const faqs = [
    ['Is BOXCOM Africa a PR agency in Morocco?', 'is-boxcom-africa-a-pr-agency-in-morocco', 'Yes. BOXCOM Africa is a PR agency in Morocco, based in Casablanca and focused on Press Relations, media relations, crisis management and consultancy, Social PR and influencer relations in Morocco and all across Africa.'],
    ['What makes BOXCOM Africa different from a general PR agency?', 'what-makes-boxcom-africa-different', 'We combine media relations with marketing thinking. The team looks at the business objective first, then builds the story, media plan and actions around what the client needs the market to understand or believe.'],
    ['Can BOXCOM Africa support more than one market?', 'can-boxcom-africa-support-more-than-one-market', 'Yes. Work is directed from Casablanca, and on-the-ground partners join when the brief needs local media access, language adaptation or cultural context in African markets.'],
    ['Can BOXCOM Africa help when a story becomes sensitive?', 'can-boxcom-africa-help-when-a-story-becomes-sensitive', 'Yes. Crisis management and consultancy is part of the media relations practice. We monitor the issue, prepare the response and engage the relevant media to clarify facts or correct context.'],
  ];
  for (const [index, [question, slug, answer]] of faqs.entries()) {
    await upsertPost('faqs', 'faqs', {
      title: question, slug, order: index + 1, content: answer,
      fields: { answer, show_on_homepage: true },
    });
    process.stdout.write(`FAQ: ${index + 1}\n`);
  }
}

async function updateDefaultService(serviceId) {
  await request('/acf/v3/pages/11', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields: { services_default_open: serviceId } }),
  });
}

async function main() {
  if (process.env.BOXCOM_SYNC_SCOPE === 'services') {
    await syncServices();
    process.stdout.write('SERVICES SYNC COMPLETE\n');
    return;
  }

  if (process.env.BOXCOM_SYNC_SCOPE === 'clients') {
    await syncClients();
    process.stdout.write('CLIENT SYNC COMPLETE\n');
    return;
  }

  if (process.env.BOXCOM_SYNC_SCOPE === 'services-page') {
    await syncServicesPage();
    process.stdout.write('SERVICES PAGE SYNC COMPLETE\n');
    return;
  }

  if (process.env.BOXCOM_SYNC_SCOPE === 'services-page-acf') {
    await syncServicesPageAcf();
    process.stdout.write('SERVICES PAGE ACF SYNC COMPLETE\n');
    return;
  }

  const serviceIds = await syncServices();
  await updateDefaultService(serviceIds[0]);
  await syncClients();
  await syncProjects();
  await syncCoverage();
  await syncTestimonials();
  await syncFaqs();
  process.stdout.write('SYNC COMPLETE\n');
}

main().catch((error) => {
  process.stderr.write(`${error.stack || error.message}\n`);
  process.exitCode = 1;
});
