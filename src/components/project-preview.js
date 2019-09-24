import React from "react"
import { Link } from "gatsby"

export default ({ slug, title, subtitle, ...props }) => {
    return (
        <div className="post-preview col-lg-6 col-md-6 project-preview">
            <img style ={{width:"100%", height:300}}>
            </img>
            <Link to={`/${slug}/`}>
                <h2 className="post-title">
                    {title}
                </h2>
                <h3 className="post-subtitle">
                    {subtitle}
                </h3>
            </Link>
            <Link className="btn btn-primary" to="/2">Check me &rarr;</Link>
            <hr />
        </div>
    )
}