import { useEffect } from 'react';
import { BriefContact } from './CaseStudyPage';
import caseStudies from '../content/frenchCaseStudies.generated.json';
import './CaseStudyPage.css';

const marker = (value) => value.toLocaleLowerCase('fr-FR');
const isChallenge = (value) => marker(value) === 'le défi';
const isWork = (value) => ['ce que nous avons fait', 'notre approche'].includes(marker(value));
const isStrategy = (value) => ['la stratégie', 'la strategie'].includes(marker(value));
const isResults = (value) => ['les résultats', 'les resultats'].includes(marker(value));

const combinedMetricLabels = [
  'Articles', 'Portée', 'AVE', 'Valeur', 'Vues', 'Médias', 'Journalistes',
  'Interviews', 'Langues', 'Campagnes', 'Mentions', 'Retombées',
];

function splitCombinedMetric(value) {
  const positions = combinedMetricLabels
    .map((label) => value.indexOf(label, 1))
    .filter((position) => position > 0);
  const splitAt = positions.length ? Math.min(...positions) : -1;
  return splitAt > 0
    ? { value: value.slice(0, splitAt), label: value.slice(splitAt) }
    : { value, label: '' };
}

function getMetrics(slug, values) {
  if (slug === 'everis' || slug === 'modanisa') {
    const midpoint = values.length / 2;
    return values.slice(0, midpoint).map((value, index) => ({ value, label: values[midpoint + index] }));
  }

  if (slug === 'samsung') {
    return values.reduce((metrics, value, index) => {
      if (index % 2 === 0) metrics.push({ value, label: values[index + 1] || '' });
      return metrics;
    }, []);
  }

  return values.map(splitCombinedMetric);
}

function ContentBlocks({ paragraphs }) {
  return paragraphs.map((paragraph, index) => {
    const nextParagraph = paragraphs[index + 1] || '';
    const looksLikeHeading = paragraph.endsWith(':')
      || (paragraph.split(/\s+/).length <= 12 && nextParagraph.split(/\s+/).length > 12);

    return (
      <div className="case-study-copy-point" key={`${index}-${paragraph}`}>
        {looksLikeHeading ? <h3>{paragraph}</h3> : <p>{paragraph}</p>}
      </div>
    );
  });
}

function FrenchCaseStudyPage({ slug, header, footer }) {
  const paragraphs = caseStudies[slug];
  const firstChallengeIndex = paragraphs.findIndex(isChallenge);
  const challengeIndexes = paragraphs.reduce((indexes, paragraph, index) => {
    if (isChallenge(paragraph)) indexes.push(index);
    return indexes;
  }, []);
  const mainChallengeIndex = challengeIndexes[1] ?? challengeIndexes[0];
  const strategyIndex = paragraphs.findIndex(isStrategy);
  const resultsIndex = paragraphs.findIndex(isResults);
  const metrics = getMetrics(slug, paragraphs.slice(4, firstChallengeIndex));

  let snapshotChallenge;
  let snapshotWork;
  if (slug === 'samsung') {
    snapshotChallenge = {
      label: paragraphs[firstChallengeIndex],
      title: paragraphs[firstChallengeIndex + 2],
      body: [paragraphs[firstChallengeIndex + 3]],
    };
    snapshotWork = {
      label: paragraphs[firstChallengeIndex + 1],
      title: paragraphs[firstChallengeIndex + 4],
      body: [paragraphs[firstChallengeIndex + 5]],
    };
  } else {
    const workIndex = paragraphs.findIndex((paragraph, index) => index > firstChallengeIndex && isWork(paragraph));
    snapshotChallenge = {
      label: paragraphs[firstChallengeIndex],
      title: paragraphs[firstChallengeIndex + 1],
      body: paragraphs.slice(firstChallengeIndex + 2, workIndex),
    };
    snapshotWork = {
      label: paragraphs[workIndex],
      title: paragraphs[workIndex + 1],
      body: paragraphs.slice(workIndex + 2, mainChallengeIndex),
    };
  }

  const challengeContent = paragraphs.slice(mainChallengeIndex + 1, strategyIndex);
  const strategyContent = paragraphs.slice(strategyIndex + 1, resultsIndex);
  const resultsContent = paragraphs.slice(resultsIndex + 1);

  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    let description = document.querySelector('meta[name="description"]');
    const createdDescription = !description;
    const previousDescription = description?.getAttribute('content') || '';

    document.title = `${paragraphs[2]} | BOXCOM Africa`;
    document.documentElement.lang = 'fr';
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', paragraphs[3]);

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
      if (createdDescription) description.remove();
      else description.setAttribute('content', previousDescription);
    };
  }, [paragraphs]);

  return (
    <main className={`app case-study-page french-case-study-page ${slug === 'elm' ? 'elm-case-study-page' : ''} ${slug === 'indrive' ? 'indrive-case-study-page' : ''}`}>
      {header}

      <section className="case-study-summary" aria-labelledby="case-study-title">
        <div className="case-study-frame">
          <p className="case-study-summary__brand">{paragraphs[0]}</p>
          <p className="case-study-summary__tags">{paragraphs[1]}</p>
          <h1 id="case-study-title">{paragraphs[2]}</h1>
          <p className="case-study-summary__intro">{paragraphs[3]}</p>

          <div className={`case-study-metrics case-study-metrics--${metrics.length === 4 ? 'four' : 'three'}`} aria-label="Résultats de la campagne">
            {metrics.map((metric) => (
              <div key={`${metric.value}-${metric.label}`}><strong>{metric.value}</strong><span>{metric.label}</span></div>
            ))}
          </div>

          <div className="case-study-snapshot">
            <article className="case-study-snapshot__challenge">
              <span>{snapshotChallenge.label}</span>
              <h2>{snapshotChallenge.title}</h2>
              {snapshotChallenge.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
            <article className="case-study-snapshot__work">
              <span>{snapshotWork.label}</span>
              <h2>{snapshotWork.title}</h2>
              {snapshotWork.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">{paragraphs[mainChallengeIndex]}</p>
          <h2>{challengeContent[0]}</h2>
          <ContentBlocks paragraphs={challengeContent.slice(1)} />
        </article>
      </section>

      <section className="case-study-band case-study-band--strategy">
        <article className="case-study-panel case-study-panel--teal">
          <p className="case-study-panel__eyebrow">{paragraphs[strategyIndex]}</p>
          <h2>{strategyContent[0]}</h2>
          <ContentBlocks paragraphs={strategyContent.slice(1)} />
        </article>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">{paragraphs[resultsIndex]}</p>
          <h2>{resultsContent[0]}</h2>
          <ContentBlocks paragraphs={resultsContent.slice(1)} />
        </article>
      </section>

      <BriefContact footer={footer} locale="fr" />
    </main>
  );
}

export default FrenchCaseStudyPage;
