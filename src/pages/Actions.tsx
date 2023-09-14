import React from 'react'
import Action1 from '../assets/images/action-1.png'
import Action2 from '../assets/images/action-2.png'
import Action3 from '../assets/images/action-3.png'
import Action4 from '../assets/images/action-4.png'
import Action5 from '../assets/images/action-5.png'
import Action6 from '../assets/images/action-6.png'
import Action7 from '../assets/images/action-7.png'
import Action8 from '../assets/images/action-8.png'
import MainLayout from '../components/layout'
import NoticeCatItem from '../components/ui/notices/NoticeCatItem'
import CategoryDetailItem from '../components/ui/notices/CategoryDetailItem'
import { Button } from 'antd'

const Actions = () => {
	return (
		<MainLayout title='Notice'>
			<div className='notice'>
				<div className='notice-categories'>
					<NoticeCatItem
						title={
							<p>
								RECOMMENDED
								<br />
								COLUMN
							</p>
						}
						desc='オススメ'
					/>
					<NoticeCatItem
						title={
							<p>
								RECOMMENDED
								<br />
								DIET
							</p>
						}
						desc='ダイエット'
					/>
					<NoticeCatItem
						title={
							<p>
								RECOMMENDED
								<br />
								BEAUTY
							</p>
						}
						desc='美容'
					/>
					<NoticeCatItem
						title={
							<p>
								RECOMMENDED
								<br />
								HEALTH
							</p>
						}
						desc='健康'
					/>
				</div>
				<div className='notice-cat__all'>
					<CategoryDetailItem
						image={Action1}
						time='2021.05.17   23:25'
						desc='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
						tags='#魚料理  #和食  #DHA'
					/>
					<CategoryDetailItem
						image={Action2}
						time='2021.05.17   23:25'
						desc='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
						tags='#魚料理  #和食  #DHA'
					/>
					<CategoryDetailItem
						image={Action3}
						time='2021.05.17   23:25'
						desc='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
						tags='#魚料理  #和食  #DHA'
					/>
					<CategoryDetailItem
						image={Action4}
						time='2021.05.17   23:25'
						desc='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
						tags='#魚料理  #和食  #DHA'
					/>
					<CategoryDetailItem
						image={Action5}
						time='2021.05.17   23:25'
						desc='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
						tags='#魚料理  #和食  #DHA'
					/>
					<CategoryDetailItem
						image={Action6}
						time='2021.05.17   23:25'
						desc='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
						tags='#魚料理  #和食  #DHA'
					/>
					<CategoryDetailItem
						image={Action7}
						time='2021.05.17   23:25'
						desc='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
						tags='#魚料理  #和食  #DHA'
					/>
					<CategoryDetailItem
						image={Action8}
						time='2021.05.17   23:25'
						desc='魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…'
						tags='#魚料理  #和食  #DHA'
					/>
				</div>
				<div className='home-actions'>
					<Button size='large' className='home-actions__btn' type='primary'>
						記録をもっと見る
					</Button>
				</div>
			</div>
		</MainLayout>
	)
}

export default Actions
