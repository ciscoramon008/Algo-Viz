import React from 'react'

function TestCell({ x, y, visited, isStartingPoint, isFinishPoint }) {
    let ClassName;

    if(visited) {
        ClassName = 'bg-success'
    } else if(isFinishPoint) {
        ClassName = 'bg-danger'
    } else if(isStartingPoint) {
        ClassName = 'bg-secondary'
    } else {
        ClassName = 'bg-primary'
    }

    return (
        <td 
            className={`w-50 h-50 ${ClassName}`}
            style={{ border: '1px solid black' }}
            id={`cell-${x}-${y}`}
        >{x}-{y}</td>
    )
}

export default TestCell