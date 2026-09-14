import { useEffect, useState } from 'react';
import './ProjectsPage.css';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const projects = [
  {
    name: 'Modanisa',
    industry: 'Fashion',
    service: 'Media Relations',
    useCase: 'E-Commerce Brand Launch',
    href: '#/projects/modanisa',
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
    useCase: 'Investment Announcement',
    href: '#/projects/ntt-data',
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
    useCase: 'Brand Ambassador Launch',
    href: '#/projects/defacto',
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
    useCase: 'Product Launch',
    href: '#/projects/gwm',
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
    useCase: 'Trade Event PR',
    href: '#/projects/mifa',
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
    useCase: 'International Expansion',
    href: '#/projects/elm',
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
    useCase: 'Platform Launch',
    href: '#/projects/agriedge',
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
    useCase: 'M&A Announcement',
    href: '#/projects/dilitrust',
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
    useCase: 'Digital Finance',
    href: '#/projects/eqdom',
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
    useCase: 'Employer Branding',
    href: '#/projects/everis',
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
    useCase: 'Product Launch',
    href: '#/projects/samsung',
    description: 'An immersive, Ramadan-aware Moroccan launch that synchronized with Galaxy Unpacked and generated strong national, broadcast and influencer coverage.',
    results: [
      { value: '27.8M', label: 'Estimated reach' },
      { value: '149', label: 'Tier 1 placements' },
    ],
  },
  {
    name: 'Garena',
    industry: 'Video Games',
    service: 'Social PR',
    useCase: 'Community',
    href: '#/projects/garena',
  },
  {
    name: 'inDrive Algeria',
    industry: 'Transportation',
    service: 'Media Relations',
    useCase: 'Market Entry',
    href: '#/projects/indrive',
    description: 'A culturally timed driver campaign and spokesperson program that established credibility for a new mobility entrant in Algeria.',
    results: [
      { value: '11', label: 'Articles published' },
      { value: '€7.9K', label: 'Advertising value' },
    ],
  },
];

const filterOptions = (key) => [...new Set(projects.map((project) => project[key]))];

function ProjectsPage({ header, footer }) {
  const [industry, setIndustry] = useState('');
  const [service, setService] = useState('');
  const [useCase, setUseCase] = useState('');

  useEffect(() => {
    const previousTitle = document.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = 'Our Projects | BOXCOM Africa';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Explore BOXCOM Africa projects across automotive, technology, distribution, transportation and gaming.'
    );

    return () => {
      document.title = previousTitle;
      if (createdMetaDescription) {
        metaDescription.remove();
      } else {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  const visibleProjects = projects.filter(
    (project) =>
      (!industry || project.industry === industry) &&
      (!service || project.service === service) &&
      (!useCase || project.useCase === useCase)
  );
  const hasActiveFilters = Boolean(industry || service || useCase);

  const resetFilters = () => {
    setIndustry('');
    setService('');
    setUseCase('');
  };

  return (
    <main className="app projects-page">
      {header}

      <section className="projects-page-hero" aria-labelledby="projects-page-title">
        <img
          src={asset('/assets/Our%20Projects_Approved%20Images/our-projects-header.jpg')}
          alt="Chess pieces positioned across a map"
          fetchPriority="high"
        />
        <div className="projects-page-hero__overlay" />
        <div className="projects-page-hero__content">
          <p>What We Do</p>
          <h1 id="projects-page-title">Our <span>Projects</span></h1>
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
              All
            </button>

            <label>
              <span className="sr-only">Filter by industry</span>
              <select value={industry} onChange={(event) => setIndustry(event.target.value)}>
                <option value="">Industry</option>
                {filterOptions('industry').map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>

            <label>
              <span className="sr-only">Filter by service</span>
              <select value={service} onChange={(event) => setService(event.target.value)}>
                <option value="">Service</option>
                {filterOptions('service').map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>

            <label>
              <span className="sr-only">Filter by use case</span>
              <select value={useCase} onChange={(event) => setUseCase(event.target.value)}>
                <option value="">Use Case</option>
                {filterOptions('useCase').map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>

          <div className="projects-grid" aria-live="polite">
            {visibleProjects.map((project) => (
              <article className="projects-grid__card" key={project.name}>
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
                <a href={project.href}>Read Case Study</a>
              </article>
            ))}
          </div>

          {visibleProjects.length === 0 && (
            <p className="projects-grid__empty">No projects match these filters. Try another combination.</p>
          )}
        </div>
      </section>

      <section className="contact-section projects-page-contact">
        <div className="contact-section__inner">
          <h2 className="contact-section__title">Talk Through the Brief</h2>
          <p className="contact-section__intro">
            Tell us the story, the market and the timing. A senior member of the team will help identify the
            questions worth answering first.
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
                  <span>Your Name *</span>
                  <input type="text" name="name" placeholder="Your Full Name" autoComplete="name" required />
                </label>
                <label>
                  <span>Your Company *</span>
                  <input type="text" name="company" placeholder="Your Company" autoComplete="organization" required />
                </label>
              </div>
              <label>
                <span>Your Email *</span>
                <input type="email" name="email" placeholder="Your Email" autoComplete="email" required />
              </label>
              <label>
                <span>Message</span>
                <textarea placeholder="Type your message here." rows="5" />
              </label>
              <button type="submit" className="primary-pink-button contact-form__submit">
                Send Message
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
