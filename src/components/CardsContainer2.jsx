import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Cards2 from './Cards2'

const CardsContainer2 = () => {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(`https://fakestoreapi.com/products`)
                console.log(response.data)
                setProducts(response.data)

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
                    products.map((saaman,index)=>(
                        <Cards2 item={saaman} key={index}/>
                    ))
                }
            </div>
        </div>


    </>
  )
}

export default CardsContainer2