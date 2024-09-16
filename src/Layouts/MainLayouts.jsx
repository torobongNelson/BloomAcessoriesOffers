import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'

const MainLayouts = () => {
  return (
    <>
        <Nav/>
       <Outlet/>
    </>
  )
}

export default MainLayouts