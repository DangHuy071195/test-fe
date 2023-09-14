import { Image } from 'antd'
import React from 'react'
import LogoImg from '../../assets/images/logo.png'
import IconMemo from '../../assets/images/icon_memo.png'
import IconChallenge from '../../assets/images/icon_challenge.png'
import IconInfo from '../../assets/images/icon_info.png'
import IconMenu from '../../assets/images/icon_menu.svg'
import { Link, useNavigate } from 'react-router-dom'

const AppHeader = () => {
	const navigate = useNavigate()

	return (
		<div className='app-header'>
			<div className='app-header__logo' onClick={() => navigate('/')}>
				<Image preview={false} src={LogoImg} />
			</div>
			<div className='app-header__navigation'>
				<div className='app-header__navigation-memo'>
					<Image src={IconMemo} preview={false} />
					<Link to='/memo'>自分の記録</Link>
				</div>
				<div className='app-header__navigation-challenge'>
					<Image src={IconChallenge} preview={false} />
					<Link to='/challenge'>チャレンジ</Link>
				</div>
				<div className='app-header__navigation-info'>
					<Image src={IconInfo} preview={false} />
					<Link to={'/info'}>お知らせ</Link>
				</div>
				<div className='app-header__navigation-menu'>
					<Image preview={false} src={IconMenu} />
				</div>
			</div>
		</div>
	)
}

export default AppHeader

