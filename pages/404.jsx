import { useEffect } from 'react'
import { Router } from '../i18n'

const Custom404 = () => {
	// 404 page redirect to home
	useEffect(() => {
		async function redirect() {
			Router.push('/home')
		}
		redirect()
	}, [])
	return null
}

export default Custom404
