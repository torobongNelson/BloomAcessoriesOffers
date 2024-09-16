import React from 'react'

const OfferCard = ({children}) => {
  return (
    <div className='bg-indigo-200 p-2 rounded-lg text-gray-700' >
        {children}
    </div>
  )
}

export default OfferCard