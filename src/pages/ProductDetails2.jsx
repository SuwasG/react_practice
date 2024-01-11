import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails2 = () => {
    const [product, setProduct] = useState({})
    const params = useParams()
    const id = params.productID

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(res => setProduct(res.data)).catch(err => console.log(err))
    }, [id])

    const addToCart = () => {

    }
    return (
        <>
            <ToastContainer theme='colored' position='top-center' />
            <div className="container my-5 ">
                <div className="row d-flex align-items-center shadow-lg">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} height={'400'} />
                    </div>
                    <div className="col-md-6 offset-md-2">
                        <h1>{product.title}</h1>
                        <h2>{product.category}</h2>
                        <h3>{product.price}</h3>
                        <p>{product.description}</p>
                        <small>{product.rating.rate} stars</small>
                        <small>{product.rating.count} reviews</small>

                        <button className="btn btn-primary px-2 py-1" onClick={addToCart}>Add to Cart</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductDetails2