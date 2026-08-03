import { useEffect, useState } from 'react';
import './ProjectsPage.css';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const projects = [
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
  },
  {
    name: 'Mifa',
    industry: 'Distribution',
    service: 'Media Events',
    useCase: 'Exhibition',
    href: '#/projects/mifa',
  },
  {
    name: 'Samsung',
    industry: 'Technology',
    service: 'Media Relations',
    useCase: 'Product Launch',
    href: '#/projects/samsung',
  },
  {
    name: 'Garena',
    industry: 'Video Games',
    service: 'Social PR',
    useCase: 'Community',
    href: '#/projects/garena',
  },
  {
    name: 'InDrive',
    industry: 'Transportation',
    service: 'Media Relations',
    useCase: 'Positioning',
    href: '#/projects/indrive',
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
