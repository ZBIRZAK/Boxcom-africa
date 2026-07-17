import Footer from '../components/Footer';

function HomePage({
  header,
  shouldLoadHeroVideo,
  heroPoster,
  heroVideoMp4,
  heroVideoWebm,
  businessThinkingSrc,
  serviceItems,
  activeService,
  setActiveService,
  clientLogos,
  isMobileClientsCarousel,
  visibleClientLogos,
  showPreviousProject,
  showNextProject,
  projectMotion,
  handleProjectMouseDown,
  handleProjectMouseMove,
  handleProjectMouseUp,
  handleProjectMouseLeave,
  handleProjectTouchStart,
  handleProjectTouchMove,
  endProjectDrag,
  projectItems,
  activeProject,
  wrapIndex,
  mediaShapeSrc,
  handleCoverageTouchStart,
  handleCoverageTouchMove,
  endCoverageDrag,
  visibleMediaItems,
  activeMediaPage,
  mediaPageCount,
  setActiveMediaPage,
  showPreviousTestimonial,
  showNextTestimonial,
  handleTestimonialTouchStart,
  handleTestimonialTouchMove,
  endTestimonialDrag,
  isMobileViewport,
  testimonialItems,
  activeTestimonial,
  setActiveTestimonial,
  visibleTestimonials,
  googleReviewsBannerSrc,
  faqItems,
  openFaq,
  setOpenFaq,
  socialItems,
}) {
  return (
    <main className="app">
      <div className="hero-frame">
        {header}

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
                  className="hero-media__video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={heroPoster}
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
        <div className="services-section-inner">
          <div className="services-section-heading">
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
              className={`projects-switcher__track is-animating-${projectMotion}`}
              onMouseDown={handleProjectMouseDown}
              onMouseMove={handleProjectMouseMove}
              onMouseUp={handleProjectMouseUp}
              onMouseLeave={handleProjectMouseLeave}
              onTouchStart={handleProjectTouchStart}
              onTouchMove={handleProjectTouchMove}
              onTouchEnd={endProjectDrag}
              onTouchCancel={endProjectDrag}
            >
              {[-2, -1, 0, 1, 2].map((offset) => {
                const project = projectItems[wrapIndex(activeProject + offset, projectItems.length)];
                const positionClass =
                  offset === 0 ? 'is-center' : Math.abs(offset) === 1 ? 'is-side' : 'is-edge';

                return (
                  <article key={`${project.label}-${offset}`} className={`project-card ${positionClass}`}>
                    <img className="project-card__image" src={project.image} alt={project.title} />
                    <div className="project-card__overlay" />
                    {offset === 0 && (
                      <div className="project-card__content">
                        <h3>{project.title}</h3>
                        <p>{project.category}</p>
                      </div>
                    )}
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
            <img className="review-banner__image" src={googleReviewsBannerSrc} alt="Google Reviews" />
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

          <Footer socialItems={socialItems} />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
