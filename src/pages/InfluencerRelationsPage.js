import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const influencerRelationsConfig = {
  locale: 'fr',
  pageClassName: 'influencer-relations-page',
  includedCtaLabel: 'Discuter des relations influenceurs',
  processCtaLabel: 'Trouver les bons créateurs',
  includedHeading: <>Ce qui est<br />inclus</>,
  faqHeading: 'Questions fréquentes',
  seoTitle: 'Agence de relations influenceurs au Maroc | BOXCOM Africa',
  seoDescription:
    'BOXCOM Africa est une agence de relations influenceurs au Maroc qui construit des partenariats crédibles selon l’audience, le contexte local et les objectifs.',
  hero: {
    title: 'Relations influenceurs',
    image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-header.jpg'),
    imageAlt: 'Créatrice utilisant un smartphone',
    capabilitiesLabel: 'Expertises en relations influenceurs',
    intro: (
      <p>
        En tant qu&apos;<span className="seo-highlight seo-highlight--primary">agence de relations influenceurs au Maroc</span>,
        BOXCOM Africa aide les marques à trouver des <span className="seo-highlight seo-highlight--secondary">créateurs</span>{' '}
        dont l&apos;<span className="seo-highlight seo-highlight--secondary">audience</span>, la voix et le{' '}
        <span className="seo-highlight seo-highlight--secondary">contexte</span> rendent l&apos;histoire crédible, pas seulement visible.
      </p>
    ),
    tags: ['Revue de réputation', 'Briefing et coordination', 'Revue de livraison'],
  },
  included: {
    description: (
      <>
        Les relations influenceurs peuvent inclure la définition du{' '}
        <span className="seo-highlight seo-highlight--secondary">rôle du créateur</span>, le repérage de{' '}
        <span className="seo-highlight seo-highlight--secondary">profils locaux</span>, la présélection, la prospection,
        le briefing, la coordination de contenu, la revue de livraison et le reporting.
      </>
    ),
    bullets: [
      'Rôle du créateur et repérage de profils locaux',
      'Adéquation au marché et revue de réputation',
      'Briefing, prospection et coordination',
      'Revue de livraison basée sur les objectifs',
    ],
  },
  process: {
    title: 'Du rôle du créateur au contenu crédible',
    items: [
      {
        title: 'Définir le rôle',
        description: (
          <>
            Nous déterminons quels créateurs peuvent aider à expliquer, démontrer ou enrichir le récit global, en
            fonction des cas où leur voix renforce véritablement le message plutôt que d&apos;en étendre simplement la
            portée. Pour <a className="service-inline-link" href="#/projects/modanisa"><strong><em>Modanisa</em></strong></a>,
            la voix de Halima Aden comptait : elle a généré{' '}
            <a className="service-inline-link" href="#/projects/modanisa"><strong><em>156 mentions de son nom</em></strong></a>,
            à égalité avec la marque elle-même, car cette crédibilité avait un réel impact.
          </>
        ),
        image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-define-role.jpg'),
      },
      {
        title: 'Trouver la bonne adéquation',
        description: (
          <>
            Nous évaluons l&apos;audience, le profil, les motivations, la pertinence du contenu et le contexte du marché
            avant toute prise de contact, afin que chaque audience ciblée corresponde à un choix pertinent plutôt qu&apos;à
            une simple opportunité. Pour <a className="service-inline-link" href="#/projects/samsung"><strong>Samsung</strong></a>,
            cela s&apos;est traduit par la sélection de journalistes et d&apos;influenceurs disposant d&apos;audiences fortes dans
            la tech et le lifestyle, contribuant à générer{' '}
            <a className="service-inline-link" href="#/projects/samsung"><strong>149 placements Tier 1 sur 246 articles</strong></a>.
            Cela protège la crédibilité de la marque et garantit que la campagne trouve un véritable écho auprès de
            l&apos;audience qu&apos;elle vise.
          </>
        ),
        image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-right-fit.jpg'),
      },
      {
        title: 'Briefer et assurer le suivi',
        description: (
          <>
            Nous gérons le brief, le timing et la livraison de bout en bout, en maintenant le créateur aligné avec le
            récit sans perdre sa voix authentique. Pour{' '}
            <a className="service-inline-link" href="#/projects/defacto"><strong><em>DeFacto</em></strong></a>, cela
            s&apos;est traduit par l&apos;organisation d&apos;une{' '}
            <a className="service-inline-link" href="#/projects/defacto"><strong><em>conférence de presse avec Alp Navruz</em></strong></a>,
            générant une <a className="service-inline-link" href="#/projects/defacto"><strong><em>couverture dans 22 médias marocains</em></strong></a>.
            Une fois le contenu publié, nous évaluons la manière dont il remplit son rôle, avec notamment plus de{' '}
            <a className="service-inline-link" href="#/projects/defacto"><strong><em>47 000 vues sur une seule vidéo Facebook</em></strong></a>,
            et les enseignements à en tirer pour la prochaine collaboration.
          </>
        ),
        image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-follow-through.jpg'),
      },
    ],
  },
  feature: {
    title: 'Au-delà du fil d’actualité',
    paragraphs: [
      "L'histoire d'un créateur trouve souvent son moment le plus fort dans une salle, pas seulement sur un fil d'actualité, là où une audience peut la voir se dérouler en temps réel.",
      "Les relations influenceurs construisent la voix et l'audience : nous identifions les bons créateurs et façonnons la manière dont ils interagissent avec la marque.",
      <>Les <a className="service-inline-link" href="#/fr/services/media-events"><strong>événements médias</strong></a> donnent ensuite une scène à cette voix, qu&apos;il s&apos;agisse d&apos;un lancement, d&apos;un briefing ou d&apos;une expérience conçue pour la couverture médiatique, prolongeant la portée d&apos;un événement bien au-delà des personnes présentes.</>,
    ],
    statement: 'Une voix de confiance dans la salle est ce qui transforme la présence en une histoire qui mérite d’être partagée.',
    buttonLabel: 'Découvrir les événements médias',
    buttonHref: '#/fr/services/media-events',
    image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-beyond-feed.png'),
    imageAlt: 'Créatrice échangeant avec une participante lors d’un événement média',
  },
  faqItems: [
    {
      question: 'Comment les créateurs sont-ils sélectionnés ?',
      answer:
        'La sélection pour les relations influenceurs au Maroc commence par le rôle que le créateur doit jouer, puis prend en compte l’adéquation avec l’audience, le style de contenu, la réputation, la langue et le contexte local.',
    },
    {
      question: 'Comment les relations influenceurs s’intègrent-elles au programme RP global ?',
      answer:
        'Le brief du créateur s’appuie sur la même histoire que la presse et les activités sociales, tout en laissant de la place à la voix et au format propres du créateur.',
    },
    {
      question: 'Les créateurs peuvent-ils soutenir les événements médias ?',
      answer:
        'Oui. Les créateurs peuvent apporter un accès utile à l’audience ou une perspective locale aux lancements, visites et expériences lorsque leur rôle est clair.',
    },
    {
      question: 'Comment les résultats des créateurs sont-ils évalués ?',
      answer:
        'L’évaluation porte sur les livrables convenus, la réaction de l’audience, la qualité du message et la mesure dans laquelle le créateur a rempli le rôle prévu.',
    },
  ],
  contact: {
    title: 'Discuter du brief',
    intro: 'Racontez-nous l’histoire, le marché et le timing. Un membre senior de l’équipe vous aidera à identifier les questions à traiter en priorité.',
    buttonLabel: 'Discuter des relations influenceurs',
  },
  form: {
    name: 'Votre nom *',
    namePlaceholder: 'Votre nom complet',
    company: 'Votre entreprise *',
    companyPlaceholder: 'Votre entreprise',
    email: 'Votre e-mail *',
    emailPlaceholder: 'Votre e-mail',
    message: 'Message',
    messagePlaceholder: 'Écrivez votre message ici.',
  },
};

function InfluencerRelationsPage({ locale = 'fr', ...props }) {
  const mediaEventsHref = locale === 'fr' ? '#/fr/services/media-events' : '#/services/media-events';
  const localizedConfig = {
    ...influencerRelationsConfig,
    locale,
    feature: {
      ...influencerRelationsConfig.feature,
      paragraphs: [
        ...influencerRelationsConfig.feature.paragraphs.slice(0, 2),
        <>
          Les <a className="service-inline-link" href={mediaEventsHref}><strong>événements médias</strong></a> donnent
          ensuite une scène à cette voix, qu&apos;il s&apos;agisse d&apos;un lancement, d&apos;un briefing ou d&apos;une
          expérience conçue pour la couverture médiatique, prolongeant la portée d&apos;un événement bien au-delà des
          personnes présentes.
        </>,
      ],
      buttonHref: mediaEventsHref,
    },
  };

  return <ServiceDetailPage {...props} config={localizedConfig} />;
}

export default InfluencerRelationsPage;
