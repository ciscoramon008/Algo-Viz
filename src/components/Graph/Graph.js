import React from 'react'
import Grid from './Grid'
import { Link } from 'react-router-dom'

function Graph() {
    return (
        <div className='dark-mode' style={{ height: '100vh' }}>
            <h1>Path finding Algorithm visualizer</h1>
            <Link className='btn btn-lg' to='/'>Home</Link>
            <Grid />
        </div>
    )
}

export default Graph