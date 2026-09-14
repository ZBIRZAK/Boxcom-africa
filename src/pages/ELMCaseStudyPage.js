import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

const challengePoints = [
  ['Legitimizing a Foreign State-Backed Brand in a New Market', 'A government-owned Saudi technology group carries weight at home, but that credibility does not automatically translate abroad. Elm needed a visible institutional anchor and tangible local commitment so its entry would read as more than a foreign company announcement.'],
  ['Speaking to Policy and Tech Audiences at Once', 'Government cooperation and technology innovation required a strategy that bridged institutional outlets with tech and innovation media, each expecting a distinct angle on the same story.'],
  ['Sustaining Momentum Across a Three-Day Event', 'A single announcement fades quickly in a crowded event cycle. Partnership signings and spokesperson access had to be sequenced across all three days to keep Elm visible from opening to close.'],
];

const strategyPoints = [
  ['Institutional Credibility', 'A government-level MoU signing and corporate proof points — 500+ projects, 80 products and 32 patents — positioned Elm as an established partner rather than a newcomer testing the market.'],
  ['Sustained Event Visibility', 'Partnership announcements with Kuba, Algo Consulting and TELEPAC were timed across the opening and closing days, while the pavilion’s AI, archiving and smart-stadium solutions gave technology media a complementary angle.'],
  ['Trilingual and Broadcast Reach', 'Arabic, French and English content reached Moroccan, Tunisian, Saudi and pan-African outlets in their editorial languages, while a national television interview on Al Aoula created a high-visibility broadcast moment.'],
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
          <p className="case-study-summary__intro">Elm is a Saudi digital solutions company, owned by the Public Investment Fund and listed on Tadawul. The established, state-backed technology leader used GITEX Africa as a deliberate step in its international expansion.</p>
          <div className="case-study-metrics case-study-metrics--three" aria-label="Campaign results">
            <div><strong>39</strong><span>Media Outlets<br />Covered</span></div>
            <div><strong>3.5M</strong><span>Total<br />Reach</span></div>
            <div><strong>80K</strong><span>Media Value<br />(USD)</span></div>
          </div>
          <div className="case-study-snapshot">
            <article className="case-study-snapshot__challenge"><span>The Challenge</span><h2>Legitimize an Established Saudi Tech Leader in a New African Market</h2><p>Elm entered Africa with strong credentials but almost no recognition across four countries and three languages. Institutional and technology audiences had to be reached simultaneously.</p></article>
            <article className="case-study-snapshot__work"><span>What We Did</span><h2>A Dual-Track PR Strategy for Credibility and Visibility</h2><p>We secured a government-level MoU, sequenced partnership announcements, produced trilingual content and coordinated broadcast access including an Al Aoula interview.</p></article>
          </div>
        </div>
      </section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light"><p className="case-study-panel__eyebrow">The Challenge</p><h2>Legitimizing an Established Saudi Tech Leader in a New African Market</h2><p>BOXCOM Africa identified three communication challenges:</p>{challengePoints.map(([title, text]) => <div className="case-study-copy-point" key={title}><h3>{title}</h3><p>{text}</p></div>)}</article></section>
      <section className="case-study-band case-study-band--strategy"><article className="case-study-panel case-study-panel--teal"><p className="case-study-panel__eyebrow">The Strategy</p><h2>Institutional Credibility, Trilingual Reach and Broadcast Amplification</h2><p>A two-track narrative presented Elm as both a proven institutional partner and a forward-facing innovator.</p>{strategyPoints.map(([title, text]) => <div className="case-study-copy-point" key={title}><h3>{title}</h3><p>{text}</p></div>)}</article></section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light"><p className="case-study-panel__eyebrow">The Results</p><h2>Multi-Country Reach, Trilingual Coverage and Broadcast Visibility</h2><div className="case-study-copy-point"><h3>Editorial Coverage</h3><ul><li>43 press, magazine and website placements across Morocco, Tunisia, Saudi Arabia and pan-African outlets.</li><li>Coverage appeared in Arabic, French and English.</li><li>Key placements included Agence MAP, 2M, Le Matin, Aujourd&apos;hui Le Maroc, allAfrica and TechAfrica News.</li></ul></div><div className="case-study-copy-point"><h3>Broadcast and Social Performance</h3><ul><li>Two broadcast placements, including a national television interview on Al Aoula.</li><li>Seven social media placements extended the story beyond traditional press.</li><li>Combined reach spanned four countries and three languages.</li></ul></div></article></section>
      <BriefContact footer={footer} />
    </main>
  );
}

export default ELMCaseStudyPage;
