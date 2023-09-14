import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Avatar, Col, Divider, List, Row, Skeleton } from 'antd'

const Activities = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState<any>([])

	const loadMoreData = () => {
		if (loading) {
			return
		}
		setLoading(true)
		fetch('http://localhost:8000/exercises')
			.then((res) => res.json())
			.then((body) => {
				setData([...data, ...body])
				setLoading(false)
			})
			.catch(() => {
				setLoading(false)
			})
	}

	useEffect(() => {
		loadMoreData()
	}, [])

	return (
		<div className='activities'>
			<div className='activities-title'>
				<span>
					MY <br /> EXERCISE
				</span>
				<span>2021.05.21</span>
			</div>
			<div
				id='scrollableDiv'
				style={{
					height: 192,
					overflowY: 'auto',
				}}>
				<InfiniteScroll
					dataLength={data.length}
					next={loadMoreData}
					hasMore={data.length < 50}
					loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
					endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
					scrollableTarget='scrollableDiv'>
					<List
						grid={{ gutter: 40, column: 2 }}
						className='activities-list'
						dataSource={data}
						renderItem={(item: any) => (
							<List.Item key={item.id} className='border-base pd-bt-2'>
								<List.Item.Meta
									title={
										<Row className='w-full activities-list__title' justify={'space-between'}>
											<Col>
												<div className='flex gap-16 align-items-center'>
													<span>●</span>
													<span>{item.title}</span>
												</div>
											</Col>
											<Col>
												<span className='activities-list__title--time'>{item.time} min</span>
											</Col>
										</Row>
									}
									description={`${item.energy}kcal`}
								/>
							</List.Item>
						)}
					/>
				</InfiniteScroll>
			</div>
		</div>
	)
}

export default Activities
