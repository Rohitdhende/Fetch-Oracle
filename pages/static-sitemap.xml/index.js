import { getServerSideSitemap } from 'next-sitemap';
import { glob } from 'glob';

export const getServerSideProps = async (ctx) => {

  const pagesDir = 'pages/**/*.js';
  let pagesPaths = glob.sync(pagesDir);

  const staticPaths = pagesPaths
    .filter((staticPage) => {
      return ![
        'api',
        '_app.js',
        '_document.js',
        '404.js',
        'vault',
        'index.js',
        'sitemap-0.xml',
      ].includes(staticPage);
    })
    .filter((path) => !path.includes('['))
    .filter((path) => !path.includes('/_'))
    .filter((path) => !path.includes('404'))
    .filter((path) => !path.includes('_app'))
    .filter((path) => !path.includes('_document'))
    .filter((path) => !path.includes('static-sitemap.xml'))
    .filter((path) => !path.includes('pages/index'))
    .filter((path) => !path.includes('pages/api'))
    .map((item) => {
      return item.replace('.js', '').replace('pages/', '');
    })
    .map((staticPagePath) => {
      return `${process.env.NEXT_PUBLIC_DOMAIN_URL}/${staticPagePath.replace(
        '.js',
        ''
      )}`;
    });


  const allPaths = [
    ...staticPaths,
  ];

  const newsSitemaps = allPaths.map((item) => ({
    loc: `${item.toString()}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
