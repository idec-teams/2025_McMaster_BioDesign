import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import Overview from './pages/Overview'
import Team from './pages/Team'
import References from './pages/References'
import Discussion from './pages/Discussion'
import Future from './pages/Future'
import WetLab from './pages/WetLab'
import DryLab from './pages/DryLab'

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollRestoration />
      {children}
    </>
  )
}

const router = createBrowserRouter(
  [
    { path: '/', element: <RootLayout><Home /></RootLayout> },
    { path: '/overview', element: <RootLayout><Overview /></RootLayout> },
    { path: '/discussion', element: <RootLayout><Discussion /></RootLayout> },
    { path: '/future', element: <RootLayout><Future /></RootLayout> },
    { path: '/team', element: <RootLayout><Team /></RootLayout> },
    { path: '/references', element: <RootLayout><References /></RootLayout> },
    { path: '/wetlab', element: <RootLayout><WetLab /></RootLayout> },
    { path: '/drylab', element: <RootLayout><DryLab /></RootLayout> },
  ],
  {
    // This equals "/" in dev and "/2025_McMaster_BioDesign/" in prod
    basename: import.meta.env.BASE_URL,
  }
)


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
