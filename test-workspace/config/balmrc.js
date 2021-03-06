const path = require('path');

const root = path.resolve(__dirname, '..', '..');
const workspace = path.join(root, 'test-workspace');
const assets = path.join(workspace, 'assets');

const testConfig = {
  root,
  workspace,
  assets
};

const balmConfig = {
  // debug: true,
  server: {
    open: false
    // historyOptions: {
    //   index: '/main-sync.html'
    // }
  },
  workspace: testConfig.workspace,
  roots: {
    source: 'src',
    target: 'dist'
  },
  paths: {
    source: {
      css: 'styles',
      js: 'scripts',
      img: 'images',
      font: 'fonts',
      media: 'media'
    },
    target: {
      css: 'a',
      js: 'b',
      img: 'c',
      font: 'd',
      media: 'e'
    }
  },
  styles: {
    ext: 'css'
  },
  sprites: {
    image: ['img-icon']
  },
  extras: {
    excludes: ['empty.txt', 'service-worker.js']
  },
  assets: {
    publicUrl: '/',
    root: testConfig.assets,
    mainDir: 'public',
    // NOTE: Extra cache files
    // includes: [
    //   'dist/web/css/vendor.css',
    //   'dist/web/js/vendors/jquery.js',
    //   'dist/web/js/vendors/lodash.js'
    // ],
    excludes: ['dist/web/img/icons/icon-*.png', 'dist/web/c/icons/icon-*.png']
  }
  // pwa: {
  //   enabled: true
  // }
};

module.exports = balmConfig;
