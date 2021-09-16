module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/playing_cards/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import '@/scss/all.scss';",
      },
    },
  },
};
