import React from "react"
import Layout from "../components/layout"
import Frontpage from '../components/frontpage'
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Frontpage/>
  </Layout>
)

export default IndexPage
