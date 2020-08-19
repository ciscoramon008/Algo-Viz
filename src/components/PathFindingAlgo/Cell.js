import React from 'react'
import './Cell.css'

function Cell({ row, col, visited, isStartingPoint, isFinishPoint, safeToVisit, toggleCell, handleMouseDown, handleMouseOver, handleMouseUp }) {
    let classToAdd;

    if(isStartingPoint) classToAdd = 'node node-start'
    else if(isFinishPoint) classToAdd = 'node node-finish'
    else classToAdd = 'node node-unvisited'
    
    return (
        <td
            id={`node-${row}-${col}`}
            className={classToAdd}
            style={{ border: '1px solid black' }}
            // onClick={() => toggleCell(row, col)}
            onMouseDown={() => handleMouseDown(row, col)}
            onMouseOver={() => handleMouseOver(row, col)}
            onMouseUp={() => handleMouseUp(row, col)}
        />
    )
}

export default Cell