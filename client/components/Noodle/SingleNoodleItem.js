import React from 'react'
import {Link} from 'react-router-dom'

export const SingleNoodleItem = ({noodle, user, deleteNoodle}) => {
  return (
    <div
      className="card text-center"
      style={{width: '20rem', height: '30rem', margin: '10px'}}
      key={noodle.id}
    >
      <Link to={`/noodles/${noodle.id}`}>
        <img
          className="card-img-top img-fluid"
          style={{height: '300px'}}
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
        <div className="noodle-type-price">
          <span className="card-text">
            {noodle.noodleType.charAt(0).toUpperCase() +
              noodle.noodleType.slice(1)}
          </span>
          <span className="card-text">${noodle.price / 100}</span>
        </div>
        <p className="card-text">{noodle.description}</p>
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
