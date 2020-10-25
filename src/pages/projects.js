import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function Projects() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects | Joe McGrath</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1>Projects</h1>
    </Layout>
  )
}
