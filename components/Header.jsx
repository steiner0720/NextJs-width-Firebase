import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Header = ({ title }) => (
	<>
		<Head>
			<title>next-i18next</title>
		</Head>
		<h2>
			next-i18next
			<hr />
		</h2>
		<h1>{title}</h1>
		<a className='github' href='//github.com/isaachinman/next-i18next'>
			<i className='typcn typcn-social-github-circular' />
		</a>
	</>
)

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Header
