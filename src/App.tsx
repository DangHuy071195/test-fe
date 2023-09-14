import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Record from './pages/Record'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/challenge' element={<Record />} />
		</Routes>
	)
}

export default App

