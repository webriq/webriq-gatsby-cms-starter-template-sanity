import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header/header"
import Footer from "./footer/footer"
// import "./layout.css"
import "./layout.scss"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.min.css"
import "./font-face.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // When embedded in an iFrame, sends a postMessage "WEBRIQ_SITE_HAS_LOADED" to parent
  const [hasLoaded, setHasLoaded] = React.useState(false)
  React.useEffect(() => {
    const sendPostMessage = e => {
      if (!hasLoaded) {
        console.log("Sending postMessage: WEBRIQ_SITE_HAS_LOADED")
        window.parent.postMessage("WEBRIQ_SITE_HAS_LOADED", "*")
        console.log("Successfully sent postMessage: WEBRIQ_SITE_HAS_LOADED")
        setHasLoaded(true)
      }
    }

    sendPostMessage()
  }, [hasLoaded])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
