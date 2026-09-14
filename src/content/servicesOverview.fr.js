const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

export const frenchServices = [
  {
    title: 'Relations médias',
    highlightType: 'secondary',
    description: "Pour les annonces, le positionnement d'experts, les interviews, les opportunités éditoriales et les situations où le discours médiatique doit être géré avec soin, y compris la gestion de crise et le conseil.",
    image: asset('/assets/ServicesOverview_Approved_Images/services-media-relations.jpg'),
    imageAlt: 'Des microphones prêts pour une prise de parole médiatique',
    href: '#/fr/services/media-relations',
  },
  {
    title: 'Événements médias',
    description: "Pour les lancements, conférences de presse, briefings, visites de site et moments où les journalistes ont besoin d'accéder à des personnes, des lieux ou des preuves.",
    image: asset('/assets/ServicesOverview_Approved_Images/services-media-events.jpg'),
    imageAlt: 'Des professionnels réunis lors d’un événement média',
    href: '#/fr/services/media-events',
  },
  {
    title: 'Création de contenu RP',
    description: "Pour les communiqués de presse, articles, discours, rapports, dossiers de presse et contenus devant s'adapter à plusieurs langues ou marchés.",
    image: asset('/assets/ServicesOverview_Approved_Images/services-content-creation.jpg'),
    imageAlt: 'Création de contenus destinés aux médias',
    href: '#/fr/services/pr-content-creation',
  },
  {
    title: 'Veille médiatique',
    description: "Pour le suivi de la couverture, de la concurrence et des enjeux émergents, avec une analyse qui aide l'équipe à décider des prochaines étapes.",
    image: asset('/assets/ServicesOverview_Approved_Images/services-media-monitoring.jpg'),
    imageAlt: 'Analyse de la couverture médiatique',
    href: '#/fr/services/media-monitoring',
  },
  {
    title: 'RP sociale',
    highlightType: 'secondary',
    description: 'Pour porter les récits de presse vers les réseaux sociaux, suivre les réactions et gérer la conversation autour d’eux.',
    image: asset('/assets/ServicesOverview_Approved_Images/services-social-pr.jpg'),
    imageAlt: 'Gestion d’une conversation sur les réseaux sociaux',
    href: '#/fr/services/social-pr',
  },
  {
    title: 'Relations influenceurs',
    highlightType: 'secondary',
    description: "Pour les partenariats avec des créateurs où la pertinence de l'audience, le contexte local et un rôle clair dans la campagne globale comptent.",
    image: asset('/assets/ServicesOverview_Approved_Images/services-influencer-relations.jpg'),
    imageAlt: 'Une créatrice présentant du contenu à son audience',
    href: '#/fr/services/influencer-relations',
  },
];

export const frenchServicesContent = {
  locale: 'fr',
  hero: {
    firstLine: 'Services RP au',
    highlight: 'Maroc,',
    suffix: "tournés vers l'Afrique",
    introduction: "Chaque brief a sa propre forme. Parfois, la réponse est une action média ciblée ; parfois, c'est un programme de services RP au Maroc qui relie contenu, événements, veille, réseaux sociaux et créateurs à travers les marchés africains. Nous construisons autour de l'histoire plutôt que d'imposer un format figé.",
    highlights: [{ phrase: 'services RP au Maroc', type: 'primary' }],
    image: asset('/assets/ServicesOverview_Approved_Images/services-overview-header.jpg'),
    imageAlt: 'Une porte-parole répondant aux questions de la presse',
  },
  catalog: {
    heading: 'Par où commencer ?',
    introduction: "Choisissez le service le plus proche du besoin immédiat. Le plan élargi pourra se développer à partir de là si l'histoire le demande.",
    linkLabel: 'En savoir plus',
  },
  showWork: false,
  faqHeading: 'Questions fréquentes',
  faqs: [
    {
      question: 'Par quel service commencer ?',
      answer: "Commencez par le besoin de communication immédiat. BOXCOM Africa pourra ensuite recommander si un service ciblé suffit ou si des actions complémentaires doivent être associées.",
    },
    {
      question: "BOXCOM Africa peut-elle gérer l'ensemble du programme RP ?",
      answer: "Oui. En tant qu'agence RP au Maroc, BOXCOM Africa peut coordonner relations médias, contenu, événements, veille, RP sociale et travail avec les créateurs au sein d'un même programme lorsque le brief l'exige.",
      highlights: [
        { phrase: 'agence RP au Maroc', type: 'primary' },
        { phrase: 'relations médias', type: 'secondary' },
        { phrase: 'RP sociale', type: 'secondary' },
      ],
    },
    {
      question: 'Les services peuvent-ils être déployés sur plusieurs marchés ?',
      answer: "Oui. BOXCOM Africa pilote le travail régional depuis Casablanca et fait appel à des partenaires locaux établis à travers les marchés africains lorsqu'une histoire nécessite un accès presse local, une adaptation linguistique ou une lecture plus fine du contexte local. Le récit, le niveau de qualité et le reporting restent gérés par une seule équipe tout au long du processus, si bien qu'un programme multi-marché se lit comme une seule histoire bien racontée dans chaque marché, et non comme plusieurs récits qui divergent.",
    },
    {
      question: 'Comment les résultats sont-ils évalués ?',
      answer: 'Le reporting est construit autour du brief et peut inclure la part de voix, le sentiment, la qualité de la couverture ciblée, la justesse du récit et les prochaines étapes recommandées.',
    },
  ],
  contact: {
    heading: 'Discuter du brief',
    introduction: "Racontez-nous l'histoire, le marché et le timing. Un membre senior de l'équipe vous aidera à identifier les questions à traiter en priorité.",
    buttonLabel: 'Envoyer le message',
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
  seo: {
    title: "Services RP au Maroc pour l'Afrique | BOXCOM Africa",
    description: "Découvrez les services RP au Maroc de BOXCOM Africa : relations médias, événements, création de contenu, veille médiatique, RP sociale et relations influenceurs.",
  },
};
