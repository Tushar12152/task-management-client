import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routs from './Router/Routs'
import AuthProvider from './Provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Toaster } from 'react-hot-toast'



const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <QueryClientProvider client={queryClient}>
         <DndProvider backend={HTML5Backend}>
           <RouterProvider router={Routs}></RouterProvider>
             <Toaster/>
         </DndProvider>
      </QueryClientProvider>
     </AuthProvider>
  </React.StrictMode>,
)
