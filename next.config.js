const path = require('path')

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
    // redirect
    async redirects() {
        return [
            {
                source: '/',
                destination: '/home',
                permanent: true,
            },
        ]
    },
    // sass
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    devIndicators: {
        autoPrerender: false,
    },

}