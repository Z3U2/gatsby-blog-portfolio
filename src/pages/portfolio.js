import React from "react"

import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"

import config from "../conf"


export default () => (
    <Layout isHome={true} >
        <Header
            pageTitle={config.portfolioTitle}
            pageSub={config.portfolioSub}
        />
        <Container>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Saepe nostrum ullam eveniet pariatur voluptates odit,
                fuga atque ea nobis sit soluta odio, adipisci quas excepturi
                maxime quae totam ducimus consectetur?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Saepe nostrum ullam eveniet pariatur voluptates odit,
                fuga atque ea nobis sit soluta odio, adipisci quas excepturi
                maxime quae totam ducimus consectetur?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Saepe nostrum ullam eveniet pariatur voluptates odit,
                fuga atque ea nobis sit soluta odio, adipisci quas excepturi
                maxime quae totam ducimus consectetur?
            </p>
        </Container>
    </Layout>
)