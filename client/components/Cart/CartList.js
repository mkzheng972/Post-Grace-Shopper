import React from 'react'
import CartItem from './CartItem'
export default function CartList({noodles}) {
  return (
    <div>
      {noodles.map(noodle => {
        return <CartItem key={noodle.id} noodle={noodle} />
      })}
    </div>
  )
}
