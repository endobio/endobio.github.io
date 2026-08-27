import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { initPostHog } from './lib/posthog'

const cleanPath = window.location.pathname.replace(/\/+$/, '')

if (!window.location.hash && cleanPath === '/careers') {
  window.history.replaceState(null, '', '/#/careers')
}

initPostHog()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
