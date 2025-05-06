"use client"

import { useState } from "react"
import UserProps from "../components/UserProps"

function HooksDemoPage() {

    const [count, setCount] = useState<number>(0)

    const user = {
        name: "Alireza",
        age: 30,
        email: "alirezabisout1145@gmail.com"
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="size-50 text-white bg-amber-600 rounded-xl flex flex-col justify-between p-5">
                <div>
                    <h1>Counter</h1>
                    <p>Current count: {count}</p>
                </div>
                <div className="flex justify-between">
                    <button className="cursor-pointer bg-amber-950 px-2 py-1 rounded-lg box" onClick={() => setCount(count + 1)}>Increment</button>
                    <button className="cursor-pointer bg-amber-950 px-2 py-1 rounded-lg box" onClick={() => setCount(0)}>Reset</button>
                </div>
            </div >

            <UserProps user={user} showEmail />
        </div>
    )
}

export default HooksDemoPage