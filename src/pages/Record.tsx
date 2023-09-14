import React from 'react'
import MainLayout from '../components/layout'
import RecordImg1 from '../assets/images/record-1.png'
import RecordImg2 from '../assets/images/record-2.png'
import RecordImg3 from '../assets/images/record-3.png'
import RecordCategory from '../components/ui/records/RecordCategory'
import HomeChart from '../components/ui/charts/HomeChart'
import RecordChart from '../components/ui/charts/RecordChart'
const Record = () => {
	return (
		<MainLayout title={'Record'}>
			<div className='record'>
				<div className='record-cat'>
					<RecordCategory image={RecordImg1} title='BODY RECORD' descriptions='自分のカラダの記録' />
					<RecordCategory image={RecordImg2} title='MY EXERCISE' descriptions='自分の運動の記録' />
					<RecordCategory image={RecordImg3} title='MY DIARY' descriptions='自分の日記' />
				</div>
				<RecordChart />
			</div>
		</MainLayout>
	)
}

export default Record

