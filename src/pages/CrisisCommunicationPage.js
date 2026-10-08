import ServiceDetailPage from './ServiceDetailPage';

const asset = (filename) => `${process.env.PUBLIC_URL}/assets/Crisis%20Communication_Approved%20Images/${filename}`;
const contactHref = (locale) => `${locale === 'fr' ? '/contact' : '/en/contact'}?from=crisis`;

const sharedImages = {
  hero: asset('crisis-communication-header.jpg'),
  spot: asset('crisis-communication-spot-early.jpg'),
  spread: asset('crisis-communication-read-spread.jpg'),
  contain: asset('crisis-communication-contain-respond.jpg'),
  voice: asset('crisis-communication-prepare-voice.jpg'),
};

const frenchConfig = {
  locale: 'fr',
  pageClassName: 'crisis-communication-page crisis-communication-page--fr',
  contactHref: contactHref('fr'),
  includedCtaLabel: 'Parler de communication de crise',
  processCtaLabel: 'Lancer un brief de crise',
  processCtaHref: contactHref('fr'),
  processCtaAtBottom: true,
  seoTitle: 'Communication de crise au Maroc | BOXCOM Africa',
  seoDescription: 'BOXCOM Africa, agence RP au Maroc, surveille, évalue et répond aux crises médiatiques 24h/24, avec des relations presse construites avant la crise.',
  hero: {
    title: 'Communication de crise',
    image: sharedImages.hero,
    imageAlt: 'Une équipe de communication prépare une déclaration de marque',
    capabilitiesLabel: 'Expertises en communication de crise',
    intro: <p>Agence RP au Maroc experte en communication de crise, BOXCOM Africa aide les marques à réagir quand un sujet se retourne contre elles, parce que nous le voyons tôt, mesurons sa propagation et savons qui appeler.</p>,
    tags: ['Veille de crise', 'Déclaration de la marque', 'Accompagnement du porte-parole'],
  },
  includedHeading: <>Ce qui est<br />inclus</>,
  included: {
    description: 'La plupart des crises que nous traitons sont déjà dans les médias, ou sur le point d’y arriver. Nous les surveillons en continu, et nous décidons avec vous de les contenir ou d’y répondre.',
    bullets: [
      'Veille médias 24h/24, 7j/7 et alertes de crise',
      'Évaluation de la propagation du sujet et des médias concernés',
      'Déclaration de la marque et plan de contingence',
      'Échanges avec les journalistes et réponses à leurs questions',
      'Préparation aux interviews et media training du porte-parole',
    ],
  },
  process: {
    title: 'De l’alerte à la réponse',
    items: [
      { title: 'Repérer tôt', description: <>Notre <a className="service-inline-link" href="/services/media-monitoring">veille médias</a> fonctionne 24 heures sur 24, 7 jours sur 7. Quand une alerte remonte, nous mettons le sujet sous surveillance et commençons à l’analyser tout de suite. Pour nos clients, la veille démarre dès qu’une alerte remonte, avant toute discussion de stratégie. Nous recommandons ensuite comment répondre.</>, image: sharedImages.spot, imageAlt: 'Une analyste surveille un tableau de bord médias avec une alerte signalée' },
      { title: 'Lire la propagation', description: 'Un sujet dans un petit média n’est pas la même crise qu’un sujet dans un titre national. Nous regardons où il est paru, si de plus grands médias le reprennent et lesquels. Cela nous dit s’il faut contenir le sujet ou y répondre.', image: sharedImages.spread, imageAlt: 'Un analyste compare la couverture d’un même sujet sur plusieurs sites d’actualité' },
      { title: 'Contenir ou répondre', description: 'Si le sujet reste dans de petits supports, surtout digitaux, et que les grands médias ne s’y intéressent pas, nous contactons les supports pour demander une correction ou, lorsque le contenu est inexact, son retrait. S’il prend de l’ampleur dans des médias plus importants, nous activons un plan de contingence : une déclaration de la marque, un plan de suivi et d’autres prises de parole au fur et à mesure des questions et des critiques. Nous appelons aussi nos contacts en rédaction pour répondre directement à leurs questions.', image: sharedImages.contain, imageAlt: 'Une responsable communication appelle un média pendant qu’un collègue rédige une déclaration' },
      { title: 'Préparer la voix', description: 'Quand il est dans l’intérêt de la marque de s’adresser à la presse, nous préparons le porte-parole par un media training. Nous obtenons les questions des journalistes à l’avance, les validons avec la marque et rédigeons les réponses à donner.', image: sharedImages.voice, imageAlt: 'Un porte-parole se prépare à une interview avec une conseillère' },
    ],
  },
  feature: {
    title: 'Pourquoi les relations décident de l’issue',
    paragraphs: [
      <>Le corps de presse qui couvre un secteur au Maroc, en Tunisie ou au Sénégal est assez restreint pour que les gens se connaissent, et ils se souviennent de qui a décroché sur un sujet difficile. Un journaliste qui nous connaît appelle avant de publier pour vérifier un fait et reprend une déclaration correctement au lieu de la réduire à une phrase. Ces relations ne se construisent pas pendant la crise, c’est pourquoi elles viennent de notre travail quotidien de <a className="service-inline-link" href="/services/media-relations">relations presse</a>. Pour aller plus loin : <a className="service-inline-link" href="/blog/what-makes-a-journalist-take-your-call">ce qui pousse un journaliste à décrocher</a>.</>,
    ],
    sections: [
      { title: 'Situations que nous traitons', text: 'Une erreur factuelle dans un article. Une publication ou une plainte virale. Une rumeur sur l’entreprise. Un incident impliquant des clients, des partenaires ou des collaborateurs. Un récit négatif repris par plusieurs médias.' },
      { title: 'La discrétion d’abord', text: 'Nous ne publions pas notre travail de crise. Ce que nous avons fait pour nos clients leur appartient, et nous discutons volontiers de notre expérience avec vous directement.' },
    ],
  },
  faqHeading: 'Questions fréquentes',
  faqItems: [
    { question: 'À quelle vitesse pouvez-vous réagir ?', answer: 'Notre veille fonctionne 24h/24 et 7j/7, donc un sujet est repéré dès sa publication. Nous évaluons ensuite sa propagation et recommandons de le contenir ou d’y répondre.' },
    { question: 'Pouvez-vous faire retirer un article ?', answer: 'Parfois. Pour un contenu inexact dans de plus petits médias, nous pouvons contacter le support pour demander une correction ou un retrait. Nous ne le promettons pas. Quand un sujet est repris par de grands médias, la réponse est une prise de parole, pas un retrait.' },
    { question: 'Une marque doit-elle toujours s’exprimer auprès de la presse en cas de crise ?', answer: 'Non. Nous conseillons sur l’intérêt de la prise de parole. Quand elle est utile, nous préparons le porte-parole et les réponses. Sinon, nous préparons une déclaration et restons en veille.' },
    { question: 'Pouvez-vous intervenir si nous ne sommes pas encore client ?', answer: 'Oui. Nous pouvons prendre en charge une demande urgente d’une marque qui n’est pas encore cliente.' },
    { question: 'Travaillez-vous en plusieurs langues ?', answer: 'Oui : français, arabe, anglais, portugais, tamazight.' },
  ],
  contact: { title: 'Parlons de votre brief', intro: 'Si un sujet délicat sortait demain, qui dans la presse prendrait votre appel ?', buttonLabel: 'Envoyer le message' },
  form: { name: 'Votre nom *', namePlaceholder: 'Votre nom complet', company: 'Votre entreprise *', companyPlaceholder: 'Votre entreprise', email: 'Votre e-mail *', emailPlaceholder: 'Votre e-mail', needLabel: 'Votre besoin *', needPlaceholder: 'Sélectionnez votre besoin', needs: ['Préparer un plan de crise', 'Situation urgente', 'Autre'], message: 'Message', messagePlaceholder: 'Écrivez votre message ici.', source: 'crisis' },
};

const englishConfig = {
  pageClassName: 'crisis-communication-page',
  contactHref: contactHref('en'),
  includedCtaLabel: 'Discuss Crisis Communication',
  processCtaLabel: 'Start a Crisis Brief',
  processCtaHref: contactHref('en'),
  processCtaAtBottom: true,
  seoTitle: 'Crisis Communication in Morocco | BOXCOM Africa',
  seoDescription: 'BOXCOM Africa, a PR agency in Morocco, monitors, assesses and responds to media crises 24/7, with press relations built before the crisis.',
  hero: {
    title: 'Crisis Communication', image: sharedImages.hero,
    imageAlt: 'A communications team preparing a brand statement',
    intro: <p>As a PR agency in Morocco with crisis communication expertise, BOXCOM Africa helps brands respond when a story turns against them, because we see it early, understand how far it is travelling and know who to call.</p>,
    tags: ['Crisis Monitoring', 'Holding Statement', 'Spokesperson Support'],
  },
  included: {
    description: 'Most crises we handle are already in the media, or about to be. We watch for them around the clock, and we decide with you how to contain them or respond.',
    bullets: ['24/7 media monitoring and crisis alerts', 'Assessment of how the story is spreading, and through which outlets', 'Holding statement and contingency plan', 'Journalist outreach and answers to their questions', 'Interview preparation and media training for the spokesperson'],
  },
  process: {
    title: 'From Alert to Response',
    items: [
      { title: 'Spot It Early', description: <>Our <a className="service-inline-link" href="/en/services/media-monitoring">media monitoring</a> runs 24 hours a day, 7 days a week. When an alert comes in, we put the story under watch and start reading it right away. For our clients, monitoring starts as soon as an alert comes in, before any discussion of strategy. We then recommend how to respond.</>, image: sharedImages.spot, imageAlt: 'An analyst monitoring a media dashboard with a flagged alert' },
      { title: 'Read How It Spreads', description: 'A story in a small outlet is not the same crisis as a story in a national title. We look at where it appeared, whether larger media are picking it up, and which ones. That tells us whether this is a story to contain or a story to answer.', image: sharedImages.spread, imageAlt: 'An analyst compares coverage of the same story across several news sites' },
      { title: 'Contain or Respond', description: 'If the story stays in small, mostly digital outlets and larger media show no interest, we contact the outlets to ask for a correction or, where the content is inaccurate, its removal. If it gains momentum in major media, we activate a contingency plan: a statement from the brand, a follow-up plan and further public statements as questions and criticism arrive. We also call our contacts in newsrooms to answer their questions directly.', image: sharedImages.contain, imageAlt: 'A communications manager calling an outlet while a colleague drafts a statement' },
      { title: 'Prepare the Voice', description: 'When it is in the brand’s interest to speak to the press, we prepare the spokesperson through media training. We obtain the journalists’ questions in advance, validate them with the brand and draft the answers that need to be given.', image: sharedImages.voice, imageAlt: 'A spokesperson preparing for an interview with an advisor' },
    ],
  },
  feature: {
    title: 'Why Relationships Decide the Outcome',
    paragraphs: [
      <>The press corps covering a sector in Morocco, Tunisia or Senegal is small enough that people know each other, and they remember who picked up the phone on a difficult story. A journalist who knows us calls before publishing to check a fact and reports a statement accurately instead of cutting it to one sentence. Those relationships cannot be built during the crisis, which is why they come from our day-to-day <a className="service-inline-link" href="/en/services/media-relations">media relations work</a>. Read more in <a className="service-inline-link" href="/en/blog/what-makes-a-journalist-take-your-call">what makes a journalist take your call</a>.</>,
    ],
    sections: [
      { title: 'Situations We Handle', text: 'A factual error in an article. A viral post or complaint. A rumour about the company. An incident involving customers, partners or staff. A negative narrative picked up by several outlets.' },
      { title: 'Discretion Comes First', text: 'We do not publish our crisis work. What we have done for clients stays with them, and we are glad to discuss our experience with you directly.' },
    ],
  },
  faqItems: [
    { question: 'How fast can you react?', answer: 'Our monitoring runs 24/7, so a story is spotted as soon as it is published. From there we assess how it is spreading and recommend whether to contain it or respond.' },
    { question: 'Can you get an article removed?', answer: 'Sometimes. For inaccurate content in smaller outlets, we can contact the publication to request a correction or removal. We do not promise it. When a story is taken up by major media, the answer is a response, not a removal.' },
    { question: 'Should a brand always speak to the press during a crisis?', answer: 'No. We advise on whether speaking is in the brand’s interest. When it is, we prepare the spokesperson and the answers. When it is not, we prepare a statement and monitor.' },
    { question: 'Can you step in if we are not yet a client?', answer: 'Yes. We can take an urgent request from a brand that is not yet a client.' },
    { question: 'Do you work in more than one language?', answer: 'Yes. We work in French, Arabic, English and Portuguese, and in Tamazight where the audience calls for it.' },
  ],
  contact: { title: 'Talk Through the Brief', intro: 'If a sensitive story broke tomorrow, who in the press would take your call?', buttonLabel: 'Send Message' },
  form: { source: 'crisis', needLabel: 'Your Need *', needPlaceholder: 'Select your need', needs: ['Prepare a crisis plan', 'Urgent situation', 'Other'] },
};

export default function CrisisCommunicationPage({ locale = 'en', ...props }) {
  return <ServiceDetailPage {...props} config={locale === 'fr' ? frenchConfig : englishConfig} />;
}
