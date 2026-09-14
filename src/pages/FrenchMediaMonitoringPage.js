import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const config = {
  locale: 'fr',
  pageClassName: 'media-monitoring-page media-monitoring-page--fr',
  includedCtaLabel: 'Discuter de la veille médiatique',
  processCtaLabel: 'Définir votre périmètre de veille',
  includedHeading: <>Ce qui est<br />inclus</>,
  faqHeading: 'Questions fréquentes',
  seoTitle: 'Veille médiatique au Maroc | BOXCOM Africa',
  seoDescription: 'BOXCOM Africa propose la veille médiatique au Maroc : couverture presse et audiovisuelle, sentiment, évolutions du récit, alertes de risque et recommandations de réponse.',
  hero: {
    title: 'Veille médiatique',
    image: asset('/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_Header.jpg'),
    imageAlt: 'Une spécialiste de la veille analysant la couverture en direct',
    capabilitiesLabel: 'Expertises en veille médiatique',
    intro: <p>BOXCOM Africa propose la <span className="seo-highlight seo-highlight--primary">veille médiatique au Maroc</span> pour les équipes qui doivent savoir ce qui mérite attention, et pas seulement ce qui a été publié. Nous suivons la <span className="seo-highlight seo-highlight--secondary">couverture</span>, le contexte et la direction de la conversation afin que les équipes puissent agir avec une vision plus claire.</p>,
    tags: ['Veille de marque', 'Alertes de risque', 'Gestion de crise'],
  },
  included: {
    description: <>La veille peut couvrir les marques, les dirigeants, les concurrents, les sujets prioritaires, les médias cibles, le <span className="seo-highlight seo-highlight--secondary">sentiment</span>, les <span className="seo-highlight seo-highlight--secondary">évolutions du récit</span>, les <span className="seo-highlight seo-highlight--secondary">alertes de risque</span> et les recommandations de réponse.</>,
    bullets: ['Veille de marque, des dirigeants et des sujets', 'Qualité de la couverture, sentiment et évolutions du récit', 'Alertes de risque et recommandations de réponse', 'Gestion de crise et accompagnement conseil'],
  },
  process: {
    title: 'Du signal à la réponse',
    items: [
      {
        title: 'Définir le périmètre de veille',
        description: <>Nous définissons les marques, les personnes, les concurrents, les médias, les sujets et les marchés qui méritent attention, puis nous construisons une approche de veille autour de ce qui compte réellement pour l’entreprise. Pour <a className="service-inline-link" href="#/projects/indrive"><strong>inDrive Algérie</strong></a>, cela s’est traduit par le <a className="service-inline-link" href="#/projects/indrive"><strong>suivi de 11 médias dans deux langues</strong></a>. Ce cadrage filtre le bruit et fait ressortir les signaux qui méritent une action, afin que rien d’important ne soit manqué et que rien d’accessoire ne mobilise l’attention.</>,
        image: asset('/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_Set%20the%20Watchlist.png'),
        imageAlt: 'Un radar identifiant les signaux médiatiques importants',
      },
      {
        title: 'Lire ce qui a changé',
        description: <>Nous examinons la source, le contexte, la portée et la direction de la couverture avant de déterminer ce qu’elle signifie réellement pour la marque. Pour <a className="service-inline-link" href="#/projects/mifa"><strong>MIFA Group</strong></a>, cela a permis de confirmer que <a className="service-inline-link" href="#/projects/mifa"><strong>18 articles sur 22 avaient été publiés avec des photographies dans des formats pleine page</strong></a>. Chaque mention n’a pas le même poids, nous regardons donc de près qui parle, où cela apparaît et comment cela risque de se propager avant de tirer une conclusion.</>,
        image: asset('/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_Read%20What%20Changed.jpg'),
        imageAlt: 'Des analystes examinant les données de couverture',
      },
      {
        title: 'Agir au bon moment',
        description: <>Lorsqu’une action est nécessaire, nous préparons le message et engageons les médias concernés pendant que la conversation est encore en mouvement, et non une fois qu’elle est déjà installée. Pour <a className="service-inline-link" href="#/projects"><strong>Samsung</strong></a>, cela s’est traduit par l’amorçage d’une couverture pré-lancement ayant <a className="service-inline-link" href="#/projects"><strong>généré 84 articles de momentum en amont de l’événement</strong></a>. Rapidité et précision sont essentielles : la bonne réponse, adressée au bon média au bon moment, peut influencer l’évolution d’une histoire avant qu’elle ne se transforme en un récit figé.</>,
        image: asset('/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_Act%20While%20It%20Matter.jpg'),
        imageAlt: 'Une équipe organisant un plan de réponse',
      },
    ],
  },
  feature: {
    title: 'Des données au récit',
    paragraphs: [
      'Nous vous disons ce qui mérite réellement attention, et non simplement ce qui a été publié.',
      'Notre travail de veille suit la source, le contexte et la direction que prend une histoire, afin que les décisions reposent sur une lecture claire de la couverture plutôt que sur un simple décompte de mentions.',
      <>La presse écrite et audiovisuelle sont suivies de près ici ; la façon dont une histoire se propage sur les réseaux sociaux relève de la <a className="service-inline-link" href="#/fr/services/social-pr">RP sociale</a>, et les deux s’éclairent mutuellement.</>,
    ],
    statement: 'Une vision claire de la couverture est souvent ce qui rend la bonne réponse possible.',
    buttonLabel: 'Découvrir la RP sociale',
    buttonHref: '#/fr/services/social-pr',
    image: asset('/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_From%20Data%20to%20Story.png'),
    imageAlt: 'Une personne utilisant son téléphone entourée de signaux sociaux',
  },
  faqItems: [
    { question: 'Que peut surveiller BOXCOM Africa ?', answer: 'La veille médiatique peut couvrir les marques, les dirigeants, les concurrents, les médias cibles, les sujets prioritaires, le sentiment et les enjeux émergents au Maroc et dans les marchés régionaux convenus.' },
    { question: 'À quelle vitesse BOXCOM Africa peut-elle réagir à une situation urgente ?', answer: 'L’équipe est organisée pour réagir tant que la conversation évolue encore, une fois les faits, le message et l’accès média en place. Une couverture prioritaire, avec réponse rapide et disponibilité en dehors des heures ouvrées, est proposée en option au sein des contrats de veille.' },
    { question: 'Comment la veille soutient-elle la gestion de crise et le conseil ?', answer: <>La veille montre où évolue la situation. L’équipe évalue ensuite le risque, prépare la réponse et recommande si une clarification, un engagement direct ou une action plus large est nécessaire. <a className="service-inline-link" href="#/fr/services/media-relations">Découvrir la gestion de crise sur la page Relations médias.</a></> },
    { question: 'Que doit montrer un rapport de veille utile ?', answer: 'Il doit expliquer ce qui a changé, pourquoi cela compte, qui façonne la conversation et ce que l’équipe devrait envisager de faire ensuite.' },
  ],
  contact: { title: 'Discuter du brief', intro: 'Racontez-nous l’histoire, le marché et le timing. Un membre senior de l’équipe vous aidera à identifier les questions à traiter en priorité.', buttonLabel: 'Envoyer le message' },
  form: { name: 'Votre nom *', namePlaceholder: 'Votre nom complet', company: 'Votre entreprise *', companyPlaceholder: 'Votre entreprise', email: 'Votre e-mail *', emailPlaceholder: 'Votre e-mail', message: 'Message', messagePlaceholder: 'Écrivez votre message ici.' },
};

export default function FrenchMediaMonitoringPage(props) {
  return <ServiceDetailPage {...props} config={config} />;
}
