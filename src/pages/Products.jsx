import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards'

const Products = () => {
    const [products,setProducts]=useState([])
    const [limit,setLimit]=useState(8)
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await  axios.get('https://fakestoreapi.com/products')
                console.log(response.data)
                setProducts(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData()
      
    })
  return (
    <>

    <div className="container-fluid my-5">
        <div className="row d-flex ">
            {
                products.slice(0,limit).map((productharu,index)=>(
                    <Cards jptPropsKoName={productharu} key={index}/>
                ))
            }
      
            <div className="col-4 offset-4">
                {
                    limit<products.length &&
                    <button className="btn btn-success px-2 py-1" onClick={()=>setLimit(limit+4)}>Load More</button>
                }
                
         </div>
           
        </div>
    </div>

    </>
  )
}

export default Products