// // scripts/generate-sitemap.js
// const fs = require('fs');
// const path = require('path');

// // Read movies data
// const moviesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/data.json'), 'utf8'));

// const baseUrl = 'https://movieandtvshowat.netlify.app';

// // Generate sitemap XML content
// function generateSitemap() {
//   const currentDate = new Date().toISOString().split('T')[0];
  
//   let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
//         xmlns:xhtml="http://www.w3.org/1999/xhtml"
//         xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
//         xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
//         xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  
//   <!-- Homepage -->
//   <url>
//     <loc>${baseUrl}/</loc>
//     <lastmod>${currentDate}</lastmod>
//     <changefreq>daily</changefreq>
//     <priority>1.0</priority>
//   </url>
  
//   <!-- Categories Page -->
//   <url>
//     <loc>${baseUrl}/categories</loc>
//     <lastmod>${currentDate}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.8</priority>
//   </url>
  
//   <!-- Request Page -->
//   <url>
//     <loc>${baseUrl}/request</loc>
//     <lastmod>${currentDate}</lastmod>
//     <changefreq>monthly</changefreq>
//     <priority>0.5</priority>
//   </url>
  
//   <!-- Search Page -->
//   <url>
//     <loc>${baseUrl}/search</loc>
//     <lastmod>${currentDate}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.7</priority>
//   </url>

//   <!-- Privacy Policy Page -->
//   <url>
//     <loc>${baseUrl}/privacy-policy</loc>
//     <lastmod>${currentDate}</lastmod>
//     <changefreq>monthly</changefreq>
//     <priority>0.4</priority>
//   </url>

//   <!-- Terms of Service Page -->
//   <url>
//     <loc>${baseUrl}/terms-of-service</loc>
//     <lastmod>${currentDate}</lastmod>
//     <changefreq>monthly</changefreq>
//     <priority>0.4</priority>
//   </url>

//   <!-- DMCA Page -->
//   <url>
//     <loc>${baseUrl}/dmca</loc>
//     <lastmod>${currentDate}</lastmod>
//     <changefreq>monthly</changefreq>
//     <priority>0.4</priority>
//   </url>

//   <!-- FAQ Page -->
//   <url>
//     <loc>${baseUrl}/faq</loc>
//     <lastmod>${currentDate}</lastmod>
//     <changefreq>monthly</changefreq>
//     <priority>0.4</priority>
//   </url>`;

//   // Add all movie pages (these are actual separate pages)
//   moviesData.forEach(movie => {
//     const movieDate = new Date(movie.uploadDate).toISOString().split('T')[0];
    
//     sitemapContent += `
//   <!-- Movie: ${movie.title} -->
//   <url>
//     <loc>${baseUrl}/movie/${movie.slug}</loc>
//     <lastmod>${movieDate}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.7</priority>
//   </url>`;
//   });

//   sitemapContent += '\n</urlset>';
  
//   return {
//     sitemapContent,
//     totalUrls: moviesData.length + 8 // 8 main pages + all movies
//   };
// }

// // Generate and write sitemap
// try {
//   const { sitemapContent, totalUrls } = generateSitemap();
//   const publicDir = path.join(__dirname, '../public');

//   // Ensure public directory exists
//   if (!fs.existsSync(publicDir)) {
//     fs.mkdirSync(publicDir, { recursive: true });
//   }

//   // Write sitemap.xml to public folder
//   fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);

//   console.log('✅ Sitemap generated successfully!');
//   console.log(`📊 Total URLs: ${totalUrls}`);
//   console.log(`📽️  Movies: ${moviesData.length}`);
//   console.log(`📄 Pages: 8 (Home, Categories, Request, Search, Privacy, Terms, DMCA, FAQ)`);
//   console.log('📁 Location: public/sitemap.xml');
  
//   // Exit successfully
//   process.exit(0);
// } catch (error) {
//   console.error('❌ Error generating sitemap:', error);
//   process.exit(1);
// }









// scripts/generate-sitemap.js
const fs = require('fs');
const path = require('path');

const moviesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/data.json'), 'utf8'));
const baseUrl = 'https://movieandtvshowat.netlify.app';

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        >
  
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/og-image.jpg</image:loc>
      <image:title>Movie On Demand - Watch Movies Online</image:title>
    </image:image>
  </url>
  
  <url>
    <loc>${baseUrl}/categories</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/request</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>${baseUrl}/search</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>

  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>${baseUrl}/terms-of-service</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>${baseUrl}/dmca</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>

  <url>
    <loc>${baseUrl}/faq</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>`;

  moviesData.forEach(movie => {
    const movieDate = new Date(movie.uploadDate).toISOString().split('T')[0];
    
    sitemapContent += `
  <url>
    <loc>${baseUrl}/movie/${movie.slug}</loc>
    <lastmod>${movieDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
    <mobile:mobile/>
    <image:image>
      <image:loc>${movie.thumbnail}</image:loc>
      <image:title>${movie.title}</image:title>
      <image:caption>${movie.description.substring(0, 200)}...</image:caption>
    </image:image>
    <xhtml:link rel="alternate" media="only screen and (max-width: 640px)" href="${baseUrl}/movie/${movie.slug}" />
  </url>`;
  });

  sitemapContent += '\n</urlset>';
  
  return {
    sitemapContent,
    totalUrls: moviesData.length + 9
  };
}

try {
  const { sitemapContent, totalUrls } = generateSitemap();
  const publicDir = path.join(__dirname, '../public');

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent);

  console.log('✅ Sitemap generated successfully!');
  console.log(`📊 Total URLs: ${totalUrls}`);
  console.log(`📽️ Movies: ${moviesData.length}`);
  console.log('📁 Location: public/sitemap.xml');
  
  process.exit(0);
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}