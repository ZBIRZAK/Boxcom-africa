import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const config = {
  locale: 'fr',
  pageClassName: 'media-events-page media-events-page--fr',
  includedCtaLabel: 'Discuter des événements médias',
  processCtaLabel: 'Découvrir les relations médias',
  processCtaHref: '#/fr/services/media-relations',
  includedHeading: <>Ce qui est<br />inclus</>,
  faqHeading: 'Questions fréquentes',
  seoTitle: 'Agence d’événements de presse au Maroc | BOXCOM Africa',
  seoDescription: 'BOXCOM Africa est une agence d’événements de presse au Maroc qui organise lancements, conférences, briefings, préparation des porte-paroles et suivi post-événement.',
  hero: {
    title: 'Événement média',
    image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Header.jpg'),
    imageAlt: 'Des journalistes et invités assistant à une présentation média',
    capabilitiesLabel: 'Expertises en événements médias',
    intro: <p>En tant qu’<span className="seo-highlight seo-highlight--primary">agence d’événements de presse au Maroc</span>, BOXCOM Africa organise des <span className="seo-highlight seo-highlight--secondary">événements médias</span> qui offrent aux journalistes bien plus qu’une invitation : une histoire claire, un accès utile et une raison de poursuivre la conversation après l’événement.</p>,
    tags: ['Stratégie événementielle', 'Invitation média', 'Préparation des porte-paroles', 'Couverture post-événement'],
  },
  included: {
    description: <>L’accompagnement pour les <span className="seo-highlight seo-highlight--secondary">événements médias</span> peut inclure le format et le déroulé, les invitations presse, la <span className="seo-highlight seo-highlight--secondary">préparation des porte-paroles</span>, les supports médias, la gestion de la presse sur place, les interviews et le <span className="seo-highlight seo-highlight--secondary">suivi post-événement</span>.</>,
    bullets: ['Stratégie événementielle et rôle des médias', 'Invitation média et coordination avec les partenaires locaux', 'Supports de presse et préparation des porte-paroles', 'Suivi de la couverture post-événement'],
  },
  process: {
    title: 'De l’annonce à la couverture',
    items: [
      {
        title: 'Façonner le moment presse',
        description: <>Nous déterminons ce que l’événement doit révéler, expliquer ou rendre possible pour les médias. Nous concevons le format en fonction de ce que les journalistes doivent comprendre, voir ou demander. Pour <a className="service-inline-link" href="#/projects/gwm"><strong>GWM</strong></a>, cela s’est traduit par la sélection de <a className="service-inline-link" href="#/projects/gwm"><strong>44 journalistes issus de cinq secteurs</strong></a>. L’annonce, les intervenants, les dossiers de presse et la liste média sont conçus ensemble, et non comme des tâches événementielles distinctes.</>,
        image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Shape%20the%20Press%20Moment.jpg'),
        imageAlt: 'Une porte-parole interviewée par une journaliste',
      },
      {
        title: 'Préparer la salle',
        description: <>Nous coordonnons la liste presse, les invitations, les documents, les porte-paroles et les détails pratiques autour d’une même histoire, afin que chaque élément serve un récit cohérent. Pour <a className="service-inline-link" href="#/projects"><strong>Samsung</strong></a>, cela s’est traduit par le suivi du sentiment sur <a className="service-inline-link" href="#/projects"><strong>246 articles et 131 médias</strong></a>. De la confirmation des présences au briefing des porte-paroles en passant par la préparation des dossiers de presse, nous gérons la logistique pour que les journalistes bénéficient d’une expérience fluide et bien organisée du début à la fin.</>,
        image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Prepare%20the%20Room.jpg'),
        imageAlt: 'Des badges préparés pour les participants à un événement',
      },
      {
        title: 'Poursuivre la conversation',
        description: <>Nous gérons les demandes post-événement, les interviews et le suivi afin que l’histoire se poursuive bien au-delà de la journée. Pour le lancement d’<a className="service-inline-link" href="#/projects/agriedge"><strong>AquaEdge par AgriEdge</strong></a>, ce suivi a contribué à générer <a className="service-inline-link" href="#/projects/agriedge"><strong>26 500 € d’AVE</strong></a>. Lorsque les journalistes reviennent avec des questions, demandent un accès supplémentaire ou approfondissent l’angle, nous restons mobilisés pour faire vivre l’histoire après l’événement.</>,
        image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Continue%20the%20Conversation.jpg'),
        imageAlt: 'Suivi média après un événement',
      },
    ],
  },
  faqItems: [
    { question: 'Quand un événement média est-il le bon format ?', answer: 'Un événement média est utile lorsque les journalistes ont besoin d’un accès direct aux porte-paroles, d’une démonstration, d’un lieu, d’un briefing ou d’une perception plus forte de l’histoire qu’un communiqué ne peut offrir. Au Maroc, cela peut inclure des lancements, des conférences de presse, des visites et des briefings adaptés au contexte médiatique local.' },
    { question: 'Combien de temps à l’avance un événement doit-il être planifié ?', answer: 'Cela dépend du format. Un point presse peut se mettre en place rapidement lorsque l’histoire est prête ; les lancements et les événements multi-marchés demandent plus de délai pour les invitations, les supports et la préparation des porte-paroles. Communiquez la date souhaitée tôt et nous vous indiquerons ce qui est réaliste.' },
    { question: 'Préparez-vous les porte-paroles pour l’événement ?', answer: 'Oui. La préparation peut couvrir le message principal, les questions probables, les faits à l’appui, les interviews et le rôle de chaque intervenant.' },
    { question: 'Que se passe-t-il après l’événement ?', answer: 'L’équipe assure le suivi avec les médias présents et ciblés, traite les demandes supplémentaires et analyse la couverture et les échanges qui en résultent.' },
  ],
  contact: { title: 'Discuter du brief', intro: 'Racontez-nous l’histoire, le marché et le timing. Un membre senior de l’équipe vous aidera à identifier les questions à traiter en priorité.', buttonLabel: 'Envoyer le message' },
  form: { name: 'Votre nom *', namePlaceholder: 'Votre nom complet', company: 'Votre entreprise *', companyPlaceholder: 'Votre entreprise', email: 'Votre e-mail *', emailPlaceholder: 'Votre e-mail', message: 'Message', messagePlaceholder: 'Écrivez votre message ici.' },
};

export default function FrenchMediaEventsPage(props) {
  return <ServiceDetailPage {...props} config={config} />;
}
