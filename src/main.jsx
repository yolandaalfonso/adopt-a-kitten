import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // TODO: Update CSS - Maybe use "normalize.css" and "reset.css" - Ask Team!
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
