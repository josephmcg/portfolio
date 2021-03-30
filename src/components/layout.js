import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import "../styles/style.scss"

import DarkModeToggle from "./darkButton"

import logo from "../images/logo.png"
import github from "../images/github.svg"
import linkedin from "../images/linkedin.svg"

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

      <nav className="navbar navbar-expand-sm">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} className="d-flex" alt="" />
            <div className="logo-name d-flex">Joe McGrath</div>
          </Link>
          <button
            className="navbar-toggler d-none"
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
                <a className="nav-link" href="resume.pdf" target="_blank">
                  Resume
                </a>
              </li>
              <li>
                <DarkModeToggle> </DarkModeToggle>
              </li>
            </ul>
          </div>
          <div className="d-block d-sm-none">
            <DarkModeToggle> </DarkModeToggle>
          </div>
        </div>
      </nav>

      <main>
        <article>{children}</article>
      </main>

      <footer className="d-flex">
        <div className="container d-md-flex text-center text-md-start">
          <div className="icon-links my-2 m-md-0">
            <a
              className="icon-link"
              href="https://github.com/josephmcg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} className="feather" alt="" />
            </a>
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/josephmcg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} className="feather" alt="" />
            </a>
          </div>
          <div className="align-items-center copyright">
            Copyright © 2021 Joe McGrath.
            <br className="d-md-none" /> All rights reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
