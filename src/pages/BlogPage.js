import { useEffect, useRef, useState } from 'react';
import blogPosts from '../content/blogPosts';
import './BlogPage.css';

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);

  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return <a key={index} href={link[2]}>{link[1]}</a>;
    }

    return part;
  });
}

function headingId(text) {
  return text
    .replace(/\*\*/g, '')
    .replace(/\*/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function MarkdownBlocks({ source }) {
  const lines = source.replace(/\r/g, '').split('\n');
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith('## ')) {
      const title = line.slice(3);
      blocks.push(<h2 id={headingId(title)} key={blocks.length}>{renderInline(title)}</h2>);
      index += 1;
      continue;
    }

    if (line.startsWith('### ')) {
      blocks.push(<h3 key={blocks.length}>{renderInline(line.slice(4))}</h3>);
      index += 1;
      continue;
    }

    if (line.startsWith('- ')) {
      const items = [];
      while (index < lines.length && lines[index].trim().startsWith('- ')) {
        items.push(lines[index].trim().slice(2));
        index += 1;
      }
      blocks.push(
        <ul key={blocks.length}>
          {items.map((item) => <li key={item}>{renderInline(item)}</li>)}
        </ul>
      );
      continue;
    }

    if (line.startsWith('> ')) {
      blocks.push(<blockquote key={blocks.length}>{renderInline(line.slice(2))}</blockquote>);
      index += 1;
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{2,3} |- |> )/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={blocks.length}>{renderInline(paragraph.join(' '))}</p>);
  }

  return blocks;
}

const supportedLayouts = new Set([
  'text',
  'image-left',
  'image-right',
  'image-above',
  'image-below',
  'full-image',
]);

function resolvePublicAsset(path) {
  if (!path || /^(https?:|data:)/.test(path)) return path;
  return `${process.env.PUBLIC_URL || ''}${path.startsWith('/') ? path : `/${path}`}`;
}

function parseSectionAttributes(attributes) {
  const values = {};
  const expression = /([\w-]+)="([^"]*)"/g;
  let match = expression.exec(attributes);

  while (match) {
    values[match[1]] = match[2];
    match = expression.exec(attributes);
  }

  const layout = supportedLayouts.has(values.layout) ? values.layout : 'text';
  return { ...values, layout };
}

function splitSectionHeading(content) {
  const match = content.match(/^##\s+([^\n]+)\n*/);
  if (!match) return { heading: '', body: content };

  return {
    heading: match[1],
    body: content.slice(match[0].length).trim(),
  };
}

function MarkdownContent({ source }) {
  const sections = [];
  const expression = /:::section\s*([^\n]*)\n([\s\S]*?)\n:::/g;
  let cursor = 0;
  let match = expression.exec(source);

  while (match) {
    const unwrappedText = source.slice(cursor, match.index).trim();
    if (unwrappedText) {
      sections.push({ layout: 'text', content: unwrappedText });
    }

    sections.push({
      ...parseSectionAttributes(match[1]),
      content: match[2].trim(),
    });
    cursor = expression.lastIndex;
    match = expression.exec(source);
  }

  const remainingText = source.slice(cursor).trim();
  if (remainingText) {
    sections.push({ layout: 'text', content: remainingText });
  }

  if (!sections.length) {
    sections.push({ layout: 'text', content: source });
  }

  return sections.map((section, index) => {
    const { heading, body } = splitSectionHeading(section.content);
    const hasImage = section.image && section.layout !== 'text';
    const image = hasImage ? (
      <img
        className={`blog-markdown-section__image${section.fit === 'contain' ? ' is-contain' : ''}`}
        src={resolvePublicAsset(section.image)}
        alt={section.alt || ''}
        style={section.position ? { objectPosition: section.position } : undefined}
        loading="lazy"
      />
    ) : null;

    return (
      <section
        className={`blog-markdown-section blog-markdown-section--${section.layout}`}
        key={`${section.layout}-${index}`}
      >
        {heading && <h2 id={headingId(heading)}>{renderInline(heading)}</h2>}
        <div className="blog-markdown-section__body">
          {section.layout === 'image-left' || section.layout === 'image-above' || section.layout === 'full-image'
            ? image
            : null}
          {section.layout !== 'full-image' && body && (
            <div className="blog-markdown-section__text">
              <MarkdownBlocks source={body} />
            </div>
          )}
          {section.layout === 'image-right' || section.layout === 'image-below' ? image : null}
        </div>
      </section>
    );
  });
}

const blogCopy = {
  en: {
    title: 'Our Blog', latest: 'Latest Posts', readMore: 'Read More', readArticle: 'Read article →', seeMore: 'See More',
    related: 'Related Articles', contents: 'Table of Contents', writtenBy: 'Written by:', published: 'Published:', insights: 'Insights',
    notFound: 'Article Not Found', returnToBlog: 'Return to Our Blog', loadError: 'We could not load this article. Please try again.', loading: 'Loading article…',
    footerTitle: 'Talk Through the Brief', footerIntro: 'Tell us the story, the market and the timing. A senior member of the team will help identify the questions worth answering first.',
    name: 'Your Name *', fullName: 'Your Full Name', company: 'Your Company *', email: 'Your Email *', message: 'Message', messagePlaceholder: 'Type your message here.', send: 'Send Message',
    newsletterTitle: 'Stay Informed On Everything PR!', newsletterText: 'Join our newsletter and receive articles, studies and PR tips.', newsletterPromise: 'We promise to keep your email safe!', emailPlaceholder: 'Your email address', close: 'Close newsletter signup', subscribe: 'Subscribe to the newsletter',
  },
  fr: {
    title: 'Notre Blog', latest: 'Derniers articles', readMore: 'Lire la suite', readArticle: 'Lire l’article →', seeMore: 'Voir plus',
    related: 'Articles associés', contents: 'Sommaire', writtenBy: 'Écrit par :', published: 'Publié le :', insights: 'Analyses',
    notFound: 'Article introuvable', returnToBlog: 'Retour au blog', loadError: 'Impossible de charger cet article. Veuillez réessayer.', loading: 'Chargement de l’article…',
    footerTitle: 'Discuter du brief', footerIntro: 'Racontez-nous l’histoire, le marché et le timing. Un membre senior de l’équipe vous aidera à identifier les questions à traiter en priorité.',
    name: 'Votre nom *', fullName: 'Votre nom complet', company: 'Votre entreprise *', email: 'Votre e-mail *', message: 'Message', messagePlaceholder: 'Écrivez votre message ici.', send: 'Envoyer le message',
    newsletterTitle: 'Restez au courant de l’actualité RP !', newsletterText: 'Recevez nos articles, études et conseils RP.', newsletterPromise: 'Votre adresse e-mail restera confidentielle.', emailPlaceholder: 'Votre adresse e-mail', close: 'Fermer l’inscription à la newsletter', subscribe: 'S’inscrire à la newsletter',
  },
};

function BlogFooter({ footer, language = 'en' }) {
  const copy = blogCopy[language];
  return (
    <section className="contact-section blog-contact">
      <div className="contact-section__inner">
        <h2 className="contact-section__title">{copy.footerTitle}</h2>
        <p className="contact-section__intro">{copy.footerIntro}</p>

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
                <span>{copy.name}</span>
                <input type="text" name="name" placeholder={copy.fullName} autoComplete="name" required />
              </label>
              <label>
                <span>{copy.company}</span>
                <input type="text" name="company" placeholder={copy.company.replace(' *', '')} autoComplete="organization" required />
              </label>
            </div>
            <label>
              <span>{copy.email}</span>
              <input type="email" name="email" placeholder={copy.email.replace(' *', '')} autoComplete="email" required />
            </label>
            <label>
              <span>{copy.message}</span>
              <textarea placeholder={copy.messagePlaceholder} rows="5" />
            </label>
            <button type="submit" className="primary-pink-button contact-form__submit">{copy.send}</button>
          </form>
        </div>

        {footer}
      </div>
    </section>
  );
}

function PostDate({ children }) {
  return <p className="blog-date"><span aria-hidden="true" />{children}</p>;
}

function BlogIndex({ header, footer, language, posts }) {
  const copy = blogCopy[language];
  const blogRoot = language === 'fr' ? '/blog' : '/en/blog';
  const featured = posts[0];

  if (!featured) {
    return (
      <main className="app blog-page">
        {header}
        <section className="blog-not-found">
          <h1>{copy.title}</h1>
          <p>Add a Markdown file to the posts folder to publish the first article.</p>
        </section>
        <BlogFooter footer={footer} language={language} />
      </main>
    );
  }

  return (
    <main className="app blog-page">
      {header}
      <section className="blog-index" aria-labelledby="blog-title">
        <div className="blog-frame">
          <h1 id="blog-title">{copy.title}</h1>

          <div className="blog-index__card">
            <article className="blog-featured">
              <div className="blog-featured__copy">
                <PostDate>{featured.date}</PostDate>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <a className="blog-button" href={`${blogRoot}/${featured.slug}`}>{copy.readMore}</a>
              </div>
              <a className="blog-featured__image" href={`${blogRoot}/${featured.slug}`} aria-label={`${copy.readMore}: ${featured.title}`}>
                <img src={featured.image} alt={featured.imageAlt} />
              </a>
            </article>

            <section className="blog-latest" aria-labelledby="latest-posts-title">
              <h2 id="latest-posts-title">{copy.latest}</h2>
              <div className="blog-grid">
                {posts.map((post) => (
                  <article className="blog-card" key={post.slug}>
                    <a href={`${blogRoot}/${post.slug}`} className="blog-card__image">
                      <img src={post.image} alt={post.imageAlt} loading="lazy" />
                    </a>
                    <h3><a href={`${blogRoot}/${post.slug}`}>{post.title}</a></h3>
                    <PostDate>{post.date}</PostDate>
                    <p>{post.excerpt}</p>
                    <a className="blog-card__link" href={`${blogRoot}/${post.slug}`}>{copy.readArticle}</a>
                  </article>
                ))}
              </div>
            </section>

            <a className="blog-button blog-index__more" href={blogRoot}>{copy.seeMore}</a>
          </div>
        </div>
      </section>
      <BlogFooter footer={footer} language={language} />
    </main>
  );
}

function BlogArticle({ header, footer, post, language, posts }) {
  const copy = blogCopy[language];
  const blogRoot = language === 'fr' ? '/blog' : '/en/blog';
  const [markdown, setMarkdown] = useState(post.content || '');
  const [error, setError] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const newsletterTriggered = useRef(false);
  const newsletterStorageKey = `boxcom-newsletter-popup-shown:${post.slug}`;

  useEffect(() => {
    let active = true;
    if (post.content) {
      setMarkdown(post.content);
      setError(false);
      return undefined;
    }

    setMarkdown('');
    setError(false);

    fetch(post.markdown)
      .then((response) => {
        if (!response.ok) throw new Error('Article unavailable');
        return response.text();
      })
      .then((content) => {
        if (active) setMarkdown(content);
      })
      .catch(() => {
        if (active) setError(true);
      });

    return () => {
      active = false;
    };
  }, [post]);

  useEffect(() => {
    newsletterTriggered.current = false;
    setIsNewsletterOpen(false);

    try {
      if (window.sessionStorage.getItem(newsletterStorageKey) === 'true') return undefined;
    } catch {
      // The popup can still work when session storage is unavailable.
    }

    const handleScroll = () => {
      const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableDistance <= 0 || newsletterTriggered.current) return;

      if (window.scrollY / scrollableDistance >= 0.5) {
        newsletterTriggered.current = true;
        try {
          window.sessionStorage.setItem(newsletterStorageKey, 'true');
        } catch {
          // Showing the popup should not depend on storage access.
        }
        setIsNewsletterOpen(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [newsletterStorageKey]);

  useEffect(() => {
    if (!isNewsletterOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsNewsletterOpen(false);
        try {
          window.sessionStorage.setItem(newsletterStorageKey, 'true');
        } catch {
          // Closing the popup should not depend on storage access.
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isNewsletterOpen, newsletterStorageKey]);

  const closeNewsletter = () => {
    setIsNewsletterOpen(false);
    try {
      window.sessionStorage.setItem(newsletterStorageKey, 'true');
    } catch {
      // Closing the popup should not depend on storage access.
    }
  };

  const tableOfContents = [...markdown.matchAll(/^##\s+(.+)$/gm)].map((match) => ({
    title: match[1].replace(/\*\*/g, '').replace(/\*/g, ''),
    id: headingId(match[1]),
  }));
  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="app blog-page">
      {header}
      <header className="blog-post-hero">
        <div className="blog-post-hero__inner">
          <div className="blog-post-hero__copy">
            <p className="blog-post-hero__category">{post.category || copy.insights}</p>
            <h1>{post.title}</h1>
            <p className="blog-post-hero__excerpt">{post.excerpt}</p>
            <div className="blog-post-hero__meta">
              <p>{copy.writtenBy} <strong>{post.author || 'BOXCOM Africa Team'}</strong></p>
              <p>{copy.published} {post.date}</p>
            </div>
          </div>
          <div className="blog-post-hero__media">
            <img src={post.image} alt={post.imageAlt} />
          </div>
        </div>
      </header>

      <section className="blog-article-shell">
        <article className="blog-article">
          {post.bodyIntro && <p className="blog-article__lead">{post.bodyIntro}</p>}
          {tableOfContents.length > 0 && (
            <nav className="blog-article__toc" aria-label={copy.contents}>
              <p className="blog-article__toc-title">{copy.contents}</p>
              <ul>
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`${blogRoot}/${post.slug}`}
                      onClick={(event) => {
                        event.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="blog-article__content">
            {error && <p>{copy.loadError}</p>}
            {!error && !markdown && <p>{copy.loading}</p>}
            {markdown && <MarkdownContent source={markdown} />}
          </div>
        </article>
      </section>

      {relatedPosts.length > 0 && (
        <section className="blog-related" aria-labelledby="related-articles-title">
          <div className="blog-related__inner">
            <h2 id="related-articles-title">{copy.related}</h2>
            <div className="blog-related__grid">
              {relatedPosts.map((relatedPost) => (
                <article className="blog-related__card" key={relatedPost.slug}>
                  <a href={`${blogRoot}/${relatedPost.slug}`}>
                    <img src={relatedPost.image} alt={relatedPost.imageAlt} loading="lazy" />
                  </a>
                  <div>
                    <h3><a href={`${blogRoot}/${relatedPost.slug}`}>{relatedPost.title}</a></h3>
                    <PostDate>{relatedPost.date}</PostDate>
                  </div>
                </article>
              ))}
            </div>
            <a className="blog-button blog-related__more" href={blogRoot}>{copy.seeMore}</a>
          </div>
        </section>
      )}

      <BlogFooter footer={footer} language={language} />

      {isNewsletterOpen && (
        <div
          className="blog-newsletter-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeNewsletter();
          }}
        >
          <section
            className="blog-newsletter-modal__panel newsletter"
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-newsletter-title"
            aria-describedby="blog-newsletter-description"
          >
            <button
              className="blog-newsletter-modal__close"
              type="button"
              aria-label={copy.close}
              onClick={closeNewsletter}
            >
              ×
            </button>
            <h2 id="blog-newsletter-title">{copy.newsletterTitle}</h2>
            <p id="blog-newsletter-description">
              {copy.newsletterText}<br />
              {copy.newsletterPromise}
            </p>
            <form className="blog-newsletter-modal__form newsletter-form">
              <span aria-hidden="true">@</span>
              <input
                type="email"
                name="newsletterEmail"
                placeholder={copy.emailPlaceholder}
                aria-label={copy.emailPlaceholder}
                autoComplete="email"
                required
              />
              <button type="submit" aria-label={copy.subscribe}>→</button>
            </form>
            <p className="newsletter-status" role="status" aria-live="polite" />
          </section>
        </div>
      )}
    </main>
  );
}

function BlogPage({ header, footer, slug, language = 'en' }) {
  const posts = blogPosts.filter((item) => (item.language || 'en') === language);
  const post = slug ? posts.find((item) => item.slug === slug) : null;
  const copy = blogCopy[language];
  const blogRoot = language === 'fr' ? '/blog' : '/en/blog';

  useEffect(() => {
    const previousTitle = document.title;
    const alternateDefinitions = [
      { language: 'en', href: `https://www.boxcomafrica.com/en/blog${post ? `/${post.slug}` : ''}` },
      { language: 'fr', href: `https://www.boxcomafrica.com/blog${post ? `/${post.slug}` : ''}` },
      { language: 'x-default', href: `https://www.boxcomafrica.com/blog${post ? `/${post.slug}` : ''}` },
    ];
    const alternateLinks = alternateDefinitions.map(({ language, href }) => {
      let link = document.head.querySelector(`link[rel="alternate"][hreflang="${language}"]`);
      const created = !link;
      const previousHref = link?.getAttribute('href') || '';

      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', language);
        document.head.appendChild(link);
      }

      link.setAttribute('href', href);
      return { link, created, previousHref };
    });

    document.title = post ? `${post.title} | BOXCOM Africa` : (language === 'fr' ? 'Actualités et analyses RP | BOXCOM Africa' : 'PR Insights and News | BOXCOM Africa');
    document.documentElement.scrollTop = 0;
    return () => {
      document.title = previousTitle;
      alternateLinks.forEach(({ link, created, previousHref }) => {
        if (created) link.remove();
        else link.setAttribute('href', previousHref);
      });
    };
  }, [blogRoot, language, post]);

  if (slug && !post) {
    return (
      <main className="app blog-page">
        {header}
        <section className="blog-not-found">
          <h1>{copy.notFound}</h1>
          <a className="blog-button" href={blogRoot}>{copy.returnToBlog}</a>
        </section>
        <BlogFooter footer={footer} language={language} />
      </main>
    );
  }

  return post
    ? <BlogArticle header={header} footer={footer} post={post} language={language} posts={posts} />
    : <BlogIndex header={header} footer={footer} language={language} posts={posts} />;
}

export default BlogPage;
