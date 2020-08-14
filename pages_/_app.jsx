import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../redux/reducers/combineReducers'

const MyApp = ({ Component, pageProps }) => {

  return (
    <Provider store={createStore(rootReducer)}>
      <Component {...pageProps} />
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
