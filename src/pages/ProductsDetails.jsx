import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ProductsDetails = () => {
  const [product,setProduct]=useState({})
  // const id=useParams().productID
  const params=useParams()
  const id=params.productID
  useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/${id}`).then(res=>setProduct(res.data)).catch(err=>console.log(err))
  },[id])

  const addToCart=()=>{
    const cartItems=JSON.parse(localStorage.getItem('cartItem')) || []
    const productItem={
      id: product.id,
      title: product.title,
      category: product.category,
      price: product.price,
      rating: product.rating,
      quantity:1
    }
    const existingItem=cartItems && cartItems.find(item=>item.id===product.id)
    if(existingItem){
      toast.error('Product is already in the cart.')
    }
    else{
      cartItems.push(productItem)
      localStorage.setItem('cartItem', JSON.stringify(cartItems))
      toast.success(`${product.title} is successfully added to cart.`)
    }
  }

  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container my-5">
      <div className="row d-flex justify-content-evenly align-items-center shadow-lg">
        <div className="col-md-4 ">
          <img src={product.image} alt={product.title} width={'400'}/>
        </div>
        <div className="col-md-6 offset-md-1">
          <h2>{product.id}</h2>
          <h1>{product.title}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <div>
            <button className="btn btn-primary px-2 py-1" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
        


    </>
  )
}

export default ProductsDetails