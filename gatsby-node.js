const path = require("path")
const slugify = require("slugify")

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const getPosts = makeRequest(
    graphql,
    `query {
      allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/posts/"} })
        {
          edges {
            node {
              id
              frontmatter {
                title
                author
              }
            }
          }
        }
      }
    `
  ).then(result => {
    // console.log(result.data.allStrapiPosts.edges)
    // Create individual pages
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/${slugify(node.frontmatter.title).toLowerCase()}`,
        component: path.resolve(`./src/templates/blog-template.js`),
        context: {
          id: node.id,
          author: node.frontmatter.author,
        },
      })
    })

    // Create paginated posts
    const posts = result.data.allMarkdownRemark.edges.map(post => post.node)
    const postsPerPage = 10
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog` : `/blog/${i + 1}`,
        component: path.resolve(`./src/templates/blog-list.js`),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    })
  })

  return Promise.all([getPosts])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Create slug field for Strapi posts
  if (node.internal.type === `MarkdownRemark`) {
    const slugify_title = slugify(node.frontmatter.title, {
      replacement: "-", // replace spaces with replacement
      remove: /[,*+~.()'"!:@]/g, // regex to remove characters
      lower: true, // result in lower case
    })

    // Create slug field all lowercased and separated with dashes
    createNodeField({
      node,
      name: `slug`,
      value: slugify_title,
    })
  }
}
