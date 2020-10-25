import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function About() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | Joe McGrath</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1>About Me</h1>
    </Layout>
  )
}
