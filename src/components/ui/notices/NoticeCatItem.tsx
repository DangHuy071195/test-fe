import React, { ReactNode } from 'react'
import DividerImg from '../../../assets/images/divider.png'
import { Image } from 'antd'
interface NoticeProps {
	title: ReactNode
	desc: ReactNode
}
const NoticeCatItem: React.FC<NoticeProps> = ({ title, desc }) => {
	return (
		<div className='notice-cat'>
			<span className='notice-cat__title'>{title}</span>
			<Image src={DividerImg} />
			<span className='notice-cat__desc'>{desc}</span>
		</div>
	)
}

export default NoticeCatItem
