import React from 'react'
import { NavLink } from 'react-router-dom'
import Dropdown from './Dropdown'

function Navbar({ currentValue, setCurrentValue, visualizeAlgorithm, clearBoard }) {
    return (
        <nav className='navbar'>
            <NavLink className='navbar-brand text-nowrap' to='/'>Path Finding Visualization</NavLink>
            <div style={{
                width: '80%',
                display: 'flex',
                justifyContent: 'space-evenly'
            }}>
                <Dropdown currentValue={currentValue} setCurrentValue={setCurrentValue} />
                <button className='btn btn-primary btn-lg' onClick={visualizeAlgorithm}>Visualize {currentValue}</button>
                <button className='btn btn-success' onClick={clearBoard}>Clear Board</button>
                <button className='btn btn-secondary'>Create Maze</button>
            </div>
        </nav>
    )
}

export default Navbar