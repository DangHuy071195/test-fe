import React from 'react'
import MainLayout from '../components/layout'
import { Button, Image } from 'antd'
import HealthFoodImg from '../assets/images/heal-food.png'
import HomeChart from '../components/ui/charts/HomeChart'
import MorningCat from '../assets/images/morning.png'
import LunchCat from '../assets/images/lunch.png'
import DinnerCat from '../assets/images/dinner.png'
import SlackCat from '../assets/images/slack.png'
import Morning1 from '../assets/images/mor-1.png'
import Morning2 from '../assets/images/mor-1.png'
import Lunch1 from '../assets/images/lunch-1.png'
import Lunch2 from '../assets/images/lunch-2.png'
import Dinner1 from '../assets/images/dinner-1.png'
import Dinner2 from '../assets/images/dinner-2.png'
import Slack1 from '../assets/images/slack-1.png'
import Slack2 from '../assets/images/slack-2.png'

const Home = () => {
	return (
		<MainLayout title='Home'>
			<div className='home-chart-and-banner'>
				<div className='home-chart-and-banner__banner'>
					<Image src={HealthFoodImg} preview={false} />
				</div>
				<HomeChart />
			</div>
			<div className='home-categories'>
				<Image preview={false} src={MorningCat} />
				<Image preview={false} src={LunchCat} />
				<Image preview={false} src={DinnerCat} />
				<Image preview={false} src={SlackCat} />
			</div>
			<div className='home-categories-all'>
				<div className='home-categories-all__item'>
					<Image preview={false} src={Morning1} />
					<p>05.21.Morning</p>
				</div>
				<div className='home-categories-all__item'>
					<Image preview={false} src={Lunch1} />
					<p>05.21.Morning</p>
				</div>
				<div className='home-categories-all__item'>
					<Image preview={false} src={Dinner1} />
					<p>05.21.Morning</p>
				</div>
				<div className='home-categories-all__item'>
					<Image preview={false} src={Slack1} />
					<p>05.21.Morning</p>
				</div>
				<div className='home-categories-all__item'>
					<Image preview={false} src={Morning2} />
					<p>05.21.Morning</p>
				</div>
				<div className='home-categories-all__item'>
					<Image preview={false} src={Lunch2} />
					<p>05.21.Morning</p>
				</div>
				<div className='home-categories-all__item'>
					<Image preview={false} src={Dinner2} />
					<p>05.21.Morning</p>
				</div>
				<div className='home-categories-all__item'>
					<Image preview={false} src={Slack2} />
					<p>05.21.Morning</p>
				</div>
			</div>
			<div className='home-actions'>
				<Button size='large' className='home-actions__btn' type='primary'>
					記録をもっと見る
				</Button>
			</div>
		</MainLayout>
	)
}

export default Home

