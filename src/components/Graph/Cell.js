import React from 'react'
import './Cell.css'

const Cell = ({ src, dest }) => {
    return (
        <>
            {src && <td className={`bg-primary grid-cell`}></td>}
            {!src && !dest && <td className={`bg-secondary grid-cell`}></td>}
            {dest && <td className={`bg-success grid-cell`}></td>}
        </>
    )
}

export default Cell