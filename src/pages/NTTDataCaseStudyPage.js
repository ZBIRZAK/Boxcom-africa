import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

const challengePoints = [
  {
    title: 'Amplifying a Major Investment Announcement',
    text:
      'NTT DATA needed to ensure national and international media understood the full scale of its commitment — 1,000 new direct jobs and 15 million MAD in investment — within a competitive media environment.',
  },
  {
    title: 'Positioning NTT DATA as a Strategic Partner for Morocco',
    text:
      "Beyond the announcement itself, the campaign had to reinforce NTT DATA's long-term role in Morocco's digital transformation and economic development — building institutional credibility, not just publicity.",
  },
  {
    title: 'Reaching Multiple, Diverse Media Ecosystems',
    text:
      'The strategy required simultaneous reach across Moroccan business media, technology publications and international outlets in four languages: Arabic, French, English and Spanish.',
  },
];

const strategyPoints = [
  {
    title: 'Strategic Press Release Development and Distribution',
    text:
      "BOXCOM Africa handled press release writing in Morocco for the MoU announcement, leading with NTT DATA's global ranking, the 15 million MAD investment, 1,000 new jobs and its track record recruiting Moroccan graduates since 2016.",
  },
  {
    title: 'Targeted Multi-Channel Media Outreach',
    text:
      'Outreach spanned national economic media, technology publications and international and pan-African outlets, distributed in Arabic, French, English and Spanish for maximum reach and public conversation around the announcement.',
  },
  {
    title: 'Executive Positioning and Thought Leadership',
    text:
      "BOXCOM Africa secured a high-profile interview with NTT DATA Morocco's Managing Director in La Vie Eco, giving leadership a platform to articulate its strategic vision and commitment to Moroccan talent.",
  },
];

function NTTDataCaseStudyPage({ header, footer }) {
  useEffect(() => {
    const previousTitle = document.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = 'NTT DATA Investment Announcement Case Study | BOXCOM Africa';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'See how BOXCOM Africa helped NTT DATA maximize media impact for a major investment announcement in Morocco.'
    );

    return () => {
      document.title = previousTitle;
      if (createdMetaDescription) metaDescription.remove();
      else metaDescription.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <main className="app case-study-page ntt-data-case-study-page">
      {header}

      <section className="case-study-summary" aria-labelledby="ntt-data-case-study-title">
        <div className="case-study-frame">
          <p className="case-study-summary__brand">NTT DATA</p>
          <p className="case-study-summary__tags">
            Corporate PR Strategy | Media Relations | Tech Investment | Morocco
          </p>
          <h1 id="ntt-data-case-study-title">
            How BOXCOM Africa Helped NTT DATA Maximize Media Impact for a Major Investment Announcement in Morocco
          </h1>
          <p className="case-study-summary__intro">
            NTT DATA is a global leader in IT consulting and digital transformation, headquartered in Japan and
            operating in more than 50 countries, ranking among the top six IT services companies in the world.
          </p>

          <div className="case-study-metrics case-study-metrics--three" aria-label="Campaign results">
            <div><strong>25+</strong><span>Media Articles<br />Published</span></div>
            <div><strong>11K+</strong><span>Estimated Article<br />Views</span></div>
            <div><strong>183K</strong><span>Advertising Value<br />(MAD)</span></div>
          </div>

          <div className="case-study-snapshot">
            <article className="case-study-snapshot__challenge">
              <span>The Challenge</span>
              <h2>Turn a Government MoU Into a Credible, Multi-Market Media Moment</h2>
              <p>
                NTT DATA needed national and international journalists and editors to grasp the full scale of its
                commitment within a competitive news cycle while building institutional credibility across four
                languages.
              </p>
            </article>
            <article className="case-study-snapshot__work">
              <span>What We Did</span>
              <h2>A Targeted PR Strategy for Institutional Credibility and Reach</h2>
              <p>
                We led with the announcement&apos;s most newsworthy elements, targeted three distinct media ecosystems
                and secured an executive interview through careful spokesperson preparation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">The Challenge</p>
          <h2>Turn a Government MoU Into a Credible, Multi-Market Media Moment</h2>
          <p>BOXCOM Africa identified three interconnected communication challenges:</p>
          {challengePoints.map((point) => (
            <div className="case-study-copy-point" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          ))}
        </article>
      </section>

      <section className="case-study-band case-study-band--strategy">
        <article className="case-study-panel case-study-panel--teal">
          <p className="case-study-panel__eyebrow">The Strategy</p>
          <h2>A Three-Phase Press Relations Strategy for Progressive Brand Building</h2>
          <p>
            BOXCOM Africa designed a focused PR and media relations campaign structured around three core actions,
            each amplifying reach, building credibility and ensuring resonance across all target audiences.
          </p>
          {strategyPoints.map((point) => (
            <div className="case-study-copy-point" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </div>
          ))}
        </article>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">The Results</p>
          <h2>25+ Articles, Four Languages and Strong Institutional Positioning</h2>
          <p>The campaign delivered strong results across all media channels:</p>
          <div className="case-study-copy-point">
            <h3>Media Coverage</h3>
            <ul>
              <li>25+ media articles published across Moroccan and international outlets.</li>
              <li>23 Moroccan web outlets, one Moroccan print outlet and one international Senegalese outlet.</li>
              <li>Coverage published in Arabic, French and English.</li>
              <li>183,000 MAD in Advertising Value Equivalent and 11,000+ estimated article views.</li>
            </ul>
          </div>
          <div className="case-study-copy-point">
            <h3>Editorial Quality and Positioning</h3>
            <ul>
              <li>Most articles included photos and extended editorial coverage, with many exceeding 60% of the original press release length.</li>
              <li>The campaign achieved an average media quality rating of 8 out of 10.</li>
              <li>An executive interview in La Vie Eco reinforced NTT DATA&apos;s long-term strategic narrative.</li>
            </ul>
          </div>
        </article>
      </section>

      <BriefContact footer={footer} />
    </main>
  );
}

export default NTTDataCaseStudyPage;
