import React, { useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Typed from "typed.js"

export default function Home() {
  var options = {
    strings: ["Web Developer", "Software Engineer", "Problem Solver"],
    typeSpeed: 40,
    startDelay: 1200,
    backSpeed: 20,
    backDelay: 2000,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: "|",
  }

  useEffect(() => {
    var typed = new Typed("#typed", options)
  }, [])

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joe McGrath</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1>Joe McGrath</h1>
      <h2>
        <span id="typed"></span>
      </h2>

      <div className="row">
        <div className="col-sm-6">img</div>
        <div className="col-sm-6">name + info</div>
      </div>

      <hr />

      <div className="row">
        <div className="col-sm-4">About</div>
        <div className="col-sm-4">Skills</div>
        <div className="col-sm-4">Projects</div>
      </div>
    </Layout>
  )
}
