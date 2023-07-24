import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { StateProvider } from './utils/StateProvider'
import reducer, { initialState } from './utils/Reducer'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
    <RouterProvider  router={route} />
    </StateProvider>
  </React.StrictMode>,
)
