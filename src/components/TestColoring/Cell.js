import React from 'react'
import './Cell.css'

function Cell({ value, row, col }) {
    return (
        <td
            id={`node-${row}-${col}`}
            className={`node ${value === 1 ? 'node-unvisited' : 'node-unvisited'}`}
            style={{ border: '1px solid black' }}
        />
    )
}

export default Cell