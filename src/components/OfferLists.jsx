import React from 'react'
import OfferList from './OfferList'
import { useState, useEffect } from 'react'
import Spinner from './Spinner'


const OfferLists = () => {
    const [job, setJob] = useState([])
    const [loading , setLoading] = useState(true)

    const fetchJobs = async () => {
      try{
        const res  =   await fetch('http://localhost:8000/job')
        const data =  await res.json()
        setJob(data)
      } catch(error){
        console.log("Error fetching data" ,error)
      } finally{
        setLoading(false)
      }
  }

    useEffect( () => { fetchJobs() }, [])


  return (
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
            PARTNER WITH Us
          </h2>
          <div className="grid grid-cols- 1 md:grid-cols-3 gap-6">
              { loading ? (
                <Spinner loading ={loading} />
              ): (
                <>
                    
                  { job.map((job)=> (
                    <OfferList key={job.id} job={job} />
              )) }
                </>
              )}

             

           





            
          </div>
        </div>
      </section>
  )
}

export default OfferLists