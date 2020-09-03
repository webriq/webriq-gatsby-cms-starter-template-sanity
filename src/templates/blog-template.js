import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Container } from "reactstrap"
import SEO from "../components/seo"
import marked from "marked"

class BlogTemplate extends React.Component {
  render() {
    const { post } = this.props.data
    console.log("BlogTemplate -> render -> post", post)
    const { previous, next } = this.props.pageContext

    // console.log(previous, next)
    return (
      <Layout>
        <SEO title={post.title} description={post.excerpt} />
        <div className="page-headline">
          <div className="container">
            <div className="section-heading text-center">
              <h6 className="font-weight-bold text-uppercase text-white-50 flair">
                Blog
              </h6>
              <h1>
                <strong>{post.title}</strong>
                <br />
              </h1>
              <span className="text-white-50 small">
                <i className="fa fa-calendar-o pr-1" />
                {post.publishedAt}
              </span>
            </div>
          </div>
        </div>
        <div className="page-content">
          <Container>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div
                  dangerouslySetInnerHTML={{
                    __html: marked(post.body || ""),
                  }}
                />
              </div>
            </div>
            <div className="blog-nav">
              <div className="row">
                <div className="col-md-6 text-md-left">
                  {previous ? (
                    <div>
                      <span className="font-weight-bold text-uppercase text-muted d-block small">
                        Previous
                      </span>
                      <Link to={previous.slug.current}>{previous.title}</Link>
                    </div>
                  ) : null}
                </div>
                <div className="col-md-6 text-md-right">
                  {next ? (
                    <div>
                      <span className="font-weight-bold text-uppercase text-muted d-block small">
                        next
                      </span>
                      <Link to={next.slug.current}>{next.title}</Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    )
  }
}

export default BlogTemplate

export const blogQuery = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      mainImage {
        asset {
          fluid {
            src
          }
        }
      }
      publishedAt(formatString: "MMMM DD, YYYY")
      body
      title
    }
  }
`
