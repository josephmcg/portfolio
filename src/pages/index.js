import React, { useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Typed from "typed.js"
import { Link } from "gatsby"

export default function Home() {
  let options = {
    strings: ["Web Developer", "Software Engineer", "Problem Solver"],
    typeSpeed: 40,
    startDelay: 1200,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
  }

  useEffect(() => {
    new Typed("#typed", options)
  })

  let years = new Date().getFullYear() - 2016

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joe McGrath | Web Developer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1 className="text-center">
        <span id="typed"></span>
      </h1>

      <h2 className="text-center">
        Hi. I'm Joe, Web Developer with {years} years of commercial experience.
      </h2>

      <Link to="/contact" className="btn btn-primary">
        Contact
      </Link>

      <img className="rounded-circle img-fluid" src="" alt="Joe" />

      <hr />

      <div className="row">
        <div className="col-sm-4">About</div>
        <div className="col-sm-4">Skills</div>
        <div className="col-sm-4">Projects</div>
      </div>
    </Layout>
  )
}
