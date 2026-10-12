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
      <a className="service-inline-link" href="/en/services/crisis-communication">Narrative correction and crisis consultancy</a>,
    ],
  },
  process: {
    title: 'From Angle to Coverage',
    items: [
      {
        title: 'Find the Editorial Angle',
        description: (
          <>
            We identify what is genuinely newsworthy, what supports it and which outlets are likely to care. For{' '}
            <a className="service-inline-link" href="/en/projects/dilitrust"><strong>DiliTrust</strong></a>, that meant{' '}
            <a className="service-inline-link" href="/en/projects/dilitrust">
              <strong>reaching four distinct media categories, from economic to pan-African</strong>
            </a>. We develop and
            place stories, arrange interviews and pursue editorial opportunities, and those relationships give us a
            practical read on where a story belongs and how it should be pitched.
          </>
        ),
        image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-editorial-angle.jpg'),
        imageAlt: 'Communications professionals identifying the editorial angle for a media story',
      },
      {
        title: 'Open the Right Conversations',
        description: (
          <>
            We approach journalists and editors directly, adapting the pitch, tone and context to each media
            category. For <a className="service-inline-link" href="/en/projects/eqdom"><strong>EQDOM</strong></a>, this
            targeted outreach contributed to{' '}
            <a className="service-inline-link" href="/en/projects/eqdom">
              <strong>67 articles and over 2.1 million people reached across both campaigns</strong>
            </a>. Every approach was
            tailored to the outlet’s focus, journalist’s beat and audience served, helping build trust and secure
            relevant, high-quality coverage.
          </>
        ),
        image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-conversations.jpg'),
        imageAlt: 'A media relations team speaking directly with journalists and editors',
      },
      {
        title: 'Stay With the Story',
        description: (
          <>
            We manage interviews, follow-up and coverage from start to finish, staying close to how a story develops
            after publication. For <a className="service-inline-link" href="/en/projects/ntt-data"><strong>NTT DATA</strong></a>,
            {' '}that meant securing an{' '}
            <a className="service-inline-link" href="/en/projects/ntt-data">
              <strong>executive interview in La Vie Eco</strong>
            </a>{' '}alongside{' '}
            <a className="service-inline-link" href="/en/projects/ntt-data"><strong>25+ published articles</strong></a>. If
            the facts are lost, misquoted or distorted along the way, we step in and work to bring the right context
            back into the conversation.
          </>
        ),
        image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-stay-story.jpg'),
        imageAlt: 'Communications professionals following the progress of a media story',
      },
    ],
  },
  feature: {
    title: 'When Coverage Goes Wrong',
    paragraphs: [
      'The same relationships matter most when coverage is incomplete, inaccurate or moving against the facts. Our crisis management and consultancy work brings the facts, the response and direct media engagement together: we assess the issue, prepare the message and the spokespeople, engage the relevant outlets and follow up until the right context is back in the conversation.',
    ],
    statement: <><a href="/en/services/media-monitoring">Media Monitoring</a> often provides the early warning. When a story goes wrong, the outcome depends on who already knows you. See how we <a href="/en/services/crisis-communication">prepare for and handle a crisis</a>.</>,
    buttonLabel: 'Discover Media Monitoring',
    buttonHref: '/en/services/media-monitoring',
    image: asset('/assets/Media%20Relations_Approved%20Images/media-relations-coverage-wrong.png'),
    imageAlt: 'A hand stopping falling blocks from reaching a stable row',
  },
  faqItems: [
    {
      question: 'How does BOXCOM Africa choose which media to pitch?',
      answer:
        "BOXCOM Africa selects media based on the story, the audience it needs to reach and the editorial interest it can credibly earn. Media lists are built for relevance, not volume, across Moroccan outlets such as La MAP, Hespress, L'Économiste, 2M and Al Aoula and pan-African media. For GWM's market entry, BOXCOM Africa brought 44 journalists to the launch press conference, with outreach across five media categories.",
    },
    {
      question: 'Does BOXCOM Africa guarantee media coverage?',
      answer:
        'No. No credible PR agency can guarantee editorial coverage. BOXCOM Africa commits to an honest assessment of whether a story is newsworthy, a targeted media approach and clear reporting on what was published and why. If an angle is unlikely to earn coverage, the team says so before outreach begins.',
    },
    {
      question: 'What does crisis management at BOXCOM Africa include?',
      answer: <>Crisis management at BOXCOM Africa includes 24/7 media monitoring, assessment of how an issue is spreading, holding statements and contingency plans, spokesperson media training, direct contact with journalists and follow-up to correct facts or steady the narrative. Full details are on the <a className="service-inline-link" href="/en/services/crisis-communication">Crisis Communication page</a>.</>,
    },
    {
      question: 'Does BOXCOM Africa offer media training for first-time spokespeople?',
      answer:
        "Yes. BOXCOM Africa provides media training for spokespeople with no media experience. Preparation covers the key message, likely and difficult questions, supporting facts and the interview format. When possible, the team obtains the journalist's questions in advance and drafts the answers with the brand.",
    },
    {
      question: 'Which languages does BOXCOM Africa work in?',
      answer: 'BOXCOM Africa works in French, Arabic, English and Portuguese, and in Tamazight where the audience calls for it. Local partners support additional languages in other African markets.',
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
