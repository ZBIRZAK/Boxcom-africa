import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const config = {
  locale: 'fr',
  pageClassName: 'pr-content-page pr-content-page--fr',
  includedCtaLabel: 'Discuter du contenu RP',
  processCtaLabel: 'Démarrer votre brief de contenu',
  includedHeading: <>Ce qui est<br />inclus</>,
  faqHeading: 'Questions fréquentes',
  seoTitle: 'Création de contenu RP au Maroc | BOXCOM Africa',
  seoDescription: 'BOXCOM Africa propose la création de contenu RP au Maroc : communiqués de presse, dossiers de presse, discours, articles et adaptations en arabe, français et anglais.',
  hero: {
    title: 'Création de contenu RP',
    image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-header.jpg'),
    imageAlt: 'Deux professionnels de la communication enregistrant une interview',
    capabilitiesLabel: 'Expertises en création de contenu RP',
    intro: <p>BOXCOM Africa propose la <span className="seo-highlight seo-highlight--primary">création de contenu RP au Maroc</span> pour des histoires qui doivent être claires, crédibles et faciles à exploiter. Cela inclut la <span className="seo-highlight seo-highlight--secondary">rédaction de communiqués de presse</span>, d’articles, de discours et de supports médias écrits pour la personne qui les reçoit, et non simplement adaptés d’un message unique.</p>,
    tags: ['Communiqué de presse', 'Dossiers de presse', 'Concepts d’articles et vidéos'],
  },
  included: {
    description: <>Le travail de contenu RP peut inclure le développement du récit, des <span className="seo-highlight seo-highlight--secondary">communiqués de presse</span>, des articles, des discours, du contenu pour dirigeants, des <span className="seo-highlight seo-highlight--secondary">dossiers de presse</span>, des rapports, des concepts vidéo et des versions adaptées à chaque marché.</>,
    bullets: ['Communiqués de presse et articles', 'Discours et contenu pour dirigeants', 'Dossiers de presse et rapports', 'Versions arabe, française et anglaise, avec adaptations aux marchés locaux'],
  },
  process: {
    title: 'De la matière source au contenu prêt pour la presse',
    items: [
      {
        title: 'Trouver le récit central',
        description: <>Nous identifions l’angle, les faits essentiels et les preuves dont l’audience a besoin avant même qu’un seul mot ne soit écrit. Pour <a className="service-inline-link" href="#/projects/everis"><strong>Everis</strong></a>, ce travail de fond a façonné tout ce qui a suivi, en garantissant que le message résiste à l’examen, réponde directement aux attentes de l’audience et donne à la campagne <a className="service-inline-link" href="#/projects/everis"><strong>#Maghankhtarchi</strong></a>, avec <a className="service-inline-link" href="#/projects/everis"><strong>plus de 70 articles et 324 mentions</strong></a>, une base solide dès le départ.</>,
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-core-story.jpg'),
        imageAlt: 'Une équipe identifiant les faits et connexions d’une histoire',
      },
      {
        title: 'Écrire pour le lecteur',
        description: <>Le format, le ton et le niveau de détail varient selon l’audience, et nous suivons la performance du contenu après publication. Un communiqué diffère d’un briefing dirigeant ; un sujet spécialisé n’est pas traité comme un article économique. Pour <a className="service-inline-link" href="#/projects/agriedge"><strong>AgriEdge</strong></a>, le suivi a montré que <a className="service-inline-link" href="#/projects/agriedge"><strong>19 articles reprennent plus de 90 % du communiqué original</strong></a>, confirmant la pertinence du message auprès des médias ciblés.</>,
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-reader.jpg'),
        imageAlt: 'Des rédacteurs préparant des contenus pour différents publics',
      },
      {
        title: 'Préparer chaque version',
        description: <>Nous développons les supports nécessaires tout en suivant la cohérence du récit d’une publication à l’autre. Pour <a className="service-inline-link" href="#/projects/dilitrust"><strong>DiliTrust</strong></a>, cela signifiait suivre la couverture dans <a className="service-inline-link" href="#/projects/dilitrust"><strong>12 médias marocains et 1 média panafricain</strong></a>. Communiqués, briefings et versions adaptées aux marchés reposent sur le même récit central, afin de vérifier que le message reste cohérent malgré les changements de format et d’audience.</>,
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-versions.jpg'),
        imageAlt: 'Des versions de contenu préparées pour plusieurs marchés',
      },
    ],
  },
  feature: {
    title: 'Du message à la voix',
    paragraphs: [
      'Une même histoire a souvent besoin de plusieurs voix pour être portée, surtout lorsque le message est défini et doit atteindre une audience réelle.',
      'Notre création de contenu RP façonne le message, les visuels et le récit autour d’une marque : nous définissons l’histoire, construisons les supports et fixons le ton avant toute diffusion.',
      <>Les <a className="service-inline-link" href="#/fr/services/influencer-relations">relations influenceurs</a> placent ensuite ce message devant des audiences grâce à des voix auxquelles elles font déjà confiance.</>,
    ],
    statement: 'Le contenu donne la direction ; les relations influenceurs lui donnent une voix déjà digne de confiance.',
    buttonLabel: 'Découvrir les relations influenceurs',
    buttonHref: '#/fr/services/influencer-relations',
    image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-message-to-messenger.png'),
    imageAlt: 'Une créatrice portant le message d’une marque à son audience',
  },
  faqItems: [
    { question: 'Qu’est-ce qui distingue le contenu RP du contenu marketing général ?', answer: 'Le contenu RP est rédigé pour soutenir la compréhension des médias, la crédibilité des porte-paroles et la réputation. Pour la rédaction de communiqués de presse au Maroc ou dans les marchés régionaux, il faut un angle clair, des faits utiles et un format que journalistes ou parties prenantes peuvent exploiter.' },
    { question: 'L’adaptation locale va-t-elle au-delà de la traduction ?', answer: 'Oui. Elle prend en compte la langue, le ton, les exemples, les attentes médiatiques et le contexte culturel, tout en préservant le sens central.' },
    { question: 'Une même histoire peut-elle être déclinée en plusieurs formats ?', answer: 'Oui. Un récit central peut devenir un communiqué de presse, un article, un discours, un dossier de presse, un support événementiel, du contenu web, du contenu social ou un concept vidéo.' },
    { question: 'Dans quelles langues BOXCOM Africa rédige-t-elle ?', answer: 'En arabe, en français et en anglais. Des partenaires locaux prennent en charge des langues supplémentaires lorsqu’un marché l’exige. Quelle que soit la langue, le sens et l’intention de l’histoire restent cohérents.' },
  ],
  contact: { title: 'Discuter du brief', intro: 'Racontez-nous l’histoire, le marché et le timing. Un membre senior de l’équipe vous aidera à identifier les questions à traiter en priorité.', buttonLabel: 'Envoyer le message' },
  form: { name: 'Votre nom *', namePlaceholder: 'Votre nom complet', company: 'Votre entreprise *', companyPlaceholder: 'Votre entreprise', email: 'Votre e-mail *', emailPlaceholder: 'Votre e-mail', message: 'Message', messagePlaceholder: 'Écrivez votre message ici.' },
};

export default function FrenchPRContentCreationPage(props) {
  return <ServiceDetailPage {...props} config={config} />;
}
