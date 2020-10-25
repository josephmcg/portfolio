import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

export default function Contact() {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact | Joe McGrath</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1>Contact</h1>
    </Layout>
  )
}
