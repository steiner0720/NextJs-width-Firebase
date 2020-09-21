import { useEffect } from 'react'
import { Router } from '../i18n'

// Index page redirect to home
const redirect = async () => Router.push('/home')

const Custom404 = () => {
	// 404 page redirect to home
	useEffect(() => {
		redirect()
	}, [])
	return null
}

Custom404.getInitialProps = async () => ({
	namespacesRequired: ['common'],
})

export default Custom404
