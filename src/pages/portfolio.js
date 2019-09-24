import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import ProjectPreview from "../components/project-preview"
import ProjectList from "../components/project-list"
import Container from "../components/container"

import config from "../conf"

// Dummy projects
const projects = [
    {
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        slug: "explore",
        id: 4
    },
    {
        title: "I believe every human has a finite number of heartbeats." +
            " I don't intend to waste any of mine.",
        subtitle: "",
        slug: "heartbeats",
        id: 3
    },
    {
        title: "Science has not yet mastered prophecy",
        subtitle: "We predict too much for the next year and yet far too little for the next ten.",
        slug: "science",
        id: 2
    },
    {
        title: "Failure is not an option",
        subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        slug: "failure",
        id: 1
    }
]

export default () => (
    <Layout isHome={true} >
        <Header
            pageTitle={config.portfolioTitle}
            pageSub={config.portfolioSub}
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