exports.config = {
  projectRoot: "./src",
  projectName: "exo",
  outDir: './dist/static',
  routes: {
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./dist/collections/blog"
      }
    },
  }
};
