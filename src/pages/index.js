import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import PostPreview from "../components/post-preview"
import Container from "../components/container"

import splash from "../images/andrew-neel-cckf4TsHAuw-unsplash.jpg"

import config from "../conf"

// Dummy posts
const posts = [
    {
        title: "Man must explore, and this is exploration at its greatest",
        subtitle: "Problems look mighty small from 150 miles up",
        slug: "explore",
        publishDate: "September 24, 2019",
        id: 4
    },
    {
        title: "I believe every human has a finite number of heartbeats." +
            " I don't intend to waste any of mine.",
        subtitle: "",
        slug: "heartbeats",
        publishDate: "September 18, 2019",
        id: 3
    },
    {
        title: "Science has not yet mastered prophecy",
        subtitle: "We predict too much for the next year and yet far too little for the next ten.",
        slug: "science",
        publishDate: "August 24, 2019",
        id: 2
    },
    {
        title: "Failure is not an option",
        subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
        slug: "failure",
        publishDate: "July 8, 2019",
        id: 1
    }
]

export default () => (
    <Layout isHome={true} >
        <Header 
            pageTitle={config.mainTitle}
            pageSub={config.mainSub}
            image={splash}
        />
            <Container>
            {posts.map(post => {
                return (
                    <PostPreview key={post.id} {...post} />
                )
            })}
            <div className="clearfix">
                <Link className="btn btn-primary float-right" to="/2">Older Posts &rarr;</Link>
            </div>
            </Container>
    </Layout>
)
