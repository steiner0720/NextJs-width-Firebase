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
    // Environment Variables
    env: {
        APIKEY: "AIzaSyCG_SR9SVD3x0NnOi-jzZRLPySGFiEymog",
        AUTHDOMAIN: "nextjs-e33e1.firebaseapp.com",
        DATABASEURL: "https://nextjs-e33e1.firebaseio.com",
        PROJECTID: "nextjs-e33e1",
        STORAGEBUCKET: "nextjs-e33e1.appspot.com",
        MESSAGINGSENDERID: "342786163618",
        APPID: "1:342786163618:web:4adb2e729b1f3c8775a8fb",
        MEASUREMENTID: "G-76W9NNHSXL"
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