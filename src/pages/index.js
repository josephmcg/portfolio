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
      <div className="text-center">
        <img className="rounded-circle img-fluid" src="" alt="Joe" />
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
          <h4>Front-End</h4>
          HTML/CSS/JavaScript, React, Bootstrap, jQuery, Drupal, Gatsby
        </div>
        <div className="col">
          <h4>Back-end & Programming</h4>
          Node.js, PHP, Java Database: SQL, PostgreSQL, MySQL, MongoDB
        </div>
        <div className="col">
          Versioning and other tools: Git, Jira, Jenkins, Google Analytics,
          Google Tag Manager, Subversion, Sharepoint, Netlify
        </div>
      </div>
      <h2 id="projects">Projects</h2>
      <h3>Professional</h3>
      <h3>Personal</h3>
      <h2 id="contact">Contact Me</h2>
      <form>
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

        <div className="form-floating">
          <textarea
            id="comments"
            className="form-control"
            placeholder="comments"
          ></textarea>
          <label htmlFor="comments">Comments</label>
        </div>
      </form>
    </Layout>
  )
}
