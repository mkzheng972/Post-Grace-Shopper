import React from 'react'
import {connect} from 'react-redux'
import {removeFromCart, countChange} from '../store/cart'

function CartItem(props) {
  const {noodle, removeFromCart, countChange} = props
  const {id, name, price, imageUrl, total} = noodle
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
        <input type="number" />
        {/* onChange={() => countChange(id, count)} */}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <button
          onClick={() => removeFromCart(id)}
          type="button"
          className="btn btn-danger"
        >
          {' '}
          X{' '}
        </button>
      </div>
      <div className="col-10 mx-auto col-lg-2">{total}</div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(removeFromCart(id)),
  countChange: (id, count) => dispatch(countChange(id, count))
})

export default connect(null, mapDispatchToProps)(CartItem)
