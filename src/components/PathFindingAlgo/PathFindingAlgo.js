import React, { useState, useEffect } from 'react'
import Cell from './Cell'
import BFS from './Algorithms/BFS';
import useOption from '../Hooks/useOption';
import Navbar from '../Navbar';

const M = 20
const N = 60

const PathFindingAlgo = () => {
    const [currentAlgo, setCurrentAlgo] = useOption('Breadth First Search')
    const [grid, setGrid] = useState([])
    const [source, setSource] = useState({ x: 9, y: 5 })
    const [dest, setDest] = useState({ x: 9, y: 45 })
    const [mousePressed, setMousePressed] = useState(false)
    const [changingStartPosition, setChangingStartPosition] = useState(false);
    const [changingEndPosition, setChangingEndPosition] = useState(false);

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
    
        GRID[9][5].isStartingPoint = true
        GRID[9][45].isFinishPoint = true

        return GRID
    }

    const clearBoard = () => {
        let newGrid = [...getGrid()]
        newGrid[9][5].isStartingPoint = false;
        newGrid[9][45].isFinishPoint = false;
        newGrid[source.x][source.y].isStartingPoint = true;
        newGrid[dest.x][dest.y].isFinishPoint = true
        setGrid(newGrid)

        for(let i=0; i<M; i++) {
            for(let j=0; j<N; j++) {
                if(i === source.x && j === source.y) document.getElementById(`node-${i}-${j}`).className = 'node node-start'
                else if(i === dest.x && j === dest.y) document.getElementById(`node-${i}-${j}`).className = 'node node-finish'
                else document.getElementById(`node-${i}-${j}`).className = 'node node-unvisited'
            }
        }
    }

    const visualizeAlgorithm = () => {
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

    const handleMouseDown = (r, c) => {
        if(!changingStartPosition && r === source.x && c === source.y) {
            setChangingStartPosition(true);
        } else if(!changingEndPosition && r === dest.x && c === dest.y) {
            setChangingEndPosition(true);
        } else {
            setMousePressed(true);
        }
    }

    const handleMouseEnter = (r, c) => {
        if(changingStartPosition) {
            document.getElementById(`node-${r}-${c}`).className = 'node node-could-be-start-cell'
        } else if(changingEndPosition) {
            document.getElementById(`node-${r}-${c}`).className = 'node node-could-be-end-cell'
        }
    }

    const handleMouseOver = (r, c) => {
        if(mousePressed) {
            document.getElementById(`node-${r}-${c}`).className = 'node node-unsafe'
        }
    }

    const handleMouseLeave = (r, c) => {
        if(changingStartPosition || changingEndPosition) {
            document.getElementById(`node-${r}-${c}`).className = 'node node-unvisited'
        }
    }

    const handleMouseUp = (r, c) => {
        let newGrid = [...grid];

        if(changingStartPosition) {
            newGrid[source.x][source.y].isStartingPoint = false;
            newGrid[r][c].isStartingPoint = true;
            document.getElementById(`node-${r}-${c}`).className = 'node node-start'
            setSource({x: r, y: c});
            setChangingStartPosition(false);
        } else if(changingEndPosition) {
            newGrid[dest.x][dest.y].isFinishPoint = false;
            newGrid[r][c].isFinishPoint = true;
            document.getElementById(`node-${r}-${c}`).className = 'node node-finish'
            setDest({x: r, y: c});
            setChangingEndPosition(false);
        } else {
            for(let i=0; i<newGrid.length; i++) {
                for(let j=0; j<newGrid[0].length; j++) {
                    if((document.getElementById(`node-${i}-${j}`).classList).contains('node-unsafe')) {
                        newGrid[i][j].safeToVisit = false;
                    }
                }
            }
            setMousePressed(false);
        }
        setGrid(newGrid);
    }

    return (
        <div className='dark-mode' style={{ height: '100vh' }}>
            <Navbar
                currentValue={currentAlgo}
                setCurrentValue={setCurrentAlgo}
                visualizeAlgorithm={visualizeAlgorithm}
                clearBoard={clearBoard}
            />
            <table>
                <tbody>
                    {grid.map((row, i) => 
                    <tr key={i}>
                        {row.map((cell, j) => <Cell
                            key={`${i}-${j}`}
                            handleMouseDown={handleMouseDown}
                            handleMouseEnter={handleMouseEnter}
                            handleMouseOver={handleMouseOver}
                            handleMouseLeave={handleMouseLeave}
                            handleMouseUp={handleMouseUp}
                            {...cell} 
                        />)}
                    </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default PathFindingAlgo