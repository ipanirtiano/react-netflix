import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'
import { StateProvider } from './utils/StateProvider'
import reducer, { initialState } from './utils/Reducer'

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/detail/:id",
    element: <Detail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer} >
    <RouterProvider  router={route} />
    </StateProvider>
  </React.StrictMode>,
)
