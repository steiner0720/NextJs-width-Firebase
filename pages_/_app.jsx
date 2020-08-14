import React from 'react'
import App from 'next/app'
import PropTypes, { objectOf } from 'prop-types'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../redux/reducers/combineReducers'
import '../styles/globals.scss'

const AppRouter = ({ Component, pageProps }) => {

  return (
    <Provider store={createStore(rootReducer)}>
      <div className="app">
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

AppRouter.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

AppRouter.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: objectOf(PropTypes.any).isRequired,

}

export default AppRouter
