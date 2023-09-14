import React, { useEffect, useState } from 'react'
import { DualAxes } from '@ant-design/plots'
import { Line } from '@ant-design/plots'
import { data } from '../../../mock-data/data'

const HomeChart = () => {
	// const data = [
	// 	{
	// 		month: '6',
	// 		value: 3,
	// 		count: 10,
	// 	},
	// 	{
	// 		month: '7',
	// 		value: 4,
	// 		count: 4,
	// 	},
	// 	{
	// 		month: '8',
	// 		value: 3.5,
	// 		count: 5,
	// 	},
	// 	{
	// 		month: '9',
	// 		value: 5,
	// 		count: 5,
	// 	},
	// 	{
	// 		month: '10',
	// 		value: 4.9,
	// 		count: 4.9,
	// 	},
	// 	{
	// 		month: '11',
	// 		value: 6,
	// 		count: 35,
	// 	},
	// 	{
	// 		month: '12',
	// 		value: 7,
	// 		count: 7,
	// 	},
	// 	{
	// 		month: '1',
	// 		value: 9,
	// 		count: 1,
	// 	},
	// 	{
	// 		month: '2',
	// 		value: 13,
	// 		count: 20,
	// 	},
	// 	{
	// 		month: '3',
	// 		value: 13,
	// 		count: 20,
	// 	},
	// ]

	// const [data, setData] = useState([])

	// useEffect(() => {
	// 	asyncFetch()
	// }, [])

	// const asyncFetch = () => {
	// 	fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
	// 		.then((response) => response.json())
	// 		.then((json) => setData(json))
	// 		.catch((error) => {
	// 			console.log('fetch data failed', error)
	// 		})
	// }
	const config = {
		// data: data,
		// xField: 'month',
		// yField: ['value', 'count'],
		data: data,
		xField: 'month',
		yField: 'value',
		seriesField: 'category',

		legend: false,
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
				formatter: (v: any) => `${v}月`,
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
					fill: 'red',
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
	return (
		<div className='home-chart-and-banner__chart'>
			{/* @ts-ignore */}
			<Line {...config} />
		</div>
	)
}

export default HomeChart

