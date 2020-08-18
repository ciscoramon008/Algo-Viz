import React, { useState, useEffect } from 'react'
import Cell from './Cell'

function TestColoring() {
    const SRC = {x: 9, y: 19};
    const M = 20
    const N = 40

    const [grid, setGrid] = useState([])

    useEffect(() => {
        setGrid(getGrid())
    }, [])

    // const obComp = (ob1, ob2) => ob1.x === ob2.x && ob2.y === ob1.y

    const getGrid = () => {
        let GRID = []

        for(let i=0; i<M; i++) {
            let row = []
            for(let j=0; j<N; j++) {
                row.push(1)
            }
            GRID.push(row);
        }

        return GRID
    }

    const clearBoard = () => {
        setGrid(getGrid())
        for(let i=0; i<M; i++) {
            for(let j=0; j<N; j++) {
                document.getElementById(`node-${i}-${j}`).className = 'node node-unvisited'
            }
        }
    }

    const isSafe = ({x, y}) => x >=0 && x < M && y >= 0 && y < N

    const handleChangeAdjacentColor = src => {
        // document.getElementById(`node-10-20`).className = 'node node-visited'
        const d = [ { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 } ]

        let a = []
        let q = [src]

        while(q.length) {
            const src = q.shift()

            d.forEach(dir => {
                const newDir = { x: src.x+dir.x, y: src.y+dir.y }
                if(isSafe(newDir) && grid[newDir.x][newDir.y]) {
                    a.push(newDir)
                    q.push(newDir)
                    grid[newDir.x][newDir.y] = 0;
                }
            })
        }
        
        console.log(a)

        for(let i=0; i<a.length; i++) {
            setTimeout(() => {
                document.getElementById(`node-${a[i].x}-${a[i].y}`).className = 'node node-visited'
            }, i * 5);
        }
    }

    return (
        <div className='dark-mode' style={{ height: '100vh' }}>
            <table>
                <tbody>
                    {grid.map((row, i) => 
                    <tr key={i}>
                        {row.map((cell, j) => <Cell key={`${i}-${j}`} value={cell} row={i} col={j} />)}
                    </tr>)}
                </tbody>
            </table>
            <button className='btn btn-secondary' onClick={() => handleChangeAdjacentColor(SRC)}>Color Adjacent</button>
            <button className='btn btn-default' onClick={clearBoard}>Clear Board</button>
        </div>
    )
}

export default TestColoring