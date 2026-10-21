import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

const challengePoints = [
  ['Communicating a Milestone Anniversary Alongside a Strategic Pivot', 'MIFA Group’s 75th anniversary and its entry into aquaculture were two distinct stories that had to be told as one coherent narrative. The campaign needed to use the anniversary as a credibility foundation while ensuring the aquaculture announcement received its own clear, compelling framing.'],
  ['Aligning Corporate Strategy with National Economic Priorities', 'Morocco’s fisheries and blue economy sector is a national strategic priority, with significant institutional stakeholders including the Ministry of Agriculture and Fisheries, ANDA (the National Agency for Aquaculture Development), and sector federations. For the campaign to generate maximum editorial traction, MIFA’s initiative needed to be credibly positioned within this broader national context.'],
  ['Maximizing Impact Within a Competitive Exhibition Environment', 'The Halieutis exhibition brings together hundreds of industry players, all seeking media attention simultaneously. Standing out as a distinctive, newsworthy story in a dense exhibition media environment required a tightly crafted narrative and precisely timed media outreach strategy.'],
];

const strategyPoints = [
  ['Pillar 1 — National Strategy-Aligned Narrative Development', 'BOXCOM Africa built the narrative around MIFA Group’s 75-year institutional legacy paired with the strategic urgency of aquaculture as Morocco’s next blue economy frontier. The release detailed MIFA Equipment’s four-pillar strategy: licences, equipment, farm development, processing. All are positioned within Morocco’s national fisheries strategy and ANDA’s priorities, leveraging Halieutis to signal serious, long-term investor commitment.'],
  ['Pillar 2 — Multi-Platform Media Outreach', 'Outreach spanned four platforms: economic/business media, industry and fisheries publications, national news, and television — reaching MIFA’s full audience through trusted channels. Landing two TV placements was a notable win, giving the announcement broadcast-level gravitas beyond what digital coverage alone could deliver.'],
  ['Pillar 3 — Quadrilingual Media Strategy', 'The campaign’s quadrilingual coverage: French, Arabic, Dutch, and Tamazight — was deliberately strategic. French reached business media, Arabic engaged the broadest national audience, Dutch accessed the international fishing industry, and a Tamazight TV interview reflected genuine commitment to northern Morocco’s Amazigh fishing communities and MIFA’s regional roots.'],
];

function MifaCaseStudyPage({ header, footer }) {
  useEffect(() => {
    const previousTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    const previousDescription = meta?.getAttribute('content') || '';
    document.title = 'MIFA Group Aquaculture Case Study | BOXCOM Africa';
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', "See how BOXCOM Africa amplified MIFA Group's aquaculture strategy announcement at Halieutis Morocco.");
    return () => { document.title = previousTitle; if (created) meta.remove(); else meta.setAttribute('content', previousDescription); };
  }, []);

  return (
    <main className="app case-study-page mifa-case-study-page">
      {header}
      <section className="case-study-summary" aria-labelledby="mifa-case-study-title"><div className="case-study-frame">
        <p className="case-study-summary__brand">Mifa</p>
        <p className="case-study-summary__tags">Aquaculture PR | Fisheries Industry Communications | Trade Event PR | Blue Economy | Morocco</p>
        <h1 id="mifa-case-study-title">How BOXCOM Africa Amplified MIFA Group&apos;s Aquaculture Strategy Announcement at Halieutis Morocco</h1>
        <p className="case-study-summary__intro">MIFA Group is one of Morocco&apos;s most established industrial groups in the fisheries and maritime equipment sector, with 75 years of continuous operation supporting the development of Morocco&apos;s maritime economy.</p>
        <div className="case-study-metrics case-study-metrics--three" aria-label="Campaign results"><div><strong>22</strong><span>Total Media<br />Covered</span></div><div><strong>38K</strong><span>Estimated Article<br />Views</span></div><div><strong>174K</strong><span>Combined AVE<br />(MAD)</span></div></div>
        <div className="case-study-snapshot"><article className="case-study-snapshot__challenge"><span>The Challenge</span><h2>Industry PR in a High-Stakes Exhibition Environment</h2><p>MIFA needed to turn its 75th anniversary and expansion into aquaculture into one clear, compelling story. The campaign also had to connect this strategic move to Morocco&apos;s national blue economy priorities while competing for attention in the crowded Halieutis media environment.</p></article><article className="case-study-snapshot__work"><span>What We Did</span><h2>National Strategy Alignment, Multi-Platform Media, and Multilingual Reach</h2><p>BOXCOM Africa built a narrative linking MIFA&apos;s industrial legacy with its new aquaculture ambitions. We then activated targeted outreach across business, industry, national and broadcast media, using French, Arabic, Dutch and Tamazight to broaden reach and relevance.</p></article></div>
      </div></section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light"><p className="case-study-panel__eyebrow">The Challenge</p><h2>Industry PR in a High-Stakes Exhibition Environment</h2><p>BOXCOM Africa identified three strategic communication challenges:</p>{challengePoints.map(([title, text]) => <div className="case-study-copy-point" key={title}><h3>{title}</h3><p>{text}</p></div>)}</article></section>
      <section className="case-study-band case-study-band--strategy"><article className="case-study-panel case-study-panel--teal"><p className="case-study-panel__eyebrow">The Strategy</p><h2>National Strategy Alignment, Multi-Platform Media, and Multilingual Reach</h2><p>BOXCOM Africa designed a focused industry PR campaign built on three strategic pillars: crafting a narrative that connected MIFA&apos;s announcement to Morocco&apos;s national aquaculture priorities, deploying multi-platform media outreach across digital, print, and broadcast channels, and achieving an exceptional quadrilingual reach across French, Arabic, Dutch, and Tamazight.</p>{strategyPoints.map(([title, text]) => <div className="case-study-copy-point" key={title}><h3>{title}</h3><p>{text}</p></div>)}</article></section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light"><p className="case-study-panel__eyebrow">The Results</p><h2>22 Outlets, 4 Languages, and a Television Presence</h2><div className="case-study-copy-point"><h3>Media Coverage</h3><ul><li>22 Moroccan and international outlets covered the announcement — 18 online media, 2 international web outlets, and 2 television channels.</li><li>Coverage published across four languages: 15 French articles, 5 Arabic articles, 1 Dutch article, and 1 Tamazight TV interview.</li><li>18 of 22 articles included photographs, with most placed in full-page, high-priority editorial positions.</li><li>38,000+ estimated article views and 174,000 MAD in Advertising Value Equivalent.</li></ul></div><div className="case-study-copy-point"><h3>Key Message Amplification</h3><ul><li>MIFA&apos;s new aquaculture business vertical established as a clearly understood category (28 mentions).</li><li>MIFA&apos;s aquaculture investment made concrete and tangible for readers (24 mentions).</li><li>MIFA Group&apos;s 75-year institutional legacy anchored the announcement in credibility (17 mentions).</li></ul></div></article></section>
      <BriefContact footer={footer} />
    </main>
  );
}

export default MifaCaseStudyPage;
