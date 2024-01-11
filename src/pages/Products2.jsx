import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Cards2 from '../components/Cards2'

const Products2 = () => {
    const [products, setProducts]=useState([])
    const [limit, setLimit] =useState(8)
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get(`https://fakestoreapi.com/products`)
                console.log(response.data)
                setProducts(response.data)
            }
            catch(err){
                console.log(err)
            }
        }
        fetchData()
    })
  return (
    <>

    <div className="container-fluid my-5">
        <div className="row d-flex align-items-center">
            {
                products.slice(0,limit).map((saaman,index)=>(
                    <Cards2 item={saaman} key ={index}/>
                ))
            }
            <div className="mx-auto">
                <div className="col-2 offset-5">
                    {
                       limit<products.length &&  
                      <button className="btn btn-primary px-2 py-1" onClick={()=>setLimit(limit+4)}>Load More</button>
                    }
                 
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Products2