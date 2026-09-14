import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

const challengePoints = [
  {
    title: 'Introducing a Global Brand in a Culturally Specific Market',
    text:
      'Modanisa operates globally, but Morocco has its own fashion culture, media landscape and consumer identity. The PR strategy had to translate a global narrative into messaging with genuine audience fit and local context for Moroccan women, while monitoring sentiment and possible narrative shifts in the early public conversation.',
  },
  {
    title: "Navigating Fashion Media's Advertising-Editorial Boundary",
    text:
      "Morocco's women's magazines frequently require advertising budgets before offering editorial coverage. BOXCOM Africa worked closely with journalists and editors through press briefings and direct media relations in Morocco to secure genuine editorial placements, including interview-based coverage in Femmes du Maroc and Moroccan Lady.",
  },
  {
    title: 'Building Awareness, Positioning and Activation Simultaneously',
    text:
      'Modanisa was entirely unknown to Moroccan audiences. The campaign needed to introduce the brand, establish credibility and convert awareness into consumer engagement in a structured sequence, while flagging risk alerts early and keeping crisis management support ready if the narrative shifted.',
  },
];

const strategyPoints = [
  {
    title: 'Brand Awareness',
    text:
      "Press release writing in Morocco introduced Modanisa's global presence and leadership in modest fashion to Moroccan media through targeted press releases and media kits in Arabic, French and English.",
  },
  {
    title: 'Brand Positioning',
    text:
      "A follow-up release, supported by a press conference and structured press briefing, reinforced the brand's authority by highlighting its international scale and women's empowerment narrative.",
  },
  {
    title: 'Brand Activation',
    text:
      "A store initiative launch converted awareness into consumer engagement, integrating ambassador and creator Halima Aden through influencer relations and creator partnerships. Her name generated 156 mentions, equal to Modanisa's own brand mention count, while post-event coverage extended momentum across social platforms.",
  },
];

function ModanisaCaseStudyPage({ header, footer }) {
  useEffect(() => {
    const previousTitle = document.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = 'Modanisa Morocco Brand Launch Case Study | BOXCOM Africa';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'See how BOXCOM Africa launched Modanisa in Morocco and built national visibility through a three-phase PR strategy.'
    );

    return () => {
      document.title = previousTitle;
      if (createdMetaDescription) metaDescription.remove();
      else metaDescription.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <main className="app case-study-page modanisa-case-study-page">
      {header}

      <section className="case-study-summary" aria-labelledby="modanisa-case-study-title">
        <div className="case-study-frame">
          <p className="case-study-summary__brand">Modanisa</p>
          <p className="case-study-summary__tags">
            Fashion PR | Modest Fashion | E-Commerce Brand Launch | Women&apos;s Media | Morocco
          </p>
          <h1 id="modanisa-case-study-title">
            How BOXCOM Africa Launched Modanisa in Morocco and Built National Visibility for a Global Modest Fashion
            Brand
          </h1>
          <p className="case-study-summary__intro">
            Modanisa is one of the world&apos;s largest modest fashion e-commerce platforms, founded in Istanbul and
            serving Muslim women in more than 140 countries with over 100,000 products from 1,000+ partner brands.
          </p>

          <div className="case-study-metrics case-study-metrics--three" aria-label="Campaign results">
            <div><strong>26</strong><span>Media Outlets<br />Covered</span></div>
            <div><strong>358K</strong><span>Estimated Article<br />Views</span></div>
            <div><strong>128K</strong><span>Advertising Value<br />(MAD)</span></div>
          </div>

          <div className="case-study-snapshot">
            <article className="case-study-snapshot__challenge">
              <span>The Challenge</span>
              <h2>Translate a Global Brand Into a Culturally Authentic Moroccan Launch</h2>
              <p>
                Modanisa was unknown to Moroccan audiences, and its global narrative needed local context. The
                campaign also had to build awareness, positioning and consumer activation in sequence.
              </p>
            </article>
            <article className="case-study-snapshot__work">
              <span>What We Did</span>
              <h2>A Three-Phase Press Relations Strategy for Progressive Brand Building</h2>
              <p>
                We introduced Modanisa&apos;s global presence, reinforced brand authority and activated consumer
                engagement while integrating ambassador and creator Halima Aden throughout every phase.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">The Challenge</p>
          <h2>Translate a Global Brand Into a Culturally Authentic Moroccan Launch</h2>
          <p>BOXCOM Africa identified three strategic challenges that shaped the multi-phase PR approach:</p>
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
            BOXCOM Africa designed a structured, three-phase PR strategy, recognizing that a single announcement
            could not achieve everything Modanisa needed from its Moroccan launch.
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
          <h2>26 Outlets, Trilingual Reach and Deep Brand Messaging Penetration</h2>
          <p>The campaign delivered strong press, broadcast and media relations results across all channels:</p>
          <div className="case-study-copy-point">
            <h3>Media Coverage</h3>
            <ul>
              <li>26 media outlets published the campaign across Moroccan, international and women&apos;s media.</li>
              <li>Coverage included 15 French articles, 10 Arabic articles and one English article.</li>
              <li>25 of 26 articles included photographs, with average article length exceeding 70% of the original press release.</li>
              <li>358,000 estimated article views and 128,000 MAD in Advertising Value Equivalent.</li>
              <li>Positive sentiment and online reputation were reinforced across online conversations and social platforms.</li>
            </ul>
          </div>
          <div className="case-study-copy-point">
            <h3>Executive and Event Performance</h3>
            <ul>
              <li>The Modanisa brand name was mentioned 156 times, signaling strong brand recall.</li>
              <li>The “modest fashion” concept was mentioned 78 times, positioning Modanisa as a category leader.</li>
              <li>Ambassador Halima Aden was mentioned 156 times, amplifying editorial interest and reach.</li>
            </ul>
          </div>
        </article>
      </section>

      <BriefContact footer={footer} />
    </main>
  );
}

export default ModanisaCaseStudyPage;
