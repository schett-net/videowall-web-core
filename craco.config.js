module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.unshift({
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      });

      return webpackConfig;
    },
  },
};
