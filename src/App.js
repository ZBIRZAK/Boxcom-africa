import { useEffect, useRef, useState } from 'react';
import './App.css';
import InfluencerRelationsPage from './pages/InfluencerRelationsPage';
import MediaEventsPage from './pages/MediaEventsPage';
import FrenchMediaEventsPage from './pages/FrenchMediaEventsPage';
import MediaMonitoringPage from './pages/MediaMonitoringPage';
import FrenchMediaMonitoringPage from './pages/FrenchMediaMonitoringPage';
import MediaRelationsPage from './pages/MediaRelationsPage';
import FrenchMediaRelationsPage from './pages/FrenchMediaRelationsPage';
import PRContentCreationPage from './pages/PRContentCreationPage';
import FrenchPRContentCreationPage from './pages/FrenchPRContentCreationPage';
import SocialPRPage from './pages/SocialPRPage';
import FrenchSocialPRPage from './pages/FrenchSocialPRPage';
import ServicesOverviewPage from './pages/ServicesOverviewPage';
import { frenchServices, frenchServicesContent } from './content/servicesOverview.fr';
import { frenchHomeContent, frenchHomeFaqItems, frenchHomeServices, frenchHomeTestimonials } from './content/home.fr';
import AboutUsPage from './pages/AboutUsPage';
import FrenchAboutUsPage from './pages/FrenchAboutUsPage';
import ProjectsPage from './pages/ProjectsPage';
import CaseStudyPage from './pages/CaseStudyPage';
import NTTDataCaseStudyPage from './pages/NTTDataCaseStudyPage';
import ModanisaCaseStudyPage from './pages/ModanisaCaseStudyPage';
import GWMCaseStudyPage from './pages/GWMCaseStudyPage';
import ELMCaseStudyPage from './pages/ELMCaseStudyPage';
import MifaCaseStudyPage from './pages/MifaCaseStudyPage';
import {
  AgriEdgeCaseStudyPage,
  DiliTrustCaseStudyPage,
  EQDOMCaseStudyPage,
  EverisCaseStudyPage,
  InDriveCaseStudyPage,
  SamsungCaseStudyPage,
} from './pages/AdditionalCaseStudyPages';
import BlogPage from './pages/BlogPage';
import FrenchContactPage from './pages/FrenchContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { installContactFormHandler } from './utils/contactForms';
import { installNewsletterFormHandler } from './utils/newsletterForms';
import {
  fallbackMediaProjectMap,
  fetchMediaProjectMap,
  mediaCoverageItems,
} from './data/mediaCoverage';
import './InternalFaq.css';

const menuItems = [
  { label: 'Home', href: '#/' },
  { label: 'Services', href: '#/services' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Blog', href: '#/blog' },
  { label: 'About Us', href: '#/about' },
];

const frenchMenuItems = [
  { label: 'Accueil', href: '#/fr' },
  { label: 'Services', href: '#/fr/services' },
  { label: 'Études de cas', href: '#/projects' },
  { label: 'Blog', href: '#/blog' },
  { label: 'À propos', href: '#/fr/about' },
];

const fallbackServiceItems = [
  {
    label: 'Media Relations',
    title: 'Media Relations',
    description:
      'We find the strongest angle, take it to relevant journalists and editors, and keep the story moving through follow-up, interviews and editorial opportunities. Crisis management and consultancy sits within this work.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Media%20Relations%20Image.webp`,
    href: '#/services/media-relations',
  },
  {
    label: 'Media Events',
    title: 'Media Events',
    description:
      'We turn launches, briefings and announcements into press moments that give journalists something useful to see, ask and report.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Media%20Events%20Image.webp`,
    href: '#/services/media-events',
  },
  {
    label: 'Media Monitoring',
    title: 'Media Monitoring',
    description:
      'We track coverage, sentiment and emerging issues, then help the client decide when to respond and how quickly to move.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Media%20Monitoring%20Image.webp`,
    href: '#/services/media-monitoring',
  },
  {
    label: 'Social PR',
    title: 'Social PR',
    description:
      'We carry press stories into social channels without losing the facts, tone or intent behind them.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Social%20PR%20Image.webp`,
    href: '#/services/social-pr',
  },
  {
    label: 'PR Content Creation',
    title: 'PR Content Creation',
    description:
      'We develop releases, articles, speeches, statements and media assets that are clear, usable and adapted to the market.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/PR%20Content%20Creation%20Image.webp`,
    href: '#/services/pr-content-creation',
  },
  {
    label: 'Influencer Relations',
    title: 'Influencer Relations',
    description:
      'We build creator partnerships around relevance, local fit and the role each voice should play in the wider story.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Influencer%20Relations%20Image.webp`,
    href: '#/services/influencer-relations',
  },
];

const fallbackClientLogos = [
  { label: 'Samsung', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/Samsung%20Logo.webp` },
  { label: 'AgriEdge', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/AgriEdge%20Logo.webp` },
  { label: 'Air France', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/AirFrance%20Logo.webp` },
  { label: 'Salon de l’Arganier', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/Salon%20de%20l_Arganier%20LOGO.webp` },
  { label: 'Fever', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/Fever%20Logo.webp` },
  { label: 'DeFacto', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/Defacto%20Logo.webp` },
  { label: 'inDrive', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/indrive%20Logo.webp` },
  { label: 'TotalEnergies', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/Total%20Logo.webp` },
  { label: 'Deloitte', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/deloitte%20Logo.webp` },
  { label: 'Nouvelair', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/NouvelAir%20Logo.webp` },
  { label: 'DHL', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/dhl%20Logo.webp` },
  { label: 'Netafim', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/Netafim%20Logo.webp` },
  { label: 'NTT DATA', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/NTT%20Data%20Logo.webp` },
  { label: 'GWM', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/GWM%20Logo.webp` },
  { label: 'Garena', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/Garena%20Logo.webp` },
  { label: 'Yamaha', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/YAMAHA%20Logo.webp` },
  { label: 'AXA', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/AXA%20LOGO.webp` },
  { label: 'AVEVA', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/AVEVA%20Logo.webp` },
  { label: 'TVS', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/TVS%20Logo.webp` },
  { label: 'Modanisa', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/Modanisa%20Logo.webp` },
  { label: 'DiliTrust', src: `${process.env.PUBLIC_URL}/assets/clients-upload/dilitrust.webp` },
  { label: 'EQDOM', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/EQDOM%20Logo.webp` },
  { label: 'Garden Expo', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/GARDEN%20EXPO%20Logo.webp` },
  { label: 'ELM', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/ELM%20Logo.webp` },
  { label: 'Tecno', src: `${process.env.PUBLIC_URL}/assets/our-clients-logos/Tecno%20Logo.webp` },
];

const fallbackProjectItems = [
  {
    label: 'inDrive',
    title: 'inDrive',
    category: 'Media Relations',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/InDrive_CaseStudy.png`,
    href: '#/projects/indrive',
  },
  {
    label: 'Samsung',
    title: 'Samsung',
    category: 'Product Launch',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/Samsung_Case_Study.png`,
    href: '#/projects/samsung',
  },
  {
    label: 'GWM',
    title: 'GWM',
    category: 'Media Events',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/GWM_CaseStudy.png`,
    href: '#/projects/gwm',
  },
  {
    label: 'Garena',
    title: 'Garena',
    category: 'Gaming Community',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/Garena_CaseStudy.png`,
    href: '#/projects',
  },
  {
    label: 'Mifa',
    title: 'MIFA',
    category: 'Exhibition Presence',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/Mifa_CaseStudy.png`,
    href: '#/projects/mifa',
  },
  {
    label: 'DeFacto',
    title: 'DeFacto',
    category: 'Celebrity PR',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/Defacto_Case%20Study.png`,
    href: '#/projects/defacto',
  },
];

const fallbackMediaItems = mediaCoverageItems;

const fallbackTestimonialItems = [
  {
    brand: 'inDrive',
    logo: `${process.env.PUBLIC_URL}/assets/clients-pr/indrive.svg`,
    name: 'Sergey Arzhevskiy',
    role: 'Sr. PR Manager EMEA – inDrive',
    quote:
      '“Boxcom is a key partner for inDrive in Morocco, helping us navigate a highly complex environment. Their team closely monitors media, market dynamics, and tensions between stakeholders, and provides us with fast recommendations on how to respond to sensitive situations. They bring clear solutions grounded in deep knowledge of the ride-hailing market, regulations, and public perception, which has proven essential in guiding our communications.”',
  },
  {
    brand: 'Modanisa',
    logo: `${process.env.PUBLIC_URL}/assets/clients-pr/modanisa.svg`,
    name: 'Ahmed Abuelela',
    role: 'Prev. Mkt Expansion Sr. Mgr, MODANISA / Now Director of E-Commerce MENA – DeFacto',
    quote:
      '“Launching a modest fashion brand in a new market like Morocco was a real challenge, and Boxcom rose to meet it. Their team quickly took ownership of our brand and brought both creativity and cultural understanding to the launch. What impressed us most was their constant availability, along with the direct involvement of leadership, which gave us confidence at every step. Thanks to their commitment, Modanisa successfully entered the Moroccan market with a strong and authentic presence.”',
  },
  {
    brand: 'NTT DATA',
    logo: `${process.env.PUBLIC_URL}/assets/clients-pr/ntt%20data.svg`,
    name: 'Fred Sabbah',
    role: 'CEO, NTT DATA Morocco',
    quote:
      '“We turned to BOXCOM to tackle one of our biggest challenges: recruitment. Through their employer branding strategy across media and social platforms, they helped us shift perceptions, reach the right talent, and hit our recruitment KPIs within a few months. They weren’t just creative. They delivered results.”',
  },
];

const fallbackFaqItems = [
  {
    question: 'Is BOXCOM Africa a PR agency in Morocco?',
    answer:
      'Yes. BOXCOM Africa is a PR agency in Morocco, based in Casablanca and focused on Press Relations, media relations, crisis management and consultancy, Social PR and influencer relations in Morocco and all across Africa.',
  },
  {
    question: 'What makes BOXCOM Africa different from a general PR agency?',
    answer:
      'We combine media relations with marketing thinking. The team looks at the business objective first, then builds the story, media plan and actions around what the client needs the market to understand or believe.',
  },
  {
    question: 'Can BOXCOM Africa support more than one market?',
    answer:
      'Yes. Work is directed from Casablanca, and on-the-ground partners join when the brief needs local media access, language adaptation or cultural context in African markets.',
  },
  {
    question: 'Can BOXCOM Africa help when a story becomes sensitive?',
    answer:
      'Yes. Crisis management and consultancy is part of the media relations practice. We monitor the issue, prepare the response and engage the relevant media to clarify facts or correct context.',
  },
];

const fallbackHomeContent = {
  hero: {
    frist_title_line: 'PR Agency in',
    highlighted_title: 'Morocco',
    thrid_line_prefix: 'for',
    thrid_line_emphasis: 'Africa',
    description:
      'BOXCOM Africa is a Casablanca-based PR agency in Morocco built for brands that need more than distribution. We shape the story, connect it to the right journalists and editors, and keep strategy, media relations, content, monitoring, Social PR and influencer relations moving as one program.',
  },
  insight_heading: 'Business Thinking, Media Relations and Local Context',
  insight_content:
    '<p>A strong press story starts with the business objective.</p><p>We turn it into the right media angle, supported by the right timing, materials and journalist relationships to maximise impact. Through crisis management and consultancy, we help shape, protect and clarify narratives when it matters most.</p><p>As a PR Agency in Casablanca, we also work with trusted partners across Africa to ensure every story is adapted to the language, culture and media landscape of each market.</p>',
  insight_button_label: 'Start a Project',
  insight_button_link: '#/contact',
  services_heading: 'One PR Program, Several Connected Services',
  services_introduction:
    '<p>Clients don\'t need several agencies pulling the message in different directions.</p><p>BOXCOM Africa brings strategy, media, content, monitoring, social and creators under one accountable team, so every action supports the same narrative.</p><p>Senior practitioners stay close to the account, so strategy and delivery never separate.</p>',
  clients_heading: 'Our Clients',
  projects_heading: 'Selected Projects',
  projects_button_label: 'See More',
  projects_button_link: '#/projects',
  coverage_heading: 'Our Media Coverage',
  coverage_description:
    'The right story rarely moves because it was sent to the longest list. It moves because the angle is relevant, the timing is right and the journalist receiving it sees a reason to care.',
  coverage_button_label: 'See More',
  coverage_button_link: '#/coverage',
  testimonials_heading: 'What Clients Say',
  testimonials_introduction:
    'What our clients say about BOXCOM Africa’s responsiveness, market understanding and ability to deliver results.',
  reviews_message: 'Constantly saluted for its strategy, presence and its results',
  reviews_button_label: 'Check our Google Reviews',
  reviews_url: 'https://g.page/r/CXao2Qwv_jJdEBM/review',
  faq_heading: 'Frequently Asked Questions',
  contact_heading: 'Start The Conversation',
  contact_introduction:
    'Tell us the story, the market and the timing. A senior member of the team will help identify the questions worth answering first.',
  contact_map_url: 'https://maps.google.com/maps?q=33.58739,-7.636312&z=17&hl=fr&output=embed',
};

const contactFaqItems = [
  {
    question: 'Who reviews the brief?',
    answer:
      'A senior member of the team reviews the brief and identifies the questions, service or response route that should come next.',
  },
  {
    question: 'What should I include for a live issue?',
    answer:
      'State what happened, where it appeared, what is inaccurate or harmful, who is affected and how urgent the situation is.',
  },
  {
    question: 'What if I am not sure which service I need?',
    answer:
      'Send the brief anyway. Describing the situation in plain terms is enough; the team will identify whether it calls for media relations, content, an event, monitoring, Social PR, creators or crisis support, and explain why.',
  },
  {
    question: 'What happens after I send the brief?',
    answer:
      'The team reviews the situation and comes back with the most relevant next step. If you flag the situation as urgent in the first line, it is prioritized.',
  },
];

const socialItems = [
  {
    label: 'LinkedIn',
    src: `${process.env.PUBLIC_URL}/assets/social/linkedin.png`,
    href: 'https://www.linkedin.com/company/box-com/',
  },
  {
    label: 'Facebook',
    src: `${process.env.PUBLIC_URL}/assets/social/facebook.png`,
    href: 'https://web.facebook.com/boxcomagency',
  },
  {
    label: 'Instagram',
    src: `${process.env.PUBLIC_URL}/assets/social/instagram.png`,
    href: 'https://www.instagram.com/boxcomagency/',
  },
];

function wrapIndex(index, length) {
  return (index + length) % length;
}

function App() {
  const homeContent = fallbackHomeContent;
  const serviceItems = fallbackServiceItems;
  const clientLogos = fallbackClientLogos;
  const projectItems = fallbackProjectItems;
  const mediaItems = fallbackMediaItems;
  const testimonialItems = fallbackTestimonialItems;
  const faqItems = fallbackFaqItems;
  const [activeService, setActiveService] = useState(fallbackServiceItems[0].label);
  const [activeProject, setActiveProject] = useState(2);
  const [projectMotion, setProjectMotion] = useState('next');
  const [isProjectPaused, setIsProjectPaused] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openNavSubmenu, setOpenNavSubmenu] = useState(null);
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === 'undefined' ? 1280 : window.innerWidth
  );
  const [currentHash, setCurrentHash] = useState(() =>
    typeof window === 'undefined' ? '#/' : window.location.hash || '#/'
  );
  const [mediaProjectMap, setMediaProjectMap] = useState(fallbackMediaProjectMap);
  const projectDragStartX = useRef(null);
  const projectDragCurrentX = useRef(null);
  const testimonialDragStartX = useRef(null);
  const testimonialDragCurrentX = useRef(null);
  const idleHeroLoadHandle = useRef(null);
  const heroVideoRef = useRef(null);

  useEffect(() => installContactFormHandler(), []);
  useEffect(() => installNewsletterFormHandler(), []);
  useEffect(() => {
    const controller = new AbortController();

    fetchMediaProjectMap(controller.signal)
      .then(setMediaProjectMap)
      .catch((error) => {
        if (error.name !== 'AbortError') {
          console.warn('Using the saved media coverage mapping because the Google Sheet could not be loaded.', error);
        }
      });

    return () => controller.abort();
  }, []);

  const heroVideoMp4 = `${process.env.PUBLIC_URL}/assets/Videos/hero-video.mp4?v=20260807-hero-3`;
  const heroPoster = `${process.env.PUBLIC_URL}/assets/Videos/hero-poster.jpg?v=20260716-hero-poster-1`;
  const logoSrc = `${process.env.PUBLIC_URL}/assets/logo/logo-original.png`;
  const businessThinkingSrc = `${process.env.PUBLIC_URL}/assets/ABOUTUS_CoWorkers-new.png`;
  const contactPagePortraitSrc = `${process.env.PUBLIC_URL}/assets/imgs/width_1600.webp`;
  const googleReviewsBannerSrc = `${process.env.PUBLIC_URL}/assets/imgs/google%20reviews.webp`;
  const mediaShapeSrc = `${process.env.PUBLIC_URL}/assets/media/africa-map.svg`;
  const isMobileViewport = viewportWidth <= 640;
  const isMobileClientsCarousel = viewportWidth <= 640;
  const visibleClientLogos = clientLogos;
  const normalizedHash = currentHash || '#/';
  const projectsQuery = normalizedHash.startsWith('#/projects?')
    ? new URLSearchParams(normalizedHash.slice(normalizedHash.indexOf('?') + 1))
    : null;
  const selectedMediaSlug = projectsQuery?.get('media') || '';
  const isFrenchHomePage = normalizedHash === '#/fr' || normalizedHash === '#/fr/';
  const displayedHomeContent = isFrenchHomePage ? frenchHomeContent : homeContent;
  const displayedHomeServices = isFrenchHomePage ? frenchHomeServices : serviceItems;
  const displayedHomeFaqItems = isFrenchHomePage ? frenchHomeFaqItems : faqItems;
  const displayedTestimonialItems = isFrenchHomePage ? frenchHomeTestimonials : testimonialItems;
  const displayedProjectItems = isFrenchHomePage
    ? projectItems.map((item) => ({
        ...item,
        category: {
          'Media Relations': 'Relations médias',
          'Product Launch': 'Lancement de produit',
          'Media Events': 'Événements médias',
          'Gaming Community': 'Communauté gaming',
          'Exhibition Presence': 'Présence événementielle',
          'Celebrity PR': 'Relations publiques de célébrité',
        }[item.category] || item.category,
      }))
    : projectItems;
  const visibleTestimonials = displayedTestimonialItems;
  const heroContent = displayedHomeContent.hero || fallbackHomeContent.hero;
  const activeHomeService = displayedHomeServices.some((item) => item.label === activeService)
    ? activeService
    : displayedHomeServices[0].label;
  const isContactPage = normalizedHash === '#/contact';
  const isFrenchContactPage = normalizedHash === '#/fr/contact';
  const isPrivacyPolicyPage = normalizedHash === '#/privacy';
  const isFrenchPrivacyPolicyPage = normalizedHash === '#/fr/privacy';
  const isAboutUsPage = normalizedHash === '#/about';
  const isFrenchAboutUsPage = normalizedHash === '#/fr/about';
  const isProjectsPage = normalizedHash === '#/projects' || normalizedHash.startsWith('#/projects?');
  const isCaseStudyPage = normalizedHash === '#/projects/defacto';
  const isNTTDataCaseStudyPage = normalizedHash === '#/projects/ntt-data';
  const isModanisaCaseStudyPage = normalizedHash === '#/projects/modanisa';
  const isGWMCaseStudyPage = normalizedHash === '#/projects/gwm';
  const isELMCaseStudyPage = normalizedHash === '#/projects/elm';
  const isMifaCaseStudyPage = normalizedHash === '#/projects/mifa';
  const isAgriEdgeCaseStudyPage = normalizedHash === '#/projects/agriedge';
  const isDiliTrustCaseStudyPage = normalizedHash === '#/projects/dilitrust';
  const isEQDOMCaseStudyPage = normalizedHash === '#/projects/eqdom';
  const isEverisCaseStudyPage = normalizedHash === '#/projects/everis';
  const isSamsungCaseStudyPage = normalizedHash === '#/projects/samsung';
  const isInDriveCaseStudyPage = normalizedHash === '#/projects/indrive';
  const isServicesOverviewPage = normalizedHash === '#/services';
  const isFrenchServicesOverviewPage = normalizedHash === '#/fr/services';
  const isInfluencerRelationsPage = normalizedHash === '#/services/influencer-relations';
  const isFrenchInfluencerRelationsPage = normalizedHash === '#/fr/services/influencer-relations';
  const isMediaEventsPage = normalizedHash === '#/services/media-events';
  const isFrenchMediaEventsPage = normalizedHash === '#/fr/services/media-events';
  const isMediaMonitoringPage = normalizedHash === '#/services/media-monitoring';
  const isFrenchMediaMonitoringPage = normalizedHash === '#/fr/services/media-monitoring';
  const isMediaRelationsPage = normalizedHash === '#/services/media-relations';
  const isFrenchMediaRelationsPage = normalizedHash === '#/fr/services/media-relations';
  const isPRContentCreationPage = normalizedHash === '#/services/pr-content-creation';
  const isFrenchPRContentCreationPage = normalizedHash === '#/fr/services/pr-content-creation';
  const isSocialPRPage = normalizedHash === '#/services/social-pr';
  const isFrenchSocialPRPage = normalizedHash === '#/fr/services/social-pr';
  const isBlogPage = normalizedHash === '#/blog' || normalizedHash.startsWith('#/blog/');
  const blogSlug = normalizedHash.startsWith('#/blog/') ? normalizedHash.slice('#/blog/'.length) : '';
  const isStandalonePage =
    isContactPage ||
    isFrenchContactPage ||
    isPrivacyPolicyPage ||
    isFrenchPrivacyPolicyPage ||
    isAboutUsPage ||
    isFrenchAboutUsPage ||
    isCaseStudyPage ||
    isNTTDataCaseStudyPage ||
    isModanisaCaseStudyPage ||
    isGWMCaseStudyPage ||
    isELMCaseStudyPage ||
    isMifaCaseStudyPage ||
    isAgriEdgeCaseStudyPage ||
    isDiliTrustCaseStudyPage ||
    isEQDOMCaseStudyPage ||
    isEverisCaseStudyPage ||
    isSamsungCaseStudyPage ||
    isInDriveCaseStudyPage ||
    isProjectsPage ||
    isServicesOverviewPage ||
    isFrenchServicesOverviewPage ||
    isInfluencerRelationsPage ||
    isFrenchInfluencerRelationsPage ||
    isMediaEventsPage ||
    isFrenchMediaEventsPage ||
    isMediaMonitoringPage ||
    isFrenchMediaMonitoringPage ||
    isMediaRelationsPage ||
    isFrenchMediaRelationsPage ||
    isPRContentCreationPage ||
    isFrenchPRContentCreationPage ||
    isSocialPRPage ||
    isFrenchSocialPRPage ||
    isBlogPage;

  const showPreviousProject = () => {
    setProjectMotion('prev');
    setActiveProject((current) => current - 1);
  };

  const showNextProject = () => {
    setProjectMotion('next');
    setActiveProject((current) => current + 1);
  };

  const beginProjectDrag = (clientX) => {
    projectDragStartX.current = clientX;
    projectDragCurrentX.current = clientX;
  };

  const updateProjectDrag = (clientX) => {
    if (projectDragStartX.current === null) {
      return;
    }

    projectDragCurrentX.current = clientX;
  };

  const endProjectDrag = () => {
    if (projectDragStartX.current === null || projectDragCurrentX.current === null) {
      projectDragStartX.current = null;
      projectDragCurrentX.current = null;
      return;
    }

    const swipeDistance = projectDragStartX.current - projectDragCurrentX.current;
    const swipeThreshold = 46;

    if (swipeDistance > swipeThreshold) {
      showNextProject();
    } else if (swipeDistance < -swipeThreshold) {
      showPreviousProject();
    }

    projectDragStartX.current = null;
    projectDragCurrentX.current = null;
  };

  const handleProjectTouchStart = (event) => {
    if (event.target.closest('.project-card.is-center')) return;
    beginProjectDrag(event.touches[0].clientX);
  };

  const handleProjectTouchMove = (event) => {
    updateProjectDrag(event.touches[0].clientX);
  };

  const handleProjectMouseDown = (event) => {
    if (event.target.closest('.project-card.is-center')) return;
    beginProjectDrag(event.clientX);
  };

  const handleProjectMouseMove = (event) => {
    updateProjectDrag(event.clientX);
  };

  const handleProjectMouseUp = () => {
    endProjectDrag();
  };

  const handleProjectMouseLeave = () => {
    setIsProjectPaused(false);

    if (projectDragStartX.current !== null) {
      endProjectDrag();
    }
  };

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) => wrapIndex(current - 1, displayedTestimonialItems.length));
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) => wrapIndex(current + 1, displayedTestimonialItems.length));
  };

  const beginTestimonialDrag = (clientX) => {
    testimonialDragStartX.current = clientX;
    testimonialDragCurrentX.current = clientX;
  };

  const updateTestimonialDrag = (clientX) => {
    if (testimonialDragStartX.current === null) {
      return;
    }

    testimonialDragCurrentX.current = clientX;
  };

  const endTestimonialDrag = () => {
    if (testimonialDragStartX.current === null || testimonialDragCurrentX.current === null) {
      testimonialDragStartX.current = null;
      testimonialDragCurrentX.current = null;
      return;
    }

    const swipeDistance = testimonialDragStartX.current - testimonialDragCurrentX.current;
    const swipeThreshold = 42;

    if (swipeDistance > swipeThreshold) {
      showNextTestimonial();
    } else if (swipeDistance < -swipeThreshold) {
      showPreviousTestimonial();
    }

    testimonialDragStartX.current = null;
    testimonialDragCurrentX.current = null;
  };

  const handleTestimonialTouchStart = (event) => {
    beginTestimonialDrag(event.touches[0].clientX);
  };

  const handleTestimonialTouchMove = (event) => {
    updateTestimonialDrag(event.touches[0].clientX);
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      if (window.innerWidth > 1200) {
        setIsMenuOpen(false);
        setOpenNavSubmenu(null);
      }
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      setIsMenuOpen(false);
      setOpenNavSubmenu(null);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('hashchange', handleHashChange);
    handleResize();
    handleHashChange();
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isStandalonePage || isProjectPaused) {
      return undefined;
    }

    const autoRotate = window.setInterval(() => {
      setProjectMotion('next');
      setActiveProject((current) => current + 1);
    }, 5000);

    return () => {
      window.clearInterval(autoRotate);
    };
  }, [isProjectPaused, isStandalonePage]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [normalizedHash]);

  useEffect(() => {
    const isHomePage = normalizedHash === '#/' || isFrenchHomePage;
    if (!isHomePage) {
      return undefined;
    }

    const previousTitle = document.title;
    const previousLanguage = document.documentElement.lang;
    let metaDescription = document.querySelector('meta[name="description"]');
    const createdMetaDescription = !metaDescription;
    const previousDescription = metaDescription?.getAttribute('content') || '';
    const seo = displayedHomeContent.seo || {};

    document.title = seo.title || 'BOXCOM Africa | PR Agency in Morocco';
    document.documentElement.lang = isFrenchHomePage ? 'fr' : 'en';

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seo.description || fallbackHomeContent.hero.description);

    return () => {
      document.title = previousTitle;
      document.documentElement.lang = previousLanguage;
      if (createdMetaDescription) {
        metaDescription.remove();
      } else {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, [displayedHomeContent, isFrenchHomePage, normalizedHash]);

  useEffect(() => {
    if (isStandalonePage) {
      setShouldLoadHeroVideo(false);
      return undefined;
    }

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      idleHeroLoadHandle.current = window.requestIdleCallback(() => {
        setShouldLoadHeroVideo(true);
      }, { timeout: 600 });

      return () => {
        if (idleHeroLoadHandle.current !== null) {
          window.cancelIdleCallback(idleHeroLoadHandle.current);
        }
      };
    }

    const timeoutId = window.setTimeout(() => {
      setShouldLoadHeroVideo(true);
    }, 200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isStandalonePage]);

  useEffect(() => {
    if (!shouldLoadHeroVideo || isStandalonePage) {
      return undefined;
    }

    const video = heroVideoRef.current;
    if (!video) {
      return undefined;
    }

    const keepPlaying = () => {
      if (video.paused) {
        video.play().catch(() => {});
      }
    };

    const restartLoop = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    keepPlaying();
    video.addEventListener('ended', restartLoop);
    video.addEventListener('stalled', keepPlaying);
    video.addEventListener('suspend', keepPlaying);
    video.addEventListener('waiting', keepPlaying);
    video.addEventListener('pause', keepPlaying);

    return () => {
      video.removeEventListener('ended', restartLoop);
      video.removeEventListener('stalled', keepPlaying);
      video.removeEventListener('suspend', keepPlaying);
      video.removeEventListener('waiting', keepPlaying);
      video.removeEventListener('pause', keepPlaying);
    };
  }, [heroVideoMp4, isStandalonePage, shouldLoadHeroVideo]);

  const renderHeader = (locale = null, languageSwitchHref = null) => {
    const isFrench = locale === 'fr';
    const showLanguageSwitch = locale !== null;
    const localizedMenuItems = isFrench ? frenchMenuItems : menuItems;
    const localizedServiceItems = isFrench ? frenchServices : serviceItems;

    return <>
      <header className="site-header">
        <div className="site-header__inner">
        <a
          className="brand"
          href={isFrench ? '#/fr' : '#/'}
          aria-label="Boxcom Africa"
          onClick={() => {
            setIsMenuOpen(false);
            setOpenNavSubmenu(null);
          }}
        >
          <img className="brand__image" src={logoSrc} alt="" aria-hidden="true" />
        </a>

        <button
          type="button"
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => {
            setIsMenuOpen((current) => {
              if (current) {
                setOpenNavSubmenu(null);
              }
              return !current;
            });
          }}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="primary-menu" className={`site-header__menu${isMenuOpen ? ' is-open' : ''}`}>
          <nav className="main-nav" aria-label="Primary">
            {localizedMenuItems.map((item) => {
              const isActive =
                normalizedHash === item.href ||
                normalizedHash.startsWith(`${item.href}/`) ||
                normalizedHash.startsWith(`${item.href}?`);

              if (item.href === '#/services' || item.href === '#/fr/services') {
                const submenuItems = localizedServiceItems;
                const isSubmenuOpen = openNavSubmenu === item.label;
                const submenuId = `main-nav-${item.label.toLowerCase()}-submenu`;

                return (
                  <div
                    key={item.label}
                    className={`main-nav__item main-nav__item--has-dropdown${isSubmenuOpen ? ' is-submenu-open' : ''}`}
                  >
                    <div className="main-nav__item-label">
                      <a
                        className={`main-nav__link${isActive ? ' is-active' : ''}`}
                        href={item.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenNavSubmenu(null);
                        }}
                      >
                        {item.label}
                      </a>
                      <button
                        type="button"
                        className="main-nav__dropdown-toggle"
                        aria-label={`${isSubmenuOpen ? 'Close' : 'Open'} ${item.label} submenu`}
                        aria-haspopup="true"
                        aria-expanded={isSubmenuOpen}
                        aria-controls={submenuId}
                        onClick={(event) => {
                          if (isSubmenuOpen) {
                            event.currentTarget.blur();
                          }
                          setOpenNavSubmenu(isSubmenuOpen ? null : item.label);
                        }}
                      >
                        <span aria-hidden="true" />
                      </button>
                    </div>

                    <div id={submenuId} className="main-nav__dropdown" aria-label={`${item.label} menu`}>
                      <a
                        className="main-nav__dropdown-link"
                        href={item.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenNavSubmenu(null);
                        }}
                      >
                        {isFrench ? 'Tous les services' : 'All Services'}
                      </a>
                      {submenuItems.map((submenuItem) => (
                        <a
                          key={submenuItem.label}
                          className="main-nav__dropdown-link"
                          href={submenuItem.href || item.href}
                          onClick={() => {
                            setActiveService(submenuItem.label);
                            setIsMenuOpen(false);
                            setOpenNavSubmenu(null);
                          }}
                        >
                          {submenuItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.label}
                  className={`main-nav__link${isActive ? ' is-active' : ''}`}
                  href={item.href}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setOpenNavSubmenu(null);
                  }}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="header-actions">
            {showLanguageSwitch && <a
              className="language-switch"
              href={languageSwitchHref || (isFrench ? '#/services' : '#/fr/services')}
              lang={isFrench ? 'en' : 'fr'}
              hrefLang={isFrench ? 'en' : 'fr'}
              aria-label={isFrench ? 'View this page in English' : 'Voir cette page en français'}
            >
              {isFrench ? 'EN' : 'FR'}
            </a>}
            <a
              className="header-cta"
              href={isFrench ? '#/fr/contact' : '#/contact'}
              onClick={() => {
                setIsMenuOpen(false);
                setOpenNavSubmenu(null);
              }}
            >
              {isFrench ? 'Parler à notre équipe RP' : 'Talk to Our PR Team'} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        </div>
      </header>
      <div className="site-header-spacer" aria-hidden="true" />
    </>;
  };

  const renderSiteFooter = (locale = 'en') => {
    const isFrench = locale === 'fr';

    return <>
      <div className="contact-section__bottom">
        <div className="contact-details">
          <div>
            <h3>{isFrench ? 'Téléphone' : 'Phone'}</h3>
            <p>
              <a href="tel:+212522219933">+212 5 22 21 99 33</a>
            </p>
          </div>
          <div>
            <h3>Email</h3>
            <p>
              <a href="mailto:contact@box-com.com">contact@box-com.com</a>
            </p>
          </div>
          <div>
            <h3>{isFrench ? 'Adresse' : 'Address'}</h3>
            <p>3 Rue El Jihani, Quartier Racine, Casablanca, Morocco 20250</p>
          </div>
        </div>

        <div className="footer-menu">
          <h3>Menu</h3>
          <a href={isFrench ? '#/fr' : '#/'}>{isFrench ? 'ACCUEIL' : 'HOMEPAGE'}</a>
          <a href={isFrench ? '#/fr/services' : '#/services'}>SERVICES</a>
          <a href="#/projects">{isFrench ? 'ÉTUDES DE CAS' : 'CASE STUDIES'}</a>
          <a href="#/blog">BLOG</a>
          <a href={isFrench ? '#/fr/about' : '#/about'}>{isFrench ? 'À PROPOS' : 'ABOUT US'}</a>
        </div>

        <div className="footer-social">
          <div className="footer-social__icons">
            {socialItems.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                <img src={item.src} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>{isFrench ? 'Recevez nos actualités et promotions par e-mail !' : 'Receive news and promotions by email !'}</p>
            <form className="newsletter__field newsletter-form">
              <span>@</span>
              <input
                type="email"
                name="newsletterEmail"
                placeholder={isFrench ? 'Votre adresse e-mail' : 'Your email address'}
                aria-label={isFrench ? 'Votre adresse e-mail' : 'Your email address'}
                autoComplete="email"
                required
              />
              <button type="submit" aria-label="Subscribe to the newsletter">→</button>
            </form>
            <p className="newsletter-status" role="status" aria-live="polite" />
          </div>
        </div>
      </div>

      <div className="footer-cta">
        <div className="footer-cta__line" />
        <a href={isFrench ? '#/fr/contact' : '#/contact'} className="footer-cta__button">
          {isFrench ? 'Commencer' : 'Get Started'}
        </a>
      </div>

      <div className="footer-legal">
        <a href={isFrench ? '#/fr/privacy' : '#/privacy'}>{isFrench ? 'POLITIQUE DE CONFIDENTIALITÉ' : 'PRIVACY POLICY'}</a>
      </div>
    </>;
  };

  if (isPrivacyPolicyPage) {
    return (
      <PrivacyPolicyPage
        locale="en"
        header={renderHeader('en', '#/fr/privacy')}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isFrenchPrivacyPolicyPage) {
    return (
      <PrivacyPolicyPage
        locale="fr"
        header={renderHeader('fr', '#/privacy')}
        footer={renderSiteFooter('fr')}
      />
    );
  }

  if (isInfluencerRelationsPage) {
    return (
      <InfluencerRelationsPage
        locale="en"
        header={renderHeader('en', '#/fr/services/influencer-relations')}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isFrenchInfluencerRelationsPage) {
    return (
      <InfluencerRelationsPage
        locale="fr"
        header={renderHeader('fr', '#/services/influencer-relations')}
        footer={renderSiteFooter('fr')}
      />
    );
  }

  if (isMediaEventsPage) {
    return (
      <MediaEventsPage
        header={renderHeader('en', '#/fr/services/media-events')}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isFrenchMediaEventsPage) {
    return (
      <FrenchMediaEventsPage
        header={renderHeader('fr', '#/services/media-events')}
        footer={renderSiteFooter('fr')}
      />
    );
  }

  if (isMediaMonitoringPage) {
    return (
      <MediaMonitoringPage
        header={renderHeader('en', '#/fr/services/media-monitoring')}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isFrenchMediaMonitoringPage) {
    return (
      <FrenchMediaMonitoringPage
        header={renderHeader('fr', '#/services/media-monitoring')}
        footer={renderSiteFooter('fr')}
      />
    );
  }

  if (isAboutUsPage) {
    return (
      <AboutUsPage
        header={renderHeader('en', '#/fr/about')}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isFrenchAboutUsPage) {
    return (
      <FrenchAboutUsPage
        header={renderHeader('fr', '#/about')}
        footer={renderSiteFooter('fr')}
      />
    );
  }

  if (isProjectsPage) {
    return (
      <ProjectsPage
        header={renderHeader()}
        footer={renderSiteFooter()}
        selectedMediaSlug={selectedMediaSlug}
        mediaProjectMap={mediaProjectMap}
      />
    );
  }

  if (isCaseStudyPage) {
    return (
      <CaseStudyPage
        header={renderHeader()}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isNTTDataCaseStudyPage) {
    return (
      <NTTDataCaseStudyPage
        header={renderHeader()}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isModanisaCaseStudyPage) {
    return (
      <ModanisaCaseStudyPage
        header={renderHeader()}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isGWMCaseStudyPage) {
    return (
      <GWMCaseStudyPage
        header={renderHeader()}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isELMCaseStudyPage) {
    return (
      <ELMCaseStudyPage
        header={renderHeader()}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isMifaCaseStudyPage) {
    return (
      <MifaCaseStudyPage
        header={renderHeader()}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isAgriEdgeCaseStudyPage) {
    return <AgriEdgeCaseStudyPage header={renderHeader()} footer={renderSiteFooter()} />;
  }

  if (isDiliTrustCaseStudyPage) {
    return <DiliTrustCaseStudyPage header={renderHeader()} footer={renderSiteFooter()} />;
  }

  if (isEQDOMCaseStudyPage) {
    return <EQDOMCaseStudyPage header={renderHeader()} footer={renderSiteFooter()} />;
  }

  if (isEverisCaseStudyPage) {
    return <EverisCaseStudyPage header={renderHeader()} footer={renderSiteFooter()} />;
  }

  if (isSamsungCaseStudyPage) {
    return <SamsungCaseStudyPage header={renderHeader()} footer={renderSiteFooter()} />;
  }

  if (isInDriveCaseStudyPage) {
    return <InDriveCaseStudyPage header={renderHeader()} footer={renderSiteFooter()} />;
  }

  if (isServicesOverviewPage) {
    return (
      <ServicesOverviewPage
        header={renderHeader('en')}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isFrenchServicesOverviewPage) {
    return (
      <ServicesOverviewPage
        header={renderHeader('fr')}
        footer={renderSiteFooter('fr')}
        services={frenchServices}
        content={frenchServicesContent}
      />
    );
  }

  if (isMediaRelationsPage) {
    return (
      <MediaRelationsPage
        header={renderHeader('en', '#/fr/services/media-relations')}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isFrenchMediaRelationsPage) {
    return (
      <FrenchMediaRelationsPage
        header={renderHeader('fr', '#/services/media-relations')}
        footer={renderSiteFooter('fr')}
      />
    );
  }

  if (isPRContentCreationPage) {
    return (
      <PRContentCreationPage
        header={renderHeader('en', '#/fr/services/pr-content-creation')}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isFrenchPRContentCreationPage) {
    return (
      <FrenchPRContentCreationPage
        header={renderHeader('fr', '#/services/pr-content-creation')}
        footer={renderSiteFooter('fr')}
      />
    );
  }

  if (isSocialPRPage) {
    return (
      <SocialPRPage
        header={renderHeader('en', '#/fr/services/social-pr')}
        footer={renderSiteFooter()}
      />
    );
  }

  if (isFrenchSocialPRPage) {
    return (
      <FrenchSocialPRPage
        header={renderHeader('fr', '#/services/social-pr')}
        footer={renderSiteFooter('fr')}
      />
    );
  }

  if (isBlogPage) {
    return (
      <BlogPage
        header={renderHeader()}
        footer={renderSiteFooter()}
        slug={blogSlug}
      />
    );
  }

  if (isContactPage) {
    return (
      <main className="app app--contact-page">
        {renderHeader('en', '#/fr/contact')}

        <section className="contact-page" aria-label="Contact Us">
          <div className="contact-page__inner">
            <div className="contact-page__header">
              <h1 className="contact-page__title">Get In Touch!</h1>
            </div>

            <div className="contact-page__layout">
              <div className="contact-page__art" aria-hidden="true">
                <img src={contactPagePortraitSrc} alt="" />
              </div>

              <div className="contact-page__card">
                <form className="contact-page-form" onSubmit={(event) => event.preventDefault()}>
                  <div className="contact-page-form__row">
                    <label>
                      <span>Your Name *</span>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        autoComplete="name"
                        required
                      />
                    </label>
                    <label>
                      <span>Your Company *</span>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your Company"
                        autoComplete="organization"
                        required
                      />
                    </label>
                  </div>

                  <label>
                    <span>Your Email *</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      autoComplete="email"
                      required
                    />
                  </label>

                  <label>
                    <span>Message</span>
                    <textarea name="message" placeholder="Type your message here." rows="5" />
                  </label>

                  <button type="submit" className="contact-page-form__button contact-page-form__button--primary">
                    Send Message
                  </button>
                  <a href="#/services" className="contact-page-form__button contact-page-form__button--secondary">
                    Review Services First
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-page-faq internal-faq" aria-labelledby="contact-faq-title">
          <div className="contact-page-faq__inner">
            <h2 className="internal-faq__title" id="contact-faq-title">Frequently Asked Questions</h2>
            <div className="contact-page-faq__list internal-faq__list">
              {contactFaqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <article className={`contact-page-faq__item internal-faq__item${isOpen ? ' is-open' : ''}`} key={item.question}>
                    <h3>
                      <button
                        className="internal-faq__button"
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      >
                        <span>{item.question}</span>
                        <span className="contact-page-faq__icon internal-faq__icon" aria-hidden="true" />
                      </button>
                    </h3>
                    <div className="contact-page-faq__answer internal-faq__answer" hidden={!isOpen}>
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="contact-section contact-page-brief">
          <div className="contact-section__inner">
            <h2 className="contact-section__title">Talk Through the Brief</h2>
            <p className="contact-section__intro">
              Tell us the story, the market and the timing. A senior member of the team will help identify the
              questions worth answering first.
            </p>

            <div className="contact-section__top">
              <div className="contact-map">
                <iframe
                  title="BOXCOM Africa location"
                  src="https://maps.google.com/maps?q=33.58739,-7.636312&z=17&hl=fr&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <div className="contact-form__row">
                  <label>
                    <span>Your Name *</span>
                    <input type="text" name="name" placeholder="Your Full Name" autoComplete="name" required />
                  </label>
                  <label>
                    <span>Your Company *</span>
                    <input type="text" name="company" placeholder="Your Company" autoComplete="organization" required />
                  </label>
                </div>
                <label>
                  <span>Your Email *</span>
                  <input type="email" name="email" placeholder="Your Email" autoComplete="email" required />
                </label>
                <label>
                  <span>Message</span>
                  <textarea placeholder="Type your message here." rows="5" />
                </label>
                <button type="submit" className="primary-pink-button contact-form__submit">
                  Send Message
                </button>
              </form>
            </div>

            {renderSiteFooter()}
          </div>
        </section>
      </main>
    );
  }

  if (isFrenchContactPage) {
    return (
      <FrenchContactPage
        header={renderHeader('fr', '#/contact')}
        footer={renderSiteFooter('fr')}
        portraitSrc={contactPagePortraitSrc}
      />
    );
  }

  return (
    <main className={`app${isFrenchHomePage ? ' app--fr-home' : ''}`}>
      <div className="hero-frame">
        {renderHeader(isFrenchHomePage ? 'fr' : 'en', isFrenchHomePage ? '#/' : '#/fr')}

        <section className="hero-section" aria-label={isFrenchHomePage ? 'Présentation' : 'Hero'}>
          <div className="hero-section__inner">
            <div className="hero-copy">
              <h1 className="hero-title">
                <span className="hero-title__line">{heroContent.frist_title_line}</span>
                <span className="hero-title__line hero-title__line--orange">{heroContent.highlighted_title}</span>
                <span className="hero-title__line">
                  <em>{heroContent.thrid_line_prefix}</em> <strong>{heroContent.thrid_line_emphasis}</strong>
                </span>
              </h1>
              <p className="hero-description">{heroContent.description}</p>
            </div>

            <div className="hero-media" aria-hidden="true">
              <img
                className="hero-media__poster"
                src={heroPoster}
                alt=""
                fetchPriority="high"
                loading="eager"
                decoding="async"
              />
              {shouldLoadHeroVideo && (
                <video
                  ref={heroVideoRef}
                  className="hero-media__video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={heroPoster}
                  disablePictureInPicture
                >
                  <source src={heroVideoMp4} type="video/mp4" />
                </video>
              )}
              <div className="hero-media__overlay" />
            </div>
          </div>
        </section>
      </div>

      <section className="insight-section">
        <div className="insight-section__inner">
          <div className="insight-art" aria-hidden="true">
            <img className="insight-art__image insight-art__image--full" src={businessThinkingSrc} alt="" />
          </div>

          <div className="insight-copy">
            <h2 className="section-title">{displayedHomeContent.insight_heading}</h2>
            <div
              className="insight-copy__content"
              dangerouslySetInnerHTML={{ __html: displayedHomeContent.insight_content }}
            />

            <a
              className="primary-pink-button"
              href={displayedHomeContent.insight_button_link || '#/contact'}
            >
              {displayedHomeContent.insight_button_label}
            </a>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-section__inner">
          <div className="services-section__heading">
            <h2 className="section-title section-title--services">{displayedHomeContent.services_heading}</h2>
            <div
              className="services-intro"
              dangerouslySetInnerHTML={{ __html: displayedHomeContent.services_introduction }}
            />
          </div>

          <div className="services-accordion" aria-label={isFrenchHomePage ? 'Services complémentaires' : 'Connected services'}>
            {displayedHomeServices.map((item) => {
              const isActive = item.label === activeHomeService;
              const panelId = `service-panel-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
              const buttonId = `service-button-${item.label.toLowerCase().replace(/\s+/g, '-')}`;

              return (
                <section key={item.label} className={`service-item${isActive ? ' is-active' : ''}`}>
                  {!isActive && (
                    <h3 className="service-item__heading">
                      <button
                        id={buttonId}
                        type="button"
                        className="service-tab"
                        onClick={() => setActiveService(item.label)}
                        aria-expanded="false"
                        aria-controls={panelId}
                      >
                        <span className="service-tab__label">{item.label}</span>
                      </button>
                    </h3>
                  )}

                  <div
                    id={panelId}
                    className={`service-panel${isActive ? ' is-active' : ''}`}
                    aria-labelledby={buttonId}
                    aria-hidden={!isActive}
                  >
                    <a className="service-card" href={item.href} tabIndex={isActive ? 0 : -1}>
                      <img className="service-card__image" src={item.image} alt={item.title} />
                      <div className="service-card__overlay" />
                      <div className="service-card__content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </a>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="clients-section__inner">
          <h2 className="clients-section__title">{displayedHomeContent.clients_heading}</h2>
          {isMobileClientsCarousel ? (
            <div className="clients-ticker" aria-label={isFrenchHomePage ? 'Nos clients' : 'Our clients'}>
              <div className="clients-ticker__track">
                {[...clientLogos, ...clientLogos].map((item, index) => (
                  <div key={`${item.label}-${index}`} className="clients-grid__item clients-grid__item--ticker">
                    <img
                      className={item.className || ''}
                      src={item.src}
                      alt={index < clientLogos.length ? item.label : ''}
                      aria-hidden={index >= clientLogos.length}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="clients-grid">
              {visibleClientLogos.map((item) => (
                <div key={item.label} className="clients-grid__item">
                  <img className={item.className || ''} src={item.src} alt={item.label} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="projects-section__inner">
          <h2 className="projects-section__title">{displayedHomeContent.projects_heading}</h2>

          <div className="projects-switcher">
            <button
              type="button"
              className="projects-switcher__arrow projects-switcher__arrow--left"
              aria-label={isFrenchHomePage ? 'Projet précédent' : 'Previous project'}
              onClick={showPreviousProject}
              onMouseEnter={() => setIsProjectPaused(true)}
              onMouseLeave={() => setIsProjectPaused(false)}
              onFocus={() => setIsProjectPaused(true)}
              onBlur={() => setIsProjectPaused(false)}
            >
              ‹
            </button>

            <div
              className={`projects-switcher__track is-animating-${projectMotion}${isProjectPaused ? ' is-paused' : ''}`}
              onMouseEnter={() => setIsProjectPaused(true)}
              onMouseDown={handleProjectMouseDown}
              onMouseMove={handleProjectMouseMove}
              onMouseUp={handleProjectMouseUp}
              onMouseLeave={handleProjectMouseLeave}
              onTouchStart={handleProjectTouchStart}
              onTouchMove={handleProjectTouchMove}
              onTouchEnd={endProjectDrag}
              onTouchCancel={endProjectDrag}
            >
              {[-3, -2, -1, 0, 1, 2, 3].map((offset) => {
                const virtualProjectIndex = activeProject + offset;
                const project = displayedProjectItems[wrapIndex(virtualProjectIndex, displayedProjectItems.length)];
                const positionClass = {
                  '-3': 'is-offstage is-offstage-left',
                  '-2': 'is-edge is-edge-left',
                  '-1': 'is-side is-side-left',
                  0: 'is-center',
                  1: 'is-side is-side-right',
                  2: 'is-edge is-edge-right',
                  3: 'is-offstage is-offstage-right',
                }[offset];
                const wrapEntryClass =
                  (projectMotion === 'next' && offset === 2)
                    ? 'is-wrap-entry-right'
                    : '';
                const isCenterProject = offset === 0;
                const ProjectCardTag = isCenterProject ? 'a' : 'article';

                return (
                  <ProjectCardTag
                    key={virtualProjectIndex}
                    className={`project-card ${positionClass}${wrapEntryClass ? ` ${wrapEntryClass}` : ''}`}
                    href={isCenterProject ? project.href : undefined}
                    aria-label={isCenterProject ? `${isFrenchHomePage ? 'Voir le projet' : 'View project'} ${project.title}` : undefined}
                    onMouseEnter={() => setIsProjectPaused(true)}
                  >
                    <img className="project-card__image" src={project.image} alt={project.title} draggable="false" />
                    <div className="project-card__overlay" />
                    <div className="project-card__content">
                      <h3 className={project.title.length > 5 ? 'is-long-title' : ''}>{project.title}</h3>
                      <p>{project.category}</p>
                    </div>
                  </ProjectCardTag>
                );
              })}
            </div>

            <button
              type="button"
              className="projects-switcher__arrow projects-switcher__arrow--right"
              aria-label={isFrenchHomePage ? 'Projet suivant' : 'Next project'}
              onClick={showNextProject}
              onMouseEnter={() => setIsProjectPaused(true)}
              onMouseLeave={() => setIsProjectPaused(false)}
              onFocus={() => setIsProjectPaused(true)}
              onBlur={() => setIsProjectPaused(false)}
            >
              ›
            </button>
          </div>

          <a
            className="primary-pink-button primary-pink-button--projects"
            href={displayedHomeContent.projects_button_link || '#/projects'}
          >
            {displayedHomeContent.projects_button_label}
          </a>
        </div>
      </section>

      <section className="coverage-section">
        <div className="coverage-section__inner">
          <div className="coverage-section__copy">
            <h2 className="coverage-section__title">{displayedHomeContent.coverage_heading}</h2>
            <p>{displayedHomeContent.coverage_description}</p>
          </div>

          <div className="coverage-showcase">
            <div className="coverage-logo-grid" aria-label={isFrenchHomePage ? 'Médias ayant couvert les projets de BOXCOM Africa' : 'Media outlets covering BOXCOM Africa work'}>
              {mediaItems.map((item) => (
                <a
                  className="coverage-logo-grid__item"
                  href={`#/projects?media=${encodeURIComponent(item.slug)}`}
                  key={item.slug}
                  aria-label={`${isFrenchHomePage ? 'Voir les projets couverts par' : 'View projects covered by'} ${item.label}`}
                  title={item.label}
                >
                  <img className={item.className || ''} src={item.logo} alt={item.label} loading="lazy" />
                </a>
              ))}
            </div>
            <img className="coverage-section__shape" src={mediaShapeSrc} alt="" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-section__inner">
          <h2 className="testimonials-section__title">{displayedHomeContent.testimonials_heading}</h2>
          <p className="testimonials-section__intro">{displayedHomeContent.testimonials_introduction}</p>

          <div className="testimonials-slider">
            <button
              type="button"
              className="testimonials-slider__arrow testimonials-slider__arrow--left"
              aria-label={isFrenchHomePage ? 'Témoignage précédent' : 'Previous testimonial'}
              onClick={showPreviousTestimonial}
            >
              ‹
            </button>

            <div
              className="testimonials-slider__viewport"
              onTouchStart={handleTestimonialTouchStart}
              onTouchMove={handleTestimonialTouchMove}
              onTouchEnd={endTestimonialDrag}
              onTouchCancel={endTestimonialDrag}
            >
              <div
                className={`testimonials-slider__track${isMobileViewport ? ' is-mobile' : ''}`}
                style={
                  isMobileViewport
                    ? {
                        '--testimonial-count': displayedTestimonialItems.length,
                        width: `${displayedTestimonialItems.length * 100}%`,
                        transform: `translateX(-${activeTestimonial * (100 / displayedTestimonialItems.length)}%)`,
                      }
                    : undefined
                }
              >
                {visibleTestimonials.map((item, index) => (
                  <article key={`${item.brand}-${index}`} className="testimonial-card">
                    <div className="testimonial-card__brand">
                      {item.logo ? <img src={item.logo} alt={item.brand} /> : <span>{item.brand}</span>}
                    </div>
                    <p className="testimonial-card__name">{item.name}</p>
                    <p className="testimonial-card__role">{item.role}</p>
                    <blockquote>{item.quote}</blockquote>
                  </article>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="testimonials-slider__arrow testimonials-slider__arrow--right"
              aria-label={isFrenchHomePage ? 'Témoignage suivant' : 'Next testimonial'}
              onClick={showNextTestimonial}
            >
              ›
            </button>
          </div>

          <div className="testimonials-slider__pagination" aria-label={isFrenchHomePage ? 'Pagination des témoignages' : 'Testimonials pagination'}>
            {displayedTestimonialItems.map((item, index) => (
              <button
                key={`${item.brand}-${index}`}
                type="button"
                className={`testimonials-slider__dot${index === activeTestimonial ? ' is-active' : ''}`}
                aria-label={isFrenchHomePage ? `Afficher le témoignage ${index + 1}` : `Go to testimonial ${index + 1}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>

          <div className="review-banner">
            <div className="review-banner__rating">
              <img className="review-banner__image" src={googleReviewsBannerSrc} alt="Google Reviews" />
            </div>
            <p className="review-banner__message">
              {displayedHomeContent.reviews_message}
            </p>
            <a className="primary-pink-button review-banner__cta" href={displayedHomeContent.reviews_url || '#/reviews'}>
              {displayedHomeContent.reviews_button_label}
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-section__inner">
          <h2 className="faq-section__title">{displayedHomeContent.faq_heading}</h2>
          <div className="faq-list">
            {displayedHomeFaqItems.map((item, index) => {
              const isOpen = index === openFaq;
              return (
                <section key={item.question} className={`faq-item${isOpen ? ' is-open' : ''}`}>
                  <h3 className="faq-item__heading">
                    <button
                      type="button"
                      className="faq-item__button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="faq-item__icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  {isOpen && item.answer && <div className="faq-item__panel">{item.answer}</div>}
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-section__inner">
          <h2 className="contact-section__title">{displayedHomeContent.contact_heading}</h2>
          <p className="contact-section__intro">{displayedHomeContent.contact_introduction}</p>

          <div className="contact-section__top">
            <div className="contact-map">
              <iframe
                title={isFrenchHomePage ? 'Localisation de BOXCOM Africa' : 'BOXCOM Africa location'}
                src={displayedHomeContent.contact_map_url}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <form className="contact-form">
              <div className="contact-form__row">
                <label>
                  <span>{isFrenchHomePage ? 'Votre nom *' : 'Your Name *'}</span>
                  <input type="text" name="name" placeholder={isFrenchHomePage ? 'Votre nom complet' : 'Your Full Name'} autoComplete="name" required />
                </label>
                <label>
                  <span>{isFrenchHomePage ? 'Votre entreprise *' : 'Your Company *'}</span>
                  <input type="text" name="company" placeholder={isFrenchHomePage ? 'Votre entreprise' : 'Your Company'} autoComplete="organization" required />
                </label>
              </div>
              <label>
                <span>{isFrenchHomePage ? 'Votre e-mail *' : 'Your Email *'}</span>
                <input type="email" name="email" placeholder={isFrenchHomePage ? 'Votre e-mail' : 'Your Email'} autoComplete="email" required />
              </label>
              <label>
                <span>Message</span>
                <textarea placeholder={isFrenchHomePage ? 'Écrivez votre message ici.' : 'Type your message here.'} rows="5" />
              </label>
              <button type="submit" className="primary-pink-button contact-form__submit">
                {isFrenchHomePage ? 'Envoyer le message' : 'Share Your Brief'}
              </button>
            </form>
          </div>

          {renderSiteFooter(isFrenchHomePage ? 'fr' : 'en')}
        </div>
      </section>
    </main>
  );
}

export default App;
