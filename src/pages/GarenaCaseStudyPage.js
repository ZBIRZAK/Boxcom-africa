import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import './CaseStudyPage.css';

const challengePoints = [
  {
    title: 'Localizing Global Announcements',
    text:
      'From esports tournaments to an anime adaptation, each announcement needed a Moroccan angle to be worth publishing.',
  },
  {
    title: 'Reaching Beyond Gaming Media',
    text:
      'Garena needed visibility with general, business and economy readers, not only with the community already following the brand.',
  },
  {
    title: 'Publishing in Both Languages of the Moroccan Press',
    text:
      'French-only distribution would have missed a large share of readers, and Arabic-only would have missed the business audience.',
  },
];

const strategyPoints = [
  {
    title: 'A Calendar of Five News Moments',
    text:
      "Each campaign was built around an event journalists wanted to cover: Free Fire's confirmed place at the Esports World Cup in Riyadh (10 to 14 July), the FFMSC MEA 2024 finals, the Garena and Kadokawa anime adaptation, the Eid Royale charity campaign and the launch of Battle of Morocco.",
  },
  {
    title: 'Bilingual Press Distribution',
    text:
      'Every press release was written for and distributed to French and Arabic media, so each story reached both press ecosystems.',
  },
  {
    title: 'Tier 1 Anchors With a Digital Relay',
    text:
      'MAP Business, MAP Finance, Media7 and Al9anat anchored the key announcements, before a wide relay across Tier 2 and Tier 3 digital publications.',
  },
];

function GarenaCaseStudyPage({ header, footer }) {
  useEffect(() => {
    const previousTitle = document.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = 'How BOXCOM Africa Built National Press Visibility for Garena Free Fire in Morocco';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Garena is a leading global publisher of online games and part of Sea Limited. According to Garena, its mobile battle royale Free Fire was the most downloaded mobile game worldwide from 2019 to 2021 and the most downloaded mobile battle royale in 2022 and 2023.'
    );

    return () => {
      document.title = previousTitle;
      if (createdMetaDescription) metaDescription.remove();
      else metaDescription.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <main className="app case-study-page garena-case-study-page">
      {header}

      <section className="case-study-summary" aria-labelledby="garena-case-study-title">
        <div className="case-study-frame">
          <p className="case-study-summary__brand">Garena Free Fire</p>
          <p className="case-study-summary__tags">
            Gaming PR | Esports Communications | Community Campaigns | Media Relations | Morocco
          </p>
          <h1 id="garena-case-study-title">
            How BOXCOM Africa Built National Press Visibility for Garena Free Fire in Morocco
          </h1>
          <p className="case-study-summary__intro">
            Garena is a leading global publisher of online games and part of Sea Limited. According to Garena, its
            mobile battle royale Free Fire was the most downloaded mobile game worldwide from 2019 to 2021 and the
            most downloaded mobile battle royale in 2022 and 2023.
          </p>

          <div className="case-study-metrics case-study-metrics--four" aria-label="Campaign results">
            <div><strong>67</strong><span>Articles<br />Published</span></div>
            <div><strong>9.7M</strong><span>Estimated<br />Reach</span></div>
            <div><strong>5</strong><span>Press<br />Campaigns</span></div>
            <div><strong>55K</strong><span>Estimated Advertising<br />Value (USD)</span></div>
          </div>

          <div className="case-study-snapshot">
            <article className="case-study-snapshot__challenge">
              <span>The Challenge</span>
              <h2>Turn Global Gaming News Into Stories Moroccan Journalists Want to Publish</h2>
              <p>
                Most Free Fire announcements originated at regional or global level, with little local relevance on
                arrival. Garena also needed visibility beyond gaming media, in general, business and economy sections,
                in both French and Arabic.
              </p>
            </article>
            <article className="case-study-snapshot__work">
              <span>What We Did</span>
              <h2>A Five-Moment Bilingual Press Program Anchored in National Reference Media</h2>
              <p>
                We tied each release to a news moment, distributed it in French and Arabic, and anchored every story
                with Tier 1 outlets before relaying it across digital media.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">The Challenge</p>
          <h2>Turn Global Gaming News Into Stories Moroccan Journalists Want to Publish</h2>
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
          <h2>A Five-Moment Bilingual Press Program Anchored in National Reference Media</h2>
          <p>
            BOXCOM Africa designed a news-led press relations program of five campaigns between February and July
            2024.
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
          <h2>67 Articles Across Five Campaigns and 6 Tier 1 Placements for Eid Royale</h2>
          <p>The campaign delivered strong press and digital coverage across every news moment:</p>
          <div className="case-study-copy-point">
            <h3>Media Coverage</h3>
            <ul>
              <li>67 articles for about 9.7 million in estimated reach and an estimated 55,000 USD in advertising value.</li>
              <li>The Esports World Cup roadmap generated 25 articles, the Garena and Kadokawa anime announcement 12 and the FFMSC finals 9.</li>
              <li>Eid Royale generated 17 articles and the Battle of Morocco launch 3.</li>
            </ul>
          </div>
          <div className="case-study-copy-point">
            <h3>Eid Royale Performance</h3>
            <ul>
              <li>17 articles in 13 outlets, 7 in French and 10 in Arabic, including 6 Tier 1 placements in MAP Business, MAP Finance, Media7 and Al9anat.</li>
              <li>About 2.8 million in estimated reach, with no negative coverage.</li>
            </ul>
          </div>
        </article>
      </section>

      <BriefContact footer={footer} />
    </main>
  );
}

export default GarenaCaseStudyPage;
