import React, { useEffect } from 'react'
import App from 'next/app'
import PropTypes from 'prop-types'
import { SWRConfig } from 'swr'
import { appWithTranslation } from '../i18n'
import '../styles/globals.scss'

const AppRouter = ({ Component, pageProps }) => {

  useEffect(() => {
    // const userLang = navigator.language || navigator.userLanguage
    // if (userLang === 'zh-TW') i18n.changeLanguage('zh')
    // i18n.changeLanguage('en')
  })

  return (
    <SWRConfig>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </SWRConfig>
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
