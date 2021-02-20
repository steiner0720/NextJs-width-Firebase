import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import App from 'next/app'
import Head from 'next/head'
import Header from '../components/header/Header'
import { appWithTranslation } from '../i18n'

import '../styles/globals.scss'

// Configure Firebase.
const firebaseConfig = {
	apiKey: process.env.apiKey,
	authDomain: process.env.authDomain,
	databaseURL: process.env.databaseURL,
	projectId: process.env.projectId,
	storageBucket: process.env.storageBucket,
	messagingSenderId: process.env.messagingSenderId,
	appId: process.env.appId,
	measurementId: process.env.measurementId,
}

if (firebase.apps.length) {
	firebase.app()
} else {
	firebase.initializeApp(firebaseConfig)
}

const InitApp = ({ Component, pageProps }) => (
	<>
		<Head>
			<title>Nextjs-with-Firebase</title>
		</Head>
		<Header />
		<div className='app'>
			<Component {...pageProps} />
		</div>
	</>
)

InitApp.getInitialProps = async appContext => {
	const appProps = await App.getInitialProps(appContext)
	return { ...appProps }
}

InitApp.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default appWithTranslation(InitApp)
