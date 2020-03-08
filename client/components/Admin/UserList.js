import React from 'react'
import SingleUser from './SingleUser'

export default function UserList({users}) {
  return (
    <div>{users.map(user => <SingleUser key={user.id} user={user} />)}</div>
  )
}
