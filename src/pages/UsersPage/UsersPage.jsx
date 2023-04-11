import React, { useEffect, useState } from 'react'
import User from '../../components/User/User'

function UsersPage()
{
    
    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState('')

    const getusers = async () =>
    {
    try {
      setLoader(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        console.log(response);
        
        if (response.status >= 200 && response.status <= 204) { 
            const usersResponse = await response.json()
            setUsers(usersResponse)
        }
        else throw `Error: ${response.status}`
    } catch (error) {
        setError(error)
        setPhotos([])
    } finally {
        setLoader(false)
    }
    }

    useEffect(() =>
    {
        getusers()
    }, [])
    
    return (
        
        <>
            <h2>Users page</h2>
            {loader ? <h3>Loading...</h3>
                :
                error ? <h3>{error} not found error</h3>
                    :
                    <ul>
                        {
                            users.slice(0, 10).map(user => <li key={user.id}><User user={user} /></li>)
                        }
                    </ul>
            }
        </>
    )
}

export default UsersPage