const path = require('path')
const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {}

module.exports = {
	webpack: (config, { isServer }) => {
		// Fixes npm packages that depend on `fs` module
		if (!isServer) {
			// eslint-disable-next-line no-param-reassign
			config.node = {
				fs: 'empty',
			}
		}
		return config
	},
	// Environment Variables
	env: {
		apiKey: process.env.APIKEY,
		authDomain: process.env.AUTHDOMAIN,
		databaseURL: process.env.DATABASEURL,
		projectId: process.env.PROJECTID,
		storageBucket: process.env.STORAGEBUCKET,
		messagingSenderId: process.env.MESSAGINGSENDERID,
		appId: process.env.APPID,
		measurementId: process.env.APIKEY,
	},
	// Redirects
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: false,
			},
		]
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
