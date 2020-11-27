import React, { useState } from 'react'

const State3 = (props) => {
    const [state, setState] = useState(props)
    const { name, price } = state
    

    return (
        <>
            <p>現在の{state.name}は、{price}円です</p>
            <button onClick={() => setState({...state, price: price + 1})}>+1</button>
            <button onClick={() => setState({...state, price: price - 1})}>-1</button>
            <button onClick={() => setState(props)}>Reset</button>
            <input value={name} onChange={e => setState({...state, name: e.target.value})}/>
        </>
    )
}

State3.defaultProps = {
    name: "",
    price: 1000
}

export default State3
