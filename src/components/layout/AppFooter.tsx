import React from 'react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
	return (
		<ul className='app-footer'>
			<Link to='/会員登録'>会員登録</Link>
			<Link to='/運営会社'>運営会社</Link>
			<Link to='/利用規約'>利用規約</Link>
			<Link to='/個人情報の取扱について'>個人情報の取扱について</Link>
			<Link to='/特定商取引法に基づく表記'>特定商取引法に基づく表記</Link>
			<Link to='/お問い合わせ'>お問い合わせ</Link>
		</ul>
	)
}

export default AppFooter
