import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"
import config from "../conf";

export default ({data}) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Helmet
                title = {`${post.frontmatter.title} | ${config.brand}`}
            />
            <Header
                pageTitle = {post.frontmatter.title}
            />
            <Container>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
  }
`