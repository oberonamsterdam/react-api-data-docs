const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-api-mdx": hot(preferDefault(require("/Users/macbook/Documents/react-api-data-docs/src/api.mdx"))),
  "component---src-index-mdx": hot(preferDefault(require("/Users/macbook/Documents/react-api-data-docs/src/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/macbook/Documents/react-api-data-docs/.docz/src/pages/404.js")))
}

