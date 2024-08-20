
import React from 'react'
import ubaid1 from '../../images/students-studying-library.jpg'

const Home = () => {
  return (
    <div className='ml-10 mr-10 md:ml-2 md:mr-2 flex flex-col md:flex-row'>
      <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-30 pr-5 mb-8">
      <div className='space-y-10 '>
      <h1 className='text-4xl font-bold'>A room without books is like a body <span className='text-blue-500'>without a soul..!!!</span></h1>
      
      <p className='text-2xl'>Books are more than just ink on paper; they are gateways to new worlds, vessels of knowledge, and companions in solitude. Whether you seek adventure, wisdom, or solace, there’s a story waiting to unfold within each cover. In the pages of a book, you can travel beyond the bounds of time and place, discovering the richness of the human experience and the endless possibilities of the imagination.</p>


      <label className="input input-bordered flex items-center gap-2">
   <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 16 16"
     fill="currentColor"
     className="h-4 w-4 opacity-70">
     <path
       d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />     <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
    </svg>
    <input type="text" className="grow" placeholder="Email" />
 </label> 

 <button className="btn btn-primary">Primary</button>
      </div>

      </div>

      <div className="order-1 w-full md:w-1/2 mt-10 mb-10">
      <img className=''  src={ubaid1} alt="Error" />
      </div>
    </div>
  )
}

export default Home

