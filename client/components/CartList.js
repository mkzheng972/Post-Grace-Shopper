import React from 'react'
import CartItem from './CartItem'
export default function CartList({cart}) {
  return (
    <div>
      {cart.map(noodle => {
        return <CartItem key={noodle.id} noodle={noodle} />
      })}
    </div>
  )
}
