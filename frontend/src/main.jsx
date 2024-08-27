import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/global.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <GlobalProvider>
    <App />
    </GlobalProvider>
  </StrictMode>,
)
