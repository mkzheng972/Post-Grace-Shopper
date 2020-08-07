import React from 'react'
import {Link} from 'react-router-dom'

const SingleNoodleItem = ({noodle, user, deleteNoodle, addToCart, cart}) => {
  return (
    <div
      className="card text-center single-noodle-item-box"
      style={{width: '20rem', height: '30rem'}}
      key={noodle.id}
    >
      <Link to={`/noodles/${noodle.id}`}>
        <img
          className="card-img-top img-fluid"
          style={{height: '280px', padding: '10px'}}
          src={noodle.imageUrl}
        />
      </Link>
      <div className="card-content">
        <Link
          to={`/noodles/${noodle.id}`}
          style={{textDecoration: 'none', color: 'inherit'}}
        >
          <h4 className="card-title">{noodle.name}</h4>
        </Link>
        <div className="itemtype-price">
          <span className="card-text">
            {noodle.noodleType.charAt(0).toUpperCase() +
              noodle.noodleType.slice(1)}
          </span>
          <span className="card-text">${noodle.price / 100}</span>
        </div>
        <p className="card-text">{noodle.description}</p>
        <div className="add-to-cart" onClick={() => addToCart(noodle, cart)}>
          Add To Cart
        </div>
      </div>
      {user.isAdmin ? (
        <div display="card text-center">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => deleteNoodle(noodle.id)}
          >
            Remove Noodle
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default SingleNoodleItem
