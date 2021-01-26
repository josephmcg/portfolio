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

  let years = new Date().getFullYear() - 2016

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Joe McGrath | Web Developer</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="text-center">
        <img className="rounded-circle img-fluid" src="" alt="" />
      </div>
      <h1 className="text-center">
        <span id="typed"></span>
      </h1>
      <h2 className="text-center">
        with {years} years of commercial experience.
      </h2>

      <p id="about">I like to rock the party</p>

      <h2 id="skills">Skills</h2>
      <div className="row">
        <div className="col">
          <h3>Front-End</h3>
          <span className="badge rounded-pill bg-primary">HTML</span>
          <span className="badge rounded-pill bg-primary">CSS</span>
          <span className="badge rounded-pill bg-primary">JavaScript</span>
          <span className="badge rounded-pill bg-primary">React</span>
          <span className="badge rounded-pill bg-primary">Bootstrap</span>
          <span className="badge rounded-pill bg-primary">jQuery</span>
          <span className="badge rounded-pill bg-primary">Drupal</span>
          <span className="badge rounded-pill bg-primary">Gatsby</span>
          <span className="badge rounded-pill bg-primary">D3</span>
        </div>
        <div className="col">
          <h3>Back-end & Programming</h3>
          <span className="badge rounded-pill bg-primary">Node.js</span>
          <span className="badge rounded-pill bg-primary">PHP</span>
          <span className="badge rounded-pill bg-primary">Java</span>
          <span className="badge rounded-pill bg-primary">SQL</span>
          <span className="badge rounded-pill bg-primary">PostgreSQL</span>
          <span className="badge rounded-pill bg-primary">MySQL</span>
          <span className="badge rounded-pill bg-primary">MongoDB</span>
        </div>
        <div className="col">
          <h3>Versioning and other tools</h3>
          <span className="badge rounded-pill bg-primary">Git</span>
          <span className="badge rounded-pill bg-primary">Jira</span>
          <span className="badge rounded-pill bg-primary">Jenkins</span>
          <span className="badge rounded-pill bg-primary">
            Google Analytics
          </span>
          <span className="badge rounded-pill bg-primary">
            Google Tag Manager
          </span>
          <span className="badge rounded-pill bg-primary">Subversion</span>
          <span className="badge rounded-pill bg-primary">Netlify</span>
        </div>
      </div>
      <h2 id="projects">Projects</h2>
      <h3>Professional</h3>
      <h3>Personal</h3>
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
        <button class="btn btn-primary form-control" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  )
}
