import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const frenchMediaRelationsConfig = {
  locale: 'fr',
  pageClassName: 'media-relations-page media-relations-page--fr',
  includedCtaLabel: 'Discuter des relations médias',
  processCtaLabel: 'Discuter du brief',
  seoTitle: 'Agence de relations médias au Maroc | BOXCOM Africa',
  seoDescription:
    'BOXCOM Africa est une agence de relations médias au Maroc qui relie les histoires pertinentes aux journalistes et rédacteurs grâce au bon angle, au bon timing et au contexte local.',
  hero: {
    title: 'Relations médias',
    image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-header.jpg'),
    imageAlt: 'Des journalistes interviewant une porte-parole',
    capabilitiesLabel: 'Expertises en relations médias',
    intro: (
      <>
        <p>
          En tant qu’<span className="seo-highlight seo-highlight--primary">agence de relations médias au Maroc</span>,
          BOXCOM Africa aide les histoires à se propager parce que l’angle est pertinent, le timing est juste et le
          journaliste qui la reçoit y voit un intérêt.
        </p>
        <p>
          Ce discernement vient d’un travail direct avec les{' '}
          <span className="seo-highlight seo-highlight--secondary">journalistes et les rédacteurs</span>.
        </p>
      </>
    ),
    tags: ['Prospection presse', 'Angles éditoriaux', 'Formation média'],
  },
  includedHeading: <>Ce qui est<br />inclus</>,
  included: {
    description: (
      <>
        Le travail de relations médias peut inclure le développement d’histoires, une prospection ciblée, des
        supports de presse, des interviews, la préparation de{' '}
        <span className="seo-highlight seo-highlight--secondary">porte-paroles</span>, un suivi éditorial et un
        accompagnement lorsque la couverture nécessite une clarification ou une correction.
      </>
    ),
    bullets: [
      'Développement du récit et de l’angle',
      'Prospection auprès des journalistes et rédacteurs',
      'Accompagnement aux interviews et porte-paroles',
      'Correction du récit et conseil en gestion de crise',
    ],
  },
  process: {
    title: 'De l’angle à la couverture',
    items: [
      {
        title: 'Trouver l’angle éditorial',
        description: (
          <>
            Nous identifions ce qui est réellement digne d’intérêt, ce qui l’étaye et quels médias sont susceptibles
            de s’y intéresser. Pour{' '}
            <a className="service-inline-link" href="#/projects/dilitrust"><strong>DiliTrust</strong></a>, cela
            s’est traduit par une approche ciblant{' '}
            <a className="service-inline-link" href="#/projects/dilitrust">
              <strong>quatre catégories de médias distinctes, des médias économiques aux médias panafricains</strong>
            </a>. Nous développons et plaçons des sujets, organisons des interviews et identifions les opportunités
            éditoriales pertinentes. Ces relations nous donnent une lecture concrète des médias auxquels une histoire
            correspond et de la manière dont elle doit être proposée.
          </>
        ),
        image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-editorial-angle.jpg'),
        imageAlt: 'Une équipe identifiant l’angle éditorial d’une histoire',
      },
      {
        title: 'Ouvrir les bonnes conversations',
        description: (
          <>
            Nous approchons directement journalistes et rédacteurs, en adaptant l’angle, le ton et le contexte à
            chaque catégorie de médias. Pour{' '}
            <a className="service-inline-link" href="#/projects/eqdom"><strong>EQDOM</strong></a>, cette approche
            ciblée a contribué à générer{' '}
            <a className="service-inline-link" href="#/projects/eqdom">
              <strong>67 articles et à toucher plus de 2,1 millions de personnes à travers les deux campagnes</strong>
            </a>. Chaque prise de contact est ajustée au positionnement du média, au domaine couvert par le journaliste
            et à l’audience visée, afin de construire une relation de confiance et d’obtenir une couverture pertinente
            et de qualité.
          </>
        ),
        image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-conversations.jpg'),
        imageAlt: 'Des professionnels échangeant avec des journalistes',
      },
      {
        title: 'Accompagner l’histoire',
        description: (
          <>
            Nous gérons les interviews, le suivi et la couverture du début à la fin, en restant attentifs à
            l’évolution de l’histoire après sa publication. Pour{' '}
            <a className="service-inline-link" href="#/projects/ntt-data"><strong>NTT DATA</strong></a>, cela s’est
            traduit par{' '}
            <a className="service-inline-link" href="#/projects/ntt-data">
              <strong>une interview d’un dirigeant dans La Vie Eco</strong>
            </a>, accompagnée de{' '}
            <a className="service-inline-link" href="#/projects/ntt-data"><strong>plus de 25 articles publiés</strong></a>.
            Si certains faits sont omis, mal cités ou déformés en cours de route, nous intervenons pour rétablir le bon
            contexte dans la conversation médiatique.
          </>
        ),
        image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-stay-story.jpg'),
        imageAlt: 'Une équipe suivant l’évolution d’une histoire médiatique',
      },
    ],
  },
  feature: {
    title: 'Quand la couverture dérape',
    paragraphs: [
      <>
        Ces mêmes relations comptent le plus lorsque la couverture est incomplète, inexacte ou s’éloigne des faits.
        Notre travail de <span className="seo-highlight seo-highlight--secondary">gestion de crise et de conseil</span>{' '}
        réunit les faits, la réponse et l’engagement direct avec les médias : nous évaluons la situation, préparons le
        message et les porte-paroles, engageons les médias concernés et assurons un suivi jusqu’à ce que le bon contexte
        soit rétabli dans la conversation.
      </>,
    ],
    statement: <>La veille médiatique fournit souvent l’alerte précoce.</>,
    buttonLabel: 'Découvrir la veille médiatique',
    buttonHref: '#/services/media-monitoring',
    image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-coverage-wrong.png'),
    imageAlt: 'Une main empêchant des blocs de tomber sur une rangée stable',
  },
  faqHeading: 'Questions fréquentes',
  faqItems: [
    {
      question: 'Comment choisissez-vous les médias à approcher ?',
      answer:
        'Le choix repose sur l’histoire, l’audience qu’elle doit atteindre et le type d’intérêt éditorial qu’elle peut légitimement susciter. Pour les relations médias au Maroc ou dans les marchés régionaux, la liste est construite autour de la pertinence, pas du volume.',
    },
    {
      question: 'Garantissez-vous une couverture médiatique ?',
      answer:
        'Non, et aucune agence sérieuse ne le peut. Notre engagement porte sur une lecture honnête de ce qui est digne d’intérêt, une approche média pertinente et un reporting clair sur ce qui a fonctionné et pourquoi. Si un angle a peu de chances d’obtenir une couverture, nous le disons avant toute prise de contact.',
    },
    {
      question: 'Qu’est-ce que la gestion de crise et le conseil incluent ?',
      answer:
        'Cela peut inclure l’évaluation de la situation, la préparation du message, l’accompagnement des porte-paroles, l’engagement direct avec les médias et un suivi lorsque les faits doivent être clarifiés ou le récit stabilisé.',
    },
    {
      question: 'Pouvez-vous préparer un porte-parole qui n’a jamais fait face aux médias ?',
      answer:
        'Oui. La préparation couvre le message principal, les questions probables et difficiles, les faits à l’appui et le format même de l’interview, afin que le porte-parole sache ce que le journaliste attend et où se situent les limites.',
    },
  ],
  contact: {
    title: 'Discuter du brief',
    intro:
      'Racontez-nous l’histoire, le marché et le timing. Un membre senior de l’équipe vous aidera à identifier les questions à traiter en priorité.',
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
};

function FrenchMediaRelationsPage(props) {
  return <ServiceDetailPage {...props} config={frenchMediaRelationsConfig} />;
}

export default FrenchMediaRelationsPage;
