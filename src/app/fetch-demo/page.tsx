"use client"

import { useEffect, useState } from "react"

type User = {
    id: number
    name: string
    email: string
}

function FetchDemoPage() {


    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then((data: User[]) => {
                setUsers(data)
                setLoading(false)
            })
    }, [])


    if (loading) return <p>Loading...</p>

    return (
        <div>
            <h1>Fetched Users</h1>
            {
                users.map((user) => (
                    <div key={user.id}>
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default FetchDemoPage