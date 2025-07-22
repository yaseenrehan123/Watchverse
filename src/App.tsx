import React, { useState } from 'react'
import HomePage from './components/pages/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './components/pages/LandingPage'
import Layout from './components/Layout'
import NotFoundPage from './components/pages/NotFoundPage'
import MoviesPage from './components/pages/MoviesPage'
import TvShowsPage from './components/pages/TvShowsPage'
import TopImdbPage from './components/pages/TopImdbPage'
import OverviewPage from './components/pages/OverviewPage'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {index:true, element:<LandingPage/>},
      {path:'home',element:<HomePage/>},
      {path:'movies',element:<MoviesPage/>},
      {path:'tv-shows',element:<TvShowsPage/>},
      {path:'top-imdb',element:<TopImdbPage/>},
      {path:'overview/:type/:id',element:<OverviewPage/>}
    ],
    errorElement:<NotFoundPage/>
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App