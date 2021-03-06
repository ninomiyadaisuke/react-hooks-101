import React, { useState } from 'react'


const State = () => {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count +1)
    const decrement = () => setCount(count -1)
    const increment2 = () => setCount((previousCount) => previousCount + 1)
    const decrement2 = () => setCount((previousCount) => previousCount - 1)
    const reset = () => setCount(0)
    const double = () => setCount(count * 2)
    const division = () => setCount(previousCount => {
        if (previousCount % 3 === 0) {
            return previousCount / 3
        } else {
            return previousCount
        }
    })
        


    return (
        <>
            <div>count: {count}</div>
            <div>
                <button onClick={increment}>+1</button>
                <button onClick={decrement}>-1</button>
            </div>
            <div>
                <button onClick={increment2}>+1</button>
                <button onClick={decrement2}>-1</button>
            </div>
            <div>
                <button onClick={reset}>Reset</button>
                <button onClick={double}>✖️２</button>
                <button onClick={division}>3の倍数の時だけ割る</button>
            </div>
        </>
        
    )
}

export default State
