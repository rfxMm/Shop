import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import Collection from "./Pages/Collection"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Product from "./Pages/Prodact"
import Card from "./Pages/Cart"
import Login from "./Pages/Login"
import Order from "./Pages/Orders"
import PlaceOrder from './Pages/PlaceOrder'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md: px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />}/>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} />
        <Route path='/card' element={<Card />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place_order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Order />} /> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App
