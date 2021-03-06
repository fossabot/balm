export default {
  entry: {
    'vendor-a': ['jquery'],
    'vendor-b': ['lodash'],
    'vendor-c': ['moment'],
    main: './src/scripts/spa/vendor-main.js'
  },
  optimization: {
    splitChunks: {
      maxInitialRequests: 4
    }
  }
};
