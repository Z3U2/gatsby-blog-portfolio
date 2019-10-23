import React from "react"

import conf from '../conf'

export default () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-md-10 mx-auto">
                    <hr />
                    <footer>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-10 mx-auto">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-xs-12 social-media-container">
                                            <ul className="list-inline text-center">
                                                <li className="list-inline-item">
                                                    <a href={conf.linkedin} target="_blank" rel="noopener noreferrer">
                                                        <span className="fa-stack fa-lg">
                                                            <i className="fas fa-circle fa-stack-2x"></i>
                                                            <i className="fab fa-linkedin fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li className="list-inline-item">
                                                    <a href={conf.github} target="_blank" rel="noopener noreferrer">
                                                        <span className="fa-stack fa-lg">
                                                            <i className="fas fa-circle fa-stack-2x"></i>
                                                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-xs-12 resume-container">
                                            <a href="/resume.pdf" id="resume" target="_blank">Download Resume</a>
                                        </div>
                                    </div>
                                    <p className="copyright text-muted">Copyright &copy; Mohammed Ilyass Nasr</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}