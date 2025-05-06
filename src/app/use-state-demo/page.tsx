import { useState } from "react"


function UserStateDemoPage() {

    const [count, setCount] = useState<number>(0)
    const [name, setName] = useState<string>('Alireza')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [items, setItems] = useState<string[]>([])

    type User = {
        name: string,
        age: number
    }
    const [user, setUser] = useState<User | null>(null)

    return (
        <div>UserStateDemoPage</div>
    )
}

export default UserStateDemoPage