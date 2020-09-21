import React, { useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app'
import 'firebase/auth'
import useSwr, { mutate } from 'swr'
import initialData from '../../store/app'

const SignIn = () => {
	const state = useSwr('store', false, { initialData })
	const { user, isSignIn } = state.data

	const checkAuth = !user && isSignIn

	// Configure FirebaseUI.
	const uiConfig = {
		// Popup signin flow rather than redirect flow.
		signInFlow: 'popup',
		// We will display Google and Facebook as auth providers.
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			// firebase.auth.FacebookAuthProvider.PROVIDER_ID
		],
		callbacks: {
			// Avoid redirects after sign-in.
			signInSuccessWithAuthResult: () => false,
		},
	}

	useEffect(() => {
		firebase
			.auth()
			.onAuthStateChanged((fetchUser) => mutate('store', { ...state.data, user: fetchUser, isSignIn: true }, false))
	}, [])

	return (
		<div>
			{checkAuth && (
				<StyledFirebaseAuth
					uiConfig={uiConfig}
					firebaseAuth={firebase.auth()}
					uiCallback={(ui) => ui.disableAutoSignIn()}
				/>
			)}
		</div>
	)
}

SignIn.propTypes = {}

export default SignIn
