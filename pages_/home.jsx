import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useTranslation from 'next-translate/useTranslation'
import Router from 'next-translate/Router'
import useSWR from 'swr'
import { counting } from '../redux/actions/counterActions'
import Footer from '../components/footer/Footer'


const Home = () => {
  const count = useSelector((state) => state.counterReducer.count)
  const dispatch = useDispatch()
  const { t, lang } = useTranslation()

  const handleChange = (num) => {
    counting({ dispatch, count: num })
  }

  const fetcher = async (...args) => {
    const res = await fetch(...args)

    return res.json()
  }
  const { data } = useSWR('/api/city/city', fetcher)

  return (
    <div>
      <h4>redux counter:</h4>
      <span>{`current count : ${count}`}</span>
      <input type="number" onChange={(e) => handleChange(e.target.value)} />
      <button onClick={() => handleChange(count - 1)}>Increase</button>
      <button onClick={() => handleChange(count + 1)}>decrease</button>
      <h4>lang change:</h4>
      <div>{t('common:h1')}</div>
      <div>now lang: </div>
      <span>{lang}</span>
      <div>
        <button
          type='button'
          onClick={() => Router.pushI18n({ url: '/home', options: { lang: 'ca' } })}
        >
          to ca home
        </button>
        <button
          type='button'
          onClick={() => Router.pushI18n({ url: '/home', options: { lang: 'en' } })}
        >
          to en home
        </button>
      </div>
      <div>
        <button
          type='button'
          onClick={() => Router.pushI18n({ url: '/about', options: { lang: 'ca' } })}
        >
          to ca about
        </button>
        <button
          type='button'
          onClick={() => Router.pushI18n({ url: '/about', options: { lang: 'en' } })}
        >
          to en about
        </button>
      </div>
      <h4>fetch fireBase API, City:</h4>
      <span>{data && data.name}</span>
      <Footer />
    </div>
  )
}

export default Home
