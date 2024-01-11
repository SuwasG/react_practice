import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SecondDataFetch = () => {
    const[productsVariable,setProductsVariable]=useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then(result=>{
            console.log(result.data) 
            setProductsVariable(result.data)
        .catch(err=>console.log(err))
    })
    },[])
  return (
    <>
    {
        productsVariable.map((products,index)=>(
            <div key={index}>
                <h1>{products.title}</h1>
                <h2 className='text-success'>{products.category}</h2>
                <h2 className="text-info">{products.price} dollar</h2>
                <h2 className="text-danger">{products.rating.rate} stars</h2>
            </div>
        ))
    }

    </>
  )
}

export default SecondDataFetch