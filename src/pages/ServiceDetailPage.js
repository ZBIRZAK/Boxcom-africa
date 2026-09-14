import { useEffect, useState } from 'react';
import './InfluencerRelationsPage.css';

function ServiceDetailPage({ config, header, footer }) {
  const [openFaq, setOpenFaq] = useState(0);
  const locale = config.locale || 'en';
  const contactHref = config.contactHref || (locale === 'fr' ? '#/fr/contact' : '#/contact');
  const form = {
    name: config.form?.name || 'Your Name *',
    namePlaceholder: config.form?.namePlaceholder || 'Your Full Name',
    company: config.form?.company || 'Your Company *',
    companyPlaceholder: config.form?.companyPlaceholder || 'Your Company',
    email: config.form?.email || 'Your Email *',
    emailPlaceholder: config.form?.emailPlaceholder || 'Your Email',
    message: config.form?.message || 'Message',
    messagePlaceholder: config.form?.messagePlaceholder || 'Type your message here.',
  };
  const includedCtaLabel = config.includedCtaLabel || `Discuss ${config.hero.title}`;
  const processCtaLabel = config.processCtaLabel || config.contact.buttonLabel || `Start a ${config.hero.title} Brief`;
  const processCtaHref = config.processCtaHref || contactHref;

  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = config.seoTitle;
    document.documentElement.lang = locale;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', config.seoDescription);

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
      if (createdMetaDescription) {
        metaDescription.remove();
      } else {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, [config.seoDescription, config.seoTitle, locale]);

  return (
    <main className={`app influencer-page ${config.pageClassName || ''}`.trim()}>
      {header}

      <section className="influencer-hero" aria-labelledby="service-page-title">
        <img
          className="influencer-hero__image"
          src={config.hero.image}
          alt={config.hero.imageAlt}
          fetchPriority="high"
        />
        <div className="influencer-hero__overlay" />
        <div className="influencer-hero__content">
          <h1 id="service-page-title">{config.hero.title}</h1>
          <div className="influencer-hero__intro">{config.hero.intro}</div>
          <div className="influencer-hero__tags" aria-label={config.hero.capabilitiesLabel || `${config.hero.title} capabilities`}>
            {config.hero.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="influencer-included" aria-labelledby="service-included-title">
        <div className="influencer-page__frame influencer-included__grid">
          <h2 id="service-included-title">{config.includedHeading || <>What Is<br />Included?</>}</h2>
          <div className="influencer-included__copy">
            <p>{config.included.description}</p>
            <ul>
              {config.included.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <a className="influencer-page__button influencer-section-cta" href={contactHref}>
              {includedCtaLabel} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="influencer-process" aria-labelledby="service-process-title">
        <div className="influencer-page__frame">
          <h2 id="service-process-title">{config.process.title}</h2>
          <div className="influencer-process__list">
            {config.process.items.map((item, index) => (
              <article key={item.title} className={`influencer-process__item${index % 2 ? ' is-reversed' : ''}`}>
                {item.image ? (
                  <img src={item.image} alt={item.imageAlt || ''} loading="lazy" />
                ) : (
                  <div className="influencer-process__visual" role="img" aria-label={item.imageAlt || item.visualLabel}>
                    <span>{item.visualLabel}</span>
                  </div>
                )}
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="influencer-section-cta-row">
            <a className="influencer-page__button influencer-section-cta" href={processCtaHref}>
              {processCtaLabel} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {config.feature && (
        <section className="influencer-beyond" aria-labelledby="service-feature-title">
          <div className="influencer-page__frame influencer-beyond__grid">
            <div className="influencer-beyond__copy">
              <h2 id="service-feature-title">{config.feature.title}</h2>
              {config.feature.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
              {config.feature.statement && (
                <p className="influencer-beyond__statement">{config.feature.statement}</p>
              )}
              {config.feature.buttonLabel && (
                <a className="influencer-page__button" href={config.feature.buttonHref}>
                  {config.feature.buttonLabel}
                </a>
              )}
            </div>
            <img
              className="influencer-beyond__image"
              src={config.feature.image}
              alt={config.feature.imageAlt}
              loading="lazy"
            />
          </div>
        </section>
      )}

      <section className="influencer-faq internal-faq" aria-labelledby="service-faq-title">
        <div className="influencer-page__frame">
          <h2 className="internal-faq__title" id="service-faq-title">
            {config.faqHeading || 'Frequently Asked Questions'}
          </h2>
          <div className="influencer-faq__list internal-faq__list">
            {config.faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article key={item.question} className={`influencer-faq__item internal-faq__item${isOpen ? ' is-open' : ''}`}>
                  <h3>
                    <button
                      className="internal-faq__button"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="influencer-faq__icon internal-faq__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="influencer-faq__answer internal-faq__answer" hidden={!isOpen}>
                    <p>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-section influencer-contact">
        <div className="contact-section__inner">
          <h2 className="contact-section__title">{config.contact.title}</h2>
          <p className="contact-section__intro">{config.contact.intro}</p>

          <div className="contact-section__top">
            <div className="contact-map">
              <iframe
                title={locale === 'fr' ? 'Localisation de BOXCOM Africa' : 'BOXCOM Africa location'}
                src="https://maps.google.com/maps?q=33.58739,-7.636312&z=17&hl=fr&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="contact-form__row">
                <label>
                  <span>{form.name}</span>
                  <input type="text" name="name" placeholder={form.namePlaceholder} autoComplete="name" required />
                </label>
                <label>
                  <span>{form.company}</span>
                  <input type="text" name="company" placeholder={form.companyPlaceholder} autoComplete="organization" required />
                </label>
              </div>
              <label>
                <span>{form.email}</span>
                <input type="email" name="email" placeholder={form.emailPlaceholder} autoComplete="email" required />
              </label>
              <label>
                <span>{form.message}</span>
                <textarea placeholder={form.messagePlaceholder} rows="5" />
              </label>
              <button type="submit" className="primary-pink-button contact-form__submit">
                {config.contact.buttonLabel}
              </button>
            </form>
          </div>

          {footer}
        </div>
      </section>
    </main>
  );
}

export default ServiceDetailPage;
