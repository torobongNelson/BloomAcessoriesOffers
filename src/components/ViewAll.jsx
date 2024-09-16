import React from 'react'
import {Link} from 'react-router-dom'

const ViewAll = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
    <Link
      to="/jobs"
      className="block bg-pink-600 text-white text-center py-4 px-6 rounded-xl hover:bg-blue-300"
    >View All Offers
    </Link>
  </section>
  )
}

export default ViewAll