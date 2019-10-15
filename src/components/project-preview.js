import React from "react"
import { Link } from "gatsby"

export default ({ slug, title, subtitle, demo, code, skills, ...props }) => {
    return (
        <div className="post-preview col-lg-6 col-md-6 project-preview">
            <img style ={{width:"100%", height:300}} >
            </img>
            <Link to={`/${slug}/`}>
                <h2 className="post-title">
                    {title}
                </h2>
                <h3 className="post-subtitle">
                    {subtitle}
                </h3>
            </Link>
            <div className="skills">
                <p>
                    Skills : <br/> {skills}
                </p>
            </div>
            <div className="project-buttons">
                <a className="btn btn-primary" href={code} target="_blank" rel="noopener noreferrer">Code</a>
                <a className="btn btn-primary" href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
            <hr />
        </div>
    )
}