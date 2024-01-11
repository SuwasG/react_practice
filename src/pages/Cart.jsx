import React, { useState, useEffect, Fragment } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { FaTrash } from "react-icons/fa";
const Cart = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartItem')) //cartItem is the key from localstorage.
    setItems(cartData)
  }, [])
  return (
    <>

      <ToastContainer theme='colored' position='top-center' autoClose='2000' />

      <div className="container">
        <div className="row d-flex justify-content-center my-4">
          {
            items && items.length === 0 ?
              <h2 className='text-center text-danger'>Your cart is empty.</h2> :
              (
                <Fragment>
                  {/* dherai lekhnu parne vayera Fragment chainxa. mathi import vayeko hunuparyo. */}

                  <div className="col-md-8 shadow">
                  <h2 className="text-center text-success">Your Cart Items:</h2>
                      {items.map((item,i)=>(
                        <Fragment key={i}>
                          <hr />
                          <div className="row d-flex align-items-center">
                            <div className="col-2">
                              <img src={item.image} alt={item.title} width={50}/>  
                              {/* item from local storage. */}
                            </div>
                            <div className="col-3">
                              <strong>{item.title}</strong>
                            </div>
                            <div className="col-2 text-warning">
                              ${item.price}
                            </div>
                            <div className="col-3">
                              <div className="d-flex align-items-center">
                                <button className="btn btn-danger">-</button>
                                &nbsp;&nbsp;{item.quantity} &nbsp;&nbsp;
                                <button className="btn btn-success">+</button>
                              </div>
                            </div>
                            <div className="col-1">
                              <button className="btn btn-danger">
                                <FaTrash/>
                              </button>
                            </div>
                          </div>
                        </Fragment>
                      ))}
                  </div>
                  <div className="col-md-3 offset-md-1">

                  </div>

                </Fragment>
              )
          }
        </div>
      </div>

    </>
  )
}

export default Cart