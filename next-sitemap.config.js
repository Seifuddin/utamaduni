/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://utamaduniorganization.vercel.app',
  generateRobotsTxt: true, // (optional) generate robots.txt
  sitemapSize: 7000,       // maximum URLs per sitemap file
  changefreq: 'weekly',
  priority: 0.7,
};
