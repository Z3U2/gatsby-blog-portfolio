import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"

import splash from "../images/antoine-barres-jay5BqVyf5A-unsplash.jpg"

import config from "../conf"


export default () => (
    <Layout isHome={true} >
        <Helmet
            title="Contact | Ilyass Nasr"
        />
        <Header
            pageTitle={config.contactTitle}
            pageSub={config.contactSub}
            image={splash}
        />
        <Container>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Saepe nostrum ullam eveniet pariatur voluptates odit,
                fuga atque ea nobis sit soluta odio, adipisci quas excepturi
                maxime quae totam ducimus consectetur?
            </p>
            <form name="sentMessage" id="contactForm" novalidate>
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <label>Name</label>
                        <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <label>Email Address</label>
                        <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="control-group">
                    <div class="form-group col-xs-12 floating-label-form-group controls">
                        <label>Phone Number</label>
                        <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <div class="control-group">
                    <div class="form-group floating-label-form-group controls">
                        <label>Message</label>
                        <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                </div>
                <br />
                <div id="success"></div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
                </div>
            </form>
        </Container>
    </Layout>
)