import React from 'react'
import App, { Container } from 'next/app'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../redux/reducers/combineReducers'

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <Container>
      <Provider store={createStore(rootReducer)}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  )
}

MyApp.getInitialProps = async (appContext: any) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
