import React, { useEffect, useContext } from 'react'
import useSwr, { mutate } from 'swr'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/auth'
import { I18nContext } from 'next-i18next'
import { i18n, Router, withTranslation } from '../i18n'
import Footer from '../components/footer/Footer'
import initialData from '../store/app'
import fetcher from './api/fetcher'

const Home = ({ t }) => {
	const {
		i18n: { language },
	} = useContext(I18nContext)
	const state = useSwr('store', false, { initialData })
	const { count, user } = state.data
	const { data } = useSwr('/api/city/city', fetcher)

	const handleChange = (num) => {
		mutate('store', { ...state.data, count: num }, false)
	}
	useEffect(() => {}, [])

	return (
		<div>
			<h4>useSwr gloabal state counter:</h4>
			<span>{`current count : ${count}`}</span>
			<button onClick={() => handleChange(count - 1)}>Increase</button>
			<button onClick={() => handleChange(count + 1)}>decrease</button>
			{user && (
				<>
					<h4>now is Login</h4>
					<img
						src={user && user.photoURL}
						style={{ width: '64px', height: '64px', borderRadius: '100px', overflow: 'hidden' }}
						alt=""
					/>
					<div>{user.displayName}</div>
					<button
						onClick={() => {
							firebase.auth().signOut()
							mutate('store', { ...state.data, isSignIn: false }, false)
						}}
					>
						Sign out
					</button>
				</>
			)}
			<h4>now lang: </h4>
			<span>{language}</span>
			<h4>lang change:</h4>
			<div>{t('h1')}</div>
			<div>
				<button type="button" onClick={() => i18n.changeLanguage('en')}>
					to en
				</button>
				<button type="button" onClick={() => i18n.changeLanguage('de')}>
					to de
				</button>
			</div>
			<div>
				<button type="button" onClick={() => Router.push('/about')}>
					{t('to-second-page')}
				</button>
			</div>
			<h4>Fetch API from fireBase, City:</h4>
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

export default withTranslation('common', 'footer')(Home)
