import React from 'react'
import MainLayout from '../components/layout'
import RecordImg1 from '../assets/images/record-1.png'
import RecordImg2 from '../assets/images/record-2.png'
import RecordImg3 from '../assets/images/record-3.png'
import RecordCategory from '../components/ui/records/RecordCategory'
import RecordChart from '../components/ui/charts/RecordChart'
import Activities from '../components/ui/records/Activities'
import DiaryItem from '../components/ui/records/DiaryItem'
import { Button } from 'antd'
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
				<Activities />
				<div className='diary-list'>
					<span className='diary-list__title'>MY DIARY</span>
					<div className='diary-list__grid'>
						<DiaryItem
							title={
								<p>
									2021.05.21
									<br /> 23:25
								</p>
							}
							description={
								<p>
									私の日記の記録が一部表示されます。
									<br />
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
								</p>
							}
						/>
						<DiaryItem
							title={
								<p>
									2021.05.21
									<br /> 23:25
								</p>
							}
							description={
								<p>
									私の日記の記録が一部表示されます。
									<br />
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
								</p>
							}
						/>
						<DiaryItem
							title={
								<p>
									2021.05.21
									<br /> 23:25
								</p>
							}
							description={
								<p>
									私の日記の記録が一部表示されます。
									<br />
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
								</p>
							}
						/>
						<DiaryItem
							title={
								<p>
									2021.05.21
									<br /> 23:25
								</p>
							}
							description={
								<p>
									私の日記の記録が一部表示されます。
									<br />
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
								</p>
							}
						/>
						<DiaryItem
							title={
								<p>
									2021.05.21
									<br /> 23:25
								</p>
							}
							description={
								<p>
									私の日記の記録が一部表示されます。
									<br />
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
								</p>
							}
						/>
						<DiaryItem
							title={
								<p>
									2021.05.21
									<br /> 23:25
								</p>
							}
							description={
								<p>
									私の日記の記録が一部表示されます。
									<br />
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
								</p>
							}
						/>
						<DiaryItem
							title={
								<p>
									2021.05.21
									<br /> 23:25
								</p>
							}
							description={
								<p>
									私の日記の記録が一部表示されます。
									<br />
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
								</p>
							}
						/>
						<DiaryItem
							title={
								<p>
									2021.05.21
									<br /> 23:25
								</p>
							}
							description={
								<p>
									私の日記の記録が一部表示されます。
									<br />
									テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
								</p>
							}
						/>
					</div>
				</div>
				<div className='flex justify-content-center' style={{ marginTop: -26, marginBottom: 64 }}>
					<Button size='large' className='home-actions__btn' type='primary'>
						記録をもっと見る
					</Button>
				</div>
			</div>
		</MainLayout>
	)
}

export default Record

