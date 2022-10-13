import React from 'react'
import UserCard from './UserCard';

const UserList = ({users}) => {
  return (
    <div>
      {users.map(
        user=><UserCard user={user} key={user.id}/>
      )}
    </div>
  )
}

export default UserList