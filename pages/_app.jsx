import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import App from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { appWithTranslation } from '../i18n'
import SignIn from '../components/siginIn/SignIn'

import '../styles/globals.scss'

const AppRouter = ({ Component, pageProps }) => {
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

	return (
		<>
			<Head>
				<title>project name</title>
			</Head>
			<SWRConfig>
				<div className="app">
					<SignIn />
					<Component {...pageProps} />
				</div>
			</SWRConfig>
		</>
	)
}

AppRouter.getInitialProps = async (appContext) => {
	const appProps = await App.getInitialProps(appContext)
	return { ...appProps }
}

AppRouter.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default appWithTranslation(AppRouter)
