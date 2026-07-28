import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const prContentCreationConfig = {
  pageClassName: 'pr-content-page',
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
    tags: ['Press Releases', 'Media Kits', 'Article & Video Concepts'],
  },
  included: {
    description: (
      <>
        PR content work can include narrative development, press releases, articles, speeches, executive content,
        media kits, reports, video concepts and market-specific versions.
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
        description:
          'We identify the angle, essential facts and proof the audience needs before a single word gets written. This groundwork shapes everything that follows, ensuring the message holds up under scrutiny, speaks directly to what the audience cares about and gives the story a solid footing from the start.',
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-core-story.jpg'),
        imageAlt: 'A team identifying facts and connections on a story board',
      },
      {
        title: 'Write for the Reader',
        description:
          "The format, tone and level of detail all shift depending on who's receiving the message. A press release reads differently than an executive briefing; a social post carries a different weight than a statement built for a local market. Each version is shaped to fit the audience it's written for.",
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-reader.jpg'),
        imageAlt: 'Writers developing content for different readers',
      },
      {
        title: 'Prepare Every Version',
        description:
          'We develop the materials needed across the program, whatever form they take, while keeping the central story intact from one piece to the next. Press releases, briefing documents, social content and market-specific versions all draw from the same core narrative, so the message stays consistent even as its form changes.',
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
      'Influencer Relations then puts that message in front of audiences through voices they already trust, matching creators to the story and the market it needs to reach.',
    ],
    statement: 'Content sets the direction, Influencer Relations gives it a voice people already trust.',
    buttonLabel: 'Discover Influencer Relations',
    buttonHref: '#/services/influencer-relations',
    image: asset(
      '/assets/PR%20Content%20Creation_Approved%20Images/pr-content-message-to-messenger.png'
    ),
    imageAlt: 'A creator holding a phone and carrying a brand message to an online audience',
  },
  faqItems: [
    {
      question: 'What makes PR content different from general marketing content?',
      answer:
        'PR content is written to support media understanding, spokesperson credibility and reputation. For press release writing in Morocco or regional markets, it needs a clear angle, useful facts and a format journalists or stakeholders can work with.',
    },
    {
      question: 'Is local adaptation more than translation?',
      answer:
        'Yes. It considers language, tone, examples, media expectations and cultural context while keeping the central meaning consistent.',
    },
    {
      question: 'Can one story be developed into several formats?',
      answer:
        'Yes. A core narrative can become a press release, article, speech, media kit, event material, web copy, social content or video concept.',
    },
    {
      question: 'Which languages does BOXCOM Africa write in?',
      answer:
        'Arabic, French and English. Local partners support additional languages where a market requires them. Whatever the language, the meaning and intent of the story stay consistent.',
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
