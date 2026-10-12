import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const mediaEventsConfig = {
  pageClassName: 'media-events-page',
  includedCtaLabel: 'Plan a Media Event',
  processCtaLabel: 'Talk Through Your Event',
  seoTitle: 'Press Event and Media Event Agency in Morocco | BOXCOM Africa',
  seoDescription:
    'BOXCOM Africa plans media events in Morocco that give journalists a clear story, useful access and strong reasons to continue the conversation after the event.',
  hero: {
    title: 'Media Event',
    image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Header.jpg'),
    imageAlt: 'Journalists and guests attending a large media presentation',
    intro: (
      <p>
        As a <span className="seo-highlight seo-highlight--primary">press event agency in Morocco</span>, BOXCOM
        Africa plans <span className="seo-highlight seo-highlight--secondary">media events</span> that give
        journalists more than an invitation: a clear story, useful access and a reason to keep the conversation
        going after the event.
      </p>
    ),
    tags: ['Event Strategy', 'Media Invitation', 'Spokesperson Preparation', 'Post Event Coverage'],
  },
  included: {
    description: (
      <>
        <span className="seo-highlight seo-highlight--secondary">Media event</span> support can include format and
        flow, press invitations, <span className="seo-highlight seo-highlight--secondary">spokesperson preparation</span>,
        {' '}media materials, on-site press handling, interviews and{' '}
        <span className="seo-highlight seo-highlight--secondary">post-event follow-up</span>.
      </>
    ),
    bullets: [
      'Event strategy and media role',
      'Media invitation and local partner coordination',
      'Press material and spokesperson preparation',
      'Post-event coverage follow-up',
    ],
  },
  process: {
    title: 'From Announcement to Coverage',
    items: [
      {
        title: 'Shape the Press Moment',
        description: (
          <>
            We decide what the event needs to reveal, explain or make possible for the media. We plan the format
            around what journalists need to understand, see or ask. For{' '}
            <a className="service-inline-link" href="/en/projects/gwm"><strong>GWM</strong></a>, that meant{' '}
            <a className="service-inline-link" href="/en/projects/gwm">
              <strong><em>curating 44 journalists across five sectors</em></strong>
            </a>. The announcement, speakers, press
            materials and media list are developed together rather than as separate event tasks.
          </>
        ),
        image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Shape%20the%20Press%20Moment.jpg'),
        imageAlt: 'A spokesperson being interviewed by a journalist',
      },
      {
        title: 'Prepare the Room',
        description: (
          <>
            We coordinate the press list, invitations, materials, spokespeople and practical details around the same
            story, so every element supports one coherent narrative. For{' '}
            <a className="service-inline-link" href="/en/projects/samsung"><strong><em>Samsung</em></strong></a>, that meant
            tracking sentiment across{' '}
            <a className="service-inline-link" href="/en/projects/samsung"><strong>246 articles and 131 outlets</strong></a>.
            {' '}From confirming attendance to
            briefing spokespeople and preparing press kits, we handle the logistics so journalists get a smooth,
            well-organized experience from start to finish.
          </>
        ),
        image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Prepare%20the%20Room.jpg'),
        imageAlt: 'Event credentials and lanyards prepared for attendees',
      },
      {
        title: 'Continue the Conversation',
        description: (
          <>
            We handle post-event requests, interviews and follow-up so the story can continue well beyond attendance
            on the day. For{' '}
            <a className="service-inline-link" href="/en/projects/agriedge">
              <strong>AgriEdge&apos;s AquaEdge launch</strong>
            </a>, that follow-through helped drive a{' '}
            <a className="service-inline-link" href="/en/projects/agriedge"><strong>26,500 € AVE</strong></a>. As
            {' '}journalists reach out with questions, request additional access or
            develop the angle further, we stay engaged, keeping the story moving after the event ends.
          </>
        ),
        image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Continue%20the%20Conversation.jpg'),
        imageAlt: 'Post-event media follow-up and continued journalist engagement',
      },
    ],
  },
  faqItems: [
    {
      question: 'When should a brand organize a press event in Morocco instead of sending a press release?',
      answer:
        "A media event is the right format when journalists need direct access to spokespeople, a product demonstration, a location or a briefing that a press release cannot provide. In Morocco, BOXCOM Africa organizes press conferences, product launches, site visits and briefings. GWM's press-conference-led market entry generated 44 articles and 11 executive interviews.",
    },
    {
      question: 'How far in advance should a press event in Morocco be planned?',
      answer:
        'It depends on the format. A press briefing can be organized quickly once the story is ready, while product launches and multi-market events need more lead time for invitations, press kits and spokesperson preparation. Share the preferred date with BOXCOM Africa as early as possible to confirm what is realistic.',
    },
    {
      question: 'Does BOXCOM Africa prepare spokespeople for press events?',
      answer:
        'Yes. BOXCOM Africa prepares each speaker before a media event: key messages, likely questions, supporting facts, interview practice and the role of each speaker on the day.',
    },
    {
      question: 'What happens after a press event?',
      answer:
        "After the event, BOXCOM Africa follows up with attending and target journalists, handles interview and information requests, and reports on the resulting coverage. For AgriEdge's AquaEdge launch, outreach timed around the SIAM agricultural show generated €26,500 in advertising value equivalent (AVE).",
    },
  ],
  contact: {
    title: 'Give the Story the Right Setting',
    intro:
      'Tell us what you are announcing, who needs to be in the room and when it needs to happen. We will come back with a recommended format and the press moments it can create.',
    buttonLabel: 'Plan a Media Event',
  },
};

function MediaEventsPage(props) {
  return <ServiceDetailPage {...props} config={mediaEventsConfig} />;
}

export default MediaEventsPage;
