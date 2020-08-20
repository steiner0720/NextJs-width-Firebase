import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import App from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { appWithTranslation } from '../i18n'
import SignIn from '../components/siginIn/SignIn'

import '../styles/globals.scss'

const AppRouter = ({ Component, pageProps }) => {

  useEffect(() => {
  }, [])
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
