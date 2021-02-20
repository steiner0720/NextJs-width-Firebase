/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import useSwr, { mutate } from 'swr'
import PropTypes from 'prop-types'
import { Descriptions } from 'antd'
import initialData from '../../store/app'
import { withTranslation } from '../../i18n'
import fetcher from '../api/fetcher'
import documentList from '../../components/documentList/documentList'
import { home, container } from './Home.module.scss'

const Home = ({ t }) => {
	const state = useSwr('store', false, { initialData })
	const { data } = useSwr('/api/city/fetchCity', fetcher)
	const { count } = state.data

	const handleChange = counted => mutate('store', { ...state.data, count: counted }, false)

	const renderList = ({ list = [] }) => (
		<Descriptions bordered column={1}>
			{list.map((item, i) => (
				<Descriptions.Item label={item.title} key={i.toString()}>
					<div>{item.desc}</div>
				</Descriptions.Item>
			))}
		</Descriptions>
	)

	const document = documentList({ t, data, count, handleChange }).map((item, i) => (
		<div key={i.toString()}>
			<h2>{item.title}</h2>
			{item.desc}
			{renderList({ list: item.list })}
		</div>
	))

	return (
		<div className={home}>
			<div className={container}>{document}</div>
		</div>
	)
}

Home.getInitialProps = async () => ({
	namespacesRequired: ['common'],
})

Home.propTypes = {
	t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Home)
