import React, { useContext } from 'react'
import useSwr, { mutate } from 'swr'
import PropTypes from 'prop-types'
import { Descriptions, Button } from 'antd'
import { I18nContext } from 'next-i18next'
import { Router, withTranslation } from '../../i18n'
import initialData from '../../store/app'
import { about, container } from './About.module.scss'

const About = ({ t }) => {
	const {
		i18n: { language, changeLanguage },
	} = useContext(I18nContext)
	const state = useSwr('store', false, { initialData })

	const langSwitch = language === 'en-US' ? 'zh-TW' : 'en-US'

	const { count } = state.data

	const handleChange = counted => mutate('store', { ...state.data, count: counted }, false)

	return (
		<div className={about}>
			<div className={container}>
				<h2>
					This is About Page
					<span role='img' aria-label=''>
						🌝
					</span>
				</h2>
				<Descriptions bordered column={1}>
					<Descriptions.Item label='Current Count'>
						<div>
							<span style={{ marginRight: '12px' }}>{count} (from gloabal state)</span>
							<Button onClick={() => handleChange(count + 1)} style={{ marginRight: '12px' }}>
								Increase
							</Button>
							<Button onClick={() => handleChange(count - 1)} style={{ marginRight: '12px' }}>
								decrease
							</Button>
						</div>
					</Descriptions.Item>
					<Descriptions.Item label='Now Language'>
						<div>{t(language)}</div>
					</Descriptions.Item>
					<Descriptions.Item label='Change Language to:'>
						<div>
							<Button onClick={() => changeLanguage(langSwitch)}>{t(langSwitch)}</Button>
						</div>
					</Descriptions.Item>
					<Descriptions.Item label='Router'>
						<div>
							<Button onClick={() => Router.push('/home')}>{t('back-to-home')}</Button>
						</div>
					</Descriptions.Item>
				</Descriptions>
			</div>
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
