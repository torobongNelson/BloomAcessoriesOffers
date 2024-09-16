import React from 'react'

const Cards = ({children}) => {
  return (
    <div className='bg-pink-200 p-2 rounded-lg  shadow-md' >
        {children}
    </div>
  )
}

export default Cards;