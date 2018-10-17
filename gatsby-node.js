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
        const productTemplate = path.resolve('./src/templates/product.js')
        const categoryTemplate = path.resolve('./src/templates/category.js')
        const occasionTemplate = path.resolve('./src/templates/occasion.js')
        const postTemplate = path.resolve('./src/templates/post.js')
        
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
        })
        
        graphql(`
            {
                allContentfulCategory {
                    edges {
                        node {
                            id
                            title
                            slug
                        }
                    }
                }
            }
        `).then((result) => {
            if (result.errors) {
                reject(result.errors)
            }
            result.data.allContentfulCategory.edges.forEach((edge) => {
                createPage ({
                    path: `/categories/${edge.node.slug}`,
                    component: categoryTemplate,
                    context: {
                        id: edge.node.id
                    }
                })
            })
        })

        graphql(`
            {
                allContentfulOccasion {
                    edges {
                        node {
                            id
                            title
                            slug
                        }
                    }
                }
            }
        `).then((result) => {
            if (result.errors) {
                reject(result.errors)
            }
            result.data.allContentfulOccasion.edges.forEach((edge) => {
                createPage ({
                    path: `/occasions/${edge.node.slug}`,
                    component: occasionTemplate,
                    context: {
                        id: edge.node.id
                    }
                })
            })
        })

        graphql(`
            {
                allContentfulPortfolio {
                    edges {
                        node {
                            id
                            title
                            slug
                        }
                    }
                }
            }
        `).then((result) => {
            if (result.errors) {
                reject(result.errors)
            }
            result.data.allContentfulPortfolio.edges.forEach((edge) => {
                createPage({
                    path: `/portfolio/${edge.node.slug}`,
                    component: postTemplate,
                    context: {
                        slug: edge.node.slug
                    }
                })
            })
        })
        
        resolve()
    })
}


// https://github.com/gatsbyjs/gatsby/blob/master/examples/using-contentful/gatsby-node.js

// const _ = require(`lodash`)
// const Promise = require(`bluebird`)
// const path = require(`path`)
// const slash = require(`slash`)

// // Implement the Gatsby API “createPages”. This is
// // called after the Gatsby bootstrap is finished so you have
// // access to any information necessary to programmatically
// // create pages.
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     // The “graphql” function allows us to run arbitrary
//     // queries against the local Contentful graphql schema. Think of
//     // it like the site has a built-in database constructed
//     // from the fetched data that you can run queries against.
//     graphql(
//       `
//         {
//           allContentfulProduct(limit: 1000) {
//             edges {
//               node {
//                 id
//               }
//             }
//           }
//         }
//       `
//     )
//       .then(result => {
//         if (result.errors) {
//           reject(result.errors)
//         }

//         // Create Product pages
//         const productTemplate = path.resolve(`./src/templates/product.js`)
//         // We want to create a detailed page for each
//         // product node. We'll just use the Contentful id for the slug.
//         result.data.allContentfulProduct.edges.forEach((edge) => {
//           // Gatsby uses Redux to manage its internal state.
//           // Plugins and sites can use functions like "createPage"
//           // to interact with Gatsby.
//           createPage({
//             // Each page is required to have a `path` as well
//             // as a template component. The `context` is
//             // optional but is often necessary so the template
//             // can query data specific to each page.
//             path: `/products/${edge.node.slug}/`,
//             component: productTemplate,
//             context: {
//               slug: edge.node.slug,
//             },
//           })
//         })
//       })
//       .then(() => {
//         graphql(
//           `
//             {
//               allContentfulCategory(limit: 1000) {
//                 edges {
//                   node {
//                     id
//                   }
//                 }
//               }
//             }
//           `
//         ).then(result => {
//           if (result.errors) {
//             reject(result.errors)
//           }

//           // Create Category pages
//           const categoryTemplate = path.resolve(`./src/templates/category.js`)
//           // We want to create a detailed page for each
//           // category node. We'll just use the Contentful id for the slug.
//           result.data.allContentfulCategory.edges.forEach((edge) => {
//             // Gatsby uses Redux to manage its internal state.
//             // Plugins and sites can use functions like "createPage"
//             // to interact with Gatsby.
//             createPage({
//               // Each page is required to have a `path` as well
//               // as a template component. The `context` is
//               // optional but is often necessary so the template
//               // can query data specific to each page.
//               path: `/categories/${edge.node.id}/`,
//               component: categoryTemplate,
//               context: {
//                 id: edge.node.id,
//               },
//             })
//           })

//           resolve()
//         })
//       })
//   })
// }
