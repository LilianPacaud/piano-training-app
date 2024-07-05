import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'

const appDiv = document.getElementById('appWrap')
if (appDiv === null) throw new Error('div for the app not found')
const root = createRoot(appDiv)

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
