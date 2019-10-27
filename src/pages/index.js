import React from "react"
import { Link,graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Header from "../components/header"
import PostPreview from "../components/post-preview"
import Container from "../components/container"

import splash from "../images/andrew-neel-cckf4TsHAuw-unsplash-min.jpg"

import config from "../conf"


export default ({data}) => {
    const edges = data.allMarkdownRemark.edges
    return (
        <Layout isHome={true} >
            <Helmet
                title={`${config.brand}`}
            />
            <Header
                pageTitle={config.mainTitle}
                pageSub={config.mainSub}
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
                <div className="clearfix">
                    <Link className="btn btn-primary float-right" to="/1">Browse Posts &rarr;</Link>
                </div>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(filter: {fields:{featured:{eq:true}}}, sort: {fields: [frontmatter___date], order: DESC}) {
            edges {
                node {
                    frontmatter {
                        title
                        date(formatString: "DD MMMM YYYY")
                    }
                    excerpt
                    fields {
                        slug
                        featured
                    }
                }
            }
        }
    }

`