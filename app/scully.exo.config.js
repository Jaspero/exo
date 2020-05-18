const {RouteTypes} = require('@scullyio/scully');
const {MinifyHtml} = require('scully-plugin-minify-html');
const {Sitemap} = require('@gammastream/scully-plugin-sitemap');
const {Http404} = require('@gammastream/scully-plugin-http404');
const lazyImages = require("@notiz/scully-plugin-lazy-images");

const dynamicPages = [
  'blog',
  'experiences',
  'shop',
  'news'
];

exports.config = {
  projectRoot: './src',
  projectName: 'exo',
  outDir: './dist/static',
  sitemapOptions: {
    urlPrefix: 'https://exo.com',
    sitemapFilename: 'sitemap.xml',
    changeFreq: 'monthly',
    priority: ['1.0', '0.9', '0.8', '0.7', '0.6', '0.5', '0.4', '0.3', '0.2', '0.1', '0.0'],
    ignoredRoutes: ['/404']
  },
  defaultPostRenderers: [
    'seoHrefOptimise',
    Sitemap,
    Http404,
    lazyImages,
    MinifyHtml
  ],
  minifyHtmlOptions: {
    removeComments: false,
  },
  routes: dynamicPages.reduce((acc, cur) => {

    acc[`/${cur}/:id`] = {
      type: RouteTypes.contentFolder,
      id: {
        folder: './dist/exo/collections/' + cur
      }
    };

    return acc;
  }, {})
};
