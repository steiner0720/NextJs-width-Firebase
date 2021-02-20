<<<<<<< HEAD
const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
	defaultLanguage: 'en-US',
	otherLanguages: ['en-US', 'zh-TW'],
	localeSubpaths,
	localePath: path.resolve('./public/static/locales'),
})
=======
const NextI18Next = require('next-i18next').default
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

module.exports = new NextI18Next({
	defaultLanguage: 'en-US',
	otherLanguages: ['en-US', 'zh-TW'],
	localeSubpaths,
	localePath: path.resolve('./public/static/locales'),
})
>>>>>>> 9e1272d99b07ddd2e6f1702b64facfa5188245b4
