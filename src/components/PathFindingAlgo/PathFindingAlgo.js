import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import BFS from './Algorithms/BFS';

const M = 20
const N = 50

const PathFindingAlgo = () => {
    const [grid, setGrid] = useState([])
    const [source, setSource] = useState({ x: 9, y: 5 })
    const [dest, setDest] = useState({ x: 9, y: 45 })
    const [mousePressed, setMousePressed] = useState(false)
    const [changingStartPosition, setChangingStartPosition] = useState(false);

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
        GRID[dest.x][dest.y].isFinishPoint = true

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
        const { nodesVisited, path } = BFS(grid, source, dest)
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

    // How would i change starting position
    // 1. Create a boolean state [is the starting pos being altered]
    // 2. If the start position is clicked set that bool to true
    // 3. While this bool value is true if cursor is upon any cell
    //    on mouse enter change the color to new starting point
    //    on mouse leave change the color back to original
    //    on mouse up make it the starting pos


    const handleMouseDown = (r, c) => {
        if(!changingStartPosition && r === source.x && c === source.y) {
            setChangingStartPosition(true);
        }
    }

    const handleMouseEnter = (r, c) => {
        if(changingStartPosition) {
            document.getElementById(`node-${r}-${c}`).className = 'node node-could-be-start-cell'
        }
    }

    const handleMouseLeave = (r, c) => {
        if(changingStartPosition) {
            document.getElementById(`node-${r}-${c}`).className = 'node node-unvisited'
        }
    }

    const handleMouseUp = (r, c) => {
        let newGrid = [...grid];
        newGrid[source.x][source.y].isStartingPoint = false;
        newGrid[r][c].isStartingPoint = true;
        // document.getElementById(`node-${source.x}-${source.y}`).className = 'node node-unvisited'
        document.getElementById(`node-${r}-${c}`).className = 'node node-start'
        setGrid(newGrid);
        setSource({x: r, y: c});
        setChangingStartPosition(false);
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
                            handleMouseEnter={handleMouseEnter}
                            handleMouseLeave={handleMouseLeave}
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