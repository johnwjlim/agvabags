/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const {createPage} = actions
    return new Promise((resolve, reject) =>  {
        const productTemplate = path.resolve('src/templates/product.js')
        resolve(
            graphql(`
                {
                    allContentfulProduct {
                        edges {
                            node {
                                id
                                slug
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors)
                }
                result.data.allContentfulProduct.edges.forEach((edge) => {
                    createPage ({
                        path: `/products/${edge.node.slug}`,
                        component: productTemplate,
                        context: {
                            slug: edge.node.slug
                        }
                    })
                })
                return
            })
        )
    })
}
