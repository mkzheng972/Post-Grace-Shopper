import React from 'react'
import {Link} from 'react-router-dom'

export default function UserList({users}) {
  // console.log('in the userlist', users)
  return (
    // <div>{users.map(user => <SingleUser key={user.id} user={user} />)}</div>
    <div>
      {users.map(user => (
        <div className="single-user" key={user.id}>
          <Link to={`/users/${user.id}`}>
            <h1>{user.email}</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}
