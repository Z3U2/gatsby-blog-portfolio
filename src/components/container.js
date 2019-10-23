import React from "react"

export default ({children}) => (
    <div className="container">
        <div className="row">
            <div className="col-lg-10 col-md-12 mx-auto">
                {children}
            </div>
        </div>
    </div>
)