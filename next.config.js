const path = require('path')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            // eslint-disable-next-line no-param-reassign
            config.node = {
                fs: 'empty'
            }
        }

        return config
    },
    // nextI18NextRewrites
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    publicRuntimeConfig: {
        localeSubpaths,
    },
    // sass
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    devIndicators: {
        autoPrerender: false,
    },
}