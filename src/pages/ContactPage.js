import Footer from '../components/Footer';

function ContactPage({ header, contactPagePortraitSrc, socialItems }) {
  return (
    <main className="app app--contact-page">
      {header}

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
          <Footer socialItems={socialItems} />
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
