import { useEffect, useState } from 'react';

const faqItems = [
  {
    question: 'Qui examine le brief ?',
    answer: 'Un membre senior de l’équipe examine le brief et identifie les questions, le service ou la démarche à suivre en priorité.',
  },
  {
    question: 'Que dois-je inclure pour une situation urgente ?',
    answer: 'Précisez ce qui s’est passé, où cela est paru, ce qui est inexact ou nuisible, qui est concerné et le degré d’urgence.',
  },
  {
    question: 'Que faire si je ne sais pas quel service me convient ?',
    answer: 'Envoyez le brief quand même. Décrire la situation en termes simples suffit ; l’équipe déterminera s’il s’agit de relations médias, de contenu, d’un événement, de veille, de RP sociale, de créateurs ou d’un accompagnement de crise, et vous expliquera pourquoi.',
  },
  {
    question: 'Que se passe-t-il après l’envoi du brief ?',
    answer: 'L’équipe examine la situation et revient avec la prochaine étape la plus pertinente. Si vous signalez l’urgence dès la première ligne, la demande est traitée en priorité.',
  },
];

function FrenchContactPage({ header, footer, portraitSrc }) {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = 'Contactez notre équipe RP au Maroc | BOXCOM Africa';
    document.documentElement.lang = 'fr';

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Contactez l’équipe RP de BOXCOM Africa au Maroc pour partager votre brief, votre marché, votre histoire ou une situation urgente.');

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
      if (createdMetaDescription) {
        metaDescription.remove();
      } else {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <main className="app app--contact-page app--contact-page-fr">
      {header}

      <section className="contact-page" aria-labelledby="french-contact-title">
        <div className="contact-page__inner">
          <div className="contact-page__header">
            <h1 className="contact-page__title" id="french-contact-title">Contactez-nous !</h1>
            <p className="contact-page__intro">
              Contactez notre <span className="contact-seo-highlight contact-seo-highlight--primary">équipe RP</span>{' '}
              pour nous parler de votre <span className="contact-seo-highlight contact-seo-highlight--secondary">brief</span>,
              de votre marché et de votre histoire.
            </p>
          </div>

          <div className="contact-page__layout">
            <div className="contact-page__art" aria-hidden="true">
              <img src={portraitSrc} alt="" />
            </div>

            <div className="contact-page__card">
              <form className="contact-page-form" onSubmit={(event) => event.preventDefault()}>
                <div className="contact-page-form__row">
                  <label>
                    <span>Votre nom *</span>
                    <input type="text" name="name" placeholder="Votre nom complet" autoComplete="name" required />
                  </label>
                  <label>
                    <span>Votre entreprise *</span>
                    <input type="text" name="company" placeholder="Votre entreprise" autoComplete="organization" required />
                  </label>
                </div>
                <label>
                  <span>Votre e-mail *</span>
                  <input type="email" name="email" placeholder="Votre e-mail" autoComplete="email" required />
                </label>
                <label>
                  <span>Message</span>
                  <textarea name="message" placeholder="Écrivez votre message ici." rows="5" />
                </label>
                <button type="submit" className="contact-page-form__button contact-page-form__button--primary">
                  Envoyer le message
                </button>
                <a href="#/fr/services" className="contact-page-form__button contact-page-form__button--secondary">
                  Voir nos services d’abord
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-page-faq internal-faq" aria-labelledby="french-contact-faq-title">
        <div className="contact-page-faq__inner">
          <h2 className="internal-faq__title" id="french-contact-faq-title">Questions fréquentes</h2>
          <div className="contact-page-faq__list internal-faq__list">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <article className={`contact-page-faq__item internal-faq__item${isOpen ? ' is-open' : ''}`} key={item.question}>
                  <h3>
                    <button className="internal-faq__button" type="button" aria-expanded={isOpen} onClick={() => setOpenFaq(isOpen ? -1 : index)}>
                      <span>{item.question}</span>
                      <span className="contact-page-faq__icon internal-faq__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div className="contact-page-faq__answer internal-faq__answer" hidden={!isOpen}>
                    <p>{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-section contact-page-brief">
        <div className="contact-section__inner">
          <h2 className="contact-section__title">Discuter du brief</h2>
          <p className="contact-section__intro">Racontez-nous l’histoire, le marché et le timing. Un membre senior de l’équipe vous aidera à identifier les questions à traiter en priorité.</p>

          <div className="contact-section__top">
            <div className="contact-map">
              <iframe title="Localisation de BOXCOM Africa" src="https://maps.google.com/maps?q=33.58739,-7.636312&z=17&hl=fr&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
              <div className="contact-form__row">
                <label><span>Votre nom *</span><input type="text" name="name" placeholder="Votre nom complet" autoComplete="name" required /></label>
                <label><span>Votre entreprise *</span><input type="text" name="company" placeholder="Votre entreprise" autoComplete="organization" required /></label>
              </div>
              <label><span>Votre e-mail *</span><input type="email" name="email" placeholder="Votre e-mail" autoComplete="email" required /></label>
              <label><span>Message</span><textarea name="message" placeholder="Écrivez votre message ici." rows="5" /></label>
              <button type="submit" className="primary-pink-button contact-form__submit">Envoyer le message</button>
            </form>
          </div>

          {footer}
        </div>
      </section>
    </main>
  );
}

export default FrenchContactPage;
