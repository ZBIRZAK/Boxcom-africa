import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const mediaMonitoringConfig = {
  pageClassName: 'media-monitoring-page',
  seoTitle: 'Media Monitoring in Morocco | BOXCOM Africa',
  seoDescription:
    'BOXCOM Africa provides media monitoring in Morocco across coverage, context, sentiment, narrative shifts, risk alerts and response recommendations.',
  hero: {
    title: 'Media Monitoring',
    image: asset('/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_Header.jpg'),
    imageAlt: 'Media monitoring specialist reviewing live coverage and analytics',
    intro: (
      <p>
        BOXCOM Africa provides media monitoring in Morocco for teams that need to know what requires attention, not
        simply what was published. We track coverage, context and the direction of the conversation so teams can act
        with a clearer view.
      </p>
    ),
    tags: ['Brand Monitoring', 'Risk Alerts', 'Crisis Management'],
  },
  included: {
    description:
      'Monitoring can cover brands, executives, competitors, priority topics, target outlets, sentiment, narrative shifts, risk alerts and response recommendations.',
    bullets: [
      'Brand, executive and topic monitoring',
      'Coverage quality, sentiment and narrative shifts',
      'Risk alerts and response recommendations',
      'Crisis management and consultancy support',
    ],
  },
  process: {
    title: 'From Signal to Response',
    items: [
      {
        title: 'Set the Watchlist',
        description:
          'We define the brands, people, competitors, outlets, topics and markets that need attention, then build a monitoring approach around what actually matters to the business. This focus filters out noise and surfaces the signals worth acting on, so nothing relevant gets missed and nothing irrelevant demands attention.',
        image: asset(
          '/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_Set%20the%20Watchlist.png'
        ),
        imageAlt: 'A radar screen identifying important media signals',
      },
      {
        title: 'Read What Changed',
        description:
          "We review the source, context, reach and direction of the coverage before deciding what it actually means for the brand. Not every mention carries the same weight, so we look closely at who is saying it, where it's appearing and how it's likely to travel before drawing any conclusions.",
        image: asset(
          '/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_Read%20What%20Changed.jpg'
        ),
        imageAlt: 'Analysts reviewing media data and market charts',
      },
      {
        title: 'Act While It Matters',
        description:
          'When action is needed, we prepare the message and engage the relevant media while the conversation is still moving, not after it has already settled. Speed and accuracy matter here: the right response, delivered to the right outlet at the right moment, can shape how a story develops before it hardens into a fixed narrative.',
        image: asset(
          '/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_Act%20While%20It%20Matter.jpg'
        ),
        imageAlt: 'A communications team organizing an active response plan',
      },
    ],
  },
  feature: {
    title: 'From Data to Story',
    paragraphs: [
      'We tell you what actually requires attention, not simply what was published.',
      'Our monitoring work tracks the source, the context and the direction a story is taking, so decisions are based on a clear read of the coverage rather than a raw count of mentions.',
      'Press and broadcast coverage are followed closely here; how a story moves across social platforms is picked up by Social PR, and the two inform one another.',
    ],
    statement: 'A clear view of the coverage is often what makes the right response possible.',
    buttonLabel: 'Discover Social PR',
    buttonHref: '#/services/social-pr',
    image: asset(
      '/assets/Media%20Monitoring_Approved%20Images/Media%20Monitoring_From%20Data%20to%20Story.png'
    ),
    imageAlt: 'A person using a phone surrounded by social media signals',
  },
  faqItems: [
    {
      question: 'What can BOXCOM Africa monitor?',
      answer:
        'Media monitoring can cover brands, executives, competitors, target outlets, priority topics, sentiment and emerging issues in Morocco and across the agreed regional markets.',
    },
    {
      question: 'How quickly can BOXCOM Africa respond to a live issue?',
      answer:
        'The team is set up to respond while a conversation is still moving, once the facts, message and media access are in place. Dedicated rapid-response and out-of-hours coverage is available as a priority option within monitoring agreements.',
    },
    {
      question: 'How does monitoring support crisis management and consultancy?',
      answer: (
        <>
          Monitoring shows where the issue is moving. The team then assesses the risk, prepares the response and
          recommends whether clarification, direct engagement or wider action is needed.{' '}
          <a href="#/services/media-relations">Learn more about crisis support in Media Relations.</a>
        </>
      ),
    },
    {
      question: 'What does a useful monitoring report show?',
      answer:
        'It should explain what changed, why it matters, who is shaping the conversation and what the team should consider doing next.',
    },
  ],
  contact: {
    title: 'See What Is Changing Before It Takes Hold',
    intro:
      'Tell us the brands, topics, markets and issues that need watching, and how often you want to hear about them.',
    buttonLabel: 'Discuss Media Monitoring',
  },
};

function MediaMonitoringPage(props) {
  return <ServiceDetailPage {...props} config={mediaMonitoringConfig} />;
}

export default MediaMonitoringPage;
