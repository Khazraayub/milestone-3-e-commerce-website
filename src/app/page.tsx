import React from 'react'

import Banner from './components/Banner'
import Carousel from './components/Carousel'
import Order from './components/Order'
import Product from './components/Product'
import Product1 from './components/Product1'


import ProductCardGrid from './components/ProductCardGrid'
import Menu from './components/MenuItem'



export default function App() {
  return (
    <div className='bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen'>
      
      <Carousel/>
      <Order/>
      <Product/>
      <Banner/>
      <Product1/>
      
      <Menu/>

    </div>
  )
}
