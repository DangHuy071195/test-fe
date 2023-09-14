import { Image } from 'antd'
import React, { ReactNode } from 'react'
interface RecordProps {
	image: string
	title: string
	descriptions: string
}
const RecordCategory: React.FC<RecordProps> = ({ image, title, descriptions }) => {
	return (
		<div className='record-cat__item scale-1'>
			<Image src={image} preview={false} />
			<div className='record-cat__item-info'>
				<span>{title}</span>
				<p>{descriptions}</p>
			</div>
		</div>
	)
}

export default RecordCategory

