import React from 'react'
import { useRouter } from 'next/router'
import { PageHeader } from 'antd'
import SignIn from '../siginIn/SignIn'
import { header } from './Header.module.scss'

const Header = () => {
	const router = useRouter()
	const { pathname } = router

	const pathMatch = {
		'/about': { label: 'About Page', gotoPage: () => router.push('/home') },
		'/home': { label: 'Nextjs-with-Firebase', gotoPage: null },
	}

	const { label, gotoPage } = pathMatch[pathname]
	return (
		<div className={header}>
			<PageHeader
				title={
					<div style={{ cursor: 'pointer' }} onClick={gotoPage}>
						{label}
					</div>
				}
				onBack={gotoPage}
				subTitle='Demo page😺😺😺'
				extra={[<SignIn key='signIn' />]}
				style={{ padding: '12px 24px' }}
			/>
		</div>
	)
}

Header.propTypes = {}

export default Header
