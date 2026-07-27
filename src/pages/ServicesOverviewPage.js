import { useEffect, useState } from 'react';
import './ServicesOverviewPage.css';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const services = [
  {
    title: 'Media Relations',
    description:
      'For announcements, expert positioning, interviews, editorial opportunities and situations where the media narrative needs careful handling, including crisis management and consultancy.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-media-relations.jpg'),
    imageAlt: 'A collection of broadcast microphones ready for a press statement',
    href: '#/services/media-relations',
  },
  {
    title: 'Media Events',
    description:
      'For launches, press conferences, briefings, site visits and moments when journalists need access to people, places or proof.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-media-events.jpg'),
    imageAlt: 'Communications professionals meeting at a media event',
    href: '#/services/media-events',
  },
  {
    title: 'PR Content Creation',
    description:
      'For press releases, articles, speeches, reports, media kits and content that needs to work across languages or markets.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-content-creation.jpg'),
    imageAlt: 'A content creator preparing written communications material',
    href: '#/services/pr-content-creation',
  },
  {
    title: 'Media Monitoring',
    description:
      'For tracking coverage, competitors and emerging issues, with analysis that helps the team decide what to do next.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-media-monitoring.jpg'),
    imageAlt: 'A media analyst reviewing performance charts',
    href: '#/services/media-monitoring',
  },
  {
    title: 'Social PR',
    description:
      'For carrying press stories into social channels, following the response and managing the conversation around them.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-social-pr.jpg'),
    imageAlt: 'A social media professional managing an online conversation',
    href: '#/services/social-pr',
  },
  {
    title: 'Influencer Relations',
    description:
      'For creator partnerships where audience relevance, local context and a clear role in the wider campaign matter.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-influencer-relations.jpg'),
    imageAlt: 'A creator presenting live content to an online audience',
    href: '#/services/influencer-relations',
  },
];

const faqItems = [
  {
    question: 'Which service should I start with?',
    answer:
      'Start with the immediate communication need. BOXCOM Africa can then recommend whether one focused service is enough or whether related work should be connected.',
  },
  {
    question: 'Can BOXCOM Africa manage the full PR program?',
    answer:
      'Yes. As a PR agency in Morocco, BOXCOM Africa can coordinate media relations, content, events, monitoring, Social PR and creator work as one program when the brief requires it.',
  },
  {
    question: 'Can services be delivered across several markets?',
    answer:
      'Yes. BOXCOM Africa directs regional work from Casablanca and brings in established local partners across African markets when a story needs in-market press access, language adaptation or a sharper reading of local context. The narrative, quality standard and reporting stay with one team throughout, so a multi-market program reads as one story told well in each place, not several stories drifting apart.',
  },
  {
    question: 'How are results reviewed?',
    answer:
      'Reporting is shaped around the brief and may include share of voice, sentiment, quality of target coverage, narrative accuracy and recommended next steps.',
  },
];

function ServicesOverviewPage({ header, footer }) {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const previousTitle = document.title;
    const seoDescription =
      'Explore PR services in Morocco from BOXCOM Africa, including media relations, events, content creation, monitoring, Social PR and influencer relations.';
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = 'PR Services in Morocco for Africa | BOXCOM Africa';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoDescription);

    return () => {
      document.title = previousTitle;
      if (createdMetaDescription) {
        metaDescription.remove();
      } else {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <main className="app services-overview-page">
      {header}

      <section className="services-overview-hero" aria-labelledby="services-overview-title">
        <img
          src={asset('/assets/ServicesOverview_Approved_Images/services-overview-header.jpg')}
          alt="A spokesperson answering questions from the press"
          fetchPriority="high"
        />
        <div className="services-overview-hero__overlay" />
        <div className="services-overview-hero__content">
          <h1 id="services-overview-title">
            PR Services in<br />
            <span>Morocco</span> for Africa
          </h1>
        </div>
      </section>

      <section className="services-catalog" aria-labelledby="services-catalog-title">
        <div className="services-overview__frame">
          <header className="services-catalog__header">
            <h2 id="services-catalog-title">Where Should the<br />Work Begin?</h2>
            <p>
              Choose the service closest to the immediate need. The wider plan can grow from there if the story
              calls for it.
            </p>
          </header>

          <div className="services-catalog__list">
            {services.map((service) => (
              <article className="services-catalog__item" key={service.title}>
                <img src={service.image} alt={service.imageAlt} loading="lazy" />
                <div className="services-catalog__copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href={service.href}>Learn More</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-overview-faq internal-faq" aria-labelledby="services-overview-faq-title">
        <div className="services-overview__frame">
          <h2 className="internal-faq__title" id="services-overview-faq-title">Frequently Asked<br />Questions</h2>
          <div className="services-overview-faq__list internal-faq__list">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article className={`services-overview-faq__item internal-faq__item${isOpen ? ' is-open' : ''}`} key={item.question}>
                  <h3>
                    <button
                      className="internal-faq__button"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="services-overview-faq__icon internal-faq__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="services-overview-faq__answer internal-faq__answer" hidden={!isOpen}>
                    <p>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-section services-overview-contact">
        <div className="contact-section__inner">
          <h2 className="contact-section__title">Bring Us the Brief</h2>
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
                  <span>Your Name</span>
                  <input type="text" placeholder="Your Full Name" />
                </label>
                <label>
                  <span>Your Company</span>
                  <input type="text" placeholder="Your Company" />
                </label>
              </div>
              <label>
                <span>Your Email</span>
                <input type="email" placeholder="Your Email" />
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

export default ServicesOverviewPage;
