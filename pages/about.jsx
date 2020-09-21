import React, { useState, useEffect } from 'react'
import useSwr from 'swr'
import PropTypes from 'prop-types'
import { i18n, Router, withTranslation } from '../i18n'
import initialData from '../store/app'

const About = ({ t }) => {
	const state = useSwr('store', false, { initialData })
	const { count } = state.data
	const [lang, setLang] = useState('en')

	useEffect(() => {
		setLang(i18n.language)
	}, [])

	return (
		<div>
			<h4>This is About page</h4>
			<div>{t('h1')}</div>
			<h4>now lang: </h4>
			<span>{lang}</span>
			<div>
				<button type="button" onClick={() => Router.push('/')}>
					{t('back-to-home')}
				</button>
			</div>
			<h4>useSwr gloabal state counter:</h4>
			<div>{count}</div>
		</div>
	)
}

About.getInitialProps = async () => ({
	namespacesRequired: ['about'],
})

About.propTypes = {
	t: PropTypes.func.isRequired,
}

export default withTranslation('about')(About)
