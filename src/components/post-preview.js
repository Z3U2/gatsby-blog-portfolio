import React from "react"
import { Link } from "gatsby"

export default ({slug, title, subtitle, publishDate, ...props}) => {
    return (
        <div className="post-preview">
            <Link to={`${slug}`}>
                    <h2 className="post-title">
                        {title}
                    </h2>
                    <h3 className="post-subtitle">
                        {subtitle}
                    </h3>
            </Link>
            <p className="post-meta">Posted on {publishDate}</p>
            <hr />
        </div>
    )
}