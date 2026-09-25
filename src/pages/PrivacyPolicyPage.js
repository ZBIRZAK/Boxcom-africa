import { useEffect } from 'react';
import './PrivacyPolicyPage.css';

const content = {
  en: {
    title: 'Boxcom Africa Privacy Policy',
    updated: 'Sep 25, 2026 · @Salwa',
    seoTitle: 'Privacy Policy | BOXCOM Africa',
    seoDescription: 'Learn how BOXCOM Africa collects, uses, shares and protects personal data, and how to exercise your privacy rights.',
    sections: [
      {
        title: 'Data controller',
        paragraphs: [
          <>Boxcom Africa, 3 Rue El Jihani, Quartier Racine, Casablanca, Morocco 20250, is the controller of the personal data described below. For any question or request about your data, write to <a href="mailto:contact@box-com.com">contact@box-com.com</a>.</>,
        ],
      },
      {
        title: 'Data we collect and why',
        items: [
          <><strong>Journalists and media contacts</strong> (name, professional email and phone, media outlet, specialization): to carry out press relations for our clients</>,
          <><strong>Guests and attendees of press events</strong> (name, professional contact details, organization): to organize and manage the events</>,
          <><strong>Clients and prospects</strong> (name, professional email, job title, company, phone): to manage our contractual and commercial relationships</>,
          <><strong>Website visitors</strong> (IP address, browser type, pages visited): to operate and improve our website</>,
          <><strong>Job applicants</strong> (name, email, CV): to handle recruitment</>,
        ],
        paragraphs: [
          'We process this data on the basis of your consent, the performance of a contract, our legal obligations, or our legitimate interest in professional communication.',
        ],
      },
      {
        title: 'Recipients and transfers',
        paragraphs: [
          'Your data is accessible only to Boxcom Africa staff who need it, and to our service providers (such as Odoo and Google Workspace) acting on our instructions. We do not sell personal data.',
        ],
      },
      {
        title: 'Retention',
        paragraphs: ['We keep personal data for as long as necessary for the purposes above and to meet our legal obligations.'],
      },
      {
        title: 'Your rights',
        paragraphs: [
          'You may request access to, correction of, or deletion of your personal data, object to its processing, and withdraw your consent at any time, by writing to the contact above.',
        ],
      },
      {
        title: 'Cookies',
        paragraphs: ['Our website may use cookies for analytics. You can manage them through your browser settings.'],
      },
    ],
  },
  fr: {
    title: 'Politique de confidentialité de Boxcom Africa',
    updated: 'Sep 25, 2026 · @Salwa',
    seoTitle: 'Politique de confidentialité | BOXCOM Africa',
    seoDescription: 'Découvrez comment BOXCOM Africa collecte, utilise, partage et protège les données personnelles, ainsi que les modalités d’exercice de vos droits.',
    sections: [
      {
        title: 'Responsable du traitement',
        paragraphs: [
          <>Boxcom Africa, 3 Rue El Jihani, Quartier Racine, Casablanca, Maroc 20250, est responsable des données personnelles décrites ci-dessous. Pour toute question ou demande concernant vos données, écrivez à <a href="mailto:contact@box-com.com">contact@box-com.com</a>.</>,
        ],
      },
      {
        title: 'Données collectées et finalités',
        items: [
          <><strong>Journalistes et contacts médias</strong> (nom, e-mail et téléphone professionnels, média, spécialité) : pour mener les relations presse de nos clients</>,
          <><strong>Invités et participants aux événements presse</strong> (nom, coordonnées professionnelles, organisation) : pour organiser et gérer les événements</>,
          <><strong>Clients et prospects</strong> (nom, e-mail professionnel, fonction, entreprise, téléphone) : pour gérer nos relations contractuelles et commerciales</>,
          <><strong>Visiteurs du site web</strong> (adresse IP, type de navigateur, pages consultées) : pour faire fonctionner et améliorer notre site</>,
          <><strong>Candidats</strong> (nom, e-mail, CV) : pour traiter les candidatures</>,
        ],
        paragraphs: [
          "Nous traitons ces données sur la base de votre consentement, de l'exécution d'un contrat, de nos obligations légales ou de notre intérêt légitime à assurer une communication professionnelle.",
        ],
      },
      {
        title: 'Destinataires',
        paragraphs: [
          "Vos données ne sont accessibles qu'aux membres de l'équipe Boxcom Africa qui en ont besoin, et à nos prestataires (tels qu'Odoo et Google Workspace) agissant selon nos instructions. Nous ne vendons pas de données personnelles.",
        ],
      },
      {
        title: 'Conservation',
        paragraphs: ['Nous conservons les données personnelles aussi longtemps que nécessaire pour les finalités ci-dessus et pour respecter nos obligations légales.'],
      },
      {
        title: 'Vos droits',
        paragraphs: [
          "Vous pouvez demander l'accès à vos données personnelles, leur rectification ou leur suppression, vous opposer à leur traitement et retirer votre consentement à tout moment, en écrivant au contact indiqué ci-dessus.",
        ],
      },
      {
        title: 'Cookies',
        paragraphs: ['Notre site peut utiliser des cookies à des fins statistiques. Vous pouvez les gérer dans les paramètres de votre navigateur.'],
      },
    ],
  },
};

function PrivacyPolicyPage({ locale = 'en', header, footer }) {
  const page = content[locale] || content.en;

  useEffect(() => {
    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';

    document.title = page.seoTitle;
    document.documentElement.lang = locale;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', page.seoDescription);

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
      if (createdMetaDescription) metaDescription.remove();
      else metaDescription.setAttribute('content', previousDescription);
    };
  }, [locale, page.seoDescription, page.seoTitle]);

  return (
    <main className="app privacy-page">
      {header}

      <section className="privacy-page__content" aria-labelledby="privacy-title">
        <div className="privacy-page__frame">
          <header className="privacy-page__header">
            <h1 id="privacy-title">{page.title}</h1>
            <p>{page.updated}</p>
          </header>

          <div className="privacy-page__sections">
            {page.sections.map((section, index) => (
              <section className="privacy-page__section" key={section.title}>
                <h2><span>{index + 1}.</span> {section.title}</h2>
                {section.items && (
                  <ul>
                    {section.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                  </ul>
                )}
                {section.paragraphs?.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section privacy-page__footer">
        <div className="contact-section__inner">{footer}</div>
      </section>
    </main>
  );
}

export default PrivacyPolicyPage;
