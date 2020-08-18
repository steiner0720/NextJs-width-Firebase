import React, { useEffect } from 'react'
import App from 'next/app'
import PropTypes from 'prop-types'
import { SWRConfig } from 'swr'
import { appWithTranslation } from '../i18n'
import '../styles/globals.scss'
import './api/firebase'
// import '../lib/firebase'

// const firebase = require('firebase/app')

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

const AppRouter = ({ Component, pageProps }) => {
  useEffect(() => {
    // console.log(process.env)
    // if (!firebase.apps.length) {
    //   firebase.initializeApp(firebaseConfig)
    // } else { firebase.app() }
  }, [])
  return (
    <SWRConfig>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
  )
}

AppRouter.getStaticProps = async (appContext) => {
  const appProps = await App.getStaticProps(appContext)
  return { ...appProps }
}

AppRouter.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,

}

export default appWithTranslation(AppRouter)
