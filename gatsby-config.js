const config = {
    siteMetadata: {
        siteUrl: "https://ilyassnasr.netlify.com"
    },
    plugins : [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src/`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-transformer-csv`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
    ]
}

module.exports = config