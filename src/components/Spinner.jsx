import React from 'react'
import { HashLoader } from 'react-spinners'

const Spinner = ({loading}) => {

    const override = {
        display: 'block',
        display: 'centre',
        margin:  '150px '
    }

  return (
    <HashLoader
        color= '#4338ca'
        loading= {loading}
        cssOverride = {override}
        size = {150}


    
    />

  )
}

export default Spinner