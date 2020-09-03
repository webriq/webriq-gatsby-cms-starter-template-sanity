import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "reactstrap"
import MySwiper from "../components/swiper/swiper"
import SampleForm from "../components/form/form"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import bsns from "../images/business.svg"
import finance from "../images/financial.svg"
import jigsaw from "../images/jigsaws.svg"
import report from "../images/report.svg"
import trophy from "../images/trophy.svg"
import BlockContent from "@sanity/block-content-to-react"

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const posts = this.props.data.allSanityPost.edges
    const aboutPage = this.props.data.aboutPage
    const siteSettings = this.props.data.siteSettings

    const serializers = {
      types: {
        code: props => (
          <pre data-language={props.node.language}>
            <code>{props.node.code}</code>
          </pre>
        ),
      },
    }

    console.log(posts)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <div className="hero-section bg-light">
          <Container>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <h1 className="display-4 font-weight-bold flair">
                  {siteSettings.title}
                </h1>
                <p className="lead">{siteSettings.description}</p>
              </div>
            </div>
          </Container>
        </div>
        <div className="about-section">
          <div className="container">
            <div className="section-heading text-center">
              <h6 className="font-weight-bold text-uppercase flair">
                {aboutPage.title}
              </h6>
            </div>
            <div>
              <div className="row justify-content-between align-items-center pt-5">
                <BlockContent
                  blocks={aboutPage.body || []}
                  serializers={serializers}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="services-section bg-light">
          <div className="container">
            <div className="section-heading text-center">
              <h6 className="font-weight-bold text-uppercase flair">
                Services
              </h6>
              <h2>
                <strong>How Can We Help You?</strong>
              </h2>
            </div>
            <div className="row justify-content-center pt-5">
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={bsns} width="100px" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={finance} width="100px" alt="Finance" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={jigsaw} width="100px" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={report} width="100px" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <div className="p-3">
                  <LazyLoadImage src={trophy} width="100px" />
                  <h5 className="pt-4 text-uppercase font-weight-bold text-primary">
                    Lorem Ipsum
                  </h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews-section">
          {/*<div className="review-nav">
            <div className="review-prev">
              <i className="fa fa-angle-left" />
            </div>
            <div className="review-next">
              <i className="fa fa-angle-right" />
            </div>
          </div>*/}
          <div className="container">
            <div className="section-heading text-center">
              <h6 className="font-weight-bold text-uppercase flair">Reviews</h6>
              <h2>What Our Clients Say</h2>
            </div>
          </div>
          <MySwiper slidesperview={1}>
            <div className="row justify-content-center">
              <div className="col-8 mx-auto">
                <div className="pt-5">
                  <div className="review-item text-center">
                    <div className="review-statement bg-light">
                      <p className="text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="pt-5">
                      <span className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <h4 className="mb-0">Jane Doe</h4>
                      <span className="text-muted">CEO, Company.inc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 mx-auto">
                <div className="pt-5">
                  <div className="review-item text-center">
                    <div className="review-statement bg-light">
                      <p className="text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="pt-5">
                      <span className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <h4 className="mb-0">Jane Doe</h4>
                      <span className="text-muted">CEO, Company.inc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8 mx-auto">
                <div className="pt-5">
                  <div className="review-item text-center">
                    <div className="review-statement bg-light">
                      <p className="text-center">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                    <div className="pt-5">
                      <span className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </span>
                      <h4 className="mb-0">Jane Doe</h4>
                      <span className="text-muted">CEO, Company.inc</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MySwiper>
        </div>
        <div className="blog-section bg-light">
          <div className="container">
            <div className="section-heading text-center">
              <h6 className="font-weight-bold text-uppercase flair">blog</h6>
              <h2>Latest Posts</h2>
            </div>
            <div className="row justify-content-around py-5">
              {posts.map(post => (
                <div className="col-md-6 col-lg-4 mb-4" key={post.node.id}>
                  <div className="blog-item bg-white h-100">
                    <Link to={post.node.slug.current}>
                      <div
                        className="blog-image"
                        style={{
                          backgroundImage: `url(${
                            post.node.mainImage !== null
                              ? post.node.mainImage.asset.fluid.src
                              : "https://source.unsplash.com/user/joshhild/500x500"
                          })`,
                        }}
                      />
                    </Link>
                    <div className="blog-text">
                      <Link to={post.node.slug.current}>
                        <h4>{post.node.title}</h4>
                      </Link>
                      <p className="pt-2 text-muted">{post.node.excerpt}</p>
                      <span className="text-muted small">
                        <i className="fa fa-calendar-o pr-1" />
                        {post.node.publishedAt}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link className="btn btn-primary" role="button" to="/blog">
                More from the Blog
              </Link>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-5">
                <div className="section-heading text-left">
                  <h6 className="font-weight-bold text-uppercase text-left flair">
                    Connect
                  </h6>
                  <h2>Get in Touch with Us</h2>
                  <p className="py-4">
                    Contact us using the following details below, or fill up the
                    form and we'll get back to you shortly.
                  </p>
                  <ul className="list-unstyled contact-details">
                    <li className="phone">
                      <a
                        className="link-unstyled"
                        href="tel:+1 234 5678 900"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +1 234 5678 900
                      </a>
                    </li>
                    <li className="email">
                      <a
                        className="link-unstyled"
                        href="mailto:info@yourdomain.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        info@yourdomain.com
                      </a>
                    </li>
                    <li className="address">
                      22 Street Name, City Name, United States 1234
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="py-4">
                  <SampleForm
                    form_name="Newsletter Form"
                    form_id="5bcd42f86b63453b251972bc"
                    form_classname="form-newsletter"
                  >
                    <div className="form-row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            id="firstName"
                            required=""
                          />
                          <label htmlFor="firstName">First Name</label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            id="lastName"
                            required=""
                          />
                          <label htmlFor="lastName">Last Name</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        id="homeEmail"
                        required=""
                      />
                      <label htmlFor="homeEmail">Email address</label>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" />
                      <label htmlFor="phone">Phone (optional)</label>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control h-auto"
                        id="message"
                        required=""
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                    <div className="form-group">
                      <div className="webriq-recaptcha" />
                    </div>
                    <div className="form-group mb-4">
                      <button className="btn btn-primary" type="submit">
                        Send Message
                      </button>
                    </div>
                  </SampleForm>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    siteSettings: sanitySiteSettings {
      title
      description
    }
    aboutPage: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      _rawBody
    }
    allSanityPost(sort: { order: ASC, fields: publishedAt }, limit: 3) {
      edges {
        node {
          id
          title
          mainImage {
            asset {
              fluid {
                src
              }
            }
          }
          slug {
            current
          }
          excerpt
          publishedAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
