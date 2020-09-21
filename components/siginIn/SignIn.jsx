import React, { useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import useSwr, { mutate } from 'swr'
import initialData from '../../store/app'

// Configure FirebaseUI.
const uiConfig = {
	signInFlow: 'popup', // Popup signin flow rather than redirect flow.
	signInOptions: [
		// We will display Google and Facebook as auth providers.
		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
	],
	callbacks: {
		signInSuccessWithAuthResult: () => false, // Avoid redirects after sign-in.
	},
}

const SignIn = () => {
	const state = useSwr('store', false, { initialData })
	const { user, isSignIn } = state.data

	useEffect(() => {
		firebase
			.auth()
			.onAuthStateChanged(fetchUser => mutate('store', { ...state.data, user: fetchUser, isSignIn: true }, false))
	}, [])

	return (
		!user &&
		isSignIn && (
			<div className='signIn'>
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebase.auth()}
					uiCallback={ui => ui.disableAutoSignIn()}
				/>
			</div>
		)
	)
}

SignIn.propTypes = {}

export default SignIn
