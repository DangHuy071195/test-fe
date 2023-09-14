import { Image } from 'antd'
import React from 'react'
interface CategoryDetailsProps {
	image: string
	time: string
	desc: string
	tags: string
}
const CategoryDetailItem: React.FC<CategoryDetailsProps> = ({ image, desc, time, tags }) => {
	return (
		<div className='notice-cat__details'>
			<div className='notice-cat__details--image'>
				<Image src={image} preview={false} />
				<span className='notice-cat__details--time'>{time}</span>
			</div>
			<span className='notice-cat__details--desc'>{desc}</span>
			<span className='notice-cat__details--tags'>{tags}</span>
		</div>
	)
}

export default CategoryDetailItem
