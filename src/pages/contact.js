import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Header from "../components/header"
import Container from "../components/container"

import splash from "../images/antoine-barres-jay5BqVyf5A-unsplash-min.jpg"

import config from "../conf"


export default () => (
    <Layout isHome={true} >
        <Helmet
            title={`Contact | ${config.brand}`}
        />
        <Header
            pageTitle={config.contactTitle}
            pageSub={config.contactSub}
            image={splash}
        />
        <Container>
            <p>
                Is there anything I can do for you ? Leave a message through the form below.
            </p>
            <form method="post" name="contact" id="contactForm" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                        <label>Name</label>
                        <input name="name" type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                        <label>Email Address</label>
                        <input name="email" type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group col-xs-12 floating-label-form-group controls">
                        <label>Phone Number</label>
                        <input name="tel" type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger"></p>
                    </div>
                </div>
                <div className="control-group">
                    <div className="form-group floating-label-form-group controls">
                        <label>Message</label>
                        <textarea rows="5" name="message" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                        <p className="help-block text-danger"></p>
                    </div>
                </div>
                <br />
                <div id="success"></div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" id="sendMessageButton">Send</button>
                </div>
            </form>
        </Container>
    </Layout>
)