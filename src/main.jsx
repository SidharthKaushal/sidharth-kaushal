import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import router from './routes/AppRouter.jsx'
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('site_wrapper')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
