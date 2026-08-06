import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const mediaRelationsConfig = {
  pageClassName: 'media-relations-page',
  includedCtaLabel: 'Discuss Media Relations',
  processCtaLabel: 'Start a Media Relations Brief',
  seoTitle: 'Media Relations Agency in Morocco | BOXCOM Africa',
  seoDescription:
    'BOXCOM Africa is a media relations agency in Morocco connecting relevant stories with journalists and editors through strong angles, timing and local context.',
  hero: {
    title: 'Media Relations',
    image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-header.jpg'),
    imageAlt: 'Journalists interviewing a spokesperson',
    intro: (
      <>
        <p>
          As a <span className="seo-highlight seo-highlight--primary">media relations agency in Morocco</span>, BOXCOM
          Africa helps stories move because the angle is relevant, the timing is right and the journalist receiving
          it sees a reason to care.
        </p>
        <p>
          That judgment comes from working directly with{' '}
          <span className="seo-highlight seo-highlight--secondary">journalists and editors</span>.
        </p>
      </>
    ),
    tags: ['Press Outreach', 'Story Angles', 'Media Training'],
  },
  included: {
    description: (
      <>
        Media relations work can include story development, targeted outreach, press materials, interviews,{' '}
        <span className="seo-highlight seo-highlight--secondary">spokesperson</span> preparation, editorial follow-up
        and support when coverage needs clarification or correction.
      </>
    ),
    bullets: [
      'Narrative and angle development',
      'Journalist and editor outreach',
      'Interview and spokesperson support',
      'Narrative correction and crisis consultancy',
    ],
  },
  process: {
    title: 'From Angle to Coverage',
    items: [
      {
        title: 'Find the Editorial Angle',
        description:
          'We identify what is genuinely newsworthy, what supports it and which outlets are likely to care. We develop and place stories, arrange interviews and pursue editorial opportunities, and those relationships give us a practical read on where a story belongs and how it should be pitched.',
        image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-editorial-angle.jpg'),
      },
      {
        title: 'Open the Right Conversations',
        description:
          "We approach journalists and editors directly, adapting the pitch, tone and context to each market. Every outreach is tailored to the outlet's focus, the journalist's beat and the audience served. This direct, personalized approach builds trust over time and ensures stories reach editors genuinely positioned to care.",
        image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-conversations.jpg'),
      },
      {
        title: 'Stay With the Story',
        description:
          'We manage interviews, follow-up and coverage from start to finish, staying close to how a story develops after publication. If the facts are lost, misquoted or distorted along the way, we step in and work to bring the right context back into the conversation.',
        image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-stay-story.jpg'),
      },
    ],
  },
  feature: {
    title: 'When Coverage Goes Wrong',
    paragraphs: [
      'The same relationships matter most when coverage is incomplete, inaccurate or moving against the facts.',
      'Our crisis management and consultancy work brings the facts, the response and direct media engagement together: we assess the issue, prepare the message and the spokespeople, engage the relevant outlets and follow up until the right context is back in the conversation.',
    ],
    statement: 'Media Monitoring often provides the early warning.',
    buttonLabel: 'Discover Media Monitoring',
    buttonHref: '#/services/media-monitoring',
    image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-coverage-wrong.png'),
    imageAlt: 'A hand stopping falling blocks from reaching a stable row',
  },
  faqItems: [
    {
      question: 'How do you decide which media to approach?',
      answer:
        'The choice is based on the story, the audience it needs to reach and the type of editorial interest it can credibly earn. For media relations in Morocco or regional markets, the list is built around relevance, not volume.',
    },
    {
      question: 'Do you guarantee coverage?',
      answer:
        'No, and no credible agency can. What we commit to is an honest read on whether a story is newsworthy, a relevant media approach and clear reporting on what moved and why. If an angle is unlikely to earn coverage, we say so before outreach begins.',
    },
    {
      question: 'What does crisis management and consultancy include?',
      answer:
        'It can include issue assessment, message preparation, spokesperson guidance, direct media engagement and follow-up when facts need to be clarified or the narrative needs to be steadied.',
    },
    {
      question: 'Can you prepare a spokesperson who has never faced the media?',
      answer:
        'Yes. Preparation covers the main message, likely and difficult questions, supporting facts and the format of the interview itself, so the spokesperson walks in knowing what the journalist needs and where the limits are.',
    },
  ],
  contact: {
    title: 'Talk Through the Brief',
    intro:
      'Tell us the story, the market and the timing. A senior member of the team will help identify the questions worth answering first.',
    buttonLabel: 'Send Message',
  },
};

function MediaRelationsPage(props) {
  return <ServiceDetailPage {...props} config={mediaRelationsConfig} />;
}

export default MediaRelationsPage;
