import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// grabbing the root attribute from index.html and rendering it
createRoot(document.getElementById('root')!).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)
// the strictmode wrapper adds safety to development via flags and deprecation
// checks, then it calls App which is the start of the real vDOM that is
// developed by the programmer
