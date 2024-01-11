import React from 'react'
import { Link } from 'react-router-dom'

const Cards = (propsPathako) => {
  const {image,id,title,category,price}=propsPathako.jptPropsKoName
  return (
    <>

    <div className="col-md-3">
      <div className="card shadow">
        {/* <div className="card-image"> */}
          <img src={image} alt={title}/>
        {/* </div> */}
        <div className="card-body">
          <h5>{id}</h5>
          <h2 className="card-title">{title.slice(0,20)}..</h2>
          <p>{category} </p>
          <h2>{price}</h2>
          <Link to={`/productdetails/${id}`} className='btn btn-success px-2 py-1 text-decoration-none'>View Details</Link>
        </div>
      </div>

      </div>

    </>
  )
}

export default Cards