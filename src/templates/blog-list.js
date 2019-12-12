import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { Container, Row, Col } from "reactstrap"

const slugify = require("slugify")

const Blogs = ({ data }) => (
	<Layout>
		<Container>
			{data.allMarkdownRemark.edges.map(blog => (
				<Row className="mt-5">
					<Col md={2}>
						<div className="blog-date">
							<span>{blog.node.frontmatter.publishedDate}</span>
						</div>
					</Col>
					<Col md={10}>
						<div className="blog-list">
							<h4>
								<Link to={slugify(blog.node.frontmatter.title).toLowerCase()}>
									{blog.node.frontmatter.title}
								</Link>
							</h4>
							<div
								className="img-area"
								style={{
									backgroundImage: `url(${blog.node.frontmatter.banner})`,
								}}
							/>
							<small
								dangerouslySetInnerHTML={{
									__html: blog.node.frontmatter.excerpt,
								}}
							/>
							<Link
								to={slugify(blog.node.frontmatter.title).toLowerCase()}
								className="read-more"
							>
								READ MORE...
							</Link>
						</div>
					</Col>
				</Row>
			))}
		</Container>
	</Layout>
)

export default Blogs

export const blogQuery = graphql`
	query {
		allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/posts/" } }) {
			edges {
				node {
					id
					frontmatter {
						title
						publishedDate(formatString: "MMM DD YYYY")
						excerpt
						metaTitle
						metaKeywords
						metaDescription
						banner
						status
						description
						author
						category
						tag
					}
					html
				}
			}
		}
	}
`
