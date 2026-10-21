import { useEffect } from 'react';
import './CaseStudyPage.css';

const challengePoints = [
  {
    title: 'Creating a High-Impact Brand Moment Around a Celebrity Appointment',
    text: 'A brand ambassador announcement generates impact only when it is properly orchestrated. Without a live media moment — a press event, direct journalist access, real interactions — the story risks being reduced to a press release that few outlets pick up.',
  },
  {
    title: 'Reaching Fashion, Entertainment, and Lifestyle Media Simultaneously',
    text: "A campaign built around a Turkish TV celebrity required a media targeting strategy that went beyond traditional news and business outlets. Women's magazines, entertainment platforms, and lifestyle media had to be engaged as priority channels — each with their own editorial expectations.",
  },
  {
    title: 'Extending Beyond Traditional PR Into Social and Video Platforms',
    text: 'Modern celebrity marketing campaigns cannot live on editorial coverage alone. To generate genuine consumer buzz, the campaign had to produce video content and social media moments that audiences could engage with directly — not just read about.',
  },
];

export function BriefContact({ footer, locale = 'en' }) {
  const isFrench = locale === 'fr';
  return (
    <section className="contact-section case-study-contact">
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
            <button type="submit" className="primary-pink-button contact-form__submit">{isFrench ? 'Envoyer le message' : 'Send Message'}</button>
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
              <h2>Turning a Celebrity Appointment Into a Media Event</h2>
              <p>
                DeFacto needed more than a press release to launch its celebrity ambassador. The announcement required
                live media access, targeted outreach to fashion and entertainment outlets beyond traditional news, and
                Social PR, without which the campaign would generate coverage but no real buzz.
              </p>
            </article>
            <article className="case-study-snapshot__work">
              <span>What We Did</span>
              <h2>Celebrity Event PR, Targeted Media, and Social Amplification</h2>
              <p>
                BOXCOM Africa built a fully integrated PR and event strategy around three pillars, starting with a
                Casablanca press conference. Journalists received exclusive access to Alp Navruz and DeFacto&apos;s
                collections, structured briefings, and a curated setup designed for photography, video, and social content.
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
            pillars — each designed to maximize media coverage, audience reach, and social media impact.
          </p>
          <div className="case-study-copy-point">
            <p>
              A dedicated Casablanca press conference gave journalists exclusive access to Alp Navruz and
              DeFacto&apos;s latest collections, generating authentic, story-rich editorial content.
            </p>
          </div>
          <div className="case-study-copy-point">
            <h3>Precision Media Strategy</h3>
            <p>A precision media strategy then targeted the full spectrum of relevant outlets — national news, women&apos;s lifestyle magazines, entertainment media, and digital portals — securing coverage in LeSiteInfo, Femmes du Maroc, Lalla Fatema, AnfasPress, and Al9anat.</p>
          </div>
          <div className="case-study-copy-point">
            <p>Attending media were equipped to produce video interviews and behind-the-scenes content for social platforms, extending the campaign into:</p>
            <ul>
              <li>Exclusive press access generating quotable, authentic editorial coverage.</li>
              <li>Multi-sector media targeting spanning news, lifestyle, and entertainment outlets.</li>
              <li>Video and social amplification sustaining engagement well beyond the event itself.</li>
            </ul>
          </div>
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
              <li>22 Moroccan media outlets covered the event — spanning Tier-1 national platforms, regional media, and specialized lifestyle publications.</li>
              <li>4 Tier-1 national media outlets ensured high-credibility, high-reach coverage among Morocco&apos;s broadest news audiences.</li>
              <li>7 women&apos;s lifestyle magazines delivered deep penetration into DeFacto&apos;s core consumer segment.</li>
              <li>16 total articles published in Arabic (12) and French (4) — achieving genuine bilingual national coverage.</li>
            </ul>
          </div>
          <div className="case-study-copy-point">
            <h3>Digital and Social Media Performance</h3>
            <ul>
              <li>Multiple video interviews and event highlights published across YouTube and Facebook.</li>
              <li>A single Facebook video published by a Moroccan media outlet generated over 47,000 views — demonstrating exceptional public interest in the campaign.</li>
              <li>Additional video content published across platforms contributed thousands of additional views and social interactions.</li>
            </ul>
          </div>
        </article>
      </section>

      <BriefContact footer={footer} />
    </main>
  );
}

export default CaseStudyPage;
