import React, { useEffect } from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import Typed from "typed.js"

import calc from "../images/calc.png"
import bge from "../images/bge.png"
import headshot from "../images/headshot.jpg"

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
          <h1>
            <span id="typed"></span>
            <span className="visually-hidden">Web Developer</span>
          </h1>
          <h2>with {years} years of commercial experience.</h2>
        </div>
      </div>

      <div className="container">
        <section id="about">
          <h2>About Me</h2>
          <div className="row">
            <div className="col-lg-8">
              <p>
                I'm a Tokyo based web developer who specializes in creating
                innovative, exceptional digital experiences. I prioritize the
                business needs of the client while maintaining a simple,
                scalable architecture and an intuitive user experience.
              </p>
              <p>
                My experience includes front-end/back-end web, database/server
                management, and a bit of ecommerce. I have experience building a
                variety of projects, from SPA's to larger CMS based sites.
                Lately, I've been focusing on React and node.
              </p>
              <p>
                I moved to Japan to better understand my fiancée's langauge and
                culture. I'm currently enrolled in an intensive Japanese
                Language School until June of this year (6/21).
              </p>
              <p>
                My interests outside of development are music, vintage clothing,
                investing, and travel.
              </p>
              <a href="/resume.pdf" target="_blank" className="btn btn-primary">
                Resume
              </a>
            </div>
            <div className="col-lg-3 offset-lg-1">
              <img
                className="headshot rounded-circle img-fluid d-block mx-auto"
                src={headshot}
                alt=""
              />
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-3 mb-lg-0">
                <img src={calc} alt="" className="img-fluid" />
                <div className="card-body">
                  <h3 className="text-center">National Grid Calculator</h3>

                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="accordionOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        More information
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionOne"
                    >
                      <div className="accordion-body">
                        <p>
                          Web application that displays information regarding
                          the fuel costs, emissions and environmental impact of
                          conventional vehicles compared to their electric
                          vehicle counterpart.
                        </p>
                        <p>
                          I made a conscious effort to write vanilla JS, only
                          depending on jQuery for the slick carousel. Initially
                          developed as a standalone web app, then integrated
                          into a larger Drupal site (which I also developed).
                        </p>
                        <p>
                          Built with:
                          <br />
                          JavaScript, slick, d3
                        </p>
                        <p className="small text-muted">
                          *I do not own this site. Developed for former
                          employer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-primary"
                      href="https://fleetadvisoryma.nationalgrid.com/instant-estimate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live site
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-3 mb-lg-0">
                <img src={bge} alt="" className="img-fluid" />
                <div className="card-body">
                  <h3 className="text-center">BGE Website Redesign</h3>

                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="accordionTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        More information
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionTwo"
                    >
                      <div className="accordion-body">
                        <p>
                          This was my first project serving as lead developer.
                          Complete overhaul of all styles and content.
                        </p>
                        <p>
                          After launch, bounce rate decreased by 13%, while the
                          average session duration increased by 17%.
                        </p>
                        <p className="small text-muted">
                          *I do not own this site. Developed for former
                          employer.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-primary"
                      href="https://bgesmartenergy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live site
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="text-center">Placeholder</h3>

                  <div className="accordion-item mb-3">
                    <h2 className="accordion-header" id="accordionThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        More information
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="accordionThree"
                    >
                      <div className="accordion-body">
                        Possibly talk about this portfolio site.
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-primary"
                      href="#___gatsby"
                      rel="noopener noreferrer"
                    >
                      Live site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <form name="contact-joe" netlify="true" netlify-honeypot="url">
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
            <div className="d-none">
              <label>
                Don’t fill this out if you're human: <input name="url" />
              </label>
            </div>
            <button className="btn btn-primary form-control" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </div>
    </Layout>
  )
}
