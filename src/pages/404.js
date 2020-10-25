import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function About() {
  return (
    <Layout>
      <p>The future belongs to the curious.</p>
      <p>Good luck on your journey.</p>
      <Link to={`/`}>Check the homepage</Link>
    </Layout>
  )
}
