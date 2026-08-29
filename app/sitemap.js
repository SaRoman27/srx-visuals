export default function sitemap() {
  const base = 'https://srxvisuals.com';
  const now = new Date().toISOString();

  return [
    { url: base,                   lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/portfolio`,    lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/services`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/sports-photographer-philadelphia`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/track-and-field-photographer-philadelphia`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/game-day-photographer-philadelphia`, lastModified: now, changeFrequency: 'monthly', priority: 0.84 },
    { url: `${base}/athlete-portraits-philadelphia`, lastModified: now, changeFrequency: 'monthly', priority: 0.84 },
    { url: `${base}/team-photography-philadelphia`, lastModified: now, changeFrequency: 'monthly', priority: 0.84 },
    { url: `${base}/about`,        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`,      lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
