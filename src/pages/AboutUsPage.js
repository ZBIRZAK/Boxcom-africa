import { useEffect, useState } from 'react';
import './AboutUsPage.css';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const values = [
  {
    title: 'Clarity',
    description:
      'We believe the best stories are simple without becoming shallow. We look for the truthful explanation that helps journalists, audiences and clients understand what matters.',
  },
  {
    title: 'Credibility',
    description:
      'Media relationships are built over time. We respect the role of journalists and editors by bringing them angles, information and access that are useful, not just convenient for the client.',
  },
  {
    title: 'Context',
    description:
      'Morocco and Africa are not one audience. Language, timing, references and media expectations change by market, so context is part of the work, not a final translation layer.',
  },
  {
    title: 'Accountability',
    description:
      'We prefer clear responsibility. One team should understand the strategy, the response, the outreach, the monitoring and the next move, so the client does not carry the coordination cost.',
  },
];

const faqItems = [
  {
    question: 'What is BOXCOM Africa?',
    answer:
      'BOXCOM Africa is a Press Relations agency in Morocco and the PR arm of BOXCOM, based in Casablanca and focused on media relations, crisis management and consultancy, PR content, media monitoring, Social PR and influencer relations across Africa.',
  },
  {
    question: 'How is BOXCOM Africa connected to BOXCOM?',
    answer:
      "BOXCOM Africa comes from BOXCOM's wider communication culture. It has a dedicated Press Relations focus and team while retaining the broader brand, content, digital and media understanding behind the group.",
  },
  {
    question: 'What does BOXCOM Africa value?',
    answer:
      'Clarity, credibility, context and accountability guide how the team develops stories, works with media and takes responsibility for delivery.',
  },
  {
    question: 'Why does BOXCOM Africa work with in-market partners?',
    answer:
      'Local partners help each story land in the right language, tone and cultural frame. They add market judgment without separating the work from one central narrative and accountable team.',
  },
];

function AboutUsPage({ header, footer }) {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const previousTitle = document.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = 'About BOXCOM Africa | Press Relations Agency in Morocco';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      'Meet BOXCOM Africa, a senior-led Press Relations agency in Morocco combining regional reach, local context, media judgment and accountable delivery.'
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

  return (
    <main className="app about-page">
      {header}

      <section className="about-intro" aria-labelledby="about-title">
        <div className="about-page__frame about-intro__inner">
          <h1 id="about-title">Who We Are</h1>

          <div className="about-intro__copy">
            <article>
              <h2>A Press Relations Agency in Morocco with a Regional View</h2>
              <p>
                BOXCOM Africa is based in Casablanca, Morocco, with a view toward the markets where our clients
                need to be understood. As a PR agency in Casablanca with African reach, we know that a story can
                lose force when it is translated without context or sent to a market without local judgment.
              </p>
            </article>

            <article>
              <h2>Senior-Led by Design</h2>
              <p>
                Senior practitioners stay involved in the account because advice, media judgment and delivery
                should not be separated. The person shaping the recommendation should understand how the story
                will be received once it reaches journalists, editors, partners and audiences.
              </p>
            </article>
          </div>

          <div className="about-intro__local-region">
            <img
              className="about-intro__globe"
              src={asset('/assets/AboutUs_Approved_Images/who-we-are-globe.png')}
              alt="Connected communication routes extending from Morocco across Africa"
              fetchPriority="high"
            />
            <article className="about-intro__local-copy">
              <h2>Connected to Local Partners</h2>
              <p>
                When work crosses borders, we work with capable partners in their own markets. That helps a story
                land in the right language, tone and cultural frame, instead of being pushed from Casablanca as
                one message for every place.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-origin" aria-labelledby="about-origin-title">
        <div className="about-page__frame">
          <h2 id="about-origin-title">Where We Come From</h2>
          <article className="about-origin__card">
            <h3>Born from BOXCOM's Communication Culture</h3>
            <p>
              BOXCOM Africa did not start as a detached PR label. It comes from BOXCOM's wider communication
              background, where brand, content, digital and media work sit close to business questions. That origin
              still shapes how we think: every story needs a reason, a context and a clear role in the client's
              wider direction.
            </p>
            <p>
              Our focus today is sharper: PR, Press Relations and reputation-led work. The agency gives that
              discipline its own team, while keeping the broader communication instinct that helps us understand
              what a brief is really trying to achieve.
            </p>
            <p className="about-origin__quote">
              “We come from communication work, but we are built for Press Relations: close to the client, close to
              the media and close to the context around the story.”
            </p>
          </article>
        </div>
      </section>

      <section className="about-entities" aria-labelledby="about-entities-title">
        <div className="about-page__frame">
          <h2 id="about-entities-title">Two Entities One Mission</h2>
          <div className="about-entities__scene">
            <img
              src={asset('/assets/AboutUs_Approved_Images/two-entities-one-mission.png')}
              alt="BOXCOM digital expertise and BOXCOM Africa press relations expertise working toward one mission"
              loading="lazy"
            />

            <article className="about-entities__card about-entities__card--digital">
              <h3>The Digital Expert</h3>
              <p>We build brands through strategy, content, digital experiences, and performance-driven marketing.</p>
              <h4>Core Expertise:</h4>
              <ul>
                <li>Digital Strategy</li>
                <li>Web Development</li>
                <li>Content &amp; Video Production</li>
                <li>Social Media Campaigns</li>
                <li>Lead Generation</li>
              </ul>
            </article>

            <article className="about-entities__card about-entities__card--pr">
              <h3>The PR Powerhouse</h3>
              <p>Nous façonnons les récits, construisons la visibilité et renforçons la réputation au Maroc et en Afrique.</p>
              <h4>Expertises clés :</h4>
              <ul>
                <li>Relations médias &amp; presse</li>
                <li>Communication Corporate</li>
                <li>Gestion de la réputation &amp; des crises</li>
                <li>Leadership d'opinion</li>
                <li>Campagnes RP stratégiques</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="about-values" aria-labelledby="about-values-title">
        <div className="about-page__frame">
          <h2 id="about-values-title">Our Values</h2>
          <div className="about-values__list">
            {values.map((value) => (
              <article key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-faq internal-faq" aria-labelledby="about-faq-title">
        <div className="about-page__frame">
          <h2 className="internal-faq__title" id="about-faq-title">Frequently Asked<br />Questions</h2>
          <div className="about-faq__list internal-faq__list">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article className={`about-faq__item internal-faq__item${isOpen ? ' is-open' : ''}`} key={item.question}>
                  <h3>
                    <button
                      className="internal-faq__button"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="about-faq__icon internal-faq__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="about-faq__answer internal-faq__answer" hidden={!isOpen}>
                    <p>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-section about-contact">
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

export default AboutUsPage;
