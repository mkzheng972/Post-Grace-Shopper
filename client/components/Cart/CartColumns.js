import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p>NOODLES</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>NAME</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>PRICE</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>QUANTITY</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>REMOVE</p>
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <p>SUBTOTAL</p>
        </div>
      </div>
    </div>
  )
}
