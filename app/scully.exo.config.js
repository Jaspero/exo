exports.config = {
  projectRoot: './src',
  projectName: 'exo',
  outDir: './dist/static',
  routes: {
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: './dist/collections/blog'
      },
    },
    '/events/:id': {
      type: 'contentFolder',
      id: {
        folder: './dist/collections/events'
      },
    },
    '/shop/:id': {
      type: 'contentFolder',
      id: {
        folder: './dist/collections/shop'
      },
    },
    '/pages/:id': {
      type: 'contentFolder',
      id: {
        folder: './dist/collections/pages'
      }
    }
  }
};
