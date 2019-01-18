module.export = {
    pathPrefix: "/myWebsite",
    plugins: [
     {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
     }
    ],
    }