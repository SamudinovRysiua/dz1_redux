import React from 'react'

function User({ user })
{
    console.log(user);
    return (
        <div>
            <h4>name: {user.name}</h4>
            <p>email: {user.email}</p>
        </div>
    )
}

export default User