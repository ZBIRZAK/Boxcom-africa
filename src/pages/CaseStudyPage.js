import { useEffect } from 'react';
import './CaseStudyPage.css';

const challengePoints = [
  {
    title: 'Creating a High-Impact Brand Moment Around a Celebrity Appointment',
    text: 'A brand ambassador announcement generates impact only when it is properly orchestrated. Without a live media moment - a press event, direct journalist access and real interactions - the story risks being reduced to a press release that few outlets pick up.',
  },
  {
    title: 'Reaching Fashion, Entertainment, and Lifestyle Media Simultaneously',
    text: "A campaign built around a Turkish TV celebrity required a media targeting strategy that went beyond traditional news and business outlets. Women's magazines, entertainment platforms and lifestyle media had to be engaged as priority channels, each with their own editorial expectations.",
  },
  {
    title: 'Extending Beyond Traditional PR Into Social and Video Platforms',
    text: 'Modern celebrity marketing campaigns cannot live on editorial coverage alone. To generate genuine consumer buzz, the campaign had to produce video content and social media moments that audiences could engage with directly, not just read about.',
  },
];

const strategyPoints = [
  'Structured media briefings giving journalists direct interview access to Alp Navruz',
  "Fashion collection showcase linking the ambassador's personality to DeFacto's product offering",
  'Curated setting optimized for photography, video recording and social content creation',
  'Managed media schedule ensuring all invited outlets received quality access and exclusive angles',
];

function BriefContact({ footer }) {
  return (
    <section className="contact-section case-study-contact">
      <div className="contact-section__inner">
        <h2 className="contact-section__title">Talk Through the Brief</h2>
        <p className="contact-section__intro">
          Tell us the story, the market and the timing. A senior member of the team will help identify the questions
          worth answering first.
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
            <button type="submit" className="primary-pink-button contact-form__submit">Send Message</button>
          </form>
        </div>

        {footer}
      </div>
    </section>
  );
}

function CaseStudyPage({ header, footer }) {
  useEffect(() => {
    const previousTitle = document.title;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = 'DeFacto Celebrity Launch Case Study | BOXCOM Africa';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      'content',
      "See how BOXCOM Africa generated nationwide media buzz for DeFacto's Alp Navruz brand ambassador launch in Morocco."
    );

    return () => {
      document.title = previousTitle;
      if (createdMetaDescription) metaDescription.remove();
      else metaDescription.setAttribute('content', previousDescription);
    };
  }, []);

  return (
    <main className="app case-study-page">
      {header}

      <section className="case-study-summary" aria-labelledby="case-study-title">
        <div className="case-study-frame">
          <p className="case-study-summary__brand">DeFacto</p>
          <p className="case-study-summary__tags">
            Celebrity PR | Event Management | Fashion Brand Communications | Influencer Marketing
          </p>
          <h1 id="case-study-title">
            How BOXCOM Africa Generated Nationwide Media Buzz for DeFacto&apos;s Brand Ambassador Launch with Alp
            Navruz in Morocco
          </h1>
          <p className="case-study-summary__intro">
            DeFacto is an international fashion retail brand operating in more than 90 countries, combining
            accessible, trend-forward fashion with strong digital and influencer-driven marketing strategies.
          </p>

          <div className="case-study-metrics" aria-label="Campaign results">
            <div><strong>22</strong><span>Media Outlets<br />Covered</span></div>
            <div><strong>47K</strong><span>Views on Top<br />Facebook Video</span></div>
          </div>

          <div className="case-study-snapshot">
            <article className="case-study-snapshot__challenge">
              <span>The Challenge</span>
              <h2>Unpredictable campaigns. High costs. Low quality.</h2>
              <p>
                The launch needed to create a credible media moment around a celebrity appointment while reaching
                several editorial audiences and extending the story into social and video channels.
              </p>
            </article>
            <article className="case-study-snapshot__work">
              <span>What We Did</span>
              <h2>A scientific approach to performance marketing.</h2>
              <p>
                We designed an integrated press event, targeted outreach and content program that gave journalists
                direct access while creating strong material for digital audiences.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">The Challenge</p>
          <h2>Turning a Celebrity Appointment Into a Media Event</h2>
          <p>BOXCOM Africa identified three distinct communication challenges that shaped the event and media strategy:</p>
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
          <h2>Celebrity Event PR, Targeted Media, and Social Amplification</h2>
          <p>
            BOXCOM Africa designed a fully integrated celebrity PR and event strategy built on three interconnected
            pillars, each designed to maximize media coverage, audience reach and social media impact.
          </p>
          <div className="case-study-copy-point">
            <h3>Pillar 1 - Celebrity Press Conference in Casablanca</h3>
            <p>
              BOXCOM Africa organized and managed a dedicated press conference in Casablanca, bringing together
              journalists and representatives from Morocco&apos;s leading media outlets for direct, exclusive access to
              Alp Navruz and DeFacto&apos;s latest fashion collections. The event was designed to create the conditions
              for authentic, story-rich editorial coverage, not just re-publication of press materials.
            </p>
          </div>
          <p>Key elements of the press event included:</p>
          <ul>{strategyPoints.map((point) => <li key={point}>{point}</li>)}</ul>
          <p>
            The actor spoke openly about his connection with Morocco, his vision of contemporary fashion and the
            collaboration with DeFacto.
          </p>
        </article>
      </section>

      <section className="case-study-band case-study-band--pattern">
        <article className="case-study-panel case-study-panel--light">
          <p className="case-study-panel__eyebrow">The Results</p>
          <h2>National Coverage, Lifestyle Reach, and Viral Social Engagement</h2>
          <p>The campaign delivered strong results across all media channels:</p>
          <div className="case-study-copy-point">
            <h3>Editorial Coverage</h3>
            <ul>
              <li>22 Moroccan media outlets covered the event, spanning Tier-1 national platforms, regional media and specialized lifestyle publications.</li>
              <li>4 Tier-1 national media outlets ensured high-credibility, high-reach coverage among Morocco&apos;s broadest news audiences.</li>
              <li>7 women&apos;s lifestyle magazines delivered deep penetration into DeFacto&apos;s core consumer segment.</li>
              <li>16 total articles published in Arabic and French, achieving genuine bilingual national coverage.</li>
            </ul>
          </div>
          <div className="case-study-copy-point">
            <h3>Digital and Social Media Performance</h3>
            <ul>
              <li>Multiple video interviews and event highlights published across YouTube and Facebook.</li>
              <li>A single Facebook video generated more than 47,000 views, demonstrating exceptional public interest.</li>
              <li>Additional video content across platforms contributed thousands of extra views and social interactions.</li>
            </ul>
          </div>
        </article>
      </section>

      <BriefContact footer={footer} />
    </main>
  );
}

export default CaseStudyPage;
