import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const influencerRelationsConfig = {
  pageClassName: 'influencer-relations-page',
  seoTitle: 'Influencer Relations Agency in Morocco | BOXCOM Africa',
  seoDescription:
    'BOXCOM Africa is an influencer relations agency in Morocco helping brands build credible creator partnerships around audience fit, local context and clear objectives.',
  hero: {
    title: 'Influencer Relations',
    image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-header.jpg'),
    imageAlt: 'Creator using a smartphone',
    intro: (
      <p>
        As an <span className="seo-highlight seo-highlight--primary">influencer relations agency in Morocco</span>,
        BOXCOM Africa helps brands find <span className="seo-highlight seo-highlight--secondary">creators</span> whose
        audience, voice and <span className="seo-highlight seo-highlight--secondary">context</span> make the story feel
        credible, not just visible.
      </p>
    ),
    tags: ['Reputation Review', 'Briefing and Coordination', 'Delivery Review'],
  },
  included: {
    description: (
      <>
        Influencer relations can include <span className="seo-highlight seo-highlight--secondary">creator role</span>{' '}
        definition, <span className="seo-highlight seo-highlight--secondary">local profile mapping</span>, shortlisting,
        outreach, briefing, content coordination, delivery review and reporting.
      </>
    ),
    bullets: [
      'Creator role and local profile mapping',
      'In-market fit and reputation review',
      'Briefing, outreach and coordination',
      'Objective-based delivery review',
    ],
  },
  process: {
    title: 'From Creator Role to Credible Content',
    items: [
      {
        title: 'Define the Role',
        description:
          'We decide what creators should help explain, demonstrate or add to the wider story, based on where their voice genuinely strengthens the message rather than simply extends its reach. Not every part of a story needs an influencer; we identify the moments where that added credibility actually matters.',
        image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-define-role.jpg'),
      },
      {
        title: 'Find the Right Fit',
        description:
          "We assess audience, voice, content quality, reputation and market context before making contact, so every creator we approach is a genuine fit rather than a convenient one. This groundwork protects the brand's credibility and ensures the partnership makes sense to the audience it's meant to reach.",
        image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-right-fit.jpg'),
      },
      {
        title: 'Brief and Follow Through',
        description:
          'We manage the brief, timing and delivery from start to finish, keeping the creator aligned with the story without losing their authentic voice. Once the content is live, we review how well it played its intended role, whether it landed with the audience and what that means for the next collaboration.',
        image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-follow-through.jpg'),
      },
    ],
  },
  feature: {
    title: 'Beyond the Feed',
    paragraphs: [
      "A creator's story often finds its clearest moment in a room, not just on a feed, where an audience can see it unfold in real time.",
      'Influencer Relations builds the voice and the following: we identify the right creators and shape how they engage with the brand.',
      <><strong>Media Events</strong> then give that voice a stage, whether it's a launch, a briefing or an experience built for coverage, extending an event's reach well past the people who attended it.</>,
    ],
    statement: 'A trusted voice in the room is what turns attendance into a story worth sharing.',
    buttonLabel: 'Discover Media Events',
    buttonHref: '#/services/media-events',
    image: asset('/assets/Influencer%20Relations_Approved%20Images/influencer-relations-beyond-feed.png'),
    imageAlt: 'Creator speaking with an attendee at a media event',
  },
  faqItems: [
    {
      question: 'How are creators selected?',
      answer:
        'Selection for influencer relations in Morocco starts with the role the creator needs to play, then considers audience fit, content style, reputation, language and local context.',
    },
    {
      question: 'How does influencer relations connect with the wider PR program?',
      answer:
        "The creator brief is built from the same story as the press and social activity, while leaving room for the creator's own voice and format.",
    },
    {
      question: 'Can creators support media events?',
      answer:
        'Yes. Creators can add useful audience access or local perspective to launches, visits and experiences when their role is clear.',
    },
    {
      question: 'How are creator results reviewed?',
      answer:
        'The review looks at agreed deliverables, audience response, message quality and how well the creator fulfilled the intended role.',
    },
  ],
  contact: {
    title: 'Talk Through the Brief',
    intro:
      'Tell us the story, the market and the timing. A senior member of the team will help identify the questions worth answering first.',
    buttonLabel: 'Send Message',
  },
};

function InfluencerRelationsPage(props) {
  return <ServiceDetailPage {...props} config={influencerRelationsConfig} />;
}

export default InfluencerRelationsPage;
