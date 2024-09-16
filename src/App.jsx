import {Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import MainLayouts from './Layouts/MainLayouts'
import HomePage from './Pages/HomePage'
import JobPage from './Pages/JobPage'
import NotFoundPage from './Pages/NotFoundPage'
import ReadMore from './components/ReadMore'

const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path='/' element={<MainLayouts/> }>
           <Route index element ={<HomePage/>} />
           <Route path='/jobs' element ={<JobPage/>} />
           <Route path='*' element ={<NotFoundPage/>} />
           <Route path='/ReadMore' element ={<ReadMore/>} />
          </Route>
      )
)



const App = () => {
      
         return <RouterProvider router={router}/>
}

export default App