import { useEffect, useRef, useState } from 'react';
import './App.css';

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
  const [activeService, setActiveService] = useState(serviceItems[5].label);
  const [activeProject, setActiveProject] = useState(2);
  const [projectMotion, setProjectMotion] = useState('next');
  const [isProjectPaused, setIsProjectPaused] = useState(false);
  const [activeMediaPage, setActiveMediaPage] = useState(0);
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
  const projectDragStartX = useRef(null);
  const projectDragCurrentX = useRef(null);
  const coverageDragStartX = useRef(null);
  const coverageDragCurrentX = useRef(null);
  const testimonialDragStartX = useRef(null);
  const testimonialDragCurrentX = useRef(null);
  const idleHeroLoadHandle = useRef(null);
  const heroVideoRef = useRef(null);
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
    setIsProjectPaused(false);

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
    setActiveMediaPage((current) => Math.min(current, Math.max(0, mediaPageCount - 1)));
  }, [mediaPageCount]);

  useEffect(() => {
    if (isContactPage || isProjectPaused) {
      return undefined;
    }

    const autoRotate = window.setInterval(() => {
      setProjectMotion('next');
      setActiveProject((current) => current + 1);
    }, 5000);

    return () => {
      window.clearInterval(autoRotate);
    };
  }, [isContactPage, isProjectPaused]);

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

  useEffect(() => {
    if (!shouldLoadHeroVideo || isContactPage) {
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
  }, [isContactPage, shouldLoadHeroVideo]);

  const renderHeader = () => (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="brand"
          href="#/"
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
            {menuItems.map((item) => {
              const isActive = normalizedHash === item.href;

              if (item.label === 'Services' || item.label === 'Projects') {
                const isServicesMenu = item.label === 'Services';
                const submenuItems = isServicesMenu ? serviceItems : projectItems;
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
                        <span aria-hidden="true">⌄</span>
                      </button>
                    </div>

                    <div id={submenuId} className="main-nav__dropdown" aria-label={`${item.label} menu`}>
                      {submenuItems.map((submenuItem, submenuIndex) => (
                        <a
                          key={submenuItem.label}
                          className="main-nav__dropdown-link"
                          href={item.href}
                          onClick={() => {
                            if (isServicesMenu) {
                              setActiveService(submenuItem.label);
                            } else {
                              setProjectMotion('next');
                              setActiveProject(submenuIndex);
                            }
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

          <a
            className="header-cta"
            href="#/contact"
            onClick={() => {
              setIsMenuOpen(false);
              setOpenNavSubmenu(null);
            }}
          >
            Talk to Our PR Team <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </header>
  );

  const renderSiteFooter = () => (
    <>
      <div className="contact-section__bottom">
        <div className="contact-details">
          <div>
            <h3>Phone</h3>
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
            <h3>Address</h3>
            <p>3 Rue El Jihani, Quartier Racine, Casablanca, Morocco 20250</p>
          </div>
        </div>

        <div className="footer-menu">
          <h3>Menu</h3>
          <a href="#/">HOMEPAGE</a>
          <a href="#/services">SERVICES</a>
          <a href="#/projects">CASE STUDIES</a>
          <a href="#/blog">BLOG</a>
          <a href="#/about">ABOUT US</a>
        </div>

        <div className="footer-social">
          <div className="footer-social__icons">
            {socialItems.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label}>
                <img src={item.src} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Receive news and promotions by email !</p>
            <div className="newsletter__field">
              <span>@</span>
              <input type="email" placeholder="Your email address" />
              <button type="button">→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-cta">
        <div className="footer-cta__line" />
        <a href="#/contact" className="footer-cta__button">
          Get Started
        </a>
      </div>

      <div className="footer-legal">
        <a href="#/terms">TERMS & CONDITIONS</a>
        <a href="#/privacy">PRIVACY POLICY</a>
      </div>
    </>
  );

  if (isContactPage) {
    return (
      <main className="app app--contact-page">
        {renderHeader()}

        <section className="contact-page" aria-label="Contact Us">
          <div className="contact-page__inner">
            <div className="contact-page__header">
              <h1 className="contact-page__title">Start the Conversation</h1>
              <p className="contact-page__intro">
                Tell us the story, the market and the timing. A senior member of the team will help identify
                the questions worth answering first.
              </p>
            </div>

            <div className="contact-page__layout">
              <div className="contact-page__art" aria-hidden="true">
                <img src={contactPagePortraitSrc} alt="" />
              </div>

              <div className="contact-page__card">
                <form className="contact-page-form">
                  <div className="contact-page-form__row">
                    <label>
                      <span>Your Name</span>
                      <input type="text" placeholder="Your Full Name" />
                    </label>
                    <label>
                      <span>Your Company</span>
                      <input type="text" placeholder="Your Company" />
                    </label>
                  </div>

                  <label>
                    <span>Your Email</span>
                    <input type="email" placeholder="Your Email" />
                  </label>

                  <label>
                    <span>Subject</span>
                    <input type="text" placeholder="Subject" />
                  </label>

                  <label>
                    <span>Message</span>
                    <textarea placeholder="Type your message here." rows="5" />
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

        <section className="contact-page-footer">
          <div className="contact-section__inner">
            {renderSiteFooter()}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="app">
      <div className="hero-frame">
        {renderHeader()}

        <section className="hero-section" aria-label="Hero">
          <div className="hero-section__inner">
            <div className="hero-copy">
              <h1 className="hero-title">
                <span className="hero-title__line">PR Agency in</span>
                <span className="hero-title__line hero-title__line--orange">Morocco</span>
                <span className="hero-title__line">
                  <em>for</em> <strong>Africa</strong>
                </span>
              </h1>
              <p className="hero-description">
                BOXCOM Africa is a Casablanca-based PR agency in Morocco built for brands that need more than
                distribution. We shape the story, connect it to the right journalists and editors, and keep
                strategy, media relations, content, monitoring, Social PR and influencer relations moving as
                one program.
              </p>
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
                  <source src={heroVideoWebm} type="video/webm" />
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
            <h2 className="section-title">Business Thinking, Media Relations and Local Context</h2>
            <p>A strong press story starts with the business objective.</p>
            <p>
              We turn it into the right media angle, supported by the right timing, materials and journalist
              relationships to maximise impact. Through crisis management and consultancy, we help shape,
              protect and clarify narratives when it matters most.
            </p>
            <p>
              As a PR Agency in Casablanca, we also work with trusted partners across Africa to ensure every
              story is adapted to the language, culture and media landscape of each market.
            </p>

            <a className="primary-pink-button" href="#/contact">
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="services-section__inner">
          <div className="services-section__heading">
            <h2 className="section-title section-title--services">One PR Program, Several Connected Services</h2>
            <p className="services-intro">
              Clients do not need several agencies pulling the message in different directions. BOXCOM Africa
              brings strategy, media, content, monitoring, social and creators under one accountable team, so
              every action supports the same narrative. Senior practitioners stay close to the account, so
              strategy, media judgment and delivery do not separate after the first meeting.
            </p>
          </div>

          <div className="services-accordion" aria-label="Connected services">
            {serviceItems.map((item) => {
              const isActive = item.label === activeService;
              const panelId = `service-panel-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
              const buttonId = `service-button-${item.label.toLowerCase().replace(/\s+/g, '-')}`;

              return (
                <section key={item.label} className={`service-item${isActive ? ' is-active' : ''}`}>
                  <h3 className="service-item__heading">
                    <button
                      id={buttonId}
                      type="button"
                      className={`service-tab${isActive ? ' is-active' : ''}`}
                      onMouseEnter={() => setActiveService(item.label)}
                      onFocus={() => setActiveService(item.label)}
                      onClick={() => setActiveService(item.label)}
                      aria-expanded={isActive}
                      aria-controls={panelId}
                    >
                      <span className="service-tab__label">{item.label}</span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    className={`service-panel${isActive ? ' is-active' : ''}`}
                    aria-labelledby={buttonId}
                    aria-hidden={!isActive}
                  >
                    <article className="service-card">
                      <img className="service-card__image" src={item.image} alt={item.title} />
                      <div className="service-card__overlay" />
                      <div className="service-card__content">
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="clients-section__inner">
          <h2 className="clients-section__title">Our Clients</h2>
          {isMobileClientsCarousel ? (
            <div className="clients-ticker" aria-label="Our clients">
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
          <h2 className="projects-section__title">Selected Projects</h2>

          <div className="projects-switcher">
            <button
              type="button"
              className="projects-switcher__arrow projects-switcher__arrow--left"
              aria-label="Previous project"
              onClick={showPreviousProject}
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
                const project = projectItems[wrapIndex(virtualProjectIndex, projectItems.length)];
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

                return (
                  <article
                    key={virtualProjectIndex}
                    className={`project-card ${positionClass}${wrapEntryClass ? ` ${wrapEntryClass}` : ''}`}
                    onMouseEnter={() => setIsProjectPaused(true)}
                  >
                    <img className="project-card__image" src={project.image} alt={project.title} />
                    <div className="project-card__overlay" />
                    <div className="project-card__content">
                      <h3 className={project.title.length > 5 ? 'is-long-title' : ''}>{project.title}</h3>
                      <p>{project.category}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              className="projects-switcher__arrow projects-switcher__arrow--right"
              aria-label="Next project"
              onClick={showNextProject}
            >
              ›
            </button>
          </div>

          <a className="primary-pink-button primary-pink-button--projects" href="#/projects">
            See More
          </a>
        </div>
      </section>

      <section className="coverage-section">
        <div className="coverage-section__inner">
          <div className="coverage-section__copy">
            <h2 className="coverage-section__title">Our Media Coverage</h2>
            <p>
              The right story rarely moves because it was sent to the longest list. It moves because the
              angle is relevant, the timing is right and the journalist receiving it sees a reason to care.
            </p>
          </div>

          <img className="coverage-section__shape" src={mediaShapeSrc} alt="" aria-hidden="true" />

          <div
            className="coverage-slider"
            onTouchStart={handleCoverageTouchStart}
            onTouchMove={handleCoverageTouchMove}
            onTouchEnd={endCoverageDrag}
            onTouchCancel={endCoverageDrag}
          >
            <div className="coverage-slider__track">
              {visibleMediaItems.map((item, index) => (
                <article key={`${item.label}-${activeMediaPage}-${index}`} className="coverage-card">
                  <img className="coverage-card__image" src={item.image} alt={item.label} />
                  <div className="coverage-card__footer">
                    <img className="coverage-card__logo" src={item.logo} alt={item.label} />
                    <span className="coverage-card__arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <div className="coverage-slider__pagination" aria-label="Media coverage pages">
              {Array.from({ length: mediaPageCount }).map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`coverage-slider__dot${index === activeMediaPage ? ' is-active' : ''}`}
                  aria-label={`Go to media page ${index + 1}`}
                  onClick={() => setActiveMediaPage(index)}
                />
              ))}
            </div>

            <a className="primary-pink-button primary-pink-button--coverage" href="#/coverage">
              See More
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonials-section__inner">
          <h2 className="testimonials-section__title">What Clients Say</h2>
          <p className="testimonials-section__intro">
            Testimonials can strengthen the homepage once approved client quotes are available. The best
            quotes should speak to responsiveness, media judgment, quality of coverage or senior involvement.
          </p>

          <div className="testimonials-slider">
            <button
              type="button"
              className="testimonials-slider__arrow testimonials-slider__arrow--left"
              aria-label="Previous testimonial"
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
                        '--testimonial-count': testimonialItems.length,
                        width: `${testimonialItems.length * 100}%`,
                        transform: `translateX(-${activeTestimonial * (100 / testimonialItems.length)}%)`,
                      }
                    : undefined
                }
              >
                {visibleTestimonials.map((item, index) => (
                  <article key={`${item.brand}-${index}`} className="testimonial-card">
                    <div className="testimonial-card__brand">
                      <img src={item.logo} alt={item.brand} />
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
              aria-label="Next testimonial"
              onClick={showNextTestimonial}
            >
              ›
            </button>
          </div>

          <div className="testimonials-slider__pagination" aria-label="Testimonials pagination">
            {testimonialItems.map((item, index) => (
              <button
                key={`${item.brand}-${index}`}
                type="button"
                className={`testimonials-slider__dot${index === activeTestimonial ? ' is-active' : ''}`}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>

          <div className="review-banner">
            <div className="review-banner__rating">
              <img className="review-banner__image" src={googleReviewsBannerSrc} alt="Google Reviews" />
            </div>
            <p className="review-banner__message">
              Constantly saluted for its strategy, presence and its results
            </p>
            <a className="primary-pink-button review-banner__cta" href="#/reviews">
              Check our Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-section__inner">
          <h2 className="faq-section__title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => {
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
          <h2 className="contact-section__title">Start The Conversation</h2>
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

            <form className="contact-form">
              <div className="contact-form__row">
                <label>
                  <span>Your Name</span>
                  <input type="text" placeholder="Your Full Name" />
                </label>
                <label>
                  <span>Your Company</span>
                  <input type="text" placeholder="Your Company" />
                </label>
              </div>
              <label>
                <span>Your Email</span>
                <input type="email" placeholder="Your Email" />
              </label>
              <label>
                <span>Message</span>
                <textarea placeholder="Type your message here." rows="5" />
              </label>
              <button type="submit" className="primary-pink-button contact-form__submit">
                Share Your Brief
              </button>
            </form>
          </div>

          {renderSiteFooter()}
        </div>
      </section>
    </main>
  );
}

export default App;
