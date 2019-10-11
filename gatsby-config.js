const config = {
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
    ]
}

module.exports = config