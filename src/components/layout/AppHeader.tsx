import { Image, Popover } from 'antd'
import React, { useState } from 'react'
import LogoImg from '../../assets/images/logo.png'
import IconMemo from '../../assets/images/icon_memo.png'
import IconChallenge from '../../assets/images/icon_challenge.png'
import IconInfo from '../../assets/images/icon_info.png'
import IconMenu from '../../assets/images/icon_menu.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import XMark from '../../assets/images/icon_close.svg'
import DividerMenu from '../../assets/images/divider-menu.png'

const AppHeader = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const [open, setOpen] = useState(false)

	const hide = () => {
		setOpen(false)
	}

	const handleOpenChange = (newOpen: boolean) => {
		setOpen(newOpen)
	}

	return (
		<div className='app-header'>
			<div className='app-header__logo' onClick={() => navigate('/')}>
				<Image preview={false} src={LogoImg} />
			</div>
			<div className='app-header__navigation' onClick={() => navigate('/record')}>
				<div className='app-header__navigation-memo cursor-pointer'>
					<Image src={IconMemo} preview={false} />
					<Link to='/record' className={location.pathname === '/record' ? 'active' : ''}>
						自分の記録
					</Link>
				</div>
				<div className='app-header__navigation-challenge cursor-pointer' onClick={() => navigate('/record')}>
					<Image src={IconChallenge} preview={false} />
					<Link to='/record' className={location.pathname === '/record' ? 'active' : ''}>
						チャレンジ
					</Link>
				</div>
				<div
					className='app-header__navigation-info cursor-pointer'
					onClick={() => {
						navigate('/info')
					}}>
					<Image src={IconInfo} preview={false} />
					<Link to='/info' className={location.pathname === '/info' ? 'active' : ''}>
						お知らせ
					</Link>
				</div>
				<div className='app-header__navigation-menu cursor-pointer'>
					<Popover
						content={
							<div className='app-header__menu'>
								<span>自分の記録</span>
								<Image src={DividerMenu} preview={false} />
								<span>体重グラフ</span>
								<Image src={DividerMenu} preview={false} />
								<span>目標</span>
								<Image src={DividerMenu} preview={false} />
								<span>選択中のコース</span>
								<Image src={DividerMenu} preview={false} />
								<span>コラム一覧</span>
								<Image src={DividerMenu} preview={false} />
								<span>設定</span>
							</div>
						}
						title={null}
						trigger='click'
						open={open}
						arrow={false}
						placement='bottomRight'
						onOpenChange={handleOpenChange}>
						<Image preview={false} src={!open ? IconMenu : XMark} />
					</Popover>
				</div>
			</div>
		</div>
	)
}

export default AppHeader

