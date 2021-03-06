const path = require('path')
module.exports = {
  devServer: {
    writeToDisk: true,
    inline: false,
    hot: true
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.entry = './src/index.js',
      webpackConfig.mode = 'development',
      webpackConfig.devtool = 'inline-source-map',
      webpackConfig.output.filename = 'react-bundle.js',
      webpackConfig.output.path = path.resolve(__dirname, '../extjs-webinar/react')
      return webpackConfig;
    }
  }
}



