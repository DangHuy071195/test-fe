import React, { useEffect, useState } from 'react'
import { DualAxes } from '@ant-design/plots'
import { Line } from '@ant-design/plots'
import { data } from '../../../mock-data/data'

const HomeChart = () => {
	const config = {
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
		animation: {
			appear: {
				duration: 4000,
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

