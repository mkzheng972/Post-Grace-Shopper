import React from 'react'

export default function SingleUser({user}) {
  return (
    <div>
      <p>Email: {user.email}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      {user.imageUrl ? (
        <img src={user.imageUrl} width="230" height="230" />
      ) : (
        <img
          src="https://i.stack.imgur.com/l60Hf.png"
          width="230"
          height="230"
        />
      )}
    </div>
  )
}
