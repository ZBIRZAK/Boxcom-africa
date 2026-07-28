# Blog Post Authoring Guide

Files beginning with `_` are ignored. Copy one of the real posts, rename it with the URL slug you want, and edit its front matter and sections.

Required front matter:

```md
---
title: "Article title"
date: "2026-07-28"
displayDate: "28 Jul, 2026"
excerpt: "Text displayed on the Blog card."
image: "/assets/path-to-card-image.jpg"
imageAlt: "Accessible image description"
author: "BOXCOM Africa Team"
featured: false
---
```

Available section layouts:

```md
:::section layout="text"
## Text-only section

Paragraph text.
:::

:::section layout="image-right" image="/assets/photo.jpg" alt="Description"
## Text left, image right

Paragraph text.
:::

:::section layout="image-left" image="/assets/photo.jpg" alt="Description"
## Image left, text right

Paragraph text.
:::

:::section layout="image-above" image="/assets/photo.jpg" alt="Description"
## Image above the text

Paragraph text.
:::

:::section layout="image-below" image="/assets/photo.jpg" alt="Description"
## Text above the image

Paragraph text.
:::

:::section layout="full-image" image="/assets/photo.jpg" alt="Description"
:::
```

Normal Markdown inside sections supports `## headings`, `### headings`, paragraphs, bullet lists, **bold**, *italic*, links and blockquotes.

Run `npm start`, `npm run dev`, or `npm run build`. The post list and article routes are generated automatically.
