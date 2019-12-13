module.exports = {
  siteMetadata: {
    title: `Gatsby + Sanity`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "dwkgbi7l",
        dataset: "production",
        // a token with read permissions is required
        // if you have a private dataset
        token: `sksklRrFOJCKNtbUiiaIb19DQOAXUOsbSpm5sybWtfwCINJ8Weui3kxkmf5hqQbuNiUltLRVRoAIHqFYoY7odWEePCS1IypYXZVmOuOQc0kqCorLtBA7Mv0bei8q220feyTitwmeh36FV4MLVUA6cxO44roFbs6PSpDtZk2U65NuWPi9BfrB`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
  ],
}
