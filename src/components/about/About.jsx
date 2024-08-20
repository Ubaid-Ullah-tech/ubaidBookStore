import React from 'react'
import ubaid from '../../images/ubaid.jpg'
const About = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-9 mb-10'>
            <div className='text-2xl mt-20 pt-10 text-center'>
          <h1 className='mb-10 font-bold'>About <span className='text-blue-600'> Here !</span></h1>
          <div style={{marginBottom:'60px', display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <img style={{width:'300px',height:'290px' , borderRadius:'50%'}} src={ubaid} alt="Error" />
          </div>
          <p className='mb-10'>
          Ubaid is an avid reader who finds inspiration and motivation in the power of words. With a keen interest in self-improvement and personal growth, Ubaid gravitates towards books that offer practical wisdom and insightful strategies for living a more fulfilling life. Always on the lookout for books that can make a meaningful impact, Ubaid enjoys exploring titles that are not only concise but also packed with actionable advice.
          </p>
          <a href='/'>
          <button className="btn btn-success" >Back to Home Page</button>  
          </a>
         
            </div>
             
        </div>
      )
}

export default About