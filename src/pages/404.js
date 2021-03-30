import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <div className="container">
        <p className="mt-3">You're curious, I like that.</p>

        <Link to={`/`}>Check the homepage</Link>
      </div>
    </Layout>
  )
}
