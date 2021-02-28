import React from "react"
// import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/style.scss"

import DarkModeToggle from "./darkButton"

import logo from "../../static/logo.png"

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Helmet>

      <nav className="navbar navbar-expand-sm sticky-top">
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex align-items-center"
            href="#___gatsby"
          >
            <img src={logo} className="d-flex" alt="" />
            <div className="logo-name d-flex">Joe McGrath</div>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav mb-2 mb-sm-0">
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
              <li>
                <DarkModeToggle> </DarkModeToggle>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>{children}</main>
      <footer className="d-flex">
        <section className="container d-flex">
          <div className="d-flex">Privacy Statement</div>
          <div className="d-flex copyright">
            Copyright © 2021 Joe McGrath. All rights reserved.
          </div>
        </section>
      </footer>
    </>
  )
}
