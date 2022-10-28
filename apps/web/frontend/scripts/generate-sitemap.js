const fs = require('fs');
const { buildSitemaps } = require('express-sitemap-xml');
const SITE_URL = 'https://noteslify.stonecss.com';
// need to find a way to do it dynamically
const routesData = ['/', '/login', '/signup', '/notes', '/contact', '/myaccount'];

const getPages = () => {
    return routesData;
}

(async () => {
    const pages = getPages();
    const sitemap = await buildSitemaps(pages, SITE_URL);

    fs.writeFileSync('public/sitemap.xml', sitemap['/sitemap.xml']);
})();

