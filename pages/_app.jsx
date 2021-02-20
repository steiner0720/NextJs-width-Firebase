import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import App from 'next/app'
import Head from 'next/head'
<<<<<<< HEAD
import Header from '../components/header/Header'
import { appWithTranslation } from '../i18n'
=======
import { appWithTranslation } from '../i18n'
import SignIn from '../components/siginIn/SignIn'
>>>>>>> 9e1272d99b07ddd2e6f1702b64facfa5188245b4

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
<<<<<<< HEAD
			<title>Nextjs-with-Firebase</title>
		</Head>
		<Header />
		<div className='app'>
=======
			<title>project name</title>
		</Head>
		<div className='app'>
			<SignIn />
>>>>>>> 9e1272d99b07ddd2e6f1702b64facfa5188245b4
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
