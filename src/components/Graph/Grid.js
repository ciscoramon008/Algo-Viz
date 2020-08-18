import React from 'react'
import Cell from './Cell'

function Grid() {
    const row_size = 20
    const col_size = 55

    let board = []
    for(let i=0; i<row_size; i++) {
        let row = []
        for(let j=0; j<col_size; j++) {
            const currentCell = {
                i,
                j,
                src: i === 10 && j === 10,
                dest: i === 10 && j === 40
            }
            row.push(currentCell);
        }
        board.push(row);
    }

    // start cell have value 0
    // board[0][2] = 0

    // destination cell have value 2
    // board[16][45] = 2

    return (
        <div>
            <button className='btn btn-primary'>Visualize</button>
            <table>
                {board.map(row => 
                    <tr>{row.map(cell => <Cell {...cell} />)}</tr>
                )}
            </table>
        </div>
    )
}

export default Grid