import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeAnalytics } from './utils/analytics'
import './styles/global.css'

initializeAnalytics()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
