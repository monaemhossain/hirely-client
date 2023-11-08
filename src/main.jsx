import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routers/Routes'
import AuthProvider from './AuthProvider/AuthProvider'
import axios from 'axios'


axios.defaults.withCredentials = true;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={Routes} />
      </AuthProvider>
  </React.StrictMode>,
)
