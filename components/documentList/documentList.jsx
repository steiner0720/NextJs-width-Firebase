/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react'
import { I18nContext } from 'next-i18next'
import { Button } from 'antd'
import { useRouter } from 'next/router'

const documentList = ({ t = () => {}, data = '', count = 0, handleChange = () => {} }) => {
	const {
		i18n: { language, changeLanguage },
	} = useContext(I18nContext)
	const router = useRouter()

	const langSwitch = language === 'en-US' ? 'zh-TW' : 'en-US'

	return [
		{
			title: 'NextJs and Router',
			desc: (
				<>
					<p>npx create-next-app</p>
					<p>or</p>
					<p>yarn create next-app</p>
				</>
			),
			list: [
				{
					title: 'Router',
					desc: (
						<>
							<div>{`import { useRouter } from 'next/router'`}</div>
							<div>const router = useRouter()</div>
							<div>router.push('/pageName')</div>
						</>
					),
				},

				{
					title: 'Next.js Documentation',
					desc: (
						<div>
							learn about
							<Button type='link'>
								<a href='https://nextjs.org/docs/getting-started' target='_blank' rel='noreferrer'>
									Next.js
								</a>
							</Button>
							features and API
						</div>
					),
				},
			],
		},
		{
			title: 'i18n',
			desc: <p>Open i18n.js file to set language support</p>,
			list: [
				{
					title: 'Language change',
					desc: <Button onClick={() => changeLanguage(langSwitch)}>{t(langSwitch)}</Button>,
				},
				{
					title: 'Set locales',
					desc: 'path: public/static/locales/{Language}/{Page or Component name}.json',
				},
				{
					title: 'Router change (Page)',
					desc: <Button onClick={() => router.push('/about')}>{t('page-about')}</Button>,
				},
				{
					title: 'Next-i18next Documentation',
					desc: (
						<Button type='link'>
							<a href='https://github.com/isaachinman/next-i18next' target='_blank' rel='noreferrer'>
								next-i18next
							</a>
						</Button>
					),
				},
			],
		},
		{
			title: 'Database(Firebase)',
			desc: <p>Set .env for firebase serviceAccount:</p>,
			list: [
				{
					title: 'Firebase account',
					desc: 'Create Firebase Project',
				},
				{
					title: 'Create .env.local file for dev',
					desc: (
						<>
							<div>PROJECTID=your-id</div>
							<div>PRIVATEKEY=your-key</div>
							<div>CLIENTEMAIL=your-email</div>
						</>
					),
				},
				{
					title: 'Set serviceAccount:',
					desc: (
						<>
							<div>project_id: process.env.PROJECTID</div>
							<div>private_key: process.env.PRIVATEKEY.replace(/\n/g, '\n')</div>
							<div>client_email: process.env.CLIENTEMAIL</div>
						</>
					),
				},
				{
					title: 'Production environment variables',
					desc: 'Set environment variables on Vercel project setting.',
				},
				{
					title: 'Fetch API from fireBase',
					desc: <div>City: {data ? `${data.name} (from firebase)` : 'loading...'}</div>,
				},
				{
					title: 'Firebase Documentation',
					desc: (
						<Button type='link'>
							<a href='https://firebase.google.com/docs/web/setup' target='_blank' rel='noreferrer'>
								Firebase
							</a>
						</Button>
					),
				},
			],
		},
		{
			title: 'Deployment',
			desc: (
				<>
					<p>
						The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of
						Next.js.
					</p>
					<p>Check out our Next.js deployment documentation for more details.</p>
				</>
			),
			list: [
				{
					title: 'Vercel Documentation',
					desc: (
						<Button type='link'>
							<a href='https://vercel.com/docs' target='_blank' rel='noreferrer'>
								Vercel
							</a>
						</Button>
					),
				},
			],
		},
		{
			title: 'SWR(Remote data fetching)',
			desc: (
				<>
					<p>useSwr for global state and Remote data fetching(replace redux/axios)</p>
					<p>Check out our Next.js deployment documentation for more details.</p>
				</>
			),
			list: [
				{
					title: 'Store (like redux)',
					desc: 'Create a app.js file for initial state',
				},
				{
					title: 'Set initial state',
					desc: (
						<>
							<div>import initialData from '../store/app'</div>
							<div>{`const state = useSwr('store', false, { initialData })`}</div>
						</>
					),
				},
				{
					title: 'Update state',
					desc: (
						<>
							<div>{`mutate('store', { ...state.data, count: counted }, false)`}</div>
						</>
					),
				},
				{
					title: 'useSwr gloabal state counter:',
					desc: (
						<>
							<Button onClick={() => handleChange(count + 1)} style={{ marginRight: '12px' }}>
								Increase
							</Button>
							<Button onClick={() => handleChange(count - 1)} style={{ marginRight: '12px' }}>
								decrease
							</Button>
							<span>current count: {count}</span>
						</>
					),
				},
				{
					title: 'SWR Documentation',
					desc: (
						<Button type='link'>
							<a href='https://swr.vercel.app/' target='_blank' rel='noreferrer'>
								SWR
							</a>
						</Button>
					),
				},
			],
		},
	]
}

export default documentList
