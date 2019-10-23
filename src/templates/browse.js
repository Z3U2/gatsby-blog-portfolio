import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"
import PostPreview from "../components/post-preview"

import splash from "../images/camilo-jimenez-Pll7AP6NFpY-unsplash-min.jpg"


export default ({ data,pageContext }) => {
    const edges = data.allMarkdownRemark.edges
    const hasNextPage = data.allMarkdownRemark.pageInfo.hasNextPage
    const currentPage = data.allMarkdownRemark.pageInfo.currentPage
    return (
        <Layout>
            <Helmet
                title= { `Page ${currentPage} | Ilyass Nasr` } 
            />
            <Header
                pageTitle="Blog Posts"
                image={splash}
            />
            <Container>
                {edges.map(edge => {
                    const post = edge.node
                    return (
                        <PostPreview 
                        key={post.fields.slug}
                        title={post.frontmatter.title}
                        subtitle={post.excerpt}
                        slug={post.fields.slug}
                        publishDate={post.frontmatter.date}  
                        />
                    )
                })}
                {hasNextPage && 
                    <div className="clearfix">
                        <Link className="btn btn-primary float-right" to={`/${currentPage + 1}`}>Next Page &rarr;</Link>
                    </div>
                }
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query($offset: Int!) {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC},limit:10,skip:$offset) {
            pageInfo{
                hasNextPage
                currentPage
            }
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                    }
                    excerpt
                    fields {
                        slug
                    }
                }
            }
        }
    }
`