import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const config = {
  locale: 'fr',
  pageClassName: 'social-pr-page social-pr-page--fr',
  includedCtaLabel: 'Discuter de la RP sociale',
  processCtaLabel: 'Porter votre histoire plus loin',
  includedHeading: <>Ce qui est<br />inclus</>,
  faqHeading: 'Questions fréquentes',
  seoTitle: 'RP sociale au Maroc | BOXCOM Africa',
  seoDescription: 'BOXCOM Africa propose la RP sociale au Maroc, en adaptant les récits de presse aux plateformes sociales tout en protégeant les faits, le récit et la réputation en ligne.',
  hero: {
    title: 'RP sociale',
    image: asset('/assets/Social%20PR_Approved%20Images/Social%20PR_Header.png'),
    imageAlt: 'Une conversation en ligne circulant entre publications et audiences',
    capabilitiesLabel: 'Expertises en RP sociale',
    intro: <p>La <span className="seo-highlight seo-highlight--primary">RP sociale au Maroc</span> préserve le message central lorsqu’il passe vers des formats plus courts et plus rapides, en adaptant le contenu, le timing et l’amplification à chaque canal et audience. Nous suivons également la manière dont l’histoire est comprise, en coordonnant une clarification ou une réponse lorsque la <span className="seo-highlight seo-highlight--secondary">conversation en ligne</span> commence à s’éloigner des faits.</p>,
    tags: ['Accompagnement de l’engagement', 'Suivi des enjeux', 'Adaptation du récit'],
  },
  included: {
    description: <>La RP sociale peut inclure l’adaptation de récits, des angles pensés pour le social, l’amplification de la couverture, l’accompagnement de l’engagement, le <span className="seo-highlight seo-highlight--secondary">suivi des conversations</span> et la planification de réponse.</>,
    bullets: ['Adaptation du récit presse vers le social', 'Amplification et accompagnement de l’engagement', 'Suivi des enjeux et parcours d’escalade', 'Coordination avec les relations médias'],
  },
  process: {
    title: 'De l’histoire de presse à la conversation sociale',
    items: [
      {
        title: 'Préserver le sens',
        description: <>Nous définissons ce qui doit rester cohérent lorsque l’histoire passe d’un canal à l’autre, afin que le message central reste intact à mesure que la couverture évolue. Pour <a className="service-inline-link" href="#/projects"><strong>Samsung Galaxy S26</strong></a>, cela s’est traduit par le suivi de <a className="service-inline-link" href="#/projects"><strong>246 articles dans 131 médias, dont 149 placements Tier 1</strong></a>. Ce suivi protège le sens de l’histoire, en montrant comment le récit circule tout en veillant à ce que portée et rapidité ne se fassent jamais au détriment de l’exactitude ou de l’intention.</>,
        image: asset('/assets/Social%20PR_Approved%20Images/Social%20PR_Keep%20the%20meaning%20intact.jpg'),
        imageAlt: 'Une ampoule représentant le sens central d’une histoire',
      },
      {
        title: 'Adapter au canal',
        description: <>Nous suivons le contenu, la portée et le niveau d’amplification sur chaque plateforme et chaque marché, car la performance sur un canal reflète rarement la manière dont une histoire circule ailleurs. Pour <a className="service-inline-link" href="#/projects/elm"><strong>ELM</strong></a>, cela signifiait suivre <a className="service-inline-link" href="#/projects/elm"><strong>43 retombées médias dans quatre pays et trois langues, dont 7 publications sur les réseaux sociaux</strong></a>. Chaque résultat a été analysé pour comprendre où le récit gagnait en visibilité et dans quelle mesure il atteignait les audiences visées.</>,
        image: asset('/assets/Social%20PR_Approved%20Images/Social%20PR_Adapt%20for%20the%20Channel.jpg'),
        imageAlt: 'Des professionnels adaptant du contenu à un canal numérique',
      },
      {
        title: 'Suivre la conversation',
        description: <>Nous observons comment l’histoire est comprise à mesure qu’elle se propage, en restant attentifs au moment où le sens commence à s’éloigner de l’intention d’origine. Pour <a className="service-inline-link" href="#/projects/everis"><strong>Everis</strong></a>, cela s’est traduit par le <a className="service-inline-link" href="#/projects/everis"><strong>suivi d’une couverture ayant atteint plus de 150 500 lecteurs estimés</strong></a>. Lorsque la conversation commence à s’écarter des faits, nous coordonnons une clarification ou une réponse directe afin de maintenir le récit aligné sur la réalité.</>,
        image: asset('/assets/Social%20PR_Approved%20Images/Social%20PR_Follow%20The%20Conversation.jpg'),
        imageAlt: 'Une professionnelle suivant les réactions de l’audience',
      },
    ],
  },
  feature: {
    title: 'Là où l’histoire commence',
    paragraphs: [
      'Une histoire ne voyage jamais plus loin que le contenu conçu pour la porter, et ce travail de fond se fait bien avant qu’une publication ne soit mise en ligne.',
      'La RP sociale façonne la manière dont un message se déplace et s’installe sur chaque plateforme, en adaptant le rythme, le ton et le format à chaque audience.',
      <>La <a className="service-inline-link" href="#/fr/services/pr-content-creation">création de contenu RP</a> est là où ce message prend forme pour la première fois : le texte, les visuels, le récit central sur lequel tout le reste s’appuie.</>,
    ],
    statement: 'Un contenu solide est ce qui rend l’amplification utile en premier lieu.',
    buttonLabel: 'Découvrir la création de contenu RP',
    buttonHref: '#/fr/services/pr-content-creation',
    image: asset('/assets/Social%20PR_Approved%20Images/Social%20PR_Where%20the%20Story%20Begins.png'),
    imageAlt: 'Deux personnes créant le contenu qui lance une histoire',
  },
  faqItems: [
    { question: 'Qu’est-ce que la RP sociale ?', answer: 'La RP sociale applique la pensée RP aux plateformes sociales. Au Maroc et dans les marchés régionaux, elle adapte les histoires de presse à la conversation en ligne tout en protégeant les faits, le ton et la réputation qui les sous-tendent.' },
    { question: 'Comment la RP sociale s’articule-t-elle avec les relations médias ?', answer: <>L’angle presse, le contenu social, la veille et la réponse sont planifiés autour de la même histoire, si bien que les évolutions sur un canal peuvent éclairer les autres. <a className="service-inline-link" href="#/fr/services/media-relations">Découvrir les relations médias.</a></> },
    { question: 'La RP sociale peut-elle aider face à une situation urgente ?', answer: 'Oui. La veille et des parcours de réponse préparés aident l’équipe à clarifier les faits ou à réagir pendant que la conversation en ligne est encore en cours.' },
    { question: 'La RP sociale remplace-t-elle le marketing sur les réseaux sociaux ?', answer: 'Non. Le marketing sur les réseaux sociaux se concentre souvent sur la performance des campagnes et la conversion. La RP sociale se concentre sur la réputation, le récit et la conversation publique.' },
  ],
  contact: { title: 'Discuter du brief', intro: 'Racontez-nous l’histoire, le marché et le timing. Un membre senior de l’équipe vous aidera à identifier les questions à traiter en priorité.', buttonLabel: 'Envoyer le message' },
  form: { name: 'Votre nom *', namePlaceholder: 'Votre nom complet', company: 'Votre entreprise *', companyPlaceholder: 'Votre entreprise', email: 'Votre e-mail *', emailPlaceholder: 'Votre e-mail', message: 'Message', messagePlaceholder: 'Écrivez votre message ici.' },
};

export default function FrenchSocialPRPage(props) {
  return <ServiceDetailPage {...props} config={config} />;
}
