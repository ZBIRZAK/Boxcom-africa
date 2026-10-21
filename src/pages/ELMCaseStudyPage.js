import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

const challengePoints = [
  ['Legitimizing a Foreign State-Backed Brand in a New Market', "A government-owned Saudi tech group carries weight at home, but that credibility doesn't automatically translate abroad. Without a visible institutional anchor — a signed agreement, a ministry partnership, a tangible local commitment — the story risks reading as a foreign company's press release rather than genuine market entry."],
  ['Speaking to Policy and Tech Audiences at Once', 'An entrance built around government cooperation and cutting-edge innovation required a media strategy that bridged two separate worlds. Institutional and government-facing outlets had to be reached alongside tech and innovation media, each expecting a different angle on the same story.'],
  ['Sustaining Momentum Across a Three-Day Event', "A single announcement fades quickly in a crowded event news cycle. To keep Elm's presence visible from open to close, the campaign had to sequence partnership signings and spokesperson access across the full three days, not concentrate them in one moment."],
];

const strategyPoints = [
  ['', "We structured the campaign around Elm's dual identity: proven institutional partner and forward-facing innovator, rather than choosing one story to tell."],
  ['', "Our expert Media Events team deliberately timed partnership signings across the event's opening and closing days to sustain news cycles, while the pavilion's AI, archiving, and smart-stadium solutions gave tech and innovation media a separate, complementary angle to cover."],
  ['', 'Through our PR content Creation and Media Relations Services, ELM obtained a trilingual press strategy (Arabic, French, English) ensured the story reached Moroccan, Tunisian, Saudi, and pan-African outlets, in their own editorial language, and direct broadcast access — including a national TV interview on Al Aoula — anchored the campaign with a high-visibility moment beyond print and online coverage.'],
  ['', "Corporate proof points (500+ projects, 80 products, 32 patents) were woven into every placement to reinforce Elm's standing as an established player, not a newcomer testing the waters."],
];

function ELMCaseStudyPage({ header, footer }) {
  useEffect(() => {
    const previousTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    const previousDescription = meta?.getAttribute('content') || '';
    document.title = 'Elm GITEX Africa 2025 Case Study | BOXCOM Africa';
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', "See how BOXCOM Africa amplified Elm's presence at GITEX Africa 2025 through institutional PR, trilingual content and broadcast access.");
    return () => { document.title = previousTitle; if (created) meta.remove(); else meta.setAttribute('content', previousDescription); };
  }, []);

  return (
    <main className="app case-study-page elm-case-study-page">
      {header}
      <section className="case-study-summary" aria-labelledby="elm-case-study-title">
        <div className="case-study-frame">
          <p className="case-study-summary__brand">Elm</p>
          <p className="case-study-summary__tags">Event Management | Brand Communications | Launch</p>
          <h1 id="elm-case-study-title">How BOXCOM Africa Amplified ELM&apos;s Presence at GITEX Africa 2025</h1>
          <p className="case-study-summary__intro">Elm is a Saudi digital solutions company (founded 1988, owned by the Public Investment Fund, listed on Tadawul) and a leading provider of e-government and secure digital services aligned with Vision 2030. It is not a startup: it is an established, state-backed national tech champion, and GITEX was a deliberate step in its international expansion.</p>
          <div className="case-study-metrics case-study-metrics--three" aria-label="Campaign results">
            <div><strong>52</strong><span>Total<br />Placements</span></div>
            <div><strong>3.5M</strong><span>Total<br />Reach</span></div>
            <div><strong>80K</strong><span>Media Value<br />(USD)</span></div>
          </div>
          <div className="case-study-snapshot">
            <article className="case-study-snapshot__challenge"><span>The Challenge</span><h2>Legitimize an Established Saudi Tech Leader in a New African Market.</h2><p>Elm was an established, state-backed champion: 500+ projects delivered, 80 products, 32 patents, yet entering the African market for the first time with zero brand recognition. Awareness sat near zero across three languages and four countries, and government and tech audiences needed reaching simultaneously. Expansion was impossible without building instant credibility first.</p></article>
            <article className="case-study-snapshot__work"><span>What We Did</span><h2>Institutional Credibility, Trilingual Reach, and Broadcast Amplification</h2><p>We secured a government-level MoU signing, timed partnership announcements (Kuba, Algo Consulting, TELEPAC) across the opening and closing days, produced a trilingual press release, and coordinated broadcast access including a national TV interview on Al Aoula. Local relevance replaced generic messaging at every step.</p></article>
          </div>
        </div>
      </section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light"><p className="case-study-panel__eyebrow">The Challenge</p><h2>Legitimizing an Established Saudi Tech Leader in a New African Market.</h2><p>BOXCOM Africa identified three distinct communication challenges that shaped the event and media strategy:</p>{challengePoints.map(([title, text]) => <div className="case-study-copy-point" key={title}><h3>{title}</h3><p>{text}</p></div>)}</article></section>
      <section className="case-study-band case-study-band--strategy"><article className="case-study-panel case-study-panel--teal"><p className="case-study-panel__eyebrow">The Strategy</p><h2>Institutional Credibility, Trilingual Reach, and Broadcast Amplification</h2>{strategyPoints.map(([, text]) => <div className="case-study-copy-point" key={text}><p>{text}</p></div>)}</article></section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light"><p className="case-study-panel__eyebrow">The Results</p><h2>Multi-Country Reach, Trilingual Coverage, and Broadcast Visibility</h2><div className="case-study-copy-point"><h3>Editorial Coverage</h3><ul><li>43 press, magazine, and website placements across Morocco, Tunisia, Saudi Arabia, and pan-African outlets.</li><li>Key placements included Agence MAP, 2M, Le Matin, Aujourd&apos;hui Le Maroc, allAfrica, TechAfrica News, Tunisie Numérique, and Espace Manager.</li><li>Coverage published in Arabic, French, and English — achieving genuine trilingual, multi-country reach.</li><li>Coverage clustered around two key moments: the event opening (9–14 April) and the closing partnerships story (17–18 April).</li></ul></div><div className="case-study-copy-point"><h3>Broadcast and Social Media Performance</h3><ul><li>2 broadcast placements, including a national television interview on Al Aoula and coverage in Aujourd&apos;hui Le Maroc.</li><li>7 social media placements extended the story beyond traditional press.</li><li>Combined reach spanned four countries and three languages, reinforcing Elm&apos;s positioning as a credible, established player entering the African market.</li></ul></div></article></section>
      <BriefContact footer={footer} />
    </main>
  );
}

export default ELMCaseStudyPage;
