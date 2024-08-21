import React, { useState } from 'react'

function Counter() {
    let [Counter, setCounter] = useState(15)

    const addValue = () => {
        setCounter(Counter+1)
    }

    const removeValue = () =>{
        setCounter(Counter-1)
    }
  return (
    <div>
        <h1>Hello vikalp your counter valur is here</h1>
        <h2>Counter value:{Counter}</h2>

        <button
        onClick={addValue}
        >Add value {Counter}</button>
        <br/>
        <button
        onClick={removeValue}
        >remove value {Counter}</button>
        <p>footer:{Counter}</p>

    </div>
    
  )
}

export default Counter
