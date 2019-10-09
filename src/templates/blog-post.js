import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/container"
import Header from "../components/header"

export default ({data}) => {
    const post = data.markdownRemark
    return (
        <Layout>
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