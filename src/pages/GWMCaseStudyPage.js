import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

const challengePoints = [
  {
    title: 'Building Credibility for an Unknown Brand in a Competitive Market',
    text:
      'Morocco’s automotive sector is dominated by well-established European and Asian brands with decades of market presence. Introducing GWM required a PR strategy that could generate immediate credibility among journalists and editors, dealers, and consumers unfamiliar with the brand.',
  },
  {
    title: 'Engaging a Specialized Automotive Media Ecosystem',
    text:
      'Automotive journalists in Morocco represent a distinct, highly specialized media segment with specific expectations around product access, technical information, and executive access. Reaching them required dedicated media event logistics, press briefings, and tailored media kits beyond standard press releases.',
  },
  {
    title: 'Communicating Both a Product Launch and a Strategic Partnership',
    text:
      'The GWM launch was also the story of Tractafric Motors, a major African automotive distributor staking its credibility on bringing a Chinese SUV brand to Morocco. The campaign needed to tell both stories simultaneously, with risk alerts and crisis management and consultancy on standby in case early sentiment or narrative shifts required a fast response.',
  },
];

const strategyPoints = [
  {
    title: 'National Press Conference in Casablanca',
    text:
      'BOXCOM Africa organized a national press conference in Casablanca as the cornerstone of the launch — handling press release writing in Morocco, curating a list of 44 journalists across automotive, business, economic, and national news media, and providing direct access to vehicles, brand materials, and executives.',
  },
  {
    title: 'Targeted Multi-Sector Media Outreach',
    text:
      "Outreach spanned five categories: automotive (DriveIn, Wandaloo, AutoNews), economic (L'Économiste, Les Eco), national news (LeSiteInfo, H24Info, Media24), print (Le Matin), and lifestyle/digital. We achieved media relations in Morocco across French, Arabic, and English, and generating strong post-event coverage across social platforms and online conversation.",
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
            trucks, and new energy vehicles under brands including Haval, Ora, and Tank — entering Morocco through
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
                Morocco&apos;s automotive sector is dominated by decades-old European and Asian brands with entrenched
                customer loyalty. GWM was competitive on product and price, but unknown to journalists, dealers, and
                buyers. The launch also had to carry two stories at once, GWM&apos;s global positioning and Tractafric&apos;s
                strategic bet on the brand.
              </p>
            </article>
            <article className="case-study-snapshot__work">
              <span>What We Did</span>
              <h2>A Press-Conference-Led Market Entry Strategy for Sector-Wide Credibility</h2>
              <p>
                We anchored the launch in a national Casablanca press conference, targeted five distinct media categories
                simultaneously, and secured 11 executive interviews through careful spokesperson preparation. A generic
                product launch was replaced with a credible, multi-angle business narrative at every step.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">The Challenge</p>
          <h2>Build Instant Credibility for an Unknown Brand in a Loyalty-Driven Market</h2>
          <p>BOXCOM Africa identified three core strategic challenges that shaped the entire PR approach:</p>
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
            media outreach, and strategic executive visibility — each pillar addressing a specific dimension of GWM&apos;s
            credibility and awareness challenge.
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
              <li>44 articles published across Moroccan media — automotive, economic, national news, and lifestyle platforms.</li>
              <li>Coverage in leading publications including Le Matin, L&apos;Économiste, Les Eco, LeBrief, H24Info, Media24, and Wandaloo.</li>
              <li>Multi-language reach across French, Arabic, and English media.</li>
              <li>Strong presence in specialized automotive outlets — DriveIn, Wandaloo, AutoNews.</li>
              <li>Positive sentiment and strong online reputation carried through the public conversation following the launch.</li>
            </ul>
          </div>
          <div className="case-study-copy-point">
            <h3>Executive and Event Performance</h3>
            <ul>
              <li>11 executive interviews reinforced both GWM&apos;s global narrative and Tractafric&apos;s strategic vision.</li>
              <li>44 journalists attended the Casablanca press conference, an exceptional turnout for a new brand launch.</li>
              <li>Every major Moroccan automotive media outlet was represented, ensuring total sector coverage from day one.</li>
            </ul>
          </div>
        </article>
      </section>

      <BriefContact footer={footer} />
    </main>
  );
}

export default GWMCaseStudyPage;
