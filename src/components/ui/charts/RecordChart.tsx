import React, { useEffect, useMemo, useState } from 'react'
import { DualAxes } from '@ant-design/plots'
import { Line } from '@ant-design/plots'
import { dayData, monthData, weekData, yearData } from '../../../mock-data/record-data'
import { Button, Row } from 'antd'

const RecordChart = () => {
	const [typeData, setTypeData] = useState('month')
	const [data, setData] = useState<any>([])

	useEffect(() => {
		switch (typeData) {
			case 'day':
				setData(dayData)
				break
			case 'week':
				setData(weekData)
				break
			case 'month':
				setData(monthData)
				break
			case 'year':
				setData(yearData)
				break
			default:
				setData(monthData)
		}
		console.log('monthData', monthData)
	}, [typeData])
	const config = useMemo(() => {
		return {
			data,
			xField: 'month',
			yField: 'value',
			seriesField: 'category',
			style: {
				width: 'calc(100% - 20px)',
			},
			lineStyle: {
				lineWidth: 3,
			},

			color: ['#FFCC21', '#8FE9D0'],

			xAxis: {
				label: {
					// 数值格式化为千分位
					formatter: (v: any) =>
						`${v}${typeData === 'day' ? '月' : typeData === 'week' ? '週' : typeData === 'month' ? '月' : '年'}`,
				},
				line: {
					style: {
						lineWidth: 0,
					},
				},
				grid: {
					line: {
						lineWidth: 0,
						stroke: '#777',
						shadowBlur: 0,
					},
				},
			},
			yAxis: {
				label: {
					formatter: (v: any) => ``,
				},

				grid: {
					line: {
						style: {
							lineWidth: 0,
							shadowBlur: 0,
							shadowColor: 'red',
						},
					},
				},
			},
			point: {
				shape: ({ category }: any) => {
					return category === 'Gas fuel' ? 'square' : 'circle'
				},
			},
		}
	}, [data, typeData])

	const handleTypeData = (val: string) => {
		setTypeData(val)
	}
	return (
		<div className='home-chart-and-banner__chart record'>
			<div className='home-chart-and-banner__chart--title'>
				<span>
					BODY <br />
					RECORD
				</span>
				<span>2021.05.21</span>
			</div>
			{/* @ts-ignore */}
			<Line {...config} height={316} />
			<div className='home-chart-and-banner__chart--actions'>
				<Button type={typeData === 'day' ? 'primary' : 'default'} onClick={() => handleTypeData('day')}>
					日
				</Button>
				<Button type={typeData === 'week' ? 'primary' : 'default'} onClick={() => handleTypeData('week')}>
					週
				</Button>
				<Button type={typeData === 'month' ? 'primary' : 'default'} onClick={() => handleTypeData('month')}>
					日
				</Button>
				<Button type={typeData === 'year' ? 'primary' : 'default'} onClick={() => handleTypeData('year')}>
					年
				</Button>
			</div>
		</div>
	)
}

export default RecordChart

