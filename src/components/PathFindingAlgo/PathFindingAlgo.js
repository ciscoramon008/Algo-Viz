import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import BFS from './Algorithms/BFS';

// const SRC = {x: 9, y: 5};
const DEST = {x: 9, y: 45};
const M = 20
const N = 50

const PathFindingAlgo = () => {
    const [grid, setGrid] = useState([])
    const [source, setSource] = useState({ x: 9, y: 5 })
    const [mousePressed, setMousePressed] = useState(false)

    useEffect(() => {
        setGrid(getGrid())
    }, [])
    
    const getGrid = () => {
        let GRID = []
            
        for(let i=0; i<M; i++) {
            let row = []
            for(let j=0; j<N; j++) {
                row.push({
                    row: i,
                    col: j,
                    visited: false,
                    isStartingPoint: false,
                    isFinishPoint: false,
                    safeToVisit: true,
                    from: {x: -1, y: -1},
                })
            }
            GRID.push(row)
        }
    
        GRID[source.x][source.y].isStartingPoint = true
        GRID[DEST.x][DEST.y].isFinishPoint = true

        return GRID
    }

    // const clearBoard = () => {
    //     setGrid(getGrid())
    //     for(let i=0; i<M; i++) {
    //         for(let j=0; j<N; j++) {
    //             document.getElementById(`node-${i}-${j}`).className = 'node node-unvisited'
    //         }
    //     }
    // }

    const handleChangeAdjacentColor = () => {
        const { nodesVisited, path } = BFS(grid, source, DEST)
        // console.log(BFS(grid, SRC, DEST))
        // console.log(path)
        path.pop()

        for(const i in nodesVisited) {
            if(i === String(nodesVisited.length-1) && path.length) {
                setTimeout(() => {
                    for(const j in path) {
                        setTimeout(() => {
                            document.getElementById(`node-${path[j].x}-${path[j].y}`).className = 'node node-backtrack'
                        }, j * 50);
                    }
                }, i * 5);
            } else {
                setTimeout(() => {
                    document.getElementById(`node-${nodesVisited[i].x}-${nodesVisited[i].y}`).className = 'node node-visited'
                }, i * 5);
            }
        }
    }

    const handleMouseDown = (r, c) => {
        // let newGrid = [...grid];
        // newGrid[source.x][source.y].isStartingPoint = false;
        // newGrid[r][c].isStartingPoint = true;
        // document.getElementById(`node-${source.x}-${source.y}`).className = 'node node-unvisited'
        // document.getElementById(`node-${r}-${c}`).className = 'node node-start'
        // setGrid(newGrid);
        // setSource({x: r, y: c});
        if(!mousePressed) {
            setMousePressed(true);
        }
    }

    const handleMouseUp = (r, c) => {
        let newGrid = [...grid];
        // newGrid[source.x][source.y].isStartingPoint = false;
        newGrid[r][c].isStartingPoint = true;
        // document.getElementById(`node-${source.x}-${source.y}`).className = 'node node-unvisited'
        document.getElementById(`node-${r}-${c}`).className = 'node node-start'
        setGrid(newGrid);
        setSource({x: r, y: c});
        setMousePressed(false);
    }

    const handleMouseOver = (r, c) => {
        if(mousePressed) {
            // document.getElementById(`node-${source.x}-${source.y}`).className = 'node node-unvisited'
            document.getElementById(`node-${r}-${c}`).className = 'node node-start'
            // setSource({ x: r, y: c })
        }
    }


    const toggleCell = (r, c) => {
        // let newGrid = [...grid]
        // newGrid[r][c].safeToVisit = false;
        // document.getElementById(`node-${r}-${c}`).className = 'node node-unsafe'
        // setGrid(newGrid);
    }

    return (
        <div className='dark-mode' style={{ height: '100vh' }}>
            <table>
                <tbody>
                    {grid.map((row, i) => 
                    <tr key={i}>
                        {row.map((cell, j) => <Cell
                            key={`${i}-${j}`}
                            toggleCell={toggleCell}
                            handleMouseDown={handleMouseDown}
                            handleMouseOver={handleMouseOver}
                            handleMouseUp={handleMouseUp}
                            {...cell} 
                        />)}
                    </tr>)}
                </tbody>
            </table>
            <button className='btn btn-secondary' onClick={handleChangeAdjacentColor}>Color Adjacent</button>
            {/* <button className='btn btn-default' onClick={clearBoard}>Clear Board</button> */}
        </div>
    )
}

export default PathFindingAlgo