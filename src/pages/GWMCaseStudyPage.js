import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

const challengePoints = [
  {
    title: 'Building Credibility for an Unknown Brand in a Competitive Market',
    text:
      'Morocco’s automotive sector is dominated by established European and Asian brands with decades of market presence. Introducing GWM required immediate credibility, not just awareness, among journalists, dealers and consumers unfamiliar with the brand.',
  },
  {
    title: 'Engaging a Specialized Automotive Media Ecosystem',
    text:
      'Automotive journalists in Morocco have specific expectations around product access, technical information and executive access. Reaching them required dedicated event logistics, press briefings and tailored media kits beyond standard press releases.',
  },
  {
    title: 'Communicating a Product Launch and a Strategic Partnership',
    text:
      'The launch was also the story of Tractafric Motors, a major African distributor staking its credibility on bringing a Chinese SUV brand to Morocco. The campaign needed to carry both stories while keeping risk alerts and crisis support ready if the early narrative shifted.',
  },
];

const strategyPoints = [
  {
    title: 'National Press Conference in Casablanca',
    text:
      'BOXCOM Africa organized a national press conference as the cornerstone of the launch, handling press release writing, curating 44 journalists across automotive, business, economic and national news media, and providing direct access to vehicles, brand materials and executives.',
  },
  {
    title: 'Targeted Multi-Sector Media Outreach',
    text:
      'Outreach spanned five categories: automotive, economic, national news, print and lifestyle and digital media. The campaign reached French, Arabic and English audiences and generated strong post-event coverage across social platforms and online conversations.',
  },
  {
    title: 'Executive Interviews and Strategic Messaging',
    text:
      'BOXCOM Africa coordinated 11 executive interviews, reframing the launch from a product announcement into a business narrative around long-term ambition and the Tractafric partnership.',
  },
];

function GWMCaseStudyPage({ header, footer }) {
  useEffect(() => {
    const previousTitle = document.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = 'GWM Morocco Automotive Launch Case Study | BOXCOM Africa';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'See how BOXCOM Africa launched Great Wall Motor in Morocco through strategic automotive PR and a national press conference.'
    );

    return () => {
      document.title = previousTitle;
      if (createdMetaDescription) metaDescription.remove();
      else metaDescription.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <main className="app case-study-page gwm-case-study-page">
      {header}

      <section className="case-study-summary" aria-labelledby="gwm-case-study-title">
        <div className="case-study-frame">
          <p className="case-study-summary__brand">GWM</p>
          <p className="case-study-summary__tags">
            Automotive PR | Market Entry Communications | Press Conference Management | Morocco
          </p>
          <h1 id="gwm-case-study-title">
            How BOXCOM Africa Launched Great Wall Motor in Morocco Through Strategic Automotive PR
          </h1>
          <p className="case-study-summary__intro">
            GWM is one of China&apos;s leading automotive manufacturers, globally recognized for its SUVs, pickup
            trucks and new energy vehicles under brands including Haval, Ora and Tank, entering Morocco through
            distribution partner Tractafric Motors.
          </p>

          <div className="case-study-metrics case-study-metrics--four" aria-label="Campaign results">
            <div><strong>44</strong><span>Articles<br />Published</span></div>
            <div><strong>44</strong><span>Journalists at<br />Press Conference</span></div>
            <div><strong>11</strong><span>Executive<br />Interviews</span></div>
            <div><strong>3</strong><span>Languages<br />Covered</span></div>
          </div>

          <div className="case-study-snapshot">
            <article className="case-study-snapshot__challenge">
              <span>The Challenge</span>
              <h2>Build Instant Credibility for an Unknown Brand in a Loyalty-Driven Market</h2>
              <p>
                GWM was competitive on product and price but unknown to journalists, dealers and buyers. The launch
                also had to carry both GWM&apos;s global positioning and Tractafric&apos;s strategic bet on the brand.
              </p>
            </article>
            <article className="case-study-snapshot__work">
              <span>What We Did</span>
              <h2>A Press-Conference-Led Market Entry Strategy for Sector-Wide Credibility</h2>
              <p>
                We anchored the launch in a national Casablanca press conference, targeted five media categories and
                secured 11 executive interviews through careful spokesperson preparation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">The Challenge</p>
          <h2>Build Instant Credibility for an Unknown Brand in a Loyalty-Driven Market</h2>
          <p>BOXCOM Africa identified three strategic challenges that shaped the PR approach:</p>
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
          <h2>A Press-Conference-Led Market Entry Strategy for Sector-Wide Credibility</h2>
          <p>
            BOXCOM Africa designed a PR-driven market entry strategy combining a high-impact press event, precision
            media outreach and strategic executive visibility, with each pillar addressing a distinct credibility
            and awareness challenge.
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
          <h2>44 Articles, 11 Interviews and a Successful Market Entry</h2>
          <p>The campaign delivered strong press and broadcast coverage across every launch dimension:</p>
          <div className="case-study-copy-point">
            <h3>Media Coverage</h3>
            <ul>
              <li>44 articles published across Moroccan automotive, economic, national news and lifestyle media.</li>
              <li>Coverage appeared in leading publications including Le Matin, L&apos;Économiste, Les Eco, LeBrief, H24Info, Media24 and Wandaloo.</li>
              <li>The campaign reached French, Arabic and English media.</li>
              <li>Specialized automotive outlets included DriveIn, Wandaloo and AutoNews.</li>
              <li>Positive sentiment and a strong online reputation carried through the public conversation.</li>
            </ul>
          </div>
          <div className="case-study-copy-point">
            <h3>Executive and Event Performance</h3>
            <ul>
              <li>11 executive interviews reinforced both GWM&apos;s global narrative and Tractafric&apos;s strategic vision.</li>
              <li>44 journalists attended the Casablanca press conference, an exceptional turnout for a new brand launch.</li>
              <li>Every major Moroccan automotive media outlet was represented, ensuring sector-wide coverage from day one.</li>
            </ul>
          </div>
        </article>
      </section>

      <BriefContact footer={footer} />
    </main>
  );
}

export default GWMCaseStudyPage;
