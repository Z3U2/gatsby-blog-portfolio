import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"

import splash from "../images/joseph-chan-C8VWyZhcIIU-unsplash-min.jpg"

import config from "../conf"


export default () => (
    <Layout isHome={true} >
        <Helmet
            title={`About | ${config.brand}`}
        />
        <Header
            pageTitle={config.aboutTitle}
            pageSub={config.aboutSub}
            image={splash}
        />
        <Container>
            <h2>Personal Summary</h2>
            <p>
                I am a Fullstack JavaScript Web Developer as well as an
                -aspiring to be- Big Data Developer. I am passionate about
                learning and applying the latest technologies to have an
                impact on my environment. My top qualities are <strong>Initiative,
                Autonomy, Adaptability, Ability to work under stress</strong>.
            </p>
            <h2>The Beginning of a Journey</h2>
            <p>
                I have always been interested in technology and computer software
                through my first ever passion: Video Games. It's through this
                hobby that I discovered my love for challenges that later got me
                to build my World of Warcraft private server at the age of fifteen.
                But at the time, It was all just a hobby. It was until I started my
                higher studies in General Engineering at "L'École Centrale de Lille"
                that I realized Computer Science was my true calling.
            </p>
            <p>
                Indeed, throughout these two years I spend at Lille, I was a member of 
                the "Rézoléo" association. An association that was mainly responsible 
                for managing the student residence's internal network. That place 
                opened my eyes to the world of Web Development.
            </p>
            <h2>Web Development: The Revelation</h2>
            <p>
                It all started when I wanted to contribute to "Centralink": an 
                automated mailing system made by one of Rézoléo's members. That was 
                the first time I heard the terms AngularJS (1.X at that moment), 
                NodeJS, Frontend, Backend, API, Git, etc... I stood in awe before 
                that mountain of knowledge and skills that were waiting for me to acquire, 
                and all the possibilities they would offer me. I still can remember the 
                countless nights I spent learning and experimenting with all those new 
                shiny things. -<i>Let's not forget I still had to attend general engineering 
                classes by day</i>-. I just knew. <b>THAT</b> is what I wanted to do for a living.
            </p>
            <h2>A Blessing in Disguise</h2>
            <p>
                As I kept nurturing that passion for programming, I opened my eyes to 
                Machine Learning (and Big Data in General). Together, those two fields were breaking records and 
                shaping our world. It had to be it. One thing led to another and I found 
                myself on a flight back to my home country, Morocco. No degree in hand, but 
                an immense desire to keep pushing forward. I immediately enroll in university 
                to get my formal education in Computer Science and Big Data while building personal 
                projects in parallel. I am now in my last year for a master's degree in Data 
                Engineering and Software Development.
            </p>
        </Container>
    </Layout>
)