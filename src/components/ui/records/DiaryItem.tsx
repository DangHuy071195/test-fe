import React, { ReactNode } from 'react'
interface DiaryProps {
	title: ReactNode
	description: ReactNode
}
const DiaryItem: React.FC<DiaryProps> = ({ title, description }) => {
	return (
		<div className='diary-item'>
			<span className='diary-item__title'>{title}</span>
			<span className='diary-item__desc'>{description}</span>
		</div>
	)
}

export default DiaryItem
