import React from 'react'
import { useState } from 'react'
function DecreaseCount() {

    const [count, setCount] = useState(0)

    function decrease() {
        setCount((state) => {
            return state -= 1;
        });
    }

    return (
        <div>
            <button onClick={decrease} className='btn btn-danger'>Decrease</button>
            <p>{count}</p>
        </div>
    )
}

export default DecreaseCount