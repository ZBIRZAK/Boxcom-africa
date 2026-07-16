function SiteFooter({ socialItems }) {
  return (
    <>
      <div className="contact-section-bottom">
        <div className="contact-details">
          <div>
            <h3>Phone</h3>
            <p>123-456-7890</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>Info@box-com.com</p>
          </div>
          <div>
            <h3>Address</h3>
            <p>123 Street</p>
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
          <div className="footer-social-icons">
            {socialItems.map((item) => (
              <a key={item.label} href={item.href} aria-label={item.label}>
                <img src={item.src} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>Receive news and promotions by email !</p>
            <div className="newsletter-field">
              <span>@</span>
              <input type="email" placeholder="Your email address" />
              <button type="button">→</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-cta">
        <div className="footer-cta-line" />
        <a href="#/contact" className="footer-cta-button">
          Get Started
        </a>
      </div>

      <div className="footer-legal">
        <a href="#/terms">TERMS & CONDITIONS</a>
        <a href="#/privacy">PRIVACY POLICY</a>
      </div>
    </>
  );
}

export default SiteFooter;
