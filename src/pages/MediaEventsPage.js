import ServiceDetailPage from './ServiceDetailPage';

const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

const mediaEventsConfig = {
  pageClassName: 'media-events-page',
  seoTitle: 'Press Event and Media Event Agency in Morocco | BOXCOM Africa',
  seoDescription:
    'BOXCOM Africa plans media events in Morocco that give journalists a clear story, useful access and strong reasons to continue the conversation after the event.',
  hero: {
    title: 'Media Events',
    image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Header.jpg'),
    imageAlt: 'Journalists and guests attending a large media presentation',
    intro: (
      <p>
        As a press event agency in Morocco, BOXCOM Africa plans media events that give journalists more than an
        invitation: a clear story, useful access and a reason to keep the conversation going after the event.
      </p>
    ),
    tags: ['Event Strategy', 'Media Invitation', 'Spokesperson Preparation', 'Post Event Coverage'],
  },
  included: {
    description:
      'Media event support can include format and flow, press invitations, spokesperson preparation, media materials, on-site press handling, interviews and post-event follow-up.',
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
        description:
          'We decide what the event needs to reveal, explain or make possible for the media. We plan the format around what journalists need to understand, see or ask. The announcement, speakers, press materials and media list are developed together rather than as separate event tasks.',
        image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Shape%20the%20Press%20Moment.jpg'),
        imageAlt: 'A spokesperson being interviewed by a journalist',
      },
      {
        title: 'Prepare the Room',
        description:
          'We coordinate the press list, invitations, materials, spokespeople and practical details around the same story, so every element supports one coherent narrative. From confirming attendance to briefing spokespeople and preparing press kits, we handle the logistics so journalists get a smooth, well-organized experience from start to finish.',
        image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Prepare%20the%20Room.jpg'),
        imageAlt: 'Event credentials and lanyards prepared for attendees',
      },
      {
        title: 'Continue the Conversation',
        description:
          'We handle post-event requests, interviews and follow-up so the story can continue well beyond attendance on the day. As journalists reach out with questions, request additional access or look to develop the angle further, we stay engaged and responsive, making sure the story keeps moving after the event ends.',
        image: asset('/assets/Media%20Events_Approved%20Images/Media%20Events_Continue%20the%20Conversation.jpg'),
        imageAlt: 'Post-event media follow-up and continued journalist engagement',
      },
    ],
  },
  feature: {
    title: 'The Relationship Outlasts the Room',
    paragraphs: [
      "A well-run event opens the door, but it's the relationships with journalists and editors that keep it open long after.",
      'Media Events at BOXCOM Africa put the story in front of the right people at the right moment, but Media Relations is what carries that momentum forward, through the pitches, interviews and follow-up coverage that turn one good moment into sustained visibility.',
    ],
    statement: "The event ends. The relationship doesn't.",
    buttonLabel: 'Discover Media Relations',
    buttonHref: '#/services/media-relations',
    image: asset(
      '/assets/Media%20Events_Approved%20Images/Media%20Events_The%20Relationship%20Outlasts%20the%20Room.png'
    ),
    imageAlt: 'Two people shaking hands to represent a lasting media relationship',
  },
  faqItems: [
    {
      question: 'When is a media event the right format?',
      answer:
        'A media event is useful when journalists need direct access to spokespeople, a demonstration, a location, a briefing or a stronger sense of the story than a release can provide. In Morocco, this can include launches, press conferences, visits and briefings adapted to the local media context.',
    },
    {
      question: 'How far in advance should an event be planned?',
      answer:
        'It depends on the format. A press briefing can come together quickly when the story is ready; launches and multi-market events need more lead time for invitations, materials and spokesperson preparation. Share the preferred date early and we will tell you what is realistic.',
    },
    {
      question: 'Do you prepare spokespeople for the event?',
      answer:
        'Yes. Preparation can cover the main message, likely questions, supporting facts, interviews and the role of each speaker.',
    },
    {
      question: 'What happens after the event?',
      answer:
        'The team follows up with attending and target media, handles additional requests and reviews the resulting coverage and conversation.',
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
