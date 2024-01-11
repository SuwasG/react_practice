
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DataFetch = () => {
    const [productsFromAPI,setProductsFromAPI]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((result)=>{
            console.log(result.data)
            setProductsFromAPI(result.data)
        })
        .catch((err)=>console.log(err))
    },[])
  return (
    <>

    {productsFromAPI.map((products,index)=>(
        <div key={index}>
            <p>{products.id}</p>\
            <img src={products.image} alt={products.title} />
            <h1>{products.title}</h1>
            <h2>{products.category}</h2>
            <h2>{products.price} dollars</h2>
            <h2>{products.rating.rate} stars</h2>
            <h2>{products.rating.count} reviews</h2>
        </div>
    ))}

    </>
  )
}

export default DataFetch