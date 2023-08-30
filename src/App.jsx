import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Product from './components/Product'
import PasData from './context/Mydata'
import SingleProduct from './components/SingleProduct'
function App() {

  return (
    <>
      <PasData>
        <div className='app'>
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Product />} />
              <Route path='/product' element={<Product />} />
              <Route path='/product/:id' element={<SingleProduct />} />
              <Route path='*' element={<Product />} />
            </Routes>
          </Router>
        </div>
      </PasData>
    </>

  )
}

export default App
