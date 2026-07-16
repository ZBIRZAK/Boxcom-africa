import { useEffect, useRef, useState } from 'react';
import './App.css';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';

const menuItems = [
  { label: 'Home', href: '#/' },
  { label: 'Services', href: '#/services' },
  { label: 'Projects', href: '#/projects' },
  { label: 'Blog', href: '#/blog' },
  { label: 'About Us', href: '#/about' },
];

const serviceItems = [
  {
    label: 'Media Relations',
    title: 'Media Relations',
    description:
      'We find the strongest angle, take it to relevant journalists and editors, and keep the story moving through follow-up, interviews and editorial opportunities. Crisis management and consultancy sits within this work.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Media%20Relations%20Image.webp`,
  },
  {
    label: 'Media Events',
    title: 'Media Events',
    description:
      'We turn launches, briefings and announcements into press moments that give journalists something useful to see, ask and report.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Media%20Events%20Image.webp`,
  },
  {
    label: 'Media Monitoring',
    title: 'Media Monitoring',
    description:
      'We track coverage, sentiment and emerging issues, then help the client decide when to respond and how quickly to move.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Media%20Monitoring%20Image.webp`,
  },
  {
    label: 'Social PR',
    title: 'Social PR',
    description:
      'We carry press stories into social channels without losing the facts, tone or intent behind them.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Social%20PR%20Image.webp`,
  },
  {
    label: 'PR Content Creation',
    title: 'PR Content Creation',
    description:
      'We develop releases, articles, speeches, statements and media assets that are clear, usable and adapted to the market.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/PR%20Content%20Creation%20Image.webp`,
  },
  {
    label: 'Influencer Relations',
    title: 'Influencer Relations',
    description:
      'We build creator partnerships around relevance, local fit and the role each voice should play in the wider story.',
    image: `${process.env.PUBLIC_URL}/assets/Services_Approved%20Images/Influencer%20Relations%20Image.webp`,
  },
];

const clientLogos = [
  { label: 'Samsung', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/1.svg`, className: 'is-boost-md' },
  { label: 'Renault', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/2.svg` },
  { label: 'Air France', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/3.svg`, className: 'is-boost-lg' },
  { label: 'Xerox', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/4.svg`, className: 'is-boost-sm' },
  { label: 'Fever', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/5.svg`, className: 'is-boost-sm' },
  { label: 'inDrive', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/6.svg`, className: 'is-boost-sm' },
  { label: 'TotalEnergies', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/7.svg` },
  { label: 'Deloitte', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/8.svg`, className: 'is-boost-sm' },
  { label: 'Nouvelair', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/9.svg`, className: 'is-boost-lg' },
  { label: 'DHL', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/10.svg`, className: 'is-boost-lg' },
  { label: 'NTT Data', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/11.svg`, className: 'is-boost-md' },
  { label: 'AXA', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/12.svg` },
  { label: 'Yamaha', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/13.svg`, className: 'is-boost-md' },
  { label: 'Garena', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/14.svg`, className: 'is-boost-lg' },
  { label: 'GWM', src: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/15.svg`, className: 'is-boost-md' },
];

const projectItems = [
  {
    label: 'inDrive',
    title: 'inDrive',
    category: 'Media Relations',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/InDrive_CaseStudy.png`,
  },
  {
    label: 'Samsung',
    title: 'Samsung',
    category: 'Product Launch',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/Samsung_Case_Study.png`,
  },
  {
    label: 'GWM',
    title: 'GWM',
    category: 'Media Events',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/GWM_CaseStudy.png`,
  },
  {
    label: 'Garena',
    title: 'Garena',
    category: 'Gaming Community',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/Garena_CaseStudy.png`,
  },
  {
    label: 'Mifa',
    title: 'MIFA',
    category: 'Exhibition Presence',
    image: `${process.env.PUBLIC_URL}/assets/CaseStudy_Approved%20Images/Mifa_CaseStudy.png`,
  },
];

const mediaItems = [
  {
    label: 'Le Matin',
    logo: `${process.env.PUBLIC_URL}/assets/imgs/logos/le-matin.png`,
    image: `${process.env.PUBLIC_URL}/assets/Our%20Media%20Coverage_Approved%20Images/LeMatin_Media%20Coverage.png`,
  },
  {
    label: '2M',
    logo: `${process.env.PUBLIC_URL}/assets/imgs/logos/2M.png`,
    image: `${process.env.PUBLIC_URL}/assets/Our%20Media%20Coverage_Approved%20Images/2M_Media%20Coverage.png`,
  },
  {
    label: 'Hespress',
    logo: `${process.env.PUBLIC_URL}/assets/imgs/logos/HESPRESS.png`,
    image: `${process.env.PUBLIC_URL}/assets/Our%20Media%20Coverage_Approved%20Images/Hespress_Media%20Coverage.png`,
  },
  {
    label: 'Le Matin',
    logo: `${process.env.PUBLIC_URL}/assets/imgs/logos/le-matin.png`,
    image: `${process.env.PUBLIC_URL}/assets/Our%20Media%20Coverage_Approved%20Images/LeMatin_Media%20Coverage.png`,
  },
  {
    label: '2M',
    logo: `${process.env.PUBLIC_URL}/assets/imgs/logos/2M.png`,
    image: `${process.env.PUBLIC_URL}/assets/Our%20Media%20Coverage_Approved%20Images/2M_Media%20Coverage.png`,
  },
];

const testimonialItems = [
  {
    brand: 'Xerox',
    logo: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/4.svg`,
    name: 'Amira Mazali',
    role: 'Head of Marketing.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat purus non augue volutpat, porta semper dui consectetur.',
  },
  {
    brand: 'AirFrance',
    logo: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/3.svg`,
    name: 'Amira Mazali',
    role: 'Head of Marketing.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat purus non augue volutpat, porta semper dui consectetur.',
  },
  {
    brand: 'Xerox',
    logo: `${process.env.PUBLIC_URL}/assets/Our%20Clients%20Logos/4.svg`,
    name: 'Amira Mazali',
    role: 'Head of Marketing.',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat purus non augue volutpat, porta semper dui consectetur.',
  },
];

const faqItems = [
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

const socialItems = [
  { label: 'LinkedIn', src: `${process.env.PUBLIC_URL}/assets/social/linkedin.png`, href: '#/linkedin' },
  { label: 'Facebook', src: `${process.env.PUBLIC_URL}/assets/social/facebook.png`, href: '#/facebook' },
  { label: 'Instagram', src: `${process.env.PUBLIC_URL}/assets/social/instagram.png`, href: '#/instagram' },
];

function wrapIndex(index, length) {
  return (index + length) % length;
}

function App() {
  const [activeService, setActiveService] = useState(serviceItems[4].label);
  const [activeProject, setActiveProject] = useState(2);
  const [projectMotion, setProjectMotion] = useState('next');
  const [activeMediaPage, setActiveMediaPage] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldLoadHeroVideo, setShouldLoadHeroVideo] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window === 'undefined' ? 1280 : window.innerWidth
  );
  const [currentHash, setCurrentHash] = useState(() =>
    typeof window === 'undefined' ? '#/' : window.location.hash || '#/'
  );
  const projectDragStartX = useRef(null);
  const projectDragCurrentX = useRef(null);
  const coverageDragStartX = useRef(null);
  const coverageDragCurrentX = useRef(null);
  const testimonialDragStartX = useRef(null);
  const testimonialDragCurrentX = useRef(null);
  const idleHeroLoadHandle = useRef(null);
  const heroVideoMp4 = `${process.env.PUBLIC_URL}/assets/Videos/Design%20of%20BoxCom%20Africa%20Website.mp4?v=20260715-hero-1`;
  const heroVideoWebm = `${process.env.PUBLIC_URL}/assets/Videos/Design%20of%20BoxCom%20Africa%20Website.webm?v=20260715-hero-1`;
  const heroPoster = `${process.env.PUBLIC_URL}/assets/Videos/hero-poster.jpg?v=20260716-hero-poster-1`;
  const logoSrc = `${process.env.PUBLIC_URL}/assets/logo/logo-original.png`;
  const businessThinkingSrc = `${process.env.PUBLIC_URL}/assets/ABOUTUS_CoWorkers-new.png`;
  const contactPagePortraitSrc = `${process.env.PUBLIC_URL}/assets/imgs/width_1600.webp`;
  const googleReviewsBannerSrc = `${process.env.PUBLIC_URL}/assets/imgs/google%20reviews.webp`;
  const mediaShapeSrc = `${process.env.PUBLIC_URL}/assets/Our%20Media%20Coverage_Approved%20Images/africa%20logo.svg`;
  const coverageCardsPerPage = viewportWidth <= 640 ? 1 : 3;
  const mediaPageCount = Math.max(1, mediaItems.length - coverageCardsPerPage + 1);
  const visibleMediaItems = mediaItems.slice(activeMediaPage, activeMediaPage + coverageCardsPerPage);
  const isMobileViewport = viewportWidth <= 640;
  const isMobileClientsCarousel = viewportWidth <= 640;
  const visibleClientLogos = clientLogos;
  const visibleTestimonials = testimonialItems;
  const normalizedHash = currentHash || '#/';
  const isContactPage = normalizedHash === '#/contact';

  const showPreviousProject = () => {
    setProjectMotion('prev');
    setActiveProject((current) => wrapIndex(current - 1, projectItems.length));
  };

  const showNextProject = () => {
    setProjectMotion('next');
    setActiveProject((current) => wrapIndex(current + 1, projectItems.length));
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
    beginProjectDrag(event.touches[0].clientX);
  };

  const handleProjectTouchMove = (event) => {
    updateProjectDrag(event.touches[0].clientX);
  };

  const handleProjectMouseDown = (event) => {
    beginProjectDrag(event.clientX);
  };

  const handleProjectMouseMove = (event) => {
    updateProjectDrag(event.clientX);
  };

  const handleProjectMouseUp = () => {
    endProjectDrag();
  };

  const handleProjectMouseLeave = () => {
    if (projectDragStartX.current !== null) {
      endProjectDrag();
    }
  };

  const showPreviousMedia = () => {
    setActiveMediaPage((current) => Math.max(0, current - 1));
  };

  const showNextMedia = () => {
    setActiveMediaPage((current) => Math.min(mediaPageCount - 1, current + 1));
  };

  const beginCoverageDrag = (clientX) => {
    coverageDragStartX.current = clientX;
    coverageDragCurrentX.current = clientX;
  };

  const updateCoverageDrag = (clientX) => {
    if (coverageDragStartX.current === null) {
      return;
    }

    coverageDragCurrentX.current = clientX;
  };

  const endCoverageDrag = () => {
    if (coverageDragStartX.current === null || coverageDragCurrentX.current === null) {
      coverageDragStartX.current = null;
      coverageDragCurrentX.current = null;
      return;
    }

    const swipeDistance = coverageDragStartX.current - coverageDragCurrentX.current;
    const swipeThreshold = 42;

    if (swipeDistance > swipeThreshold) {
      showNextMedia();
    } else if (swipeDistance < -swipeThreshold) {
      showPreviousMedia();
    }

    coverageDragStartX.current = null;
    coverageDragCurrentX.current = null;
  };

  const handleCoverageTouchStart = (event) => {
    beginCoverageDrag(event.touches[0].clientX);
  };

  const handleCoverageTouchMove = (event) => {
    updateCoverageDrag(event.touches[0].clientX);
  };

  const showPreviousTestimonial = () => {
    setActiveTestimonial((current) => wrapIndex(current - 1, testimonialItems.length));
  };

  const showNextTestimonial = () => {
    setActiveTestimonial((current) => wrapIndex(current + 1, testimonialItems.length));
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
      }
    };

    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      setIsMenuOpen(false);
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
    setActiveMediaPage((current) => Math.min(current, Math.max(0, mediaPageCount - 1)));
  }, [mediaPageCount]);

  useEffect(() => {
    if (isContactPage) {
      return undefined;
    }

    const autoRotate = window.setInterval(() => {
      setProjectMotion('next');
      setActiveProject((current) => wrapIndex(current + 1, projectItems.length));
    }, 3000);

    return () => {
      window.clearInterval(autoRotate);
    };
  }, [isContactPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [normalizedHash]);

  useEffect(() => {
    if (isContactPage) {
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
  }, [isContactPage]);

  const renderHeader = () => (
    <header className="site-header">
      <div className="site-header-inner">
        <a
          className="brand"
          href="#/"
          aria-label="Boxcom Africa"
          onClick={() => setIsMenuOpen(false)}
        >
          <img className="brand-image" src={logoSrc} alt="" aria-hidden="true" />
        </a>

        <button
          type="button"
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div id="primary-menu" className={`site-header-menu${isMenuOpen ? ' is-open' : ''}`}>
          <nav className="main-nav" aria-label="Primary">
            {menuItems.map((item) => {
              const isActive = normalizedHash === item.href;
              return (
                <a
                  key={item.label}
                  className={`main-nav-link${isActive ? ' is-active' : ''}`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <a className="header-cta" href="#/contact" onClick={() => setIsMenuOpen(false)}>
            Talk to Our PR Team <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );

  if (isContactPage) {
    return (
      <ContactPage
        header={renderHeader()}
        contactPagePortraitSrc={contactPagePortraitSrc}
        socialItems={socialItems}
      />
    );
  }

  return (
    <HomePage
      header={renderHeader()}
      shouldLoadHeroVideo={shouldLoadHeroVideo}
      heroPoster={heroPoster}
      heroVideoMp4={heroVideoMp4}
      heroVideoWebm={heroVideoWebm}
      businessThinkingSrc={businessThinkingSrc}
      serviceItems={serviceItems}
      activeService={activeService}
      setActiveService={setActiveService}
      clientLogos={clientLogos}
      isMobileClientsCarousel={isMobileClientsCarousel}
      visibleClientLogos={visibleClientLogos}
      showPreviousProject={showPreviousProject}
      showNextProject={showNextProject}
      projectMotion={projectMotion}
      handleProjectMouseDown={handleProjectMouseDown}
      handleProjectMouseMove={handleProjectMouseMove}
      handleProjectMouseUp={handleProjectMouseUp}
      handleProjectMouseLeave={handleProjectMouseLeave}
      handleProjectTouchStart={handleProjectTouchStart}
      handleProjectTouchMove={handleProjectTouchMove}
      endProjectDrag={endProjectDrag}
      projectItems={projectItems}
      activeProject={activeProject}
      wrapIndex={wrapIndex}
      mediaShapeSrc={mediaShapeSrc}
      handleCoverageTouchStart={handleCoverageTouchStart}
      handleCoverageTouchMove={handleCoverageTouchMove}
      endCoverageDrag={endCoverageDrag}
      visibleMediaItems={visibleMediaItems}
      activeMediaPage={activeMediaPage}
      mediaPageCount={mediaPageCount}
      setActiveMediaPage={setActiveMediaPage}
      showPreviousTestimonial={showPreviousTestimonial}
      showNextTestimonial={showNextTestimonial}
      handleTestimonialTouchStart={handleTestimonialTouchStart}
      handleTestimonialTouchMove={handleTestimonialTouchMove}
      endTestimonialDrag={endTestimonialDrag}
      isMobileViewport={isMobileViewport}
      testimonialItems={testimonialItems}
      activeTestimonial={activeTestimonial}
      setActiveTestimonial={setActiveTestimonial}
      visibleTestimonials={visibleTestimonials}
      googleReviewsBannerSrc={googleReviewsBannerSrc}
      faqItems={faqItems}
      openFaq={openFaq}
      setOpenFaq={setOpenFaq}
      socialItems={socialItems}
    />
  );
}

export default App;
