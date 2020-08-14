import { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Router from 'next-translate/Router'

const Homepage = () => {
  useEffect(() => {
    Router.onRouteChangeStart = () => {
      console.log('onRouteChangeStart')
    }
  }, [])
  const { t, lang } = useTranslation()
  console.log(t, lang)
}

export default Homepage