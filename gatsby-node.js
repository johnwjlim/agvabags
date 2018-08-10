/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
    const {createPage} = boundActionCreators
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
                        path: edge.node.slug,
                        componenet: productTemplate,
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
