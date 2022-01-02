import * as React from "react"
import Hero from "../components/hero"
import Collections from "../components/collections"
import Cta from "../components/cta"
import Gallery from "../components/gallery"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../layout/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Collections />
    <Cta />
    <Gallery />
  </Layout>
)

export default IndexPage
