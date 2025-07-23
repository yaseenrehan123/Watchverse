import React, { useState } from 'react'
import HomePage from './features/home/HomePage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './features/landing/LandingPage'
import Layout from './app/Layout'
import NotFoundPage from './app/NotFoundPage'
import MoviesPage from './features/movies/MoviesPage'
import TvShowsPage from './features/tvshows/TvShowsPage'
import TopImdbPage from './features/topImdb/TopImdbPage'
import OverviewPage from './features/overview/OverviewPage'

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