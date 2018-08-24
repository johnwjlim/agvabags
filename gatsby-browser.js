/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import React from "react"
// import { Provider } from "react-redux"

// import createStore from "./src/state/createStore"

// const store = createStore()

// export const wrapRootComponent = ({ Root }) => {
//   const ConnectedRootComponent = () => (
//     <Provider store={store}>
//       <Root />
//     </Provider>
//   )

//   return ConnectedRootComponent
// }


import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider