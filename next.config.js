const path = require('path')

module.exports = {
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