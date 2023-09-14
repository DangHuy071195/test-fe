import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Record from './pages/Record'
import Actions from './pages/Actions'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/record' element={<Record />} />
			<Route path='/info' element={<Actions />} />
		</Routes>
	)
}

export default App

