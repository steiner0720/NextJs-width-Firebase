
import React, { useEffect } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import * as firebase from 'firebase'
import useSwr, { mutate } from 'swr'
import initialData from "../../store/app"

// const firebase = require('firebase/app')

// Configure Firebase.
const config = {
  apiKey: "AIzaSyCG_SR9SVD3x0NnOi-jzZRLPySGFiEymog",
  authDomain: "nextjs-e33e1.firebaseapp.com",
  databaseURL: "https://nextjs-e33e1.firebaseio.com",
  projectId: "nextjs-e33e1",
  storageBucket: "nextjs-e33e1.appspot.com",
  messagingSenderId: "342786163618",
  appId: "1:342786163618:web:4adb2e729b1f3c8775a8fb",
  measurementId: "G-76W9NNHSXL"
}

// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: process.env.AUTHDOMAIN,
//   databaseURL: process.env.DATABASEURL,
//   projectId: process.env.PROJECTID,
//   storageBucket: process.env.STORAGEBUCKET,
//   messagingSenderId: process.env.MESSAGINGSENDERID,
//   appId: process.env.APPID,
//   measurementId: process.env.APIKEY,
// }

if (firebase.apps.length) {
  firebase.app()
} else {
  firebase.initializeApp(config)
}

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
    signInSuccessWithAuthResult: () => false
  }
}
const SignIn = () => {
  const state = useSwr("store", { initialData })
  const { user, isSignIn } = state.data

  const checkAuth = !user && isSignIn
  useEffect(() => {
    firebase.auth().onAuthStateChanged(
      (fetchUser) => mutate('store', { ...state.data, user: fetchUser, isSignIn: true }, false)
    )
  }, [])

  return (
    <div>
      {checkAuth &&
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} uiCallback={ui => ui.disableAutoSignIn()} />}
    </div>
  )
}

SignIn.propTypes = {
}

export default SignIn