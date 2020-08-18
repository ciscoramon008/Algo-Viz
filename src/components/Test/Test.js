import React, { useState, useEffect } from 'react'
import BFS from './BFS'
import TestCell from './TestCell'

// WHAT DOES ONE CELL HAVE

// 1 1 1 1 1
// 1 1 1 1 1
// 1 1 1 1 1
// 1 1 1 1 1
// 1 1 1 1 1

// ONE CELL MUST HAVE -
// 1. BOOLEAN TO KNOW IF IT THE STARTING POINT
// 2. BOOLEAN TO KNOW IF IT THE ENDING POINT
// 3. WEIGHT

function Test() {
    const ROWS = 5
    const COLS = 5
    const START_ROW = 0
    const START_COL = 0
    const END_ROW = 4
    const END_COL = 4

    const getGrid = (ROWS, COLS) => {
        let grid = []

        for(let i=0; i<ROWS; i++) {
            let row = []
            for(let j=0; j<COLS; j++) {
                const ob = { 
                    x: i,
                    y: j,
                    from: {x: -1, y: -1},
                    visited: false,
                    isStartingPoint: false,
                    isFinishPoint: false,
                    safeToVisit: true
                }
                row.push(ob);
            }
            grid.push(row);
        }

        grid[START_ROW][START_ROW].isStartingPoint = true;
        grid[END_ROW][END_ROW].isFinishPoint = true;

        // grid[3][2].safeToVisit = false
        // grid[3][3].safeToVisit = false
        // grid[3][4].safeToVisit = false
        grid[4][3].safeToVisit = false

        return grid;
    }

    const [grid, setGrid] = useState([]);

    useEffect(() => {
        setGrid(getGrid(ROWS, COLS));
    }, [])

    const handleFindPath = () => {
        let src = { row: START_ROW, col: START_COL }
        const dest = { row: END_ROW, col: END_COL }

        //IMPLEMENT BFS
        console.log(BFS(grid, src, dest))

        // let q = {row: 3, col: 3}

        // setGrid(getGrid(ROWS, COLS));
    }

    return (
        <div className='dark-mode'>
            <div className='d-flex justify-content-center'>
                <table>
                    <tbody>
                        {grid.map((row, i) => <tr key={i}>{row.map((cell, j) => <TestCell key={`${i}-${j}`}  {...cell} />)}</tr>)}
                    </tbody>
                </table>
            </div>
            <button className='btn btn-secondary' onClick={handleFindPath}>Find Path</button>
        </div>
    )
}

export default Test