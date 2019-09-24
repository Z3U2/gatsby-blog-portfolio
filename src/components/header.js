import React from "react"

export default ({pageTitle, pageSub, image}) => {
    return (
        <header className="masthead" style={{backgroundImage: `url(${image})`}}>
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <div className="site-heading">
                            <h1>{pageTitle}</h1>
                            <span className="subheading">{pageSub}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}