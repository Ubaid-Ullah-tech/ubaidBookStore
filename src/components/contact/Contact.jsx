import React from 'react'
import ubaid from '../../images/ubaid.jpg'
const Contact = () => {
    return (
        <div className='max-w-screen-2xl container md:px-20 px-9 mt-20 mb-10'>
            <div className='text-center p-10'>
                <h1 className='text-2xl mb-10'>Contact Us ...!</h1>
                <div style={{marginBottom:'60px', display:'flex' , justifyContent:'center' , alignItems:'center'}}>
            <img style={{width:'300px',height:'290px' , borderRadius:'50%'}} src={ubaid} alt="Error" />
          </div>
                <p className='pb-10'>Feel free to reach out to Ubaid with any questions, recommendations, or just to chat about books and personal growth.</p>
                <ul className='text-2xl text-blue-500'>
                    <li> <a href="">Email: [ubaidullah.uoh@gmail.com]</a></li>
                    <li> <a href=''>LinkedIn: linkedin.com/in/ubaid </a></li>
                    <li><a href=''> Twitter: @ubaid</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
