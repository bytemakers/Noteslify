import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GoBackTop from './components/GoBackTop'
import ContextWrapper from './context/ContextWrapper'
import './index.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<GoBackTop />
		<ContextWrapper>
			<App />
			<ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
		</ContextWrapper>
	</React.StrictMode>
)
