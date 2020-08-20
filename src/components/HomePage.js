import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='dark-mode' style={{ height: '100vh' }}>
            <h1 className='text-white'>WELCOME TO ALGO-VIZ</h1>
            <p className='font-size-22'>Visulize core algorithms used in all over the programming world.</p>
            <Link className='btn btn-success btn-lg' to='/path-finding-visualization'>Path Finding visualization</Link>
            <Link className='btn btn-success btn-lg' to='/dropdown-demo'>Dropdown Demo</Link>
        </div>
    )
}

export default HomePage