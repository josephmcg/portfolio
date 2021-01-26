import React from "react"
// import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/style.scss"

import logo from "../assets/logo.svg"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
      </Helmet>

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#___gatsby">
            <img src={logo} width="250" alt="Joe McGrath" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li>
                <a className="nav-link" href="#___gatsby">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="container">
        {children} <hr />
      </main>
      <footer>
        <div className="container">Joe McGrath</div>
      </footer>
    </>
  )
}
