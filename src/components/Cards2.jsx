import React from 'react'
import { Link } from 'react-router-dom'

const Cards2 = (props) => {
    const {id, price, category, title, rating,description, image}=props.item
  return (
    <>
        <div className="col-md-3 col-sm-6 col-8 offset-2 offset-sm-0 ">
                <div className="card shadow mb-2">
                    <img src={image} alt={title} height={'250'} />
                    <div className="card-body">
                        <h1 className="card-title">{title.slice(0,15)}...</h1>
                        <h2>{category}</h2>
                        <h2>{price} $</h2>
                        <h3>{rating.rate} stars</h3>
                        <h3>{rating.count} reviews</h3>

                        <Link to={`/pd2/${id}`} className='btn btn-success px-2 py-1 '>View Details</Link>
                    </div>
                </div>
        </div>

    </>
  )
}

export default Cards2