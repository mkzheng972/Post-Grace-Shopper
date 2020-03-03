import React from 'react'

export default function CartItem({noodle}) {
  const {id, name, price, imageUrl} = noodle
  return (
    <div className="row my-1 text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img style={{width: '50px', height: '50px'}} src={imageUrl} />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <p>{name}</p>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <p>{price}</p>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <p>QUANTITY</p>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <p>REMOVE</p>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <p>TOTAL</p>
      </div>
    </div>
  )
}
