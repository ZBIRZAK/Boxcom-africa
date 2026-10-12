import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const prContentCreationConfig = {
  pageClassName: 'pr-content-page',
  includedCtaLabel: 'Discuss PR Content',
  processCtaLabel: 'Start Your Content Brief',
  seoTitle: 'PR Content Creation in Morocco | BOXCOM Africa',
  seoDescription:
    'BOXCOM Africa provides PR content creation in Morocco, including press releases, media kits, speeches, articles and Arabic, French and English market adaptations.',
  hero: {
    title: 'PR Content Creation',
    image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-header.jpg'),
    imageAlt: 'Two communications professionals recording a podcast interview',
    intro: (
      <>
        <p>
          BOXCOM Africa provides{' '}
          <span className="seo-highlight seo-highlight--primary">PR content creation in Morocco</span> for stories
          that need to be clear, credible and easy to use. That includes{' '}
          <span className="seo-highlight seo-highlight--secondary">press release writing</span>, articles, speeches
          and media materials written for the person receiving them, not simply adapted from one master message.
        </p>
      </>
    ),
    tags: ['Press Release', 'Media Kits', 'Article & Video Concepts'],
  },
  included: {
    description: (
      <>
        PR content work can include narrative development,{' '}
        <span className="seo-highlight seo-highlight--secondary">press releases</span>, articles, speeches, executive
        content, <span className="seo-highlight seo-highlight--secondary">media kits</span>, reports, video concepts
        and market-specific versions.
      </>
    ),
    bullets: [
      'Press releases and articles',
      'Speeches and executive content',
      'Media kits and reports',
      'Arabic, French and English versions, with local market adaptations',
    ],
  },
  process: {
    title: 'From Source Material to Press-Ready Content',
    items: [
      {
        title: 'Find the Core Story',
        description: (
          <>
            We identify the angle, essential facts and proof the audience needs before a single word gets written. For{' '}
            <a className="service-inline-link" href="/en/projects/everis"><strong>Everis</strong></a>, this groundwork
            shaped everything that followed, ensuring the message held up
            under scrutiny, spoke directly to what the audience cared about, and gave the{' '}
            <a className="service-inline-link" href="/en/projects/everis">
              <strong><em>#Maghankhtarchi</em></strong>
            </a>{' '}campaign —{' '}
            <a className="service-inline-link" href="/en/projects/everis">
              <strong><em>70+ articles, 324 mentions</em></strong>
            </a>{' '}—
            its footing from the start.
          </>
        ),
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-core-story.jpg'),
        imageAlt: 'A team identifying facts and connections on a story board',
      },
      {
        title: 'Write for the Reader',
        description: (
          <>
            The format, tone and level of detail all shift depending on who receives the message, and we monitor how
            that content performs once published. A press release reads differently than an executive briefing; a
            story for specialist media carries a different weight than one built for economic press. For{' '}
            <a className="service-inline-link" href="/en/projects/agriedge"><strong>AgriEdge</strong></a>, monitoring showed{' '}
            <a className="service-inline-link" href="/en/projects/agriedge">
              <strong>19 articles reproduced over 90% of the original release</strong>
            </a>, helping us assess how effectively
            each message landed with its audience.
          </>
        ),
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-reader.jpg'),
        imageAlt: 'Writers developing content for different readers',
      },
      {
        title: 'Prepare Every Version',
        description: (
          <>
            We develop the materials needed across the program, whatever form they take, while monitoring how the
            central story carries from one placement to the next. For{' '}
            <a className="service-inline-link" href="/en/projects/dilitrust"><strong><em>DiliTrust</em></strong></a>, that meant
            tracking coverage across{' '}
            <a className="service-inline-link" href="/en/projects/dilitrust">
              <strong><em>12 Moroccan outlets and 1 pan-African publication</em></strong>
            </a>. Press
            releases, briefing documents and market-specific versions all draw from the same core narrative, helping
            us assess whether the message stays consistent as its form and audience change.
          </>
        ),
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-versions.jpg'),
        imageAlt: 'Market-specific content folders prepared for several countries',
      },
    ],
  },
  feature: {
    title: 'From Message to Messenger',
    paragraphs: [
      'The same story often needs more than one voice to carry it, especially once the message is set and needs somewhere real to travel.',
      'Our PR content creation shapes the message, the visuals and the narrative around a brand: we define the story, build the assets and set the tone before anything goes out.',
      <>
        <a className="service-inline-link" href="/en/services/influencer-relations">Influencer Relations</a> then puts
        that message in front of audiences through voices they already trust, matching creators to the story and the
        market it needs to reach.
      </>,
    ],
    statement: 'Content sets the direction, Influencer Relations gives it a voice people already trust.',
    buttonLabel: 'Discover Influencer Relations',
    buttonHref: '/en/services/influencer-relations',
    image: asset(
      '/assets/PR%20Content%20Creation_Approved%20Images/pr-content-message-to-messenger.png'
    ),
    imageAlt: 'A creator holding a phone and carrying a brand message to an online audience',
  },
  faqItems: [
    {
      question: 'What is the difference between PR content and marketing content?',
      answer:
        "PR content is written to earn media coverage and credibility, not to sell directly. Press releases, articles and speeches need a clear news angle, verifiable facts and a format journalists can reuse. BOXCOM Africa's press release for AgriEdge's TrialEdge platform was reproduced at over 90% of its original text in all 19 resulting articles.",
    },
    {
      question: 'What is the difference between translation and localization in PR?',
      answer: <>Translation converts words; localization adapts language, tone, examples, media expectations and cultural references for each market. BOXCOM Africa localizes PR content for Morocco and African markets so the core meaning stays the same but reads as if written for local journalists. Read <a className="service-inline-link" href="/en/blog/what-gets-lost-between-translation-and-localization">What Gets Lost Between Translation and Localization?</a></>,
    },
    {
      question: 'Can BOXCOM Africa turn one story into several PR formats?',
      answer:
        'Yes. BOXCOM Africa develops one core narrative into a press release, article, speech, media kit, event material, web copy, social content or video concept, so every format tells the same story.',
    },
    {
      question: 'Which languages does BOXCOM Africa write PR content in?',
      answer:
        'BOXCOM Africa writes PR content in French, Arabic and English, and also works in Portuguese and Tamazight where the audience calls for it. Local partners support additional languages in other African markets.',
    },
  ],
  contact: {
    title: 'Make the Story Easy to Use',
    intro: 'Tell us the story, who it is for and the languages and formats it needs to exist in.',
    buttonLabel: 'Discuss PR Content',
  },
};

function PRContentCreationPage(props) {
  return <ServiceDetailPage {...props} config={prContentCreationConfig} />;
}

export default PRContentCreationPage;
