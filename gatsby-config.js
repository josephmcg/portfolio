/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Joe McGrath`,
    description:
      "Joe is a Tokyo-based web developer. He uses React, JavaScript, CSS, and HTML to develop performant and intuitive websites.",
    author: `@josephmcg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-use-dark-mode",
  ],
}
