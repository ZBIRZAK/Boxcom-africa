const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

export const frenchHomeContent = {
  hero: {
    frist_title_line: 'Agence RP au',
    highlighted_title: 'Maroc',
    thrid_line_prefix: 'tournée vers',
    thrid_line_emphasis: 'l’Afrique',
    description: 'BOXCOM Africa est une agence de relations presse basée à Casablanca, au Maroc, conçue pour les marques qui visent plus loin que la simple diffusion.',
  },
  insight_heading: 'Réflexion business, relations médias et contexte local',
  insight_content: '<p>Une bonne histoire de presse commence toujours par un objectif business clair.</p><p>Nous la transformons en angle média pertinent, appuyé par le bon timing, les bons supports et des <span class="home-seo-highlight home-seo-highlight--secondary">relations solides avec les journalistes</span>, pour maximiser son impact. Grâce à notre expertise en gestion de crise et en conseil, nous aidons à façonner, protéger et clarifier les discours lorsque cela compte le plus.</p><p>En tant qu’<span class="home-seo-highlight home-seo-highlight--primary">agence RP à Casablanca</span>, nous collaborons également avec des partenaires de confiance à travers l’<span class="home-seo-highlight home-seo-highlight--secondary">Afrique</span> pour veiller à ce que chaque histoire soit adaptée à la langue, à la culture et au paysage médiatique de chaque marché.</p>',
  insight_button_label: 'Démarrer un projet',
  insight_button_link: '#/fr/contact',
  services_heading: 'Un programme RP, des services qui se complètent',
  services_introduction: '<p>Les clients n’ont pas besoin de plusieurs agences qui tirent le message dans des directions différentes. BOXCOM Africa réunit stratégie, média, contenu, veille, réseaux sociaux et créateurs sous une seule équipe responsable, pour que chaque action serve le même récit.</p><p>Des experts seniors restent proches du compte, pour que stratégie et exécution ne se séparent jamais.</p>',
  clients_heading: 'Nos clients',
  projects_heading: 'Projets phares',
  projects_button_label: 'Voir plus',
  projects_button_link: '#/projects',
  coverage_heading: 'Notre couverture médiatique',
  coverage_description: 'La bonne histoire ne se propage pas parce qu’elle est envoyée au plus grand nombre. Elle se propage parce que l’angle est pertinent, le timing est juste, et le journaliste qui la reçoit y voit un intérêt.',
  testimonials_heading: 'La parole à nos clients',
  testimonials_introduction: 'Des témoignages clients validés seront ajoutés ici pour illustrer la qualité de la couverture, la rapidité d’accompagnement et notre compréhension des marchés locaux.',
  reviews_message: 'Constamment saluée pour sa stratégie, sa présence et ses résultats',
  reviews_button_label: 'Voir nos avis Google',
  reviews_url: '#/reviews',
  faq_heading: 'Questions fréquentes',
  contact_heading: 'Discuter du brief',
  contact_introduction: 'Racontez-nous l’histoire, le marché et le timing. Un membre senior de l’équipe vous aidera à identifier les questions à traiter en priorité.',
  contact_map_url: 'https://maps.google.com/maps?q=33.58739,-7.636312&z=17&hl=fr&output=embed',
  seo: {
    title: 'Agence RP au Maroc tournée vers l’Afrique | BOXCOM Africa',
    description: 'BOXCOM Africa est une agence RP au Maroc basée à Casablanca, spécialisée en relations presse, relations médias et accompagnement sur les marchés africains.',
  },
};

export const frenchHomeServices = [
  {
    label: 'Relations médias',
    title: 'Relations médias',
    description: 'Nous identifions l’angle le plus fort, le proposons aux journalistes et rédacteurs concernés, et faisons vivre l’histoire à travers les relances, les interviews et les opportunités éditoriales. La gestion de crise et le conseil font partie intégrante de ce travail.',
    image: asset('/assets/Services_Approved%20Images/Media%20Relations%20Image.webp'),
    href: '#/fr/services/media-relations',
  },
  {
    label: 'Événements médias',
    title: 'Événements médias',
    description: 'Nous transformons lancements, briefings et annonces en moments presse qui donnent aux journalistes matière à voir, questionner et rapporter.',
    image: asset('/assets/Services_Approved%20Images/Media%20Events%20Image.webp'),
    href: '#/fr/services/media-events',
  },
  {
    label: 'Création de contenu RP',
    title: 'Création de contenu RP',
    description: 'Nous rédigeons des communiqués, articles, discours, déclarations et supports médias clairs, utilisables et adaptés au marché.',
    image: asset('/assets/Services_Approved%20Images/PR%20Content%20Creation%20Image.webp'),
    href: '#/fr/services/pr-content-creation',
  },
  {
    label: 'Veille médiatique',
    title: 'Veille médiatique',
    description: 'Nous suivons la couverture médiatique, le sentiment et les enjeux émergents, puis aidons le client à décider quand répondre et à quelle vitesse agir.',
    image: asset('/assets/Services_Approved%20Images/Media%20Monitoring%20Image.webp'),
    href: '#/fr/services/media-monitoring',
  },
  {
    label: 'RP digitale',
    title: 'RP digitale',
    description: 'Nous portons les récits de presse vers les réseaux sociaux sans en perdre les faits, le ton ou l’intention.',
    image: asset('/assets/Services_Approved%20Images/Social%20PR%20Image.webp'),
    href: '#/fr/services/social-pr',
  },
  {
    label: 'Relations influenceurs',
    title: 'Relations influenceurs',
    description: 'Nous construisons des partenariats avec des créateurs autour de la pertinence, de l’adéquation locale et du rôle de chaque voix dans l’histoire globale.',
    image: asset('/assets/Services_Approved%20Images/Influencer%20Relations%20Image.webp'),
    href: '#/fr/services/influencer-relations',
  },
];

export const frenchHomeFaqItems = [
  {
    question: 'Est-ce que BOXCOM Africa est une agence RP au Maroc ?',
    answer: 'Oui. BOXCOM Africa est une agence RP au Maroc, basée à Casablanca, spécialisée dans les relations presse, les relations médias, la gestion de crise et le conseil, la RP sociale et les relations influenceurs au Maroc et dans toute l’Afrique.',
  },
  {
    question: 'En quoi BOXCOM Africa se distingue-t-elle d’une agence RP généraliste ?',
    answer: 'Nous combinons relations médias et réflexion marketing. L’équipe examine d’abord l’objectif business, puis construit l’histoire, le plan média et les actions autour de ce que le client veut faire comprendre ou croire au marché.',
  },
  {
    question: 'Est-il possible de travailler sur plusieurs marchés avec BOXCOM Africa ?',
    answer: 'Oui. Le travail est piloté depuis Casablanca, et des partenaires locaux interviennent lorsque le brief nécessite un accès média local, une adaptation linguistique ou une compréhension culturelle des marchés africains.',
  },
  {
    question: 'Est-ce que BOXCOM Africa peut aider quand une histoire devient sensible ?',
    answer: 'Oui, BOXCOM Africa peut intervenir. La gestion de crise et le conseil font partie de la pratique des relations médias. Nous surveillons le sujet, préparons la réponse et mobilisons les médias concernés pour clarifier les faits ou rectifier le contexte.',
  },
];

export const frenchHomeTestimonials = [
  { brand: 'inDrive', logo: asset('/assets/clients-pr/indrive.svg'), name: 'Sergey Arzhevskiy', role: 'SR PR Manager EMEA – inDrive', quote: '“Boxcom est un partenaire clé d’inDrive au Maroc, nous aidant à naviguer dans un environnement très complexe. Leur équipe assure une veille étroite des médias, des dynamiques du marché et des tensions entre les parties prenantes, et nous fournit des recommandations rapides sur la manière de réagir aux situations sensibles. Ils apportent des solutions claires, fondées sur une connaissance approfondie du marché VTC, de la législation et de la perception publique, ce qui s’est révélé essentiel pour guider notre communication.”' },
  { brand: 'Fever', logo: asset('/assets/clients-pr/fever.svg'), name: 'Santiago Santamaría Soler', role: 'VP of Global Communications & PR – Fever', quote: '“Depuis le début de notre collaboration, BOXCOM a démontré une solide compréhension de nos objectifs de communication. L’agence a fait preuve d’un grand professionnalisme, d’une excellente réactivité et d’un engagement constant dans la livraison de résultats.”' },
  { brand: 'NTT DATA', logo: asset('/assets/clients-pr/ntt%20data.svg'), name: 'Fred Sabbah', role: 'CEO NTT DATA MOROCCO', quote: '“Nous avons fait appel à BOXCOM pour relever l’un de nos plus grands défis : le recrutement. Grâce à leur stratégie de marque employeur déployée sur les médias et les réseaux sociaux, ils nous ont aidés à faire évoluer les perceptions, à atteindre les bons talents et à atteindre nos KPI de recrutement en quelques mois. Ils n’ont pas seulement été créatifs. Ils ont livré des résultats.”' },
];
