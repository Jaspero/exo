exports.config = {
  projectRoot: "./src",
  projectName: "exo",
  outDir: '../docs',
  routes: {
    '/blog/:id': {
      type: 'contentFolder',
      id: {
        folder: "./../docs/collections/blog"
      }
    },
  }
};
