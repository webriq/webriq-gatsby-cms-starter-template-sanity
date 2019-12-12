import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { Container } from "reactstrap"

class BlogTemplate extends React.Component {
	render() {
		const data = this.props.data
		const authorData = this.props.data.authorQuery.edges.map(
			author => author.node
		)
		console.log(data)
		return (
			<Layout>
				<Container>
					<div className="blog-title">
						<h1>{data.markdownRemark.frontmatter.title}</h1>
						<small>
							{data.markdownRemark.frontmatter.publishedDate.toUpperCase()}
						</small>
					</div>
				</Container>
				<div
					className="img-area"
					style={{
						backgroundImage: `url(${data.markdownRemark.frontmatter.banner})`,
					}}
				/>
				<Container>
					<img
						className="author-img"
						src={authorData[0].frontmatter.profilePicture}
						alt="author"
					/>
					<small className="author-name">
						Author: {data.markdownRemark.frontmatter.author}
					</small>
					<div
						dangerouslySetInnerHTML={{
							__html: data.markdownRemark.html,
						}}
					/>
				</Container>
			</Layout>
		)
	}
}

export default BlogTemplate

export const blogQuery = graphql`
	query($id: String!, $author: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				title
				publishedDate(formatString: "MMM DD, YYYY")
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
		authorQuery: allMarkdownRemark(
			filter: { frontmatter: { fullName: { eq: $author } } }
		) {
			edges {
				node {
					id
					frontmatter {
						fullName
						profilePicture
					}
				}
			}
		}
	}
`
