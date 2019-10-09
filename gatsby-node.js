const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

//Adding Node fields
exports.onCreateNode = ({ node, getNode, actions }) => {

  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {

    const slug = createFilePath({ node, getNode, basePath: `posts` })
    let featured = false
    
    //Featured posts in featured folder
    if (slug.startsWith('/featured/')) {
      featured = true
    }
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `featured`,
      value: featured,
    })
  }
}

// Creating pages from graphql queries
exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
    `)

  const edges = result.data.allMarkdownRemark.edges
  const numberOfPosts = edges.length
  const POSTS_PER_PAGE = 10
  const numberOfPages = Math.floor(numberOfPosts/POSTS_PER_PAGE) + 1

  // Create browsing pages
  for (let i = 0; i < numberOfPages; i++) {
    createPage({
      path : `${i + 1}`,
      component : path.resolve(`./src/templates/browse.js`),
      // This is imported in the browse post page context
      context : {
        offset: i * 10
      }
    })
  }
    
  // Create a page for every blog post
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}