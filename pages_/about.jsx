import React from 'react'
import Router from 'next-translate/Router'
import useTranslation from 'next-translate/useTranslation'

const About = () => {
  const { t, lang } = useTranslation()
  return (
    <div>
      <h4>im about page</h4>
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
    </div>
  )
}

export default About
