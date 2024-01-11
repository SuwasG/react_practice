import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PixabayAPI = () => {
  const[data,setData]=useState([])
  useEffect( ()=>{
    axios.get('https://pixabay.com/api/?key=34490800-1d1699cbd85dd0ae9c67f95df&q=yellow+flowers&image_type=photo&pretty=true')
    .then(res=>{
      console.log(res.data)
      setData(res.data.hits)
    })
    .catch(err=>console.log(err))
  }
  
  ,[])
  return (
    <>

  {
    data.map((picture,index)=>(
      <div key={index}>
        <h6 className='text-success'>{picture.id}</h6>
        <h1 className='text-info'>{picture.type}</h1>
        <h2 className='text-danger'>{picture.tags}</h2>
        <h2 className='text-primary'>{picture.pageURL}</h2>
        <h4>{picture.views}</h4>
        <h4>{picture.downloads}</h4>
        <h4>{picture.likes}</h4>
        <h4>{picture.comments}</h4>
        <h2>{picture.user}</h2>
        <h2>{picture.user_id}</h2>
        <hr />
      </div>
    ))
  }

    </>
  )
}

export default PixabayAPI