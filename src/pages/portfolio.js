import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Header from "../components/header"
import ProjectPreview from "../components/project-preview"
import ProjectList from "../components/project-list"
import Container from "../components/container"

import splash from "../images/markus-spiske-qjnAnF0jIGk-unsplash.jpg"

import config from "../conf"

export default ({data}) => {
    const projects = data.allProjectsCsv.nodes
    return (
        <Layout isHome={true} >
            <Helmet
                title="Portfolio | Ilyass Nasr"
            />
            <Header
                pageTitle={config.portfolioTitle}
                pageSub={config.portfolioSub}
                image={splash}
            />
            <Container>
                <ProjectList>
                    {projects.map(project =>
                        <ProjectPreview key={project.id} {...project} />
                    )}
                </ProjectList>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query {
            allProjectsCsv {
                    nodes {
                    title
                    subtitle
                    skills
                    demo
                    code
                }
            }
        }
`