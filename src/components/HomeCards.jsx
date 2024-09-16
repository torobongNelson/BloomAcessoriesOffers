import React from 'react'
import Cards from '../components/Cards'
import {Link} from 'react-router-dom'


const HomeCards = () => {
  return (
    <section className="py-4">
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">

                <Cards>
                 <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
                     <h2 className="text-2xl text-black-400 font-bold">Be a local Boss</h2>
                        <p className="mt-2 mb-4">
                         Bloom retailers are recognised all over the world
                         </p>
                    <Link
                       to="/jobs"
                        className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-900"
                    >
                      Get started
                    </Link>
                 </div>
                </Cards>

           <Cards>
           <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">Enroll for the bloom camp</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <Link
                to="/add-job"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              >
                Add Job
              </Link>
            </div>
           </Cards>
          </div>
        </div>
      </section>
  )
}

export default HomeCards