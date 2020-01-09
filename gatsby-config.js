/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

module.exports = {

  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: path.resolve(__dirname, 'src')
        }
      }
    }
  ]
}

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}