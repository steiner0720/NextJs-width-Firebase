
// import PropTypes from 'prop-types'
import useTranslation from 'next-translate/useTranslation'
import Router from 'next-translate/Router'

const Homepage = () => {
  const { t, lang } = useTranslation()
  console.log(lang)
  return (
    <>
      <main>
        <div>
          <button
            type='button'
            onClick={() => Router.pushI18n({ url: '/home', options: { lang: 'ca' } })}
          >
            to ca home
        </button>
          <button
            type='button'
            onClick={() => Router.pushI18n({ url: '/about', options: { lang: 'en' } })}
          >
            to en about
        </button>
        </div>
      </main>
    </>
  )
}

export default Homepage