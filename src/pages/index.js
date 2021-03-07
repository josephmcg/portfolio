import React, { useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Typed from "typed.js"

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
  }, []) // blank dependency so it only runs once

  let startDate = new Date("05/16/2016")

  let years = round(
    (new Date().getTime() - startDate.getTime()) / (1000 * 3600 * 24) / 365
  )

  // rounds to nearest .5 years
  function round(x) {
    x = x * 10
    x = Math.floor(x / 5) * 5
    return x / 10
  }

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joe McGrath | Web Developer</title>
        <link rel="canonical" href="https://josephmcg.netlify.app" />
      </Helmet>
      <div className="gradient">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>
                <span id="typed"></span>
                <span className="visually-hidden">Web Developer</span>
              </h1>
              <h2>with {years} years of commercial experience.</h2>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p id="about">I like to rock the party</p>

        <h2 id="skills">Skills</h2>

        <h2 id="projects">Projects</h2>
        <p>Insert projects here</p>
        <h2 id="contact">Contact Me</h2>
        <form name="contact-joe" netlify="true">
          <div className="form-floating mb-3">
            <input
              id="name"
              className="form-control"
              type="text"
              placeholder="name"
            />
            <label htmlFor="name">Name</label>
          </div>

          <div className="form-floating mb-3">
            <input
              id="email"
              className="form-control"
              type="email"
              placeholder="email"
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-3">
            <textarea
              id="comments"
              className="form-control"
              placeholder="comments"
            ></textarea>
            <label htmlFor="comments">Comments</label>
          </div>
          <button className="btn btn-primary form-control" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </Layout>
  )
}
