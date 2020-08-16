import React, { useContext } from 'react'
import useSwr, { mutate } from 'swr'
import PropTypes from 'prop-types'
import { I18nContext } from 'next-i18next'
import { i18n, Router, withTranslation } from '../i18n'
import Footer from '../components/footer/Footer'
import initialData from "../store/app"
import fetcher from './api/fetcher'

const Home = ({ t }) => {
  const { i18n: { language } } = useContext(I18nContext)
  const state = useSwr("reducer", { initialData })
  const { count } = state.data
  const { data } = useSwr('/api/city/city', fetcher)

  const handleChange = (num) => {
    mutate('reducer', { ...state.data, count: num }, false)
  }

  return (
    <div>
      <h4>useSwr gloabal state counter:</h4>
      <span>{`current count : ${count}`}</span>
      <button onClick={() => handleChange(count - 1)}>Increase</button>
      <button onClick={() => handleChange(count + 1)}>decrease</button>
      <h4>now lang: </h4>
      <span>{language}</span>
      <h4>lang change:</h4>
      <div>{t('h1')}</div>
      <div>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('en')}
        >
          to en
        </button>
        <button
          type='button'
          onClick={() => i18n.changeLanguage('de')}
        >
          to de
        </button>
      </div>
      <div>
        <button
          type='button'
          onClick={() => Router.push('/about')}
        >
          {t('to-second-page')}
        </button>
      </div>
      <h4>fetch fireBase API, City:</h4>
      <span>{data && data.name}</span>
      <Footer />
    </div>
  )
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common', 'footer'],
})

Home.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)
