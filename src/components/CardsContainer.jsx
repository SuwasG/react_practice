import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const CardsContainer = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      try{
        const response=await axios.get('https://fakestoreapi.com/products/category/electronics')
        console.log(response.data)
        setData(response.data)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchData()
  },[])
  return (
    <>

  <div className="container-fluid my-5">
    <div className="row d-flex align-items-center">

      {
        data.slice(0,8).map((products,index)=>(
          <Cards jptPropsKoName={products} key={index}/>
        ))
      }

    </div>
  </div>


    </>
  )
}

export default CardsContainer