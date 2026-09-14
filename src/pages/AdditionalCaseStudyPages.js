import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

function AdditionalCaseStudyPage({ header, footer, study }) {
  useEffect(() => {
    const previousTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    const previousDescription = meta?.getAttribute('content') || '';
    document.title = study.metaTitle;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', study.metaDescription);
    return () => {
      document.title = previousTitle;
      if (created) meta.remove();
      else meta.setAttribute('content', previousDescription);
    };
  }, [study]);

  const CopyPoints = ({ points }) => points.map(([title, text]) => (
    <div className="case-study-copy-point" key={title}><h3>{title}</h3><p>{text}</p></div>
  ));

  return (
    <main className={`app case-study-page ${study.slug}-case-study-page`}>
      {header}
      <section className="case-study-summary" aria-labelledby={`${study.slug}-case-study-title`}><div className="case-study-frame">
        <p className="case-study-summary__brand">{study.brand}</p>
        <p className="case-study-summary__tags">{study.tags}</p>
        <h1 id={`${study.slug}-case-study-title`}>{study.title}</h1>
        <p className="case-study-summary__intro">{study.intro}</p>
        <div className="case-study-metrics case-study-metrics--three" aria-label="Campaign results">
          {study.metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <div className="case-study-snapshot">
          <article className="case-study-snapshot__challenge"><span>The Challenge</span><h2>{study.snapshot.challenge}</h2><p>{study.snapshot.challengeText}</p></article>
          <article className="case-study-snapshot__work"><span>What We Did</span><h2>{study.snapshot.work}</h2><p>{study.snapshot.workText}</p></article>
        </div>
      </div></section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light">
        <p className="case-study-panel__eyebrow">The Challenge</p><h2>{study.challenge.heading}</h2><p>{study.challenge.intro}</p><CopyPoints points={study.challenge.points} />
      </article></section>
      <section className="case-study-band case-study-band--strategy"><article className="case-study-panel case-study-panel--teal">
        <p className="case-study-panel__eyebrow">The Strategy</p><h2>{study.strategy.heading}</h2><p>{study.strategy.intro}</p><CopyPoints points={study.strategy.points} />
      </article></section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light">
        <p className="case-study-panel__eyebrow">The Results</p><h2>{study.results.heading}</h2>{study.results.groups.map(([title, items]) => <div className="case-study-copy-point" key={title}><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}
      </article></section>
      <BriefContact footer={footer} />
    </main>
  );
}

const studies = {
  agriedge: {
    slug: 'agriedge', brand: 'AgriEdge',
    metaTitle: 'AgriEdge Agritech PR Case Study | BOXCOM Africa',
    metaDescription: 'See how BOXCOM Africa built media visibility for AgriEdge across Morocco’s agritech and innovation ecosystem.',
    tags: 'Agritech PR | Innovation Communications | Precision Agriculture | Platform Launch | Morocco',
    title: "How BOXCOM Africa Built Media Visibility for AgriEdge Across Morocco's Agritech and Innovation Ecosystem",
    intro: 'AgriEdge is a Moroccan agritech company operating at the intersection of agriculture, digital innovation and sustainability. Its data-led platforms help improve irrigation, agricultural trials, productivity and resource efficiency.',
    metrics: [['27+', 'Articles Published'], ['4.9M', 'Estimated Reader Reach'], ['€40.2K', 'Combined AVE']],
    snapshot: { challenge: 'Make Deep Tech Credible Across Four Distinct Media Verticals', challengeText: 'AgriEdge needed to explain sophisticated agricultural technology to non-technical audiences while earning relevance across business, technology, agriculture and sustainability media.', work: 'A Context-First PR Strategy for Editorial Depth and Reach', workText: 'We connected each platform to urgent real-world issues, adapted the story for four editorial audiences and concentrated outreach around high-value industry moments.' },
    challenge: { heading: 'Make Deep Tech Credible Across Four Distinct Media Verticals', intro: 'BOXCOM Africa identified three strategic communication challenges:', points: [
      ['Communicating Deep Tech to Non-Technical Audiences', 'Complex platforms needed to be translated into clear stories about water scarcity, research efficiency and practical agricultural outcomes.'],
      ['Reaching Multiple, Distinct Media Verticals', 'The campaign had to speak credibly to agriculture, technology, business and sustainability journalists without diluting the central story.'],
      ['Maximizing Event-Driven Announcements', 'Launches needed precise timing and strong editorial context to convert industry attention into sustained media visibility.'],
    ]},
    strategy: { heading: "Innovation Storytelling Across Morocco's Media Verticals", intro: 'The campaign combined context-led storytelling, tailored media angles and event-driven outreach.', points: [
      ['Innovation-Led Narrative Development', 'We anchored TrialEdge and AquaEdge in concrete challenges such as water scarcity and research inefficiency, making the technology useful and newsworthy.'],
      ['Speaking to Four Media Verticals at Once', 'Each pitch was adapted to the priorities of agriculture, innovation, economic and sustainability outlets while preserving one coherent narrative.'],
      ['Event-Driven PR Around SIAM', 'AquaEdge outreach was concentrated around SIAM, converting a major agricultural moment into 4.9 million estimated readers and €26,500 in AVE for that launch alone.'],
    ]},
    results: { heading: "Two 9/10 Campaigns Across Morocco's Agritech Media Landscape", groups: [
      ['Coverage and Reach', ['27+ articles were published across the TrialEdge and AquaEdge campaigns.', 'Coverage included MAP Finance, MAP Business, LesEco, Challenge, Aujourd’hui Le Maroc, EcoActu and NexGen.', 'The campaigns reached four media verticals and an estimated 4.9 million readers.']],
      ['Quality and Message Adoption', ['Combined Advertising Value Equivalent reached €40,200.', 'All 19 TrialEdge articles included photographs and reproduced more than 90% of the original release.', 'Both campaigns received a 9/10 quality score.']],
    ]},
  },
  dilitrust: {
    slug: 'dilitrust', brand: 'DiliTrust', metaTitle: 'DiliTrust LegalTech PR Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa positioned DiliTrust as a leader in legal governance digitalization across Morocco and Africa.',
    tags: 'LegalTech PR | Corporate Governance Communications | M&A Announcement | B2B Media Relations',
    title: 'How BOXCOM Africa Positioned DiliTrust as a Leader in Legal Governance Digitalization Across Morocco and Africa',
    intro: 'DiliTrust is an international LegalTech company providing secure SaaS solutions for boards, legal documents, compliance and corporate governance.',
    metrics: [['13', 'Media Outlets Covered'], ['MAR + Africa', 'Geographic Reach'], ['AR + FR', 'Language Distribution']],
    snapshot: { challenge: 'B2B Technology PR for a Niche, High-Stakes Audience', challengeText: 'A technical acquisition story had to become accessible to business media while reaching senior legal and governance decision-makers in Morocco and across Africa.', work: 'Strategic Narrative, Precision Targeting and Regional Positioning', workText: 'We reframed the acquisition around governance digitalization, targeted four complementary media categories and built a regional story with local relevance.' },
    challenge: { heading: 'B2B Technology PR for a Niche, High-Stakes Audience', intro: 'The announcement presented three connected communication challenges:', points: [
      ['Making a Complex M&A Story Accessible to Business Media', 'The acquisition of PROmeeting from Agileum needed to be explained through its strategic value, not transaction mechanics alone.'],
      ['Reaching a Niche, High-Value B2B Audience', 'The campaign needed to reach board members, legal teams, compliance leaders and corporate decision-makers through the media they trust.'],
      ['Establishing Dual Regional Credibility', 'DiliTrust needed visibility in Morocco while reinforcing its wider leadership ambitions across African markets.'],
    ]},
    strategy: { heading: 'Strategic Narrative, Precision B2B Targeting and Regional Positioning', intro: 'BOXCOM Africa built the campaign around three focused pillars.', points: [
      ['Strategic Acquisition Narrative Development', 'We reframed the PROmeeting acquisition around the broader acceleration of governance digitalization and the value of secure, integrated legal technology.'],
      ['Precision Multi-Category B2B Media Outreach', 'Outreach covered economic, technology, legal and pan-African media, generating 12 French-language articles and two Arabic-language articles.'],
      ['Regional Positioning Across Morocco and Africa', 'The story connected a clear Moroccan market opportunity to DiliTrust’s wider African expansion and corporate governance expertise.'],
    ]},
    results: { heading: 'Credible LegalTech Visibility Across Morocco and Africa', groups: [
      ['Coverage', ['13 outlets covered the announcement: 12 Moroccan publications and one pan-African publication.', 'Placements included Aujourd’hui Le Maroc, TelQuel, Charika, Heure du Journal, Industrie Mag, Morocco Day, Chaine Actu and Maghress.', 'Coverage appeared in both French and Arabic.']],
      ['Positioning', ['The campaign established governance digitalization as a clear business imperative.', 'The acquisition was presented as a strategic partnership milestone rather than a technical transaction.', 'DiliTrust’s expansion ambitions and LegalTech leadership were reinforced across both target regions.']],
    ]},
  },
  eqdom: {
    slug: 'eqdom', brand: 'EQDOM', metaTitle: 'EQDOM Digital Finance PR Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa helped EQDOM build brand visibility and amplify its digital finance strategy in Morocco.',
    tags: 'Corporate PR Strategy | Financial Services Communications | Fintech | Automotive | Morocco',
    title: 'How BOXCOM Africa Helped EQDOM Build Brand Visibility and Amplify Its Digital Finance Strategy in Morocco',
    intro: 'EQDOM is a leading Moroccan consumer credit and financial services company offering personal loans and financing for vehicles and equipment.',
    metrics: [['33', 'Total Articles'], ['1.7M', 'Estimated Reader Reach'], ['385K', 'Combined AVE (MAD)']],
    snapshot: { challenge: 'PR for a Financial Brand Operating Across Two Sectors', challengeText: 'EQDOM needed to promote an automotive marketplace partnership while strengthening its position as a modern digital finance innovator.', work: 'Multi-Sector Media Relations and Strategic Messaging', workText: 'We developed focused bilingual narratives and coordinated outreach across finance, automotive, technology and national media.' },
    challenge: { heading: 'PR for a Financial Brand Operating Across Two Sectors', intro: 'The campaign needed to solve three communication challenges:', points: [
      ['Amplifying a Cross-Sector Partnership Announcement', 'The AUTO24 partnership had to be relevant to both financial services and automotive audiences.'],
      ['Positioning EQDOM as a Digital Finance Innovator', 'Coverage needed to move beyond traditional consumer credit and show the company’s broader digital transformation.'],
      ['Achieving Broad National Coverage Across Media Types', 'The story required national visibility across online, print, radio and interview formats.'],
    ]},
    strategy: { heading: 'Multi-Sector Media Relations and Strategic Messaging', intro: 'BOXCOM Africa connected the business story to the media priorities of each target sector.', points: [
      ['Strategic Press Release Development and Distribution', 'We built clear releases around the partnership’s customer value, integrated marketplace model and digital finance relevance.'],
      ['Multi-Sector Targeted Media Outreach', 'Outreach covered economic, financial, automotive, technology and national news media, with tailored angles for each editorial audience.'],
      ['Bilingual Distribution for Maximum National Reach', 'French and Arabic distribution expanded accessibility and helped the campaign travel across Morocco’s varied media landscape.'],
    ]},
    results: { heading: 'National Visibility for Partnership and Transformation Stories', groups: [
      ['Coverage and Reach', ['The AUTO24 partnership generated 33 articles; 34 articles were analyzed for the brand transformation campaign.', 'The partnership reached an estimated 1.7 million readers, while transformation coverage reached approximately 410,000.', 'The campaigns secured two radio appearances and two executive interviews.']],
      ['Value and Positioning', ['The partnership generated €36,700 in AVE, while transformation coverage generated 385,000 MAD.', 'Coverage reinforced EQDOM’s digital transformation, integrated marketplace and automotive financing messages.']],
    ]},
  },
  everis: {
    slug: 'everis', brand: 'Everis', metaTitle: 'Everis Employer Branding Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa helped Everis attract top technology talent in Morocco.',
    tags: 'PR Strategy | Employer Branding | Tech Recruitment | Morocco',
    title: 'How BOXCOM Africa Helped Everis Attract Top Tech Talent in Morocco',
    intro: 'Everis, part of the NTT DATA Group, is a global IT consulting company with a delivery center in Tétouan, Morocco.',
    metrics: [['70+', 'Media Articles'], ['324', 'Brand Mentions'], ['700K', 'Advertising Value (MAD)']],
    snapshot: { challenge: "Make an Unknown Brand Compelling to Morocco's Most Competitive Talent Pool", challengeText: 'Everis needed national awareness among scarce engineering talent while overcoming strong employer competition and a recruitment location outside the main business hubs.', work: 'A Data-Driven Employer Branding Strategy for Emotional and Professional Buy-In', workText: 'We combined national media relations, an original thought-leadership event and a locally resonant employer-brand campaign.' },
    challenge: { heading: "Make an Unknown Brand Compelling to Morocco's Most Competitive Talent Pool", intro: 'Three barriers stood between Everis and the talent it wanted to reach:', points: [
      ['Low Brand Awareness', 'Everis had international scale but limited recognition among Moroccan technology professionals and graduates.'],
      ['Fierce Competition for Tech Talent', 'The campaign needed to differentiate Everis from established employers competing for the same engineers.'],
      ['Geographic Recruitment Barrier', 'The Tétouan delivery center needed to feel like a credible career destination beyond Casablanca and Rabat.'],
    ]},
    strategy: { heading: 'An Integrated PR and Employer Branding Approach', intro: 'The program connected corporate credibility, culture and local relevance.', points: [
      ['Strategic PR and National Media Relations', 'We built national visibility around Everis’s expertise, growth and employment opportunity through business, technology and national media.'],
      ['Thought Leadership Event: Algorithms and Music', 'An original event connected technical thinking with creativity, giving media and prospective talent a distinctive way to understand the brand.'],
      ['Employer Branding Campaign: #Maghankhtarchi', 'The locally resonant campaign spoke directly to engineers with ties to Northern Morocco and created emotional as well as professional relevance.'],
    ]},
    results: { heading: 'National Visibility and a Stronger Employer Brand', groups: [
      ['Media Impact', ['70+ articles generated 324 brand mentions across business, technology and national media.', 'The campaign delivered 700,000 MAD in Advertising Value Equivalent.', 'Twenty-four analyzed articles achieved an average quality score of 8.5/10, with 183 mentions and 150,500+ estimated readers.']],
      ['Broadcast Reach', ['A ten-minute Atlantic Radio interview brought the employer story to an estimated audience of approximately 250,000 listeners.', 'Coverage connected career opportunity, technology expertise and the Tétouan location in one consistent narrative.']],
    ]},
  },
  samsung: {
    slug: 'samsung', brand: 'Samsung', metaTitle: 'Samsung Galaxy S26 Launch Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa launched the Samsung Galaxy S26 Series in Morocco through an immersive, Ramadan-aware media event.',
    tags: 'PR Strategy | Event Management | Media & Influencer Relations | Morocco',
    title: 'How We Launched the Galaxy S26 Series in Morocco',
    intro: "Samsung Galaxy S26 Series is Samsung's flagship smartphone lineup, launched globally through the Galaxy Unpacked live stream, with BOXCOM Africa engaged to organize and manage the Moroccan launch event and media strategy.",
    metrics: [['27.8M', 'Estimated Reach'], ['252', 'Total Clippings'], ['$493K', 'Media Value']],
    snapshot: { challenge: 'Make a Global Product Drop Feel Like a Moroccan Moment', challengeText: 'Samsung needed the Moroccan launch to sync precisely with Galaxy Unpacked while giving local journalists and influencers a reason to engage beyond a standard reveal during Ramadan.', work: 'An Immersive, Culturally Grounded Launch Built to Generate Coverage', workText: 'We designed a Ramadan-aware evening with a live Oud performance and three hands-on activations, supported by national broadcast interviews and influencer content sessions.' },
    challenge: { heading: 'Make a Global Product Drop Feel Like a Moroccan Moment', intro: "BOXCOM Africa identified three interconnected strategic challenges that shaped the Galaxy S26 Series campaign:", points: [
      ['Global-Local Synchronization', 'The launch had to align precisely with the global Galaxy Unpacked live stream, allowing Moroccan media and influencers to experience the reveal in real time alongside the rest of the world.'],
      ['Ramadan Timing Constraint', 'The event date fell during Ramadan, fundamentally changing how Moroccan audiences gather, celebrate and engage with brands. The format needed to be built around the moment.'],
      ['Saturated Product Category', 'Smartphone launches are heavily covered in Morocco. Securing Tier 1 visibility required distinctive editorial angles that went beyond routine specification reporting.'],
    ]},
    strategy: { heading: 'An Immersive, Culturally Grounded Launch Built to Generate Coverage', intro: 'BOXCOM Africa designed a multi-layered event and media strategy around three interdependent pillars.', points: [
      ['Ramadan-Synchronized Event Design', 'We built the evening around an iftar-toned setting and a live Oud performance staged around Galaxy Unpacked, turning the scheduling constraint into the event’s defining atmosphere.'],
      ['Hands-On Product Activations', 'Creative Lab, Privacy Display and an enclosed Nightography Booth with a Moroccan kasbah backdrop gave journalists and influencers a physical, shareable experience of the S26 Series.'],
      ['Curated Media and Influencer Coverage', 'We managed invitations, briefings and on-site interviews for Tier 1 and Tier 2 Arabic- and French-language outlets, coordinating broadcast appearances and influencer content sessions within the event.'],
    ]},
    results: { heading: '246 Articles, 149 Tier 1 Placements and Zero Negative Coverage', groups: [
      ['Editorial Coverage', ['246 media articles were published across national and specialized outlets.', 'Coverage reached 131 unique outlets spanning digital, print and broadcast media.', 'Arabic and French coverage reached the breadth of Morocco’s media landscape.', 'Every tracked article carried positive or neutral sentiment.']],
      ['Reach and Editorial Quality', ['149 Tier 1 placements produced a 61% Tier 1 rate, well above the 40% benchmark considered strong for a product launch.', 'Coverage appeared in Map Finance, Hespress, Le Temps, Aujourd’hui le Maroc and SNRT News.', 'On-site broadcast interviews included SNRT News and Heure du Journal, alongside influencer first-look content filmed inside the event space.']],
    ]},
  },
  indrive: {
    slug: 'indrive', brand: 'inDrive Algeria', metaTitle: 'inDrive Algeria Market Entry Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa supported inDrive’s market entry in Algeria through driver engagement and media relations.',
    tags: 'Mobility PR | Market Entry Communications | Community Engagement | Algeria',
    title: "How BOXCOM Africa Supported inDrive's Market Entry in Algeria Through Driver Engagement and Media Relations",
    intro: 'inDrive is a fast-growing global mobility app operating in around 50 countries. Its bidding model and low-commission approach have helped make it a leading mobility download across the MENA region.',
    metrics: [['11', 'Articles Published'], ['2', 'Languages Covered'], ['€7.9K', 'Advertising Value']],
    snapshot: { challenge: 'Build Credibility for a New Entrant in a Fast-Growing Market', challengeText: 'inDrive needed to establish trust in Algeria while making its launch relevant to local drivers, passengers and media audiences.', work: 'A Culturally Timed Contest Paired With Credibility-Building Media Access', workText: 'We paired an emotionally resonant Omra contest with a spokesperson interview that addressed the company’s legal presence, growth and plans.' },
    challenge: { heading: 'Build Credibility for a New Entrant in a Fast-Growing Market', intro: 'The market-entry campaign centered on two communication priorities:', points: [
      ['Entering and Building Credibility in a New Market', 'As a new mobility brand in Algeria, inDrive needed to demonstrate legitimacy, relevance and long-term commitment.'],
      ['Making the Announcement Culturally and Emotionally Resonant', 'The campaign needed a local idea that connected with drivers beyond a conventional corporate launch announcement.'],
    ]},
    strategy: { heading: 'Driver Engagement and Credibility-Building Media Access', intro: 'BOXCOM Africa developed a focused two-part media relations strategy.', points: [
      ['Omra Contest Press Release', 'A culturally timed contest created an emotionally meaningful driver story and a strong reason for Algerian media to cover the brand.'],
      ['Spokesperson Interview', 'Direct media access reinforced inDrive’s legal presence, explained its growth model and communicated future expansion plans with authority.'],
    ]},
    results: { heading: 'Bilingual Coverage and Strong Message Adoption', groups: [
      ['Coverage', ['11 Algerian digital articles were published between 11 and 21 March 2024.', 'Coverage appeared in Arabic and French.', 'All 11 articles included photographs, most received full-page treatment and most reproduced more than 70% of the original release.']],
      ['Value and Credibility', ['The campaign generated approximately €7,900 in Advertising Value Equivalent.', 'Coverage received an overall quality score of 8/10.', 'The spokesperson interview reinforced inDrive’s legal presence, growth and expansion story.']],
    ]},
  },
};

export const AgriEdgeCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.agriedge} />;
export const DiliTrustCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.dilitrust} />;
export const EQDOMCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.eqdom} />;
export const EverisCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.everis} />;
export const SamsungCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.samsung} />;
export const InDriveCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.indrive} />;
