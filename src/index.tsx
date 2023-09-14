import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import './assets/scss/index.styles.scss'
import { ConfigProvider } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Router>
			<ConfigProvider
				theme={{ token: { colorPrimary: '#FF963C', colorText: '#FF963C', fontFamily: 'Hiragino Kaku Gothic Pro' } }}>
				<App />
			</ConfigProvider>
		</Router>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

