import React, { useEffect, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/auth'
import { Menu, Dropdown, Button } from 'antd'
import { I18nContext } from 'next-i18next'
import { DownOutlined, GithubOutlined } from '@ant-design/icons'
import useSwr, { mutate } from 'swr'
import initialData from '../../store/app'
import { i18n, withTranslation } from '../../i18n'
import { signIn, avatar } from './SignIn.module.scss'

const SignIn = ({ t }) => {
	const [loading, setLoading] = useState(false)
	const { changeLanguage } = i18n
	const {
		i18n: { language },
	} = useContext(I18nContext)

	const { data } = useSwr('store', false, { initialData })
	const { user } = data
	const langSwitch = language === 'en-US' ? 'zh-TW' : 'en-US'

	useEffect(() => {
		firebase.auth().onAuthStateChanged(fetchUser => mutate('store', { ...data, user: fetchUser }, false))
	}, [])

	useEffect(() => {
		if (user) setLoading(false)
	}, [user])

	const menu = (
		<Menu>
			<Menu.Item key='0'>
				<div
					onClick={() => {
						firebase.auth().signOut()
						mutate('store', { ...data, isSignIn: false }, false)
					}}
				>
					Sign out
				</div>
			</Menu.Item>
		</Menu>
	)

	return (
		<div className={signIn}>
			{user ? (
				<Dropdown overlay={menu} trigger={['click']} getPopupContainer={trigger => trigger.parentElement}>
					<div className={avatar}>
						<img src={user.photoURL} alt='avatar' />
						<Button>
							{user.displayName}
							<DownOutlined />
						</Button>
					</div>
				</Dropdown>
			) : (
				<Button
					onClick={() => {
						const provider = new firebase.auth.GoogleAuthProvider()
						firebase.auth().signInWithPopup(provider)
						setLoading(true)
					}}
				>
					{loading ? 'LOADING...' : 'SIGN IN'}
				</Button>
			)}
			<Button style={{ marginLeft: '20px' }} onClick={() => changeLanguage(langSwitch)}>
				{t(langSwitch)}
			</Button>
			<a
				href='https://github.com/steiner0720/nextjs-with-firebase'
				target='_blank'
				rel='noreferrer'
				style={{ marginLeft: '20px', fontSize: '24px' }}
			>
				<GithubOutlined />
			</a>
		</div>
	)
}

SignIn.getInitialProps = async () => ({
	namespacesRequired: ['common'],
})

SignIn.propTypes = {
	t: PropTypes.func.isRequired,
}

export default withTranslation('common')(SignIn)
