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
        description: 'We identify the angle, essential facts and proof the audience needs before writing begins.',
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-core-story.jpg'),
        imageAlt: 'A team identifying facts and connections on a story board',
      },
      {
        title: 'Write for the Reader',
        description:
          'The format, tone and level of detail change for journalists, executives, social audiences and local markets.',
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-reader.jpg'),
        imageAlt: 'Writers developing content for different readers',
      },
      {
        title: 'Prepare Every Version',
        description:
          'We develop the materials needed across the program while keeping the central story intact.',
        image: asset('/assets/PR%20Content%20Creation_Approved%20Images/pr-content-versions.jpg'),
        imageAlt: 'Market-specific content folders prepared for several countries',
      },
    ],
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
    title: 'Talk Through the Brief',
    intro:
      'Tell us the story, the market and the timing. A senior member of the team will help identify the questions worth answering first.',
    buttonLabel: 'Send Message',
  },
};

function PRContentCreationPage(props) {
  return <ServiceDetailPage {...props} config={prContentCreationConfig} />;
}

export default PRContentCreationPage;
