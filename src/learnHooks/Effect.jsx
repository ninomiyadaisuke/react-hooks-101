import React, { useState, useEffect } from 'react'

const Effect = (props) => {
    const [state, setState] = useState(props)
    const { name, price } = state

    useEffect(() => {
        console.log('this is like coponentDidMount or componentDidUpdate');
    })
    
    useEffect(() => {
        console.log('this is like coponentDidMount');
    }, [])

    useEffect(() => {
        console.log('this callback is for name only.');
    }, [name])

    return (
        <>
            <p>現在の{name}は、{price}円です</p>
            <button onClick={() => setState({...state, price: price + 1})}>+1</button>
            <button onClick={() => setState({...state, price: price - 1})}>-1</button>
            <button onClick={() => setState(props)}>Reset</button>
            <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
        </>
    )
}

Effect.defaultProps = {
    name: "",
    price: 1000
}

export default Effect
