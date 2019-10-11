import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"

import splash from "../images/joseph-chan-C8VWyZhcIIU-unsplash.jpg"

import config from "../conf"


export default () => (
    <Layout isHome={true} >
        <Helmet
            title="About | Ilyass Nasr"
        />
        <Header
            pageTitle={config.aboutTitle}
            pageSub={config.aboutSub}
            image={splash}
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