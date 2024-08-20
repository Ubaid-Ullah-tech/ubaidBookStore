import React from 'react'
import list from '../data/list.json'
import Cardddd from '../ubaid/Cardddd'
const Course = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-9 mb-10'>
        <div className='text-2xl mt-20 pt-10 text-center'>
      <h1 className='mb-10 font-bold'>Explore Our Book Courses <span className='text-blue-600'> Here !</span></h1>
      <p className='mb-10'>
      Discover a wide range of expertly curated book courses designed to deepen your knowledge and skills. Whether you're looking to master a new subject or enhance your existing expertise, our courses provide the perfect blend of theory and practical insights to help you succeed.
      </p>
      <a href='/'>
      <button className="btn btn-success" >Back to Home Page</button>  
      </a> 
        </div>
    <div>
      {
        list.map((item)=>(
         <Cardddd key={item} item={item}/>
        ))}
      </div>        
         
    </div>
  )
}

export default Course
