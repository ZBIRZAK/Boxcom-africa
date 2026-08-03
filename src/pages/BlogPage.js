import { useEffect, useState } from 'react';
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
    const hasImage = section.image && section.layout !== 'text';
    const image = hasImage ? (
      <img
        className="blog-markdown-section__image"
        src={resolvePublicAsset(section.image)}
        alt={section.alt || ''}
        loading="lazy"
      />
    ) : null;

    return (
      <section
        className={`blog-markdown-section blog-markdown-section--${section.layout}`}
        key={`${section.layout}-${index}`}
      >
        {section.layout === 'image-left' || section.layout === 'image-above' || section.layout === 'full-image'
          ? image
          : null}
        {section.layout !== 'full-image' && (
          <div className="blog-markdown-section__text">
            <MarkdownBlocks source={section.content} />
          </div>
        )}
        {section.layout === 'image-right' || section.layout === 'image-below' ? image : null}
      </section>
    );
  });
}

function BlogFooter({ footer }) {
  return (
    <section className="contact-section blog-contact">
      <div className="contact-section__inner">
        <h2 className="contact-section__title">Talk Through the Brief</h2>
        <p className="contact-section__intro">
          Tell us the story, the market and the timing. A senior member of the team will help identify the questions
          worth answering first.
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
            <button type="submit" className="primary-pink-button contact-form__submit">Send Message</button>
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

function BlogIndex({ header, footer }) {
  const featured = blogPosts[0];

  if (!featured) {
    return (
      <main className="app blog-page">
        {header}
        <section className="blog-not-found">
          <h1>Our Blog</h1>
          <p>Add a Markdown file to the posts folder to publish the first article.</p>
        </section>
        <BlogFooter footer={footer} />
      </main>
    );
  }

  return (
    <main className="app blog-page">
      {header}
      <section className="blog-index" aria-labelledby="blog-title">
        <div className="blog-frame">
          <h1 id="blog-title">Our Blog</h1>

          <div className="blog-index__card">
            <article className="blog-featured">
              <div className="blog-featured__copy">
                <PostDate>{featured.date}</PostDate>
                <h2>{featured.title}</h2>
                <p>{featured.excerpt}</p>
                <a className="blog-button" href={`#/blog/${featured.slug}`}>Read More</a>
              </div>
              <a className="blog-featured__image" href={`#/blog/${featured.slug}`} aria-label={`Read ${featured.title}`}>
                <img src={featured.image} alt={featured.imageAlt} />
              </a>
            </article>

            <section className="blog-latest" aria-labelledby="latest-posts-title">
              <h2 id="latest-posts-title">Latest Posts</h2>
              <div className="blog-grid">
                {blogPosts.map((post) => (
                  <article className="blog-card" key={post.slug}>
                    <a href={`#/blog/${post.slug}`} className="blog-card__image">
                      <img src={post.image} alt={post.imageAlt} loading="lazy" />
                    </a>
                    <h3><a href={`#/blog/${post.slug}`}>{post.title}</a></h3>
                    <PostDate>{post.date}</PostDate>
                    <p>{post.excerpt}</p>
                    <a className="blog-card__link" href={`#/blog/${post.slug}`}>Read article →</a>
                  </article>
                ))}
              </div>
            </section>

            <a className="blog-button blog-index__more" href="#/blog">See More</a>
          </div>
        </div>
      </section>
      <BlogFooter footer={footer} />
    </main>
  );
}

function BlogArticle({ header, footer, post }) {
  const [markdown, setMarkdown] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
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

  const tableOfContents = [...markdown.matchAll(/^##\s+(.+)$/gm)].map((match) => ({
    title: match[1].replace(/\*\*/g, '').replace(/\*/g, ''),
    id: headingId(match[1]),
  }));
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="app blog-page">
      {header}
      <header className="blog-post-hero">
        <div className="blog-post-hero__inner">
          <div className="blog-post-hero__copy">
            <a className="blog-article__back" href="#/blog">← Back to the blog</a>
            <h1>{post.title}</h1>
            <p>Written by: <strong>{post.author || 'BOXCOM Africa Team'}</strong></p>
          </div>
          <div className="blog-post-hero__media">
            <img src={post.image} alt={post.imageAlt} />
            <p>Published: {post.date}</p>
          </div>
        </div>
      </header>

      <section className="blog-article-shell">
        <article className="blog-article">
          <p className="blog-article__lead">{post.excerpt}</p>
          {tableOfContents.length > 0 && (
            <nav className="blog-article__toc" aria-label="Table of contents">
              <p className="blog-article__toc-title">Table of Contents</p>
              <ul>
                {tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#/blog/${post.slug}`}
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
            {error && <p>We could not load this article. Please try again.</p>}
            {!error && !markdown && <p>Loading article…</p>}
            {markdown && <MarkdownContent source={markdown} />}
          </div>
        </article>
      </section>

      {relatedPosts.length > 0 && (
        <section className="blog-related" aria-labelledby="related-articles-title">
          <div className="blog-related__inner">
            <h2 id="related-articles-title">Related Articles</h2>
            <div className="blog-related__grid">
              {relatedPosts.map((relatedPost) => (
                <article className="blog-related__card" key={relatedPost.slug}>
                  <a href={`#/blog/${relatedPost.slug}`}>
                    <img src={relatedPost.image} alt={relatedPost.imageAlt} loading="lazy" />
                  </a>
                  <div>
                    <h3><a href={`#/blog/${relatedPost.slug}`}>{relatedPost.title}</a></h3>
                    <PostDate>{relatedPost.date}</PostDate>
                  </div>
                </article>
              ))}
            </div>
            <a className="blog-button blog-related__more" href="#/blog">See More</a>
          </div>
        </section>
      )}

      <BlogFooter footer={footer} />
    </main>
  );
}

function BlogPage({ header, footer, slug }) {
  const post = slug ? blogPosts.find((item) => item.slug === slug) : null;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = post ? `${post.title} | BOXCOM Africa` : 'PR Insights and News | BOXCOM Africa';
    document.documentElement.scrollTop = 0;
    return () => {
      document.title = previousTitle;
    };
  }, [post]);

  if (slug && !post) {
    return (
      <main className="app blog-page">
        {header}
        <section className="blog-not-found">
          <h1>Article Not Found</h1>
          <a className="blog-button" href="#/blog">Return to Our Blog</a>
        </section>
        <BlogFooter footer={footer} />
      </main>
    );
  }

  return post
    ? <BlogArticle header={header} footer={footer} post={post} />
    : <BlogIndex header={header} footer={footer} />;
}

export default BlogPage;
