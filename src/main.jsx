import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { validateEnvVariables } from './utils/errorHandling'
import './index.css'

// Validate environment variables on startup
validateEnvVariables();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)