const u = (id, w = 1600, h = 1100) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const HERO_FRAMES = [
  { src: u('1571019613454-1cb2f99b2d8b', 2400, 1400), caption: '01 / FRAME · CITY DERBY · 2025' },
  { src: u('1574629810360-7efbbe195018', 2400, 1400), caption: '02 / FRAME · NORTHWALL · 2024' },
  { src: u('1551958219-acbc608c6377',    2400, 1400), caption: '03 / FRAME · OPEN COURT · 2025' },
];

export const PROJECTS = [
  { id: 'derby',    name: 'City Derby',    sport: 'Football',          year: '2025', frames: 12, cover: u('1517649763962-0c623066013b', 1600, 1100), summary: 'A long night under stadium light. Two cameras, eleven hours, one frame the studio waited four years to take.' },
  { id: 'northwall',name: 'Northwall',    sport: 'Climbing',          year: '2024', frames: 18, cover: u('1522163182402-834f871fd851', 1600, 1100), summary: 'Three days at altitude. The wall, the silence between attempts, and the small theatre of preparation that never makes the broadcast.' },
  { id: 'open',     name: 'Open Court',   sport: 'Tennis',            year: '2025', frames: 9,  cover: u('1554068865-24cecd4e34b8',    1600, 1100), summary: 'Center court at dusk. A study in geometry and concentration set entirely in the last hour of natural light.' },
  { id: 'rally',    name: 'Rally',        sport: 'Motorsport',        year: '2024', frames: 22, cover: u('1541447271487-09612b3f49f7', 1600, 1100), summary: 'A weekend in the service park. Mechanics, time-cards, the slow-motion ballet of a tyre change captured between stages.' },
  { id: 'arena',    name: 'Arena',        sport: 'Esports',           year: '2025', frames: 14, cover: u('1542751371-adc38448a05e',    1600, 1100), summary: 'Stage lights, screen glow, the audible click of a final keystroke. A new theatre, photographed on the same terms as the old.' },
  { id: 'tour',     name: 'On the Road',  sport: 'Behind the Scenes', year: '2024', frames: 24, cover: u('1517466787929-bc90951d0974', 1600, 1100), summary: 'Three weeks with the team. Tunnel, locker room, the bus at four in the morning.' },
  { id: 'tide',     name: 'Tidewater',    sport: 'Surf',              year: '2025', frames: 16, cover: u('1502680390469-be75c86b636f', 1600, 1100), summary: 'A point break before sunrise. Cold light, long lenses, and a measured approach to one of the loudest sports we cover.' },
  { id: 'spire',    name: 'Spire',        sport: 'Athletics',         year: '2024', frames: 11, cover: u('1521412644187-c49fa049e84d', 1600, 1100), summary: 'Track and field at a regional meet. Geometry, repetition, and the brief grace of athletes between heats.' },
];

export const GALLERY = [
  { id: 'g01', cat: 'sports',   span: 7,  aspect: '4/3',   src: u('1517649763962-0c623066013b', 1800, 1350), title: 'Late stoppage',   meta: 'CITY DERBY · 2025' },
  { id: 'g02', cat: 'sports',   span: 5,  aspect: '4/5',   src: u('1554068865-24cecd4e34b8',    1200, 1500), title: 'Center court',    meta: 'OPEN COURT · 2025' },
  { id: 'g03', cat: 'events',   span: 5,  aspect: '4/5',   src: u('1540575467063-178a50c2df87', 1200, 1500), title: 'Pre-show',         meta: 'ARENA · 2025' },
  { id: 'g04', cat: 'sports',   span: 7,  aspect: '16/10', src: u('1546519638-68e109498ffc',    1800, 1125), title: 'In the lane',     meta: 'NORTHWALL · 2024' },
  { id: 'g05', cat: 'creative', span: 4,  aspect: '3/4',   src: u('1521412644187-c49fa049e84d', 1200, 1600), title: 'Stride',           meta: 'SPIRE · 2024' },
  { id: 'g06', cat: 'sports',   span: 4,  aspect: '3/4',   src: u('1502680390469-be75c86b636f', 1200, 1600), title: 'First light',     meta: 'TIDEWATER · 2025' },
  { id: 'g07', cat: 'esports',  span: 4,  aspect: '3/4',   src: u('1542751371-adc38448a05e',    1200, 1600), title: 'Final keystroke', meta: 'ARENA · 2025' },
  { id: 'g08', cat: 'creative', span: 8,  aspect: '21/9',  src: u('1517466787929-bc90951d0974', 2400, 1029), title: 'Empty stadium',   meta: 'EDITORIAL · 2024' },
  { id: 'g09', cat: 'events',   span: 4,  aspect: '4/5',   src: u('1493225457124-a3eb161ffa5f', 1200, 1500), title: 'Press row',       meta: 'OPEN COURT · 2025' },
  { id: 'g10', cat: 'sports',   span: 6,  aspect: '4/3',   src: u('1541447271487-09612b3f49f7', 1800, 1350), title: 'Service park',    meta: 'RALLY · 2024' },
  { id: 'g11', cat: 'sports',   span: 6,  aspect: '4/3',   src: u('1517438476312-10d79c077509', 1800, 1350), title: 'Warm-up',         meta: 'OPEN COURT · 2025' },
  { id: 'g12', cat: 'esports',  span: 5,  aspect: '4/5',   src: u('1593305841991-05c297ba4575', 1200, 1500), title: 'The booth',       meta: 'ARENA · 2025' },
  { id: 'g13', cat: 'creative', span: 7,  aspect: '16/10', src: u('1522163182402-834f871fd851', 1800, 1125), title: 'The wall',        meta: 'NORTHWALL · 2024' },
  { id: 'g14', cat: 'events',   span: 6,  aspect: '4/3',   src: u('1571019613454-1cb2f99b2d8b', 1800, 1350), title: 'Tunnel out',      meta: 'CITY DERBY · 2025' },
  { id: 'g15', cat: 'sports',   span: 6,  aspect: '4/3',   src: u('1574629810360-7efbbe195018', 1800, 1350), title: 'Possession',      meta: 'CITY DERBY · 2025' },
  { id: 'g16', cat: 'creative', span: 12, aspect: '21/9',  src: u('1551958219-acbc608c6377',    2400, 1029), title: 'Mid-round',       meta: 'STUDIO · 2025' },
];

export const SERVICES = [
  {
    num: '01', title: 'Sports photography',
    desc: 'Track meets, game days, practices, tournaments. I cover it all. As an athlete myself, I know where the good moments happen and how to be in position when they do. Delivered within 24 hours.',
    cover: u('1521412644187-c49fa049e84d', 800, 600),
    bullets: ['Track & field meets', 'Multi-sport game days', 'Season-long coverage'],
  },
  {
    num: '02', title: 'Athlete portraits',
    desc: 'Individual sessions for athletes who want photos that actually represent them. Action shots, posed portraits, or both. Good for profiles, recruiting, and social media.',
    cover: u('1488161628813-04466f872be2', 800, 600),
    bullets: ['Action & posed portraits', 'Recruiting packages', 'Social media content'],
  },
  {
    num: '03', title: 'Team coverage',
    desc: 'Full team shoots, group photos, and sideline coverage for the whole roster. I work fast and keep it organized so nobody is standing around waiting.',
    cover: u('1571019613454-1cb2f99b2d8b', 800, 600),
    bullets: ['Team & group photos', 'Full roster sessions', 'Game-day sideline'],
  },
  {
    num: '04', title: 'Custom work',
    desc: "Got something specific in mind? I'm open to it. Portraits, headshots, brand shoots, events. If you have a vision, I'll work with you to bring it to life. Every project gets the same level of attention.",
    cover: u('1493225457124-a3eb161ffa5f', 800, 600),
    bullets: ['Headshots & brand shoots', 'Event coverage', 'Personal projects'],
  },
];

export const STATS = [
  { value: 'Philly',   label: 'Based in Philadelphia, PA' },
  { value: 'Athlete',  label: 'Track & field competitor' },
  { value: 'Multi',    label: 'Covers many sports' },
  { value: '24hr',     label: 'Turnaround on selects' },
];

export const CLIENTS = ['WEXP · ', 'SRX\\\\Visuals · ', 'LS Athletics · '];

export const ABOUT_PORTRAITS = [
  '/sawyer-portrait.jpg',
  u('1502685104226-ee32379fefbe', 1200, 1500),
  u('1488161628813-04466f872be2', 1200, 1500),
];
