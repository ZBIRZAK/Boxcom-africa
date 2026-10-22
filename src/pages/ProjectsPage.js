import { useEffect, useState } from 'react';
import './ProjectsPage.css';
import { mediaCoverageItems } from '../data/mediaCoverage';
import frenchCaseStudies from '../content/frenchCaseStudies.generated.json';
import frenchProjectCards from '../content/frenchProjectCards.generated.json';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const serviceOptions = [
  'Media Relations',
  'Media Events',
  'Media Monitoring',
  'Social PR',
  'PR Content Creation',
  'Influencer Relations',
];

const projects = [
  {
    name: 'Modanisa',
    industry: 'Fashion',
    service: 'Media Relations',
    services: ['Media Relations', 'Media Monitoring', 'Influencer Relations'],
    useCase: 'E-Commerce Brand Launch',
    href: '/en/projects/modanisa',
    description:
      'A three-phase Moroccan launch that built awareness, brand authority and consumer engagement for a global modest fashion platform.',
    results: [
      { value: '26', label: 'Media outlets covered' },
      { value: '358K', label: 'Estimated article views' },
    ],
  },
  {
    name: 'NTT DATA',
    industry: 'Technology',
    service: 'Media Relations',
    services: ['Media Relations'],
    useCase: 'Investment Announcement',
    href: '/en/projects/ntt-data',
    description:
      'A multi-market media relations campaign that turned a major investment announcement into credible institutional coverage across four languages.',
    results: [
      { value: '25+', label: 'Media articles published' },
      { value: '183K', label: 'Advertising value (MAD)' },
    ],
  },
  {
    name: 'DeFacto',
    industry: 'Fashion',
    service: 'Event Management',
    services: ['Media Events', 'Influencer Relations'],
    useCase: 'Brand Ambassador Launch',
    href: '/en/projects/defacto',
    description: 'A nationwide celebrity launch built around targeted media access, event storytelling and social reach.',
    results: [
      { value: '22', label: 'Media outlets covered' },
      { value: '47K', label: 'Views on top Facebook video' },
    ],
  },
  {
    name: 'GWM',
    industry: 'Automobile',
    service: 'Media Events',
    services: ['Media Relations', 'Media Events'],
    useCase: 'Product Launch',
    href: '/en/projects/gwm',
    description:
      'A press-conference-led market entry campaign that built immediate credibility for Great Wall Motor across Morocco’s automotive media ecosystem.',
    results: [
      { value: '44', label: 'Articles published' },
      { value: '11', label: 'Executive interviews' },
    ],
  },
  {
    name: 'Mifa',
    industry: 'Distribution',
    service: 'Media Relations',
    services: ['Media Relations', 'Media Monitoring'],
    useCase: 'Trade Event PR',
    href: '/en/projects/mifa',
    description:
      'An exhibition-led campaign connecting MIFA Group’s aquaculture strategy to Morocco’s national blue economy priorities.',
    results: [
      { value: '22', label: 'Media outlets covered' },
      { value: '174K', label: 'Advertising value (MAD)' },
    ],
  },
  {
    name: 'ELM',
    industry: 'Technology',
    service: 'Media Events',
    services: ['Media Events', 'Media Monitoring', 'Social PR'],
    useCase: 'International Expansion',
    href: '/en/projects/elm',
    description:
      'A trilingual, multi-country GITEX Africa campaign that established institutional credibility for a Saudi digital solutions leader.',
    results: [
      { value: '39', label: 'Media outlets covered' },
      { value: '3.5M', label: 'Total campaign reach' },
    ],
  },
  {
    name: 'AgriEdge',
    industry: 'Agriculture',
    service: 'Media Relations',
    services: ['Media Relations', 'Media Events', 'PR Content Creation'],
    useCase: 'Platform Launch',
    href: '/en/projects/agriedge',
    description: 'A context-led campaign that made precision agriculture relevant across Morocco’s business, technology, agriculture and sustainability media.',
    results: [
      { value: '27+', label: 'Articles published' },
      { value: '4.9M', label: 'Estimated reader reach' },
    ],
  },
  {
    name: 'DiliTrust',
    industry: 'Technology',
    service: 'Media Relations',
    services: ['Media Relations', 'PR Content Creation'],
    useCase: 'M&A Announcement',
    href: '/en/projects/dilitrust',
    description: 'A precision B2B campaign positioning a LegalTech acquisition within the wider governance digitalization story across Morocco and Africa.',
    results: [
      { value: '13', label: 'Media outlets covered' },
      { value: '2', label: 'Languages distributed' },
    ],
  },
  {
    name: 'EQDOM',
    industry: 'Financial Services',
    service: 'Media Relations',
    services: ['Media Relations'],
    useCase: 'Digital Finance',
    href: '/en/projects/eqdom',
    description: 'A bilingual, multi-sector media strategy connecting automotive financing, digital transformation and national brand visibility.',
    results: [
      { value: '33', label: 'Articles published' },
      { value: '1.7M', label: 'Estimated reader reach' },
    ],
  },
  {
    name: 'Everis',
    industry: 'Technology',
    service: 'Media Relations',
    services: ['Media Relations', 'Social PR', 'PR Content Creation', 'Influencer Relations'],
    useCase: 'Employer Branding',
    href: '/en/projects/everis',
    description: 'An integrated PR and employer-branding campaign designed to attract competitive technology talent to Everis in Tétouan.',
    results: [
      { value: '70+', label: 'Media articles' },
      { value: '700K', label: 'Advertising value (MAD)' },
    ],
  },
  {
    name: 'Samsung',
    industry: 'Technology',
    service: 'Media Events',
    services: ['Media Events', 'Media Monitoring', 'Social PR'],
    useCase: 'Product Launch',
    href: '/en/projects/samsung',
    description: 'An immersive, Ramadan-aware Moroccan launch that synchronized with Galaxy Unpacked and generated strong national, broadcast and influencer coverage.',
    results: [
      { value: '27.8M', label: 'Estimated reach' },
      { value: '149', label: 'Tier 1 placements' },
    ],
  },
  {
    name: 'inDrive Algeria',
    industry: 'Transportation',
    service: 'Media Relations',
    services: ['Media Relations', 'Media Monitoring'],
    useCase: 'Market Entry',
    href: '/en/projects/indrive',
    description: 'A culturally timed driver campaign and spokesperson program that established credibility for a new mobility entrant in Algeria.',
    results: [
      { value: '11', label: 'Articles published' },
      { value: '€7.9K', label: 'Advertising value' },
    ],
  },
  {
    name: 'Garena Free Fire',
    industry: 'Gaming PR',
    service: 'Media Relations',
    services: ['Media Relations'],
    useCase: 'Esports Communications',
    href: '/en/projects/garena',
    description:
      'Most Free Fire announcements originated at regional or global level, with little local relevance on arrival.',
    results: [
      { value: '67', label: 'Articles published' },
      { value: '9.7M', label: 'Estimated reach' },
    ],
  },
];

const filterOptions = (items, key) => [...new Set(items.map((project) => project[key]))];
const serviceFilterOptions = (items) =>
  serviceOptions.filter((option) => items.some((project) => project.services.includes(option)));

const frenchFilterLabels = {
  Fashion: 'Mode',
  Technology: 'Technologie',
  Automobile: 'Automobile',
  Distribution: 'Distribution',
  Agriculture: 'Agriculture',
  'Financial Services': 'Services financiers',
  Transportation: 'Transport',
  'Gaming PR': 'Relations presse Gaming',
  'Media Relations': 'Relations médias',
  'Media Events': 'Événements médias',
  'Media Monitoring': 'Veille médiatique',
  'Social PR': 'Social PR',
  'PR Content Creation': 'Création de contenu RP',
  'Influencer Relations': 'Relations influenceurs',
  'E-Commerce Brand Launch': 'Lancement de marque e-commerce',
  'Investment Announcement': 'Annonce d’investissement',
  'Brand Ambassador Launch': 'Lancement d’ambassadeur de marque',
  'Product Launch': 'Lancement de produit',
  'Trade Event PR': 'RP événementielles',
  'International Expansion': 'Expansion internationale',
  'Platform Launch': 'Lancement de plateforme',
  'M&A Announcement': 'Annonce M&A',
  'Digital Finance': 'Finance digitale',
  'Employer Branding': 'Marque employeur',
  'Market Entry': 'Entrée sur le marché',
  'Esports Communications': 'Communication Esport',
};

const frenchMetricLabels = [
  'Articles', 'Portée', 'AVE', 'Valeur', 'Vues', 'Médias', 'Journalistes',
  'Interviews', 'Langues', 'Campagnes', 'Mentions', 'Retombées',
];

function splitFrenchMetric(metric) {
  const splitAt = frenchMetricLabels
    .map((label) => metric.indexOf(label, 1))
    .filter((position) => position > 0)
    .sort((a, b) => a - b)[0];
  return splitAt
    ? { value: metric.slice(0, splitAt), label: metric.slice(splitAt) }
    : { value: metric, label: '' };
}

function frenchMetrics(slug, paragraphs) {
  const challengeIndex = paragraphs.findIndex((paragraph) => paragraph.toLocaleLowerCase('fr-FR') === 'le défi');
  const metrics = paragraphs.slice(4, challengeIndex);

  if (slug === 'everis' || slug === 'modanisa') {
    const midpoint = metrics.length / 2;
    return metrics.slice(0, midpoint).map((value, index) => ({ value, label: metrics[midpoint + index] }));
  }
  if (slug === 'samsung') {
    return metrics.filter((_, index) => index % 2 === 0)
      .map((value, index) => ({ value, label: metrics[(index * 2) + 1] }));
  }
  return metrics.map(splitFrenchMetric);
}

function ProjectsPage({ header, footer, selectedMediaSlug = '', mediaProjectMap = {}, locale = 'en' }) {
  const isFrench = locale === 'fr';
  const [industry, setIndustry] = useState('');
  const [service, setService] = useState('');
  const [useCase, setUseCase] = useState('');
  const displayedProjects = isFrench
    ? projects.map((project) => {
        const slug = project.href.split('/').pop();
        const paragraphs = frenchCaseStudies[slug];
        const suppliedCard = frenchProjectCards[slug] || {};
        const frenchProject = {
          ...project,
          name: paragraphs[0],
          industry: paragraphs[1].split('|')[0].trim(),
          description: paragraphs[3],
          results: frenchMetrics(slug, paragraphs).slice(0, 2),
          service: frenchFilterLabels[project.service] || project.service,
          services: project.services.map((item) => frenchFilterLabels[item] || item),
          useCase: frenchFilterLabels[project.useCase] || project.useCase,
        };
        return { ...frenchProject, ...suppliedCard };
      })
    : projects;

  useEffect(() => {
    const previousTitle = document.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = isFrench ? 'Nos études de cas | BOXCOM Africa' : 'Our Projects | BOXCOM Africa';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      isFrench
        ? 'Découvrez les études de cas de BOXCOM Africa.'
        : 'Explore BOXCOM Africa projects across automotive, technology, distribution, transportation and gaming.'
    );

    return () => {
      document.title = previousTitle;
      if (createdMetaDescription) {
        metaDescription.remove();
      } else {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, [isFrench]);

  const selectedMedia = mediaCoverageItems.find((item) => item.slug === selectedMediaSlug);
  const mediaProjectSlugs = selectedMedia ? mediaProjectMap[selectedMedia.slug] || [] : null;
  const mediaFilteredProjects = displayedProjects.filter((project) => {
    const projectSlug = project.href.split('/').pop();
    return !mediaProjectSlugs || mediaProjectSlugs.includes(projectSlug);
  });
  const visibleProjects = mediaFilteredProjects.filter(
    (project) =>
      (!industry || project.industry === industry) &&
      (!service || project.services.includes(service)) &&
      (!useCase || project.useCase === useCase)
  );
  const hasActiveFilters = Boolean(industry || service || useCase || selectedMedia);

  const resetFilters = () => {
    setIndustry('');
    setService('');
    setUseCase('');
    if (selectedMedia && typeof window !== 'undefined') window.location.assign(isFrench ? '/projects' : '/en/projects');
  };

  return (
    <main className="app projects-page">
      {header}

      <section className="projects-page-hero" aria-labelledby="projects-page-title">
        <img
          src={asset('/assets/Our%20Projects_Approved%20Images/our-projects-header.jpg')}
          alt={isFrench ? 'Pièces d’échecs positionnées sur une carte' : 'Chess pieces positioned across a map'}
          fetchPriority="high"
        />
        <div className="projects-page-hero__overlay" />
        <div className="projects-page-hero__content">
          <p>{isFrench ? 'Ce que nous faisons' : 'What We Do'}</p>
          <h1 id="projects-page-title">{isFrench ? 'Nos ' : 'Our '}<span>{isFrench ? 'études de cas' : 'Projects'}</span></h1>
        </div>
      </section>

      <section className="projects-catalog" aria-label="Project case studies">
        <div className="projects-page__frame">
          <div className="projects-filters" aria-label="Filter projects">
            <button
              type="button"
              className={!hasActiveFilters ? 'is-active' : ''}
              aria-pressed={!hasActiveFilters}
              onClick={resetFilters}
            >
              {isFrench ? 'Toutes' : 'All'}
            </button>

            <label>
              <span className="sr-only">Filter by industry</span>
              <select value={industry} onChange={(event) => setIndustry(event.target.value)}>
                <option value="">{isFrench ? 'Secteur' : 'Industry'}</option>
                {filterOptions(mediaFilteredProjects, 'industry').map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>

            <label>
              <span className="sr-only">Filter by service</span>
              <select value={service} onChange={(event) => setService(event.target.value)}>
                <option value="">Service</option>
                {(isFrench ? filterOptions(mediaFilteredProjects.flatMap((project) => project.services.map((item) => ({ service: item }))), 'service') : serviceFilterOptions(mediaFilteredProjects)).map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>

            <label>
              <span className="sr-only">Filter by use case</span>
              <select value={useCase} onChange={(event) => setUseCase(event.target.value)}>
                <option value="">{isFrench ? 'Cas d’usage' : 'Use Case'}</option>
                {filterOptions(mediaFilteredProjects, 'useCase').map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>

          <div className="projects-grid" aria-live="polite">
            {visibleProjects.map((project) => (
              <article
                className={`projects-grid__card${selectedMedia ? ' projects-grid__card--media-filtered' : ''}`}
                key={project.name}
              >
                <p className="projects-grid__industry">{project.industry}</p>
                <h2>{project.name}</h2>
                <p className="projects-grid__description">
                  {project.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada molestie urna. Aenean finibus lorem.'}
                </p>
                <div className="projects-grid__results">
                  {(project.results || [
                    { value: '-58%', label: 'Lorem ipsum dolor sit amet' },
                    { value: '+127%', label: 'Lorem ipsum dolor sit amet' },
                  ]).map((result) => (
                    <div key={result.value}>
                      <strong>{result.value}</strong>
                      <span>{result.label}</span>
                    </div>
                  ))}
                </div>
                <a href={isFrench ? project.href.replace('/en/projects/', '/projects/') : project.href}>
                  {isFrench ? 'Lire l’étude de cas' : 'Read Case Study'}
                </a>
                {selectedMedia && (
                  <div className="projects-grid__media-logo">
                    <img
                      src={selectedMedia.logo}
                      alt={`${selectedMedia.label} logo`}
                      loading="lazy"
                    />
                  </div>
                )}
              </article>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <p className="projects-grid__empty">{isFrench ? 'Aucune étude de cas ne correspond à ces filtres.' : 'No projects match these filters. Try another combination.'}</p>
          )}
        </div>
      </section>

      <section className="contact-section projects-page-contact">
        <div className="contact-section__inner">
          <h2 className="contact-section__title">{isFrench ? 'Parlons de votre brief' : 'Talk Through the Brief'}</h2>
          <p className="contact-section__intro">
            {isFrench
              ? "Parlez-nous de l'histoire, du marché et du calendrier. Un membre senior de l'équipe vous aidera à identifier les questions à traiter en priorité."
              : 'Tell us the story, the market and the timing. A senior member of the team will help identify the questions worth answering first.'}
          </p>

          <div className="contact-section__top">
            <div className="contact-map">
              <iframe
                title="BOXCOM Africa location"
                src="https://maps.google.com/maps?q=33.58739,-7.636312&z=17&hl=fr&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="contact-form__row">
                <label>
                  <span>{isFrench ? 'Votre nom *' : 'Your Name *'}</span>
                  <input type="text" name="name" placeholder={isFrench ? 'Votre nom complet' : 'Your Full Name'} autoComplete="name" required />
                </label>
                <label>
                  <span>{isFrench ? 'Votre entreprise *' : 'Your Company *'}</span>
                  <input type="text" name="company" placeholder={isFrench ? 'Votre entreprise' : 'Your Company'} autoComplete="organization" required />
                </label>
              </div>
              <label>
                <span>{isFrench ? 'Votre e-mail *' : 'Your Email *'}</span>
                <input type="email" name="email" placeholder={isFrench ? 'Votre e-mail' : 'Your Email'} autoComplete="email" required />
              </label>
              <label>
                <span>Message</span>
                <textarea placeholder={isFrench ? 'Écrivez votre message ici.' : 'Type your message here.'} rows="5" />
              </label>
              <button type="submit" className="primary-pink-button contact-form__submit">
                {isFrench ? 'Envoyer le message' : 'Send Message'}
              </button>
            </form>
          </div>

          {footer}
        </div>
      </section>
    </main>
  );
}

export default ProjectsPage;
