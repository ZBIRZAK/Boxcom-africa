const publicAsset = (path) => `${process.env.PUBLIC_URL}${path}`;

const suppliedLogo = (number) => publicAsset(`/assets/media/coverage/logo-${number}.svg`);

export const mediaCoverageItems = [
  { slug: 'the-punch', label: 'The Punch', domain: 'punchng.com', aliases: ['The Punch'] },
  { slug: 'mena', label: 'MENA', domain: 'mena.org.eg', aliases: ['MENA (Middle East News Agency)'] },
  { slug: 'sada-el-balad-see', label: 'Sada El Balad / See', domain: 'see.news', aliases: ['Sada El Balad / See'] },
  { slug: 'seneweb', label: 'Seneweb', domain: 'seneweb.com', aliases: ['Seneweb'] },
  {
    slug: 'allafrica',
    label: 'AllAfrica',
    domain: 'allafrica.com',
    aliases: ['Allafrica', 'AllAfrica'],
  },
  {
    slug: 'africa24',
    label: 'Africa24',
    domain: 'africa24tv.com',
    aliases: ['Africa24tv', 'Africa24'],
  },
  { slug: 'reuters', label: 'Reuters', domain: 'reuters.com', aliases: ['Reuters'] },
  { slug: 'bloomberg', label: 'Bloomberg', domain: 'bloomberg.com', aliases: ['Bloomberg'] },
  { slug: 'cnn-africa', label: 'CNN Africa', domain: 'cnn.com/africa', aliases: ['CNN'] },
  { slug: 'bbc-africa', label: 'BBC Africa', domain: 'bbc.com/news/world/africa', aliases: ['BBC'] },
  {
    slug: 'la-map',
    label: 'La MAP',
    domain: 'mapexpress.ma',
    aliases: ['MAP (tv, photos, express, audio)', 'MAP (Business, Finance)', 'MAP Business', 'MAP Finance'],
  },
  {
    slug: 'hespress',
    label: 'Hespress',
    domain: 'hespress.com',
    aliases: ['Hespress'],
  },
  {
    slug: 'leconomiste',
    label: 'L’Économiste',
    domain: 'leconomiste.com',
    aliases: ["L'economiste", "L'Economiste", 'L’Économiste'],
  },
  { slug: 'le-temps-mag', label: 'Le Temps Mag', domain: 'letempsmag.ma', aliases: ['Le temps mag', 'Le Temps Mag'] },
  {
    slug: 'femmes-du-maroc',
    label: 'Femmes du Maroc',
    domain: 'femmesdumaroc.com',
    aliases: ['Femme Du Maroc', 'Femmes du Maroc'],
  },
  {
    slug: 'al-aoula',
    label: 'Al Aoula',
    domain: 'snrtlive.ma/ar/al-aoula',
    aliases: ['AL OULA', 'Al Aoula'],
  },
  {
    slug: '2m',
    label: '2M',
    domain: '2m.ma',
    aliases: ['2M'],
  },
  { slug: 'luxe-radio', label: 'Luxe Radio', domain: 'luxeradio.ma', aliases: ['Luxe Radio'] },
].map((item, index) => ({ ...item, logo: suppliedLogo(index + 1) }));

export const fallbackMediaProjectMap = {
  'the-punch': ['elm'],
  mena: ['elm'],
  'sada-el-balad-see': ['elm'],
  seneweb: ['elm'],
  allafrica: ['elm'],
  africa24: ['elm'],
  reuters: ['elm'],
  bloomberg: ['elm'],
  'cnn-africa': ['elm'],
  'bbc-africa': ['elm'],
  'la-map': ['agriedge', 'eqdom', 'everis', 'samsung'],
  hespress: ['defacto', 'everis', 'samsung'],
  leconomiste: ['agriedge', 'eqdom', 'everis', 'gwm', 'ntt-data'],
  'le-temps-mag': ['defacto', 'eqdom', 'everis', 'gwm', 'mifa', 'ntt-data', 'samsung'],
  'femmes-du-maroc': ['defacto', 'everis'],
  'al-aoula': ['mifa'],
  '2m': ['mifa'],
  'luxe-radio': ['gwm', 'samsung'],
};

export const MEDIA_SHEET_CSV_URL =
  'https://docs.google.com/spreadsheets/d/1Y8TQVCm3_ogEUMhzC757fVFfaqUcJejR2lrMjL9oukI/gviz/tq?tqx=out:csv&gid=0&tq=select%20C%2CD%20where%20D%20is%20not%20null';

const normalize = (value = '') =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

const clientSlugByName = {
  'agri edge': 'agriedge',
  defacto: 'defacto',
  dilitrust: 'dilitrust',
  eqdom: 'eqdom',
  everis: 'everis',
  gwm: 'gwm',
  mifa: 'mifa',
  modanisa: 'modanisa',
  'indrive algeria': 'indrive',
  elm: 'elm',
  samsung: 'samsung',
  'ntt data': 'ntt-data',
};

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = '';
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const character = text[index];
    const next = text[index + 1];

    if (character === '"' && quoted && next === '"') {
      cell += '"';
      index += 1;
    } else if (character === '"') {
      quoted = !quoted;
    } else if (character === ',' && !quoted) {
      row.push(cell);
      cell = '';
    } else if ((character === '\n' || character === '\r') && !quoted) {
      if (character === '\r' && next === '\n') index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = '';
    } else {
      cell += character;
    }
  }

  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

export async function fetchMediaProjectMap(signal) {
  const response = await fetch(MEDIA_SHEET_CSV_URL, { signal });
  if (!response.ok) throw new Error(`Google Sheet request failed (${response.status})`);

  const rows = parseCsv(await response.text());
  const result = Object.fromEntries(mediaCoverageItems.map((item) => [item.slug, []]));
  const outletByAlias = new Map();

  mediaCoverageItems.forEach((item) => {
    item.aliases.forEach((alias) => outletByAlias.set(normalize(alias), item.slug));
  });

  let currentClient = '';
  rows.forEach(([clientCell = '', mediaCell = '']) => {
    if (normalize(clientCell) !== 'client' && clientCell.trim()) currentClient = clientCell.trim();
    if (normalize(mediaCell) === 'media') return;

    const projectSlug = clientSlugByName[normalize(currentClient)];
    const outletSlug = outletByAlias.get(normalize(mediaCell));
    if (projectSlug && outletSlug && !result[outletSlug].includes(projectSlug)) {
      result[outletSlug].push(projectSlug);
    }
  });

  return Object.fromEntries(
    Object.entries(result).map(([outletSlug, projects]) => [
      outletSlug,
      projects.length ? projects : fallbackMediaProjectMap[outletSlug] || [],
    ])
  );
}
