const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const sourceDirectory = process.argv[2];

if (!sourceDirectory) {
  throw new Error('Usage: node scripts/import-articles.js /path/to/docx-folder');
}

const root = path.resolve(__dirname, '..');
const contactPath = (language, sourceName) => `${language === 'fr' ? '' : '/en'}/contact?from=blog-${sourceName}`;

const articles = [
  {
    file: 'Article_1_-_Brands_Believe_in_Africa_EN.docx', language: 'en', slug: 'brands-believe-in-africa-most-still-communicate-there-like-tourists',
    image: '/assets/blog/brands-believe-africa/hero-samsung-media-event.webp', imageAlt: 'Guests attending a BOXCOM Africa media event in Morocco', category: 'African Markets', featured: true,
    headings: [3, 8, 12, 16, 18, 25, 28], sourceName: 'africa',
  },
  {
    file: 'Article_1_-_Les_marques_croient_en_lAfrique_FR.docx', language: 'fr', slug: 'brands-believe-in-africa-most-still-communicate-there-like-tourists',
    image: '/assets/blog/brands-believe-africa/hero-samsung-media-event.webp', imageAlt: 'Invités participant à un événement média de BOXCOM Africa au Maroc', category: 'Marchés africains', featured: true,
    headings: [3, 8, 12, 16, 18, 25, 28], sourceName: 'africa',
  },
  {
    file: 'Article_2_-_What_Makes_a_Journalist_Take_Your_Call_EN.docx', language: 'en', slug: 'what-makes-a-journalist-take-your-call',
    image: '/assets/Media%20Relations_Approved%20Images/media-relations-conversations.jpg', imageAlt: 'Journalists and camera crews covering a media story', category: 'Media Relations',
    headings: [3, 7, 14, 19, 26, 33], sourceName: 'journalist',
  },
  {
    file: 'Article_2_-_Quest-ce_qui_pousse_un_journaliste_a_decrocher_FR.docx', language: 'fr', slug: 'what-makes-a-journalist-take-your-call',
    image: '/assets/Media%20Relations_Approved%20Images/media-relations-conversations.jpg', imageAlt: 'Journalistes et équipes de tournage couvrant un sujet média', category: 'Relations médias',
    headings: [3, 7, 14, 19, 26, 33], sourceName: 'journaliste',
  },
  {
    file: 'Article_3_-_What_Gets_Lost_Between_Translation_and_Localization_EN.docx', language: 'en', slug: 'what-gets-lost-between-translation-and-localization',
    image: '/assets/Our%20Projects_Approved%20Images/our-projects-header.jpg', imageAlt: 'A strategic map of Africa representing localization across markets', category: 'Localization',
    headings: [3, 9, 14, 20, 25, 30], sourceName: 'localisation',
  },
  {
    file: 'Article_3_-_Traduire_ou_localiser_FR.docx', language: 'fr', slug: 'what-gets-lost-between-translation-and-localization',
    image: '/assets/Our%20Projects_Approved%20Images/our-projects-header.jpg', imageAlt: 'Carte stratégique de l’Afrique représentant la localisation des campagnes', category: 'Localisation',
    headings: [3, 9, 14, 20, 25, 30], sourceName: 'localisation',
  },
  {
    file: 'Article_4_-_What_AFCON_2025_Taught_Brands_in_Morocco_EN.docx', language: 'en', slug: 'what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup',
    image: '/assets/blog/afcon-2030/morocco-football-stadium.webp', imageAlt: 'Moroccan football supporters filling a stadium during a night match', category: 'Brand Strategy',
    headings: [3, 8, 16, 22, 27, 34], sourceName: 'afcon',
  },
  {
    file: 'Article_4_-_Ce_que_la_CAN_2025_a_appris_aux_marques_au_Maroc_FR.docx', language: 'fr', slug: 'what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup',
    image: '/assets/blog/afcon-2030/morocco-football-stadium.webp', imageAlt: 'Supporters marocains dans un stade lors d’un match en soirée', category: 'Stratégie de marque',
    headings: [3, 8, 16, 22, 27, 34], sourceName: 'can',
  },
];

const seriesLinks = {
  en: {
    'brands-believe-in-africa-most-still-communicate-there-like-tourists': '[the gap between translation and localization](/en/blog/what-gets-lost-between-translation-and-localization), [how we select journalists in Moroccan and African markets](/en/blog/what-makes-a-journalist-take-your-call), and [what major sponsorships teach us about cultural relevance](/en/blog/what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup)',
    'what-makes-a-journalist-take-your-call': '[why global campaigns underperform when they are translated rather than localized](/en/blog/what-gets-lost-between-translation-and-localization), and [what major brand moments teach about the difference between visibility and relevance](/en/blog/what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup)',
    'what-gets-lost-between-translation-and-localization': '[what makes a journalist take your call](/en/blog/what-makes-a-journalist-take-your-call), and [the difference between being visible at a major moment and being relevant to it](/en/blog/what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup)',
    'what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup': '[what makes a journalist take your call](/en/blog/what-makes-a-journalist-take-your-call), and [what gets lost between translating a campaign and localizing it](/en/blog/what-gets-lost-between-translation-and-localization)',
  },
  fr: {
    'brands-believe-in-africa-most-still-communicate-there-like-tourists': '[l’écart entre traduction et localisation](/blog/what-gets-lost-between-translation-and-localization), sur [la manière dont nous choisissons les journalistes au Maroc et ailleurs en Afrique](/blog/what-makes-a-journalist-take-your-call), et sur [ce que les grands moments de marque nous enseignent en matière de pertinence culturelle](/blog/what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup)',
    'what-makes-a-journalist-take-your-call': '[des raisons pour lesquelles les campagnes globales sous-performent lorsqu’elles sont traduites plutôt que localisées](/blog/what-gets-lost-between-translation-and-localization), et de [ce que les grands moments de marque nous apprennent sur la différence entre visibilité et pertinence](/blog/what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup)',
    'what-gets-lost-between-translation-and-localization': '[ce qui pousse un journaliste à décrocher](/blog/what-makes-a-journalist-take-your-call), et de [la différence entre être visible lors d’un grand moment et y être pertinent](/blog/what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup)',
    'what-afcon-2025-taught-brands-in-morocco-about-the-2030-world-cup': '[ce qui pousse un journaliste à décrocher](/blog/what-makes-a-journalist-take-your-call), et de [ce qui se perd entre traduire une campagne et la localiser](/blog/what-gets-lost-between-translation-and-localization)',
  },
};

const quote = (value) => JSON.stringify(value);

articles.forEach((article) => {
  const filePath = path.join(sourceDirectory, article.file);
  const text = execFileSync('/usr/bin/textutil', ['-convert', 'txt', '-stdout', filePath], { encoding: 'utf8' });
  const lines = text.replace(/\r/g, '').split('\n').map((line) => line.trim()).filter(Boolean);
  const [title, excerpt] = lines;
  const headingSet = new Set(article.headings);
  const sections = [];
  let currentSection;

  lines.slice(2).forEach((line, offset) => {
    const lineNumber = offset + 3;
    if (headingSet.has(lineNumber)) {
      currentSection = { heading: line, paragraphs: [] };
      sections.push(currentSection);
      return;
    }

    let paragraph = line;
    if (paragraph.includes('[Lien contact]')) {
      const label = paragraph.replace(/\s*\[Lien contact\]\s*/, '');
      paragraph = `[${label}](${contactPath(article.language, article.sourceName)})`;
    }
    if (paragraph.includes('[Liens vers les 3 autres articles]') || paragraph.includes('[Liens vers les autres articles]')) {
      paragraph = paragraph
        .replace(/the gap between translation and localization, how we select journalists in Moroccan and African markets, and what major sponsorships teach us about cultural relevance/i, seriesLinks.en[article.slug])
        .replace(/what makes a journalist take your call, and what gets lost between translating a campaign and localizing it/i, seriesLinks.en[article.slug])
        .replace(/what makes a journalist take your call, and the difference between being visible at a major moment and being relevant to it/i, seriesLinks.en[article.slug])
        .replace(/why global campaigns underperform when they are translated rather than localized, and what major brand moments teach about the difference between visibility and relevance/i, seriesLinks.en[article.slug])
        .replace(/l’écart entre traduction et localisation, sur la manière dont nous choisissons les journalistes au Maroc et ailleurs en Afrique, et sur ce que les grands moments de marque nous enseignent en matière de pertinence culturelle/i, seriesLinks.fr[article.slug])
        .replace(/ce qui pousse un journaliste à décrocher, et de ce qui se perd entre traduire une campagne et la localiser/i, seriesLinks.fr[article.slug])
        .replace(/ce qui pousse un journaliste à décrocher, et de la différence entre être visible lors d’un grand moment et y être pertinent/i, seriesLinks.fr[article.slug])
        .replace(/les raisons pour lesquelles les campagnes globales sous-performent lorsqu’elles sont traduites plutôt que localisées, et de ce que les grands moments de marque enseignent sur la différence entre visibilité et pertinence/i, seriesLinks.fr[article.slug])
        .replace(/les raisons pour lesquelles les campagnes globales sous-performent lorsqu’elles sont traduites plutôt que localisées, et de ce que les grands moments de marque nous apprennent sur la différence entre visibilité et pertinence/i, seriesLinks.fr[article.slug])
        .replace(/des raisons pour lesquelles.*différence entre visibilité et pertinence/i, seriesLinks.fr[article.slug])
        .replace(/\s*\[Liens vers (?:les (?:3 )?)?autres articles\]\s*/, '');
      if (!paragraph.includes('](/')) {
        paragraph += ` ${article.language === 'fr' ? 'À lire également' : 'Also read'} : ${seriesLinks[article.language][article.slug]}.`;
      }
    }
    currentSection.paragraphs.push(paragraph);
  });

  const body = sections.map(({ heading, paragraphs }) => (
    `:::section layout="text"\n## ${heading}\n\n${paragraphs.join('\n\n')}\n:::`
  )).join('\n\n');

  const frontmatter = [
    '---',
    `title: ${quote(title)}`,
    'date: "2026-09-23"',
    `displayDate: ${quote(article.language === 'fr' ? '23 sept. 2026' : '23 Sep, 2026')}`,
    `excerpt: ${quote(excerpt)}`,
    `image: ${quote(article.image)}`,
    `imageAlt: ${quote(article.imageAlt)}`,
    'author: "BOXCOM Africa Team"',
    `category: ${quote(article.category)}`,
    `bodyIntro: ${quote(excerpt)}`,
    `featured: ${article.featured === true}`,
    `language: ${quote(article.language)}`,
    `translationKey: ${quote(article.slug)}`,
    `slug: ${quote(article.slug)}`,
    '---',
    '',
    body,
    '',
  ].join('\n');

  const suffix = article.language === 'fr' ? '.fr.md' : '.md';
  fs.writeFileSync(path.join(root, 'posts', `${article.slug}${suffix}`), frontmatter);
});

console.log(`Imported ${articles.length} localized articles from ${sourceDirectory}.`);
