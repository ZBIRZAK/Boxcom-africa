import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const SocialPRPageConfig = {
  pageClassName: 'social-pr-page',
  includedCtaLabel: 'Discuss Social PR',
  processCtaLabel: 'Carry Your Story Further',
  seoTitle: 'Social PR in Morocco | BOXCOM Africa',
  seoDescription:
    'BOXCOM Africa provides Social PR in Morocco, adapting press stories for social platforms while protecting the facts, tone, narrative and online reputation behind them.',
  hero: {
    title: 'Social PR',
    image: asset('/assets/Social%20PR_Approved%20Images/Social%20PR_Header.png'),
    imageAlt: 'A connected online conversation moving across social media posts and audiences',
    intro: (
      <p>
        <span className="seo-highlight seo-highlight--primary">Social PR in Morocco</span> keeps the core message intact
        as it moves into shorter, faster formats, adapting content, timing and amplification for each channel and
        audience. We also track how the story is being understood, coordinating clarification or response when the
        conversation begins to drift from the facts.
      </p>
    ),
    tags: ['Engagement Guidance', 'Issue Monitoring', 'Narrative Adaptation'],
  },
  included: {
    description:
      'Social PR can include story adaptation, social-first angles, coverage amplification, engagement guidance, conversation monitoring and response planning.',
    bullets: [
      'Press-to-social narrative adaptation',
      'Amplification and engagement guidance',
      'Issue monitoring and escalation paths',
      'Coordination with media relations',
    ],
  },
  process: {
    title: 'From Press Story to Social Conversation',
    items: [
      {
        title: 'Keep the Meaning Intact',
        description:
          'We define what must remain consistent as the story moves into shorter, faster formats, so the core message survives the shift even as the details compress. This groundwork protects the meaning behind the story, ensuring speed and brevity never come at the cost of accuracy or intent.',
        image: asset(
          '/assets/Social%20PR_Approved%20Images/Social%20PR_Keep%20the%20meaning%20intact.jpg'
        ),
        imageAlt: 'A glowing light bulb representing the core meaning of a story',
      },
      {
        title: 'Adapt for the Channel',
        description:
          "We shape the content, timing and level of amplification for the platform and audience it's reaching, since what works on one channel rarely translates directly to another. Each version is calibrated to fit the pace, tone and expectations of where it will actually be seen.",
        image: asset(
          '/assets/Social%20PR_Approved%20Images/Social%20PR_Adapt%20for%20the%20Channel.jpg'
        ),
        imageAlt: 'Content professionals adapting media for a digital channel',
      },
      {
        title: 'Follow the Conversation',
        description:
          'We watch how the story is being understood as it spreads, staying alert to where the meaning starts to shift from what was intended. When the conversation begins to drift from the facts, we coordinate clarification or a direct response, keeping the narrative aligned with the truth.',
        image: asset(
          '/assets/Social%20PR_Approved%20Images/Social%20PR_Follow%20The%20Conversation.jpg'
        ),
        imageAlt: 'A professional following audience feedback and online conversation',
      },
    ],
  },
  feature: {
    title: 'Where the Story Begins',
    paragraphs: [
      'A story only travels as far as the content built to carry it, and that groundwork happens well before any post goes live.',
      'Social PR shapes how a message moves and lands across platforms, adapting pace, tone and format to each audience.',
      'PR Content Creation is where that message first takes shape, the copy, the visuals, the core narrative that everything downstream is built from.',
    ],
    statement: 'Strong content is what makes amplification worth doing in the first place.',
    buttonLabel: 'Discover PR Content Creation',
    buttonHref: '#/services/pr-content-creation',
    image: asset('/assets/Social%20PR_Approved%20Images/Social%20PR_Where%20the%20Story%20Begins.png'),
    imageAlt: 'Two podcast hosts creating the content that starts a wider story',
  },
  faqItems: [
    {
      question: 'What is Social PR?',
      answer:
        'Social PR applies PR thinking to social platforms. In Morocco and regional markets, it adapts press stories for online conversation while protecting the facts, tone and reputation behind them.',
    },
    {
      question: 'How does Social PR connect with media relations?',
      answer: (
        <>
          The press angle, social content, monitoring and response are planned around the same story, so changes in
          one channel can inform the others.
        </>
      ),
    },
    {
      question: 'Can Social PR help with a live issue?',
      answer:
        'Yes. Monitoring and prepared response paths help the team clarify facts or respond while the online conversation is still developing.',
    },
    {
      question: 'Does Social PR replace social media marketing?',
      answer:
        'No. Social media marketing often focuses on campaign performance and conversion. Social PR focuses on reputation, narrative and public conversation.',
    },
  ],
  contact: {
    title: 'Carry the Story Into the Conversation',
    intro: 'Tell us the story, the platforms where it will live and how fast the conversation is moving.',
    buttonLabel: 'Discuss Social PR',
  },
};

function SocialPRPage(props) {
  return <ServiceDetailPage {...props} config={SocialPRPageConfig} />;
}

export default SocialPRPage;
