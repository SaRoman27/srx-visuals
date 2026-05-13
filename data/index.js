const u = (id, w = 1600, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const HERO_FRAMES = [
  { src: u('1571019613454-1cb2f99b2d8b', 2400, 1400), caption: '01 / FRAME · CITY DERBY · 2025' },
  { src: u('1574629810360-7efbbe195018', 2400, 1400), caption: '02 / FRAME · NORTHWALL · 2024' },
  { src: u('1551958219-acbc608c6377',    2400, 1400), caption: '03 / FRAME · OPEN COURT · 2025' },
];

export const PROJECTS = [
  { id: 'derby',    name: 'City Derby',    sport: 'Football',   year: '2025', frames: 12, cover: u('1517649763962-0c623066013b', 1600, 1100) },
  { id: 'northwall',name: 'Northwall',     sport: 'Climbing',   year: '2024', frames: 18, cover: u('1522163182402-834f871fd851', 1600, 1100) },
  { id: 'open',     name: 'Open Court',    sport: 'Tennis',     year: '2025', frames: 9,  cover: u('1554068865-24cecd4e34b8',    1600, 1100) },
  { id: 'rally',    name: 'Rally',         sport: 'Motorsport', year: '2024', frames: 22, cover: u('1541447271487-09612b3f49f7', 1600, 1100) },
  { id: 'arena',    name: 'Arena',         sport: 'Esports',    year: '2025', frames: 14, cover: u('1542751371-adc38448a05e',    1600, 1100) },
];

export const GALLERY = [
  { id: 'g01', cat: 'sports',   span: 7,  aspect: '4/3',   src: u('1517649763962-0c623066013b', 1800, 1350), title: 'Late stoppage',  meta: 'CITY DERBY · 2025' },
  { id: 'g02', cat: 'sports',   span: 5,  aspect: '4/5',   src: u('1554068865-24cecd4e34b8',    1200, 1500), title: 'Center court',   meta: 'OPEN COURT · 2025' },
  { id: 'g03', cat: 'events',   span: 5,  aspect: '4/5',   src: u('1540575467063-178a50c2df87', 1200, 1500), title: 'Pre-show',        meta: 'ARENA · 2025' },
  { id: 'g04', cat: 'sports',   span: 7,  aspect: '16/10', src: u('1546519638-68e109498ffc',    1800, 1125), title: 'In the lane',    meta: 'NORTHWALL · 2024' },
  { id: 'g05', cat: 'creative', span: 4,  aspect: '3/4',   src: u('1521412644187-c49fa049e84d', 1200, 1600), title: 'Stride',          meta: 'SPIRE · 2024' },
  { id: 'g06', cat: 'sports',   span: 4,  aspect: '3/4',   src: u('1502680390469-be75c86b636f', 1200, 1600), title: 'First light',    meta: 'TIDEWATER · 2025' },
  { id: 'g07', cat: 'esports',  span: 4,  aspect: '3/4',   src: u('1542751371-adc38448a05e',    1200, 1600), title: 'Final keystroke', meta: 'ARENA · 2025' },
  { id: 'g08', cat: 'creative', span: 8,  aspect: '21/9',  src: u('1517466787929-bc90951d0974', 2400, 1029), title: 'Empty stadium',  meta: 'EDITORIAL · 2024' },
];

export const SERVICES = [
  { num: '01', title: 'Sports photography', desc: 'Game-day, practice, sideline. Stills delivered on a fast turnaround for teams, leagues, and athletes.', cover: u('1571019613454-1cb2f99b2d8b', 800, 600) },
  { num: '02', title: 'Custom requests',     desc: 'Portraits, events, brand shoots, headshots - whatever the brief calls for. Every project gets the same cinematic treatment.', cover: u('1517649763962-0c623066013b', 800, 600) },
];

export const STATS = [
  { value: 'Philly', label: 'Based in Philadelphia, PA' },
  { value: 'Sports', label: 'Game-day · practice · sideline' },
  { value: 'Custom', label: 'Portraits · events · brand' },
  { value: 'Fast',   label: 'Quick turnaround on delivery' },
];

export const CLIENTS = ['WEXP · ', 'SRX\\Visuals · ', 'LS Athletics · '];

export const ABOUT_PORTRAITS = [
  '/sawyer-portrait.png',
  u('1502685104226-ee32379fefbe', 1200, 1500),
  u('1488161628813-04466f872be2', 1200, 1500),
];
