import { useEffect, useState } from 'react';
import './ServicesOverviewPage.css';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

function highlightText(text, highlights) {
  const escapedPhrases = highlights.map(({ phrase }) => phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(`(${escapedPhrases.join('|')})`, 'gi');

  return text.split(pattern).map((part, index) => {
    const match = highlights.find(({ phrase }) => phrase.toLowerCase() === part.toLowerCase());
    return match
      ? <span className={`services-seo-highlight services-seo-highlight--${match.type}`} key={`${part}-${index}`}>{part}</span>
      : part;
  });
}

const fallbackServices = [
  {
    title: 'Media Relations',
    description:
      'For announcements, expert positioning, interviews, editorial opportunities and situations where the media narrative needs careful handling, including crisis management and consultancy.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-media-relations.jpg'),
    imageAlt: 'A collection of broadcast microphones ready for a press statement',
    href: '#/services/media-relations',
  },
  {
    title: 'Media Events',
    description:
      'For launches, press conferences, briefings, site visits and moments when journalists need access to people, places or proof.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-media-events.jpg'),
    imageAlt: 'Communications professionals meeting at a media event',
    href: '#/services/media-events',
  },
  {
    title: 'PR Content Creation',
    description:
      'For press releases, articles, speeches, reports, media kits and content that needs to work across languages or markets.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-content-creation.jpg'),
    imageAlt: 'A content creator preparing written communications material',
    href: '#/services/pr-content-creation',
  },
  {
    title: 'Media Monitoring',
    description:
      'For tracking coverage, competitors and emerging issues, with analysis that helps the team decide what to do next.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-media-monitoring.jpg'),
    imageAlt: 'A media analyst reviewing performance charts',
    href: '#/services/media-monitoring',
  },
  {
    title: 'Social PR',
    description:
      'For carrying press stories into social channels, following the response and managing the conversation around them.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-social-pr.jpg'),
    imageAlt: 'A social media professional managing an online conversation',
    href: '#/services/social-pr',
  },
  {
    title: 'Influencer Relations',
    description:
      'For creator partnerships where audience relevance, local context and a clear role in the wider campaign matter.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-influencer-relations.jpg'),
    imageAlt: 'A creator presenting live content to an online audience',
    href: '#/services/influencer-relations',
  },
];

const fallbackFaqItems = [
  {
    question: 'Which service should I start with?',
    answer:
      'Start with the immediate communication need. BOXCOM Africa can then recommend whether one focused service is enough or whether related work should be connected.',
  },
  {
    question: 'Can BOXCOM Africa manage the full PR program?',
    answer:
      'Yes. As a PR agency in Morocco, BOXCOM Africa can coordinate media relations, content, events, monitoring, Social PR and creator work as one program when the brief requires it.',
  },
  {
    question: 'Can services be delivered across several markets?',
    answer:
      'Yes. BOXCOM Africa directs regional work from Casablanca and brings in established local partners across African markets when a story needs in-market press access, language adaptation or a sharper reading of local context. The narrative, quality standard and reporting stay with one team throughout, so a multi-market program reads as one story told well in each place, not several stories drifting apart.',
  },
  {
    question: 'How are results reviewed?',
    answer:
      'Reporting is shaped around the brief and may include share of voice, sentiment, quality of target coverage, narrative accuracy and recommended next steps.',
  },
];

const fallbackPageContent = {
  hero: {
    firstLine: 'PR Services in',
    highlight: 'Morocco',
    suffix: 'for Africa',
    introduction:
      'Every brief has its own shape. Sometimes the answer is a focused media push; sometimes it is a PR services program in Morocco that connects content, events, monitoring, social and creators across African markets. We build around the story rather than forcing a fixed package.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-overview-header.jpg'),
    imageAlt: 'A spokesperson answering questions from the press',
  },
  catalog: {
    heading: 'Where Should the Work Begin?',
    introduction: 'Choose the service closest to the immediate need. The wider plan can grow from there if the story calls for it.',
  },
  work: {
    heading: 'How the Work Comes Together',
    introduction:
      'A single launch shows how the disciplines connect: media relations secures the announcement coverage, the event gives journalists direct access, content carries the story into each language and monitoring tells the team how it landed. One story, one direction, several disciplines.',
    steps: [
      {
        title: 'Frame the Brief',
        description: 'We clarify the moment, audience, market and pressure points before recommending the work.',
      },
      {
        title: 'Build the Right Team',
        description:
          'The specialists and local partners needed for the brief work from one direction and one core narrative.',
      },
      {
        title: 'Review What Moved',
        description:
          'We look at the coverage, sentiment and quality of the response to decide what should happen next.',
      },
    ],
  },
  faqHeading: 'Frequently Asked Questions',
  faqs: fallbackFaqItems,
  contact: {
    heading: 'Bring Us the Brief',
    introduction: 'Describe the immediate need and the market it sits in; we will recommend where the work should begin.',
    buttonLabel: 'Discuss the Brief',
  },
  seo: {
    title: 'PR Services in Morocco for Africa | BOXCOM Africa',
    description: 'Explore PR services in Morocco from BOXCOM Africa, including media relations, events, content creation, monitoring, Social PR and influencer relations.',
  },
};

function ServicesOverviewPage({ header, footer, services = [], content }) {
  const [openFaq, setOpenFaq] = useState(0);
  const hero = {
    firstLine: content?.hero?.firstLine || fallbackPageContent.hero.firstLine,
    highlight: content?.hero?.highlight || fallbackPageContent.hero.highlight,
    suffix: content?.hero?.suffix || fallbackPageContent.hero.suffix,
    introduction: content?.hero?.introduction || fallbackPageContent.hero.introduction,
    highlights: content?.hero?.highlights,
    image: content?.hero?.image || fallbackPageContent.hero.image,
    imageAlt: content?.hero?.imageAlt || fallbackPageContent.hero.imageAlt,
  };
  const catalog = {
    heading: content?.catalog?.heading || fallbackPageContent.catalog.heading,
    introduction: content?.catalog?.introduction || fallbackPageContent.catalog.introduction,
    linkLabel: content?.catalog?.linkLabel || 'Learn More',
  };
  const work = {
    heading: content?.work?.heading || fallbackPageContent.work.heading,
    introduction: content?.work?.introduction || fallbackPageContent.work.introduction,
    steps: content?.work?.steps?.length ? content.work.steps : fallbackPageContent.work.steps,
  };
  const pageFaqItems = content?.faqs?.length ? content.faqs : fallbackPageContent.faqs;
  const faqHeading = content?.faqHeading || fallbackPageContent.faqHeading;
  const contact = {
    heading: content?.contact?.heading || fallbackPageContent.contact.heading,
    introduction: content?.contact?.introduction || fallbackPageContent.contact.introduction,
    buttonLabel: content?.contact?.buttonLabel || fallbackPageContent.contact.buttonLabel,
  };
  const seo = {
    title: content?.seo?.title || fallbackPageContent.seo.title,
    description: content?.seo?.description || fallbackPageContent.seo.description,
  };
  const locale = content?.locale || 'en';
  const form = {
    name: content?.form?.name || 'Your Name *',
    namePlaceholder: content?.form?.namePlaceholder || 'Your Full Name',
    company: content?.form?.company || 'Your Company *',
    companyPlaceholder: content?.form?.companyPlaceholder || 'Your Company',
    email: content?.form?.email || 'Your Email *',
    emailPlaceholder: content?.form?.emailPlaceholder || 'Your Email',
    message: content?.form?.message || 'Message',
    messagePlaceholder: content?.form?.messagePlaceholder || 'Type your message here.',
  };
  const fallbackByHref = new Map(fallbackServices.map((service) => [service.href, service]));
  const catalogServices = services.length
    ? services.map((service) => {
        const fallback = fallbackByHref.get(service.href) || {};
        return {
          ...fallback,
          ...service,
          description: service.description || fallback.description || '',
          image: service.image || fallback.image || '',
          imageAlt: service.imageAlt || fallback.imageAlt || `${service.title} service from BOXCOM Africa`,
        };
      })
    : fallbackServices;

  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = seo.title;
    document.documentElement.lang = locale;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description);

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
      if (createdMetaDescription) {
        metaDescription.remove();
      } else {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, [locale, seo.description, seo.title]);

  return (
    <main className="app services-overview-page">
      {header}

      <section className="services-overview-hero" aria-labelledby="services-overview-title">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          fetchPriority="high"
        />
        <div className="services-overview-hero__overlay" />
        <div className="services-overview-hero__content">
          <h1 id="services-overview-title">
            {hero.firstLine}<br />
            <span>{hero.highlight}</span> {hero.suffix}
          </h1>
          <p>
            {highlightText(hero.introduction, hero.highlights || [
              { phrase: 'PR services program in Morocco', type: 'primary' },
            ])}
          </p>
        </div>
      </section>

      <section className="services-catalog" aria-labelledby="services-catalog-title">
        <div className="services-overview__frame">
          <header className="services-catalog__header">
            <h2 id="services-catalog-title">{catalog.heading}</h2>
            <p>{catalog.introduction}</p>
          </header>

          <div className="services-catalog__list">
            {catalogServices.map((service) => (
              <article className="services-catalog__item" key={service.id || service.slug || service.title}>
                <img src={service.image} alt={service.imageAlt} loading="lazy" />
                <div className="services-catalog__copy">
                  <h3 className={service.highlightType ? `services-seo-highlight--${service.highlightType}` : undefined}>
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                  <a href={service.href}>{catalog.linkLabel}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {content?.showWork !== false && <section className="services-work" aria-labelledby="services-work-title">
        <div className="services-overview__frame">
          <header className="services-work__header">
            <h2 id="services-work-title">{work.heading}</h2>
            <p>
              {highlightText(work.introduction, [
                { phrase: 'media relations', type: 'secondary' },
              ])}
            </p>
          </header>
          <div className="services-work__steps">
            {work.steps.map((step, index) => (
              <article className="services-work__step" key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>}

      <section className="services-overview-faq internal-faq" aria-labelledby="services-overview-faq-title">
        <div className="services-overview__frame">
          <h2 className="internal-faq__title" id="services-overview-faq-title">{faqHeading}</h2>
          <div className="services-overview-faq__list internal-faq__list">
            {pageFaqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article className={`services-overview-faq__item internal-faq__item${isOpen ? ' is-open' : ''}`} key={item.question}>
                  <h3>
                    <button
                      className="internal-faq__button"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="services-overview-faq__icon internal-faq__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="services-overview-faq__answer internal-faq__answer" hidden={!isOpen}>
                    <p>{item.highlights ? highlightText(item.answer, item.highlights) : item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-section services-overview-contact">
        <div className="contact-section__inner">
          <h2 className="contact-section__title">{contact.heading}</h2>
          <p className="contact-section__intro">{contact.introduction}</p>

          <div className="contact-section__top">
            <div className="contact-map">
              <iframe
                title={locale === 'fr' ? 'Localisation de BOXCOM Africa' : 'BOXCOM Africa location'}
                src="https://maps.google.com/maps?q=33.58739,-7.636312&z=17&hl=fr&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="contact-form__row">
                <label>
                  <span>{form.name}</span>
                  <input type="text" name="name" placeholder={form.namePlaceholder} autoComplete="name" required />
                </label>
                <label>
                  <span>{form.company}</span>
                  <input type="text" name="company" placeholder={form.companyPlaceholder} autoComplete="organization" required />
                </label>
              </div>
              <label>
                <span>{form.email}</span>
                <input type="email" name="email" placeholder={form.emailPlaceholder} autoComplete="email" required />
              </label>
              <label>
                <span>{form.message}</span>
                <textarea placeholder={form.messagePlaceholder} rows="5" />
              </label>
              <button type="submit" className="primary-pink-button contact-form__submit">
                {contact.buttonLabel}
              </button>
            </form>
          </div>

          {footer}
        </div>
      </section>
    </main>
  );
}

export default ServicesOverviewPage;
