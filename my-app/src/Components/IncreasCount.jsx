import React from 'react'
import { useState } from 'react'

function IncreasCount() {

    const [count, setCount] = useState(0)

    function increase() {
        setCount((state) => {
            return state += 1;
        });
    }


    return (


        <div>
            <button onClick={increase} className="btn btn-success">Increase</button>
            <div className="rs">{count}</div>
        </div>

    )
}

export default IncreasCount