import React from 'react'
import logo from './../assets/Images/logo.jpeg'
import { NavLink } from 'react-router-dom'

const Nav = () => {


  // When you are at a particular page, the color still remains on the button as 
      // long as youare still there.
      
  const linkClass = ({ isActive }) =>
     isActive 
      ? 'text-white bg-green-400 hover:bg-pink-400  hover:text-white rounded-md px-3 py-2'  
      : 'hover:bg-pink-400  hover:text-white rounded-md px-3 py-2'
       


  return (

    <nav className="bg-gradient-to-r from-violet-500 to-fuchsia-500 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div
              className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
            >

              <NavLink className="flex flex-shrink-0 items-center mr-4"
               to='/'
               >
                <img
                  className="h-10 w-auto"
                  src={logo}
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                >Bloom Connect
                 </span>
              </NavLink>

              <div className="md:ml-auto">
                <div className="flex space-x-2">

                <NavLink
                    to= '/'
                    className={linkClass}>
                      Home
                </NavLink>


                  <NavLink
                    to="/jobs"
                  className={linkClass}>
                      Jobs
                  </NavLink>

                  <NavLink
                    to="/aboutUs"
                    className= {linkClass}
                  >AboutUs
                  </NavLink>

                  <NavLink
                    to="/add-job"
                    className={linkClass}>
                      Add job
                  </NavLink>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default Nav