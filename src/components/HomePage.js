import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <h1>THIS IS HOMEPAGE!</h1>
            <Link to='/graphs'>Go To Graphs Page!</Link>
        </div>
    )
}

export default HomePage