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
    intro: 'AgriEdge is a Moroccan agritech company operating at the intersection of agriculture, digital innovation, and sustainability. The company develops data-driven platforms that help farmers, agronomists, and agricultural organizations optimize irrigation, manage agronomic trials, and improve crop productivity, while using natural resources more efficiently.',
    metrics: [['27+', 'Articles Published'], ['4.9M', 'Estimated Reader Reach'], ['€40.2K', 'Combined AVE']],
    snapshot: { challenge: 'Make Deep Tech Credible Across Four Distinct Media Verticals', challengeText: 'AgriEdge built genuinely sophisticated platforms, precision irrigation, digital agronomic trials, but sophistication meant nothing without translation. Non-technical business and economic media needed accessible narratives, while agriculture, technology, and sustainability press each demanded distinct angles. Reaching all four simultaneously, around a fixed SIAM launch window, was essential.', work: 'A Context-First PR Strategy For Editorial Depth And Reach.', workText: "We anchored each launch in Morocco's real challenges, water scarcity for AquaEdge, research efficiency for TrialEdge, targeted four media verticals simultaneously, and timed the AquaEdge announcement to SIAM. Generic tech messaging was replaced with grounded, national-priority storytelling at every step." },
    challenge: { heading: 'PR for Deep-Tech Agricultural Innovation', intro: 'BOXCOM Africa identified three strategic communication challenges that shaped the entire multi-campaign PR program for AgriEdge:', points: [
      ['Communicating Deep Tech to Non-Technical Audiences', "AgriEdge's platforms — precision irrigation management, digital agronomic trial systems — are genuinely sophisticated technologies. The PR strategy had to make these innovations accessible and compelling for generalist business and economic media, not just agricultural specialists."],
      ['Reaching Across Multiple, Distinct Media Verticals', 'Agritech sits at the crossroads of agriculture, technology, sustainability, and business. Effective PR required simultaneous engagement across all four media categories — each with different editorial priorities, readership profiles, and story angles.'],
      ['Maximizing Impact Around Event-Driven Announcements', "The AquaEdge launch was tied to SIAM — Morocco's largest agricultural trade show. Capitalizing on this moment required a precisely timed media strategy capable of generating coverage before, during, and after the event window — when media attention and editorial competition are at their peak."],
    ]},
    strategy: { heading: "Innovation Storytelling Across Morocco's Media Verticals", intro: 'BOXCOM Africa designed a multi-campaign press relations program built on three strategic pillars, combining compelling innovation narratives, precision multi-vertical media targeting, and event-driven PR timing to maximize visibility for each AgriEdge platform launch.', points: [
      ['Innovation-Led Narrative Development', "Sophisticated technology carries weight in a lab, but that doesn't automatically translate to a newsroom. Without a real-world anchor — water scarcity, research inefficiency, a tangible problem farmers face — the story risks reading as generic tech innovation rather than a solution built for Morocco's actual agricultural challenges."],
      ['Speaking to Four Media Verticals at Once', 'An innovation story spanning agriculture, business, technology, and sustainability required a strategy that bridged four separate worlds simultaneously. Economic and investor-facing outlets had to be reached alongside agricultural, tech, and environmental media, each expecting a distinct angle on the same AgriEdge narrative.'],
      ['Event-Driven PR Around SIAM', "For the AquaEdge campaign, BOXCOM Africa designed a SIAM-anchored event PR strategy — tying the platform's launch announcement to AgriEdge's participation in Morocco's International Agriculture Show (SIAM), the country's most prestigious agricultural trade event. This approach created a natural news hook that amplified media pick-up significantly: journalists covering SIAM were already seeking innovation stories from the event, and AgriEdge's AquaEdge announcement provided exactly the kind of technology narrative that editorial teams prize at major sector events. The result was an estimated reach of 4.9 million readers and 26,500 € in AVE from the AquaEdge campaign alone."],
    ]},
    results: { heading: "Two 9/10 Campaigns Across Morocco's Agritech Media Landscape", groups: [
      ['Editorial Coverage', ['27+ articles published across Morocco’s digital media in two campaigns — TrialEdge and AquaEdge.', 'Key placements included MAP Finance, MAP Business, LesEco, Challenge, Aujourd’hui Le Maroc, EcoActu, and NexGen Magazine.', 'Coverage spanned four media verticals — economic, agricultural, technology, and sustainability outlets.', 'TrialEdge coverage clustered around the platform launch; AquaEdge coverage clustered around SIAM, Morocco’s International Agriculture Show.']],
      ['Reach and Editorial Quality', ['Estimated combined reach of 4.9 million readers, driven primarily by SIAM-anchored AquaEdge coverage.', 'Combined Advertising Value Equivalent of 40,200 € across both campaigns.', '19 TrialEdge articles all published with photographs, with average article length exceeding 90% of the original press release.', 'Both campaigns achieved a 9/10 campaign quality rating — the highest across BOXCOM Africa’s portfolio.']],
    ]},
  },
  dilitrust: {
    slug: 'dilitrust', brand: 'DiliTrust', metaTitle: 'DiliTrust LegalTech PR Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa positioned DiliTrust as a leader in legal governance digitalization across Morocco and Africa.',
    tags: 'LegalTech PR | Corporate Governance Communications | M&A Announcement | B2B Media Relations',
    title: 'How BOXCOM Africa Positioned DiliTrust as a Leader in Legal Governance Digitalization Across Morocco and Africa',
    intro: 'DiliTrust is an international LegalTech company providing secure SaaS platforms designed to help organizations digitalize their board management, legal documentation, compliance processes, and corporate governance workflows.',
    metrics: [['13', 'Media Outlets Covered'], ['MAR + Africa', 'Geographic Reach'], ['AR + FR', 'Language Distribution']],
    snapshot: { challenge: 'B2B Technology PR for a Niche, High-Stakes Audience', challengeText: "A LegalTech acquisition meant little to generalist business media without translation into a corporate governance story. DiliTrust's audience — boards, general counsel, compliance officers — was small but high-value, requiring precision B2B targeting. The campaign also needed to establish credibility across two distinct regions: Morocco and Africa.", work: 'Strategic Narrative, Precision Targeting, and Regional Positioning', workText: "BOXCOM Africa built a focused B2B media relations campaign around three pillars, starting with a reframed acquisition narrative. Precision outreach across economic, tech, national, and pan-African media secured bilingual coverage in French and Arabic, reaching DiliTrust's corporate decision-maker audience directly." },
    challenge: { heading: 'B2B Technology PR for a Niche, High-Stakes Audience', intro: 'BOXCOM Africa identified three core communication challenges that defined the strategic approach for this campaign:', points: [
      ['Making a Complex M&A Story Accessible to Business Media', 'The acquisition of PROmeeting from Agileum was a strategically significant move, but its relevance was not immediately self-evident to generalist business media. The campaign needed to translate a LegalTech M&A announcement into a compelling narrative about corporate governance digitalization — a topic media and readers could engage with directly.'],
      ['Reaching a Niche, High-Value B2B Audience', "DiliTrust's target audience includes boards of directors, general counsel, compliance officers, and corporate secretaries — is small in number but extremely high in purchasing authority. Reaching them required targeting specific business and legal media with precision, not a mass-market distribution approach."],
      ['Establishing Dual Regional Credibility: Morocco and Africa', "The acquisition had significance both in Morocco and across the Indian Ocean and African markets. The campaign needed to communicate a coherent regional growth narrative, positioning DiliTrust not just as a technology vendor, but as a strategic partner in Africa's digital governance evolution."],
    ]},
    strategy: { heading: 'Strategic Narrative, Precision B2B Targeting, and Regional Positioning', intro: 'BOXCOM Africa designed a focused B2B media relations campaign built on two strategic pillars: translating a complex M&A announcement into an accessible governance digitalization story, targeting the specific media categories that reach DiliTrust’s decision-maker audience, and communicating a coherent regional expansion narrative across Morocco and Africa.', points: [
      ['Pillar 1 — Strategic Acquisition Narrative Development', "BOXCOM Africa developed a press release reframing the PROmeeting acquisition as a strategic step in Africa's corporate governance transformation, not a financial transaction — centered on the board management and compliance challenges it solves. Key messages included DiliTrust's ambition to become the global governance digitalization standard, Agileum's proven African expertise, Mauritius's role as an Indian Ocean digital hub, and the urgency for African boards to adopt compliant digital tools."],
      ['Pillar 2 — Precision Multi-Category B2B Media Outreach', "BOXCOM Africa targeted four media categories — economic/business (Aujourd'hui Le Maroc, TelQuel), tech (Industrie Mag, Morocco Day), national news, and pan-African outlets — publishing 12 French and 2 Arabic articles to reach DiliTrust's full corporate decision-maker audience."],
    ]},
    results: { heading: "Targeted Coverage Across Morocco's Corporate Media Landscape", groups: [
      ['Media Coverage', ['13 media outlets published coverage of the DiliTrust acquisition announcement.', '12 major Moroccan outlets spanned economic, business, technology, and national news categories.', '1 pan-African outlet extended reach beyond Morocco into the broader African market.', 'Coverage secured in leading publications including Aujourd’hui Le Maroc, TelQuel, Charika, Heure du Journal, Industrie Mag, Morocco Day, Chaine Actu, and Maghress.']],
      ['Key Message Amplification', ['Corporate governance digitalization positioned as a strategic business imperative.', 'The DiliTrust–Agileum partnership framed as a milestone in African digital governance.', 'DiliTrust’s regional expansion ambitions across the Indian Ocean and African markets consistently reinforced.']],
    ]},
  },
  eqdom: {
    slug: 'eqdom', brand: 'EQDOM', metaTitle: 'EQDOM Digital Finance PR Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa helped EQDOM build brand visibility and amplify its digital finance strategy in Morocco.',
    tags: 'Corporate PR Strategy | Financial Services Communications | Fintech | Automotive | Morocco',
    title: 'How BOXCOM Africa Helped EQDOM Build Brand Visibility and Amplify Its Digital Finance Strategy in Morocco',
    intro: "EQDOM is one of Morocco's leading consumer credit and financial services companies, offering a broad range of financing solutions for individuals — including personal loans, auto financing, and equipment credit. As one of the most recognized names in Moroccan consumer finance, EQDOM serves a large base of individual and professional clients across the country.",
    metrics: [['33', 'Total Articles'], ['1.7M', 'Estimated Reader Reach'], ['385K', 'Combined AVE (MAD)']],
    snapshot: { challenge: 'PR for a Financial Brand Operating Across Two Sectors', challengeText: "The EQDOM × AUTO24.ma partnership was both a fintech and an automotive story, requiring a strategy that reached two distinct audiences simultaneously, across different publication types. The campaign also needed to position EQDOM as a digital finance innovator, not just report a partnership deal.", work: 'Multi-Sector Media Relations and Strategic Messaging', workText: "BOXCOM Africa built a targeted PR campaign around three pillars, starting with strategically crafted press releases. Precision outreach across economic, automotive, national, and digital media secured bilingual coverage in French and Arabic, reaching EQDOM's finance and mobility audiences directly." },
    challenge: { heading: 'PR for a Financial Brand Operating Across Two Sectors', intro: "EQDOM's communication campaigns required BOXCOM Africa to simultaneously address three distinct strategic challenges:", points: [
      ['Amplifying a Cross-Sector Partnership Announcement', 'The EQDOM × AUTO24.ma partnership was both a fintech and an automotive story — requiring a media strategy capable of reaching two distinct audience segments simultaneously, across different publication types.'],
      ['Positioning EQDOM as a Digital Finance Innovator', 'Beyond the immediate announcement, EQDOM needed to reinforce its reputation as a forward-thinking financial services brand actively embracing digital transformation — not just reporting a deal.'],
      ['Achieving Broad National Coverage Across Media Types', "The campaign needed to cut across business media, automotive publications, and general news outlets — in both French and Arabic — to reach the full breadth of EQDOM's target audiences across Morocco."],
    ]},
    strategy: { heading: 'Multi-Sector Media Relations and Strategic Messaging', intro: "BOXCOM Africa implemented a targeted PR and media relations strategy built on three pillars — each designed to maximize visibility for EQDOM's announcements while reinforcing a consistent brand narrative across financial, automotive, and digital media ecosystems.", points: [
      ['Pillar 1 — Strategic Press Release Development and Distribution', "BOXCOM Africa developed and distributed strategically crafted press releases announcing the EQDOM × AUTO24.ma partnership and the company's brand transformation, built around audience-specific key messages — simplifying the used-vehicle purchase and financing journey, combining a digital marketplace with integrated financing, and reinforcing EQDOM's commitment to digital innovation."],
      ['Pillar 2 — Multi-Sector Targeted Media Outreach', "Outreach spanned four categories — economic and financial media, automotive and mobility publications, general national news, and digital business media — reaching EQDOM's full audience. Coverage appeared in Aujourd'hui Le Maroc, LesEco, La Vie Eco, MediaMarketing, LeSiteInfo, and Infomédiaire."],
      ['Pillar 3 — Bilingual Distribution for Maximum National Reach', "The campaign was distributed across French and Arabic outlets, ensuring the messaging resonated with the full breadth of EQDOM's target audiences — a key differentiator in BOXCOM Africa's approach to financial communications in Morocco."],
    ]},
    results: { heading: 'Strong National Visibility Across Two Major Campaigns', groups: [
      ['Media Coverage', ['33 media articles published across Morocco’s leading digital outlets for the AUTO24.ma partnership; 34 articles analyzed for the brand transformation campaign.', '1.7 million estimated readers reached through the AUTO24.ma coverage; 410,000 audience reach for the brand transformation.', '36,700 € in Advertising Value Equivalent (AVE) for the partnership campaign; 385,000 MAD for the brand transformation.', '2 radio appearances and 2 executive interviews organized, extending the brand transformation into broadcast media.']],
      ['Key Message Amplification', ['EQDOM’s repositioning from traditional consumer credit to a digitally-driven financial services brand consistently reinforced.', 'The integrated digital marketplace and financing model established as a clear, tangible customer benefit.', 'EQDOM’s leadership in shaping the future of automotive financing in Morocco anchored across coverage.']],
    ]},
  },
  everis: {
    slug: 'everis', brand: 'Everis', metaTitle: 'Everis Employer Branding Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa helped Everis attract top technology talent in Morocco.',
    tags: 'PR Strategy | Employer Branding | Tech Recruitment | Morocco',
    title: 'How BOXCOM Africa Helped Everis Attract Top Tech Talent in Morocco',
    intro: 'Everis is a global IT consulting firm and member of the NTT DATA Group, operating a delivery center in Tétouan focused on enterprise systems, advanced technologies, and digital transformation projects for international clients.',
    metrics: [['70+', 'Media Articles'], ['324', 'Brand Mentions'], ['700K', 'Advertising Value (MAD)']],
    snapshot: { challenge: "Make an Unknown Brand Compelling to Morocco's Most Competitive Talent Pool", challengeText: "Everis had global reach but limited visibility in Morocco's IT ecosystem. Skilled engineers were concentrated in Casablanca and Rabat, while Everis' hub sat in Tétouan — a structural disadvantage compounded by an ongoing sector-wide brain drain pulling talent abroad.", work: 'A Data-Driven Employer Branding Strategy for Emotional and Professional Buy-In', workText: "We identified a high-potential segment — Northern Moroccan engineers who'd relocated for work, and built a campaign around not choosing between career and roots. National PR, an industry event, and unscripted employee testimonials replaced generic recruitment messaging at every step." },
    challenge: { heading: 'Recruiting Tech Talent in Morocco', intro: 'BOXCOM Africa identified three interconnected strategic challenges that shaped the entire campaign for Everis:', points: [
      ['Low Brand Awareness', "Despite global recognition, Everis had limited visibility in Morocco's IT ecosystem. Moroccan engineers and graduates were largely unfamiliar with the brand and its career opportunities."],
      ['Fierce Competition for Tech Talent', "Morocco's technology sector is highly competitive. Global firms, local tech companies, and international mobility programs actively compete for the same pool of skilled engineers — fueling a persistent brain drain phenomenon."],
      ['Geographic Recruitment Barrier', "Everis' main Moroccan hub was located in Tétouan — a smaller city compared to Casablanca or Rabat, where most experienced engineers are based. Attracting talent to relocate required a compelling, emotionally resonant narrative."],
    ]},
    strategy: { heading: 'An Integrated PR and Employer Branding Approach', intro: "BOXCOM Africa designed a multi-layered communications strategy built on three interdependent pillars, each addressing a specific dimension of Everis' recruitment and visibility challenges.", points: [
      ['Strategic PR and National Media Relations', "BOXCOM Africa launched a national PR campaign targeting business, technology, and economic media — press releases announcing Everis' expansion, executive interviews with Morocco leadership, dedicated coverage for the Casablanca High Performance Center opening, and outreach to IT bloggers and specialized tech media."],
      ['Thought Leadership Event: “Algorithms and Music”', "BOXCOM Africa organized a creative conference combining technology, innovation, and culture — generating additional media coverage and reinforcing Everis' positioning as a forward-thinking, people-first employer."],
      ['Employer Branding Campaign: #Maghankhtarchi', "Built on a data-driven insight — Northern Moroccan engineers shouldn't have to choose between career and roots — the campaign centered on unscripted employee testimonials, a dedicated recruitment landing page, and targeted Facebook and LinkedIn advertising."],
    ]},
    results: { heading: '70+ Articles, 324 Mentions, and a Talent Pipeline That Converts', groups: [
      ['Editorial Coverage', ['70+ media articles published across national and specialized outlets.', '324 brand mentions generated throughout the campaign period.', 'Coverage spanned business media, technology publications, and national press.', '700,000 MAD in Advertising Value Equivalent (AVE).']],
      ['Reach and Editorial Quality', ['24 media articles with an average quality rating of 8.5 out of 10.', '183 brand mentions and 150,500+ estimated readers reached.', 'A 10-minute Atlantic Radio feature interview reaching ~250,000 listeners.']],
    ]},
  },
  samsung: {
    slug: 'samsung', brand: 'Samsung', metaTitle: 'Samsung Galaxy S26 Launch Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa launched the Samsung Galaxy S26 Series in Morocco through an immersive, Ramadan-aware media event.',
    tags: 'PR Strategy | Event Management | Media & Influencer Relations | Morocco',
    title: 'How We Launched the Galaxy S26 Series in Morocco',
    intro: "Samsung Galaxy S26 Series is Samsung's flagship smartphone lineup, launched globally through the Galaxy Unpacked live stream, with BOXCOM Africa engaged to organize and manage the Moroccan launch event and media strategy.",
    metrics: [['27.8M', 'Estimated Reach'], ['246', 'Total Clippings'], ['$493K', 'Media Value']],
    snapshot: { challenge: 'Make a Global Product Drop Feel Like a Moroccan Moment', challengeText: 'Samsung needed the Moroccan launch to sync precisely with the global Galaxy Unpacked stream, while giving local journalists and influencers a reason to engage beyond a standard product reveal. The added complication: the launch date fell during Ramadan, a period that reshapes how audiences gather, celebrate, and respond to brand events.', work: 'An Immersive, Culturally-Grounded Launch Built to Generate Coverage', workText: 'We designed the evening around Ramadan rather than working around it — an iftar-toned setting, live Oud performance, and three hands-on activations (Creative Lab, Privacy Display, Nightography Booth) that let journalists and influencers experience the S26 Series firsthand instead of reading a spec sheet. National broadcast interviews and influencer content sessions ran directly within the environment we built.' },
    challenge: { heading: 'Make a Global Product Drop Feel Like a Moroccan Moment', intro: "BOXCOM Africa identified three interconnected strategic challenges that shaped the entire campaign for Samsung's Galaxy S26 Series launch:", points: [
      ['Global-Local Synchronization', 'The launch had to align precisely with the global Galaxy Unpacked live stream, leaving no room for delay or improvisation. Moroccan media and influencers needed to experience the reveal in real time, alongside the rest of the world.'],
      ['Ramadan Timing Constraint', 'The launch date fell during Ramadan, a period that fundamentally reshapes how Moroccan audiences gather, celebrate, and engage with brands. A standard product-launch format risked feeling out of step with the moment — the event needed to be built around Ramadan, not scheduled despite it.'],
      ['Saturated Product Category', 'Smartphone launches are a crowded, heavily-covered media category in Morocco. Generating coverage that stood out — and secured Tier 1 placements — required editorial angles distinct enough to give outlets something genuinely new to write about, beyond routine spec-sheet reporting.'],
    ]},
    strategy: { heading: 'An Immersive, Culturally-Grounded Launch Built to Generate Coverage', intro: "BOXCOM Africa designed a multi-layered event and media strategy built on three interdependent pillars, each addressing a specific dimension of Samsung's launch challenge.", points: [
      ['Ramadan-Synchronized Event Design', "BOXCOM Africa built the launch evening around an iftar-toned setting, with a live Oud performance staged around the global Galaxy Unpacked live stream — turning a scheduling constraint into the event's defining atmosphere, rather than working around it."],
      ['Hands-On Product Activations', "We designed three dedicated activations — Creative Lab, Privacy Display, and a fully enclosed Nightography Booth with a Moroccan kasbah backdrop — giving journalists and influencers a physical, shareable experience of the S26 Series' core features instead of a standard presentation."],
      ['Curated Media and Influencer Coverage', 'We managed press invitations, briefings, and on-site interviews for Tier 1 and Tier 2 outlets in Arabic and French, coordinating broadcast appearances (including SNRT News) alongside influencer content sessions filmed directly within the event space.'],
    ]},
    results: { heading: '246 Articles, 149 Tier 1 Placements, and Zero Negative Coverage', groups: [
      ['Editorial Coverage', ['246 media articles published across national and specialized outlets.', '131 unique outlets reached, spanning digital, print, and broadcast.', 'Coverage delivered in both Arabic and French, reaching the full breadth of the Moroccan media landscape.', '100% positive or neutral sentiment across every article tracked.']],
      ['Reach and Editorial Quality', ['149 Tier 1 placements, for a 61% Tier 1 rate — well above the 40% benchmark considered strong for a product launch.', "Coverage secured in Morocco's most authoritative outlets, including Map Finance, Hespress, Le Temps, Aujourd'hui le Maroc, and SNRT News.", 'Broadcast interviews (SNRT News, Heure du Journal) conducted on-site, alongside influencer first-look content filmed within the event space.']],
    ]},
  },
  indrive: {
    slug: 'indrive', brand: 'inDrive Algeria', metaTitle: 'inDrive Algeria Market Entry Case Study | BOXCOM Africa', metaDescription: 'See how BOXCOM Africa supported inDrive’s market entry in Algeria through driver engagement and media relations.',
    tags: 'Mobility PR | Market Entry Communications | Community Engagement | Algeria',
    title: "How BOXCOM Africa Supported inDrive's Market Entry in Algeria Through Driver Engagement and Media Relations",
    intro: "inDrive is one of the world's fastest-growing urban mobility apps, operating in nearly 50 countries and positioned as the No. 1 mobility app in the MENA region by downloads, with a bidding-based, low-commission business model.",
    metrics: [['11', 'Articles Published'], ['2', 'Languages Covered'], ['€7.9K', 'Advertising Value']],
    snapshot: { challenge: 'Build Credibility for a New Entrant in a Fast-Growing Market', challengeText: 'inDrive had grown organically through 2023 but had just formalized its legal presence in Algeria. The brand needed to establish trust with drivers and riders alike, and translate a market-entry milestone into a story with genuine local context and not just a routine announcement.', work: 'A Culturally-Timed Contest Paired with Credibility-Building Media Access', workText: "We anchored the campaign in a Ramadan-timed driver contest — the Omra trip incentive — and paired it with spokesperson preparation and a media interview establishing inDrive's legal presence, growth, and service suite. Generic launch messaging was replaced with a driver-first, community narrative at every step." },
    challenge: { heading: 'Build Credibility for a New Entrant in a Fast-Growing Market', intro: 'BOXCOM Africa identified two connected strategic challenges that shaped the campaign approach:', points: [
      ['Entering and Building Credibility in a New Market', 'inDrive had grown informally through 2023, but its official legal presence in Algeria needed to be communicated credibly — reinforcing legitimacy, scale, and long-term commitment to drivers and riders in a competitive mobility market.'],
      ['Making the Announcement Culturally and Emotionally Resonant', "A standard market-entry press release risked being overlooked by journalists and editors. The campaign needed a driver-first activation with genuine audience fit — reflecting inDrive's stated values of treating drivers as the core of the business, not just a growth metric."],
    ]},
    strategy: { heading: 'A Culturally-Timed Contest Paired with Credibility-Building Media Access', intro: 'BOXCOM Africa designed a two-part PR strategy: a culturally resonant driver activation paired with a credibility-building spokesperson interview, run in tandem to maximize both engagement and market positioning.', points: [
      ['Omra Contest Press Release', "BOXCOM Africa handled press release writing for a Ramadan-timed driver incentive contest in Algiers. They offered a tiered prize structure: a fully paid Omra trip for top drivers, smartphones, fuel cards, and Jumia vouchers — framed as a social responsibility gesture reinforcing that drivers are the core of inDrive's business."],
      ['Spokesperson Interview', "BOXCOM Africa managed spokesperson preparation and secured an interview with inDrive's Business Development Representative in Algeria, placed with automotive media outlet Auto Bip, covering legal presence, market growth, the full service suite, the low-commission bidding model, safety features, and expansion plans across roughly 30 Algerian regions."],
    ]},
    results: { heading: '11 Articles, Bilingual Reach, and Strong Editorial Engagement', groups: [
      ['Editorial Coverage', ['11 articles published across Algerian digital media between 11–21 March 2024.', 'Coverage published in both Arabic and French.', 'All 11 articles included photos, with most running full-page in their section.', 'Most articles reproduced over 70% of the original press release.']],
      ['Campaign Performance', ['Approximately €7,900 in Advertising Value Equivalent (AVE).', 'Internal quality rating of 8 out of 10 across article position, visuals, length, views, and advertising value.', 'The spokesperson interview reinforced inDrive’s legal presence, growth story, and expansion narrative.']],
    ]},
  },
};

export const AgriEdgeCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.agriedge} />;
export const DiliTrustCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.dilitrust} />;
export const EQDOMCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.eqdom} />;
export const EverisCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.everis} />;
export const SamsungCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.samsung} />;
export const InDriveCaseStudyPage = (props) => <AdditionalCaseStudyPage {...props} study={studies.indrive} />;
