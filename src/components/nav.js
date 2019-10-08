import React from "react"
import { Link } from "gatsby"

import conf from '../conf'

export default ({isHome}) => {

    function click(e) {
        const navbar = document.getElementById('navbarResponsive')
        navbar.classList.toggle('show')
    }

    return (
        <nav className={"navbar navbar-expand-lg navbar-light fixed-top" + (isHome ? "" : " nav-pages")} id="mainNav">
            <div className="container">
                <Link className="navbar-brand" to="/">{conf.brand}</Link>
                <button onClick={click} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/portfolio/"}>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/about/"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/contact/"}>Contact/Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}