import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Quiz from './Projects/Quiz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quiz></Quiz>
  </StrictMode>
)
