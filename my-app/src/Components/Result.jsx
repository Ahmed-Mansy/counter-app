import React from 'react'
import IncreasCount from './IncreasCount' 
function Result(props) {
    console.log(props)
    return (
        <div className="res">
            <h3>Count is: {props.count}</h3>
        </div>)
}

export default Result