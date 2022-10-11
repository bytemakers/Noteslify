import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GoBackTop from './components/GoBackTop'
import ContextWrapper from './context/ContextWrapper'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<GoBackTop />
		<ContextWrapper>
			<App />
		</ContextWrapper>
	</React.StrictMode>
)
