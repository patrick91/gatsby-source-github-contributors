import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contributors from "../components/contributors"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Example for gatsby-source-github-contributors.</p>

    <Contributors />
  </Layout>
)

export default IndexPage
