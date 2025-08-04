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
import SearchPage from './app/SearchPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'home', element: <HomePage /> },
      { path: 'movies', element: <MoviesPage /> },
      { path: 'tv-shows', element: <TvShowsPage /> },
      { path: 'top-imdb', element: <TopImdbPage /> },
      { path: 'overview/:type/:id', element: <OverviewPage /> },
      { path: 'search', element: <SearchPage /> }
    ],
    errorElement: <NotFoundPage />
  }
],{
  basename:process.env.NODE_ENV === 'production' ? '/Watchverse' : '/'
}
)

const App = () => {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
       <RouterProvider router={router} />
    </QueryClientProvider>
   
  )
}
export default App