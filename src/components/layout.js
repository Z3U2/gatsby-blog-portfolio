import React from "react"
import Footer from "./footer"
import Nav from "./nav"

export default ({children,isHome}) => {
    return (
        <div>
            <Nav 
                isHome
            />

            
            {children}
            

            <Footer />
        </div>
    )
} 

