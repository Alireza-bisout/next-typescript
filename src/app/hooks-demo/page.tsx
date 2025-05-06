"use client"

import { useState } from "react"

function HooksDemoPage() {

    const [count, setCount] = useState<number>(0)

    return (
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
    )
}

export default HooksDemoPage