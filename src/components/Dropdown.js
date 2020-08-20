import React from 'react'

function Dropdown({ currentValue, setCurrentValue }) {
    return (
        <div>
            <h1>{currentValue}</h1>
            <select value={currentValue} onChange={setCurrentValue}>
                <option value='value-1'>Value 1</option>
                <option value='value-2'>Value 2</option>
                <option value='value-3'>Value 3</option>
                <option value='value-4'>Value 4</option>
                <option value='value-5'>Value 5</option>
            </select>
        </div>
    )
}

export default Dropdown