import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Products  from './components/Products'
import Footer from './components/Footer'
import Product  from './components/Product'

function App() {


  return (
    <>
    <BrowserRouter>
      <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Product/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
