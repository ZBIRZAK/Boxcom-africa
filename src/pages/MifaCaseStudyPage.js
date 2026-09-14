import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

const challengePoints = [
  ['Communicating a Milestone Anniversary Alongside a Strategic Pivot', 'MIFA Group’s 75th anniversary and entry into aquaculture were distinct stories that had to become one coherent narrative, using institutional legacy as the foundation while giving the strategic announcement a clear frame.'],
  ['Aligning Corporate Strategy with National Economic Priorities', 'Aquaculture and the blue economy are national priorities involving the Ministry of Agriculture and Fisheries, ANDA and sector federations. MIFA’s initiative needed credible positioning within that wider context.'],
  ['Maximizing Impact Within a Competitive Exhibition Environment', 'Halieutis brings together hundreds of industry players seeking attention at once. Standing out required a tightly crafted narrative and precisely timed outreach.'],
];

const strategyPoints = [
  ['National Strategy-Aligned Narrative Development', 'The story paired MIFA Group’s 75-year legacy with aquaculture as Morocco’s next blue economy frontier, explaining a four-pillar strategy spanning licences, equipment, farm development and processing.'],
  ['Multi-Platform Media Outreach', 'Outreach covered economic and business media, fisheries publications, national news and television. Two television placements gave the announcement broadcast-level authority beyond digital coverage.'],
  ['Quadrilingual Media Strategy', 'French reached business media, Arabic engaged the national audience, Dutch accessed the international fishing industry and a Tamazight television interview reflected MIFA’s northern Moroccan roots.'],
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
        <p className="case-study-summary__intro">MIFA Group is one of Morocco&apos;s most established industrial groups in fisheries and maritime equipment, with 75 years of continuous operation supporting the country&apos;s maritime economy.</p>
        <div className="case-study-metrics case-study-metrics--three" aria-label="Campaign results"><div><strong>22</strong><span>Total Media<br />Covered</span></div><div><strong>38K</strong><span>Estimated Article<br />Views</span></div><div><strong>174K</strong><span>Combined AVE<br />(MAD)</span></div></div>
        <div className="case-study-snapshot"><article className="case-study-snapshot__challenge"><span>The Challenge</span><h2>Industry PR in a High-Stakes Exhibition Environment</h2><p>MIFA needed to connect a 75-year anniversary and a strategic aquaculture pivot while standing out among hundreds of Halieutis exhibitors.</p></article><article className="case-study-snapshot__work"><span>What We Did</span><h2>National Strategy Alignment, Multi-Platform Media and Multilingual Reach</h2><p>We aligned the announcement with Morocco&apos;s blue economy priorities and built coordinated digital, print and broadcast outreach across four languages.</p></article></div>
      </div></section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light"><p className="case-study-panel__eyebrow">The Challenge</p><h2>Industry PR in a High-Stakes Exhibition Environment</h2><p>BOXCOM Africa identified three strategic communication challenges:</p>{challengePoints.map(([title, text]) => <div className="case-study-copy-point" key={title}><h3>{title}</h3><p>{text}</p></div>)}</article></section>
      <section className="case-study-band case-study-band--strategy"><article className="case-study-panel case-study-panel--teal"><p className="case-study-panel__eyebrow">The Strategy</p><h2>National Strategy Alignment, Multi-Platform Media and Multilingual Reach</h2><p>BOXCOM Africa built a focused industry PR campaign around three strategic pillars.</p>{strategyPoints.map(([title, text]) => <div className="case-study-copy-point" key={title}><h3>{title}</h3><p>{text}</p></div>)}</article></section>
      <section className="case-study-band case-study-band--pattern"><article className="case-study-panel case-study-panel--light"><p className="case-study-panel__eyebrow">The Results</p><h2>22 Outlets, Four Languages and a Television Presence</h2><div className="case-study-copy-point"><h3>Media Coverage</h3><ul><li>22 Moroccan and international outlets covered the announcement: 18 online media, two international web outlets and two television channels.</li><li>Coverage ran in French, Arabic, Dutch and Tamazight.</li><li>18 of 22 articles included photographs, with most receiving full-page, high-priority placement.</li><li>38,000+ estimated views and 174,000 MAD in Advertising Value Equivalent.</li></ul></div><div className="case-study-copy-point"><h3>Key Message Amplification</h3><ul><li>The new aquaculture vertical generated 28 mentions.</li><li>MIFA&apos;s aquaculture investment generated 24 mentions.</li><li>The group&apos;s 75-year institutional legacy generated 17 mentions.</li></ul></div></article></section>
      <BriefContact footer={footer} />
    </main>
  );
}

export default MifaCaseStudyPage;
