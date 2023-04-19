import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home' // import home
import Owner from './Owner' // import Owner
import Navbar from './Navbar'
import AutoSync from './AutoSync'
import Input from './Input'
import {
  createBrowserRouter,              
  RouterProvider,
} from "react-router-dom";

//create router provider
const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <Navbar />
      <Home />
    </>
  },

  {
    path: '/owner',
    element: <>
      <Navbar />
      <Owner />
    </>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} /> //input router
)
