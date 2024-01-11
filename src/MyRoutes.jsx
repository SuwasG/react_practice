import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import EightCol from './EightCol'
import Layout from './components/Layout'
import Homepage from './pages/Homepage'
import Usestate from './hooks/Usestate'
import DataFetch from './hooks/DataFetch'
import SecondDataFetch from './hooks/SecondDataFetch'
import PixabayAPI from './hooks/PixabayAPI'
import NavTry from './components/NavTry'
import Products from './pages/Products'
import ProductsDetails from './pages/ProductsDetails'
import Cart from './pages/Cart'
import UnsplashAPI from './hooks/UnsplashAPI'
import Cards2 from './components/Cards2'
import CardsContainer2 from './components/CardsContainer2'
import Products2 from './pages/Products2'
import ProductDetails2 from './pages/ProductDetails2'
import Signup from './pages/Signup'
import SignIn from './pages/SignIn'
import ComboBoxMUI from './pages/ComboBoxMUI'
import CountryMUI from './pages/CountryMUI'



const MyRoutes = () => {
  const {t,i18n}=useTranslation();
  return (
    <div>
{t(
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}> 
              <Route index element={<Homepage/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='productdetails/:productID' element={<ProductsDetails/>}/>
              <Route path='/signup' element={<Signup/>}/>
              <Route path='/signin' element={<SignIn/>}/>
              <Route path='/cart' element={<Cart/>}/>
          </Route>

          <Route path='/state' element={<Usestate/>}/>
          <Route path='/fetch' element={<DataFetch/>}/>
          <Route path='/secondfetch' element={<SecondDataFetch/>}/>
          <Route path='/pixa' element={<PixabayAPI/>}/>
          <Route path='/navtry' element={<NavTry/>}/>
          
          <Route path='/unsplash' element={<UnsplashAPI/>}/>

          <Route path='/cards2' element={<Cards2/>}/>
          <Route path='/container2' element={<CardsContainer2/>}/>
          <Route path='/products2' element={<Products2/>}/>
        <Route path='pd2/:productID' element={<ProductDetails2/>}/>

        <Route path='combo' element={<ComboBoxMUI/>}/>
        <Route path='country' element={<CountryMUI/>}/>

        
        </Routes>
    </Router>
)}
    </div>
  )
}

export default MyRoutes