const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'React Api Data',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/macbook/Documents/react-api-data-docs/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'React Api Data',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3001,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/macbook/Documents/react-api-data-docs',
          templates:
            '/Users/macbook/Documents/react-api-data-docs/node_modules/docz-core/dist/templates',
          docz: '/Users/macbook/Documents/react-api-data-docs/.docz',
          cache: '/Users/macbook/Documents/react-api-data-docs/.docz/.cache',
          app: '/Users/macbook/Documents/react-api-data-docs/.docz/app',
          appPackageJson:
            '/Users/macbook/Documents/react-api-data-docs/package.json',
          appTsConfig:
            '/Users/macbook/Documents/react-api-data-docs/tsconfig.json',
          gatsbyConfig:
            '/Users/macbook/Documents/react-api-data-docs/gatsby-config.js',
          gatsbyBrowser:
            '/Users/macbook/Documents/react-api-data-docs/gatsby-browser.js',
          gatsbyNode:
            '/Users/macbook/Documents/react-api-data-docs/gatsby-node.js',
          gatsbySSR:
            '/Users/macbook/Documents/react-api-data-docs/gatsby-ssr.js',
          importsJs:
            '/Users/macbook/Documents/react-api-data-docs/.docz/app/imports.js',
          rootJs:
            '/Users/macbook/Documents/react-api-data-docs/.docz/app/root.jsx',
          indexJs:
            '/Users/macbook/Documents/react-api-data-docs/.docz/app/index.jsx',
          indexHtml:
            '/Users/macbook/Documents/react-api-data-docs/.docz/app/index.html',
          db: '/Users/macbook/Documents/react-api-data-docs/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
