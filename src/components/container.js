import React from "react"

export default ({children}) => (
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                {children}
            </div>
        </div>
    </div>
)