import React from 'react'

function Dropdown({ currentValue, setCurrentValue }) {
    return (
        <div className='d-flex align-items-center'>
            <span className='text-nowrap mr-10'>Select Algorithm:</span>
            <select className='form-control' value={currentValue} onChange={setCurrentValue}>
                <option value='A* Algorithm'>A* Algorithm</option>
                <option value="Dijktra's Algorithm">Dijktra's Algorithm</option>
                <option value='Greedy Method'>Greedy Method</option>
                <option value='Breadth First Search'>Breadth First Search</option>
                <option value='Depth First Search'>Depth First Search</option>
            </select>
        </div>
    )
}

export default Dropdown