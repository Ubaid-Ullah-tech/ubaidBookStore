import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AddToCart from './components/addtocart/AddToCart'
import Course from './components/course/Course'
import Contact from './components/contact/Contact'
import About from './components/about/About'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        {/* Nested routes under Layout */}
        <Route path='/add-to-cart' element={<AddToCart />} />
        <Route path='/course' element={<Course />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Route>
    </Routes>
  )
}

export default App;














// import React from 'react'

// import { Route, Routes } from 'react-router-dom'

// import Layout from './components/layout/Layout'
// import FBook from './components/ubaid/FBook'
// import AddToCart from './components/addtocart/AddToCart'
// import Course from './components/course/Course'
// import Navbar from './components/navbar/Navbar'
// import Footer from './components/footer/Footer'

// const App = () => {
//   return (
//     <div>
//     <Routes>
//       <Route 
//       path='/' element={<Layout/>}>
//       <Route index element={<FBook/>}/>
//       </Route>

//       <Route path='/add-to-cart' element={<AddToCart/>}/>
//       <Route path='/course' element={<Course/>}/>
//     </Routes>   
//     </div>
//   )
// }

// export default App
