const obCompare = (ob1, ob2) => ob1.row === ob2.row && ob1.col === ob2.col
const isSafe = (x, y) => x >=0 && x < 5 && y >= 0 && y < 5

const BFS = (grid, src, dest) => {
    const d = [ { row: 1, col: 0 }, { row: 0, col: 1 }, { row: -1, col: 0 }, { row: 0, col: -1 } ]
    let q = []

    q.push(src);
    grid[src.row][src.col].visited = true;

    while(q.length) {
        src = q.pop();

        if(obCompare(src, dest)) return true

        for(let i=0; i<4; i++) {
            const newDir = { row: src.row + d[i].row, col: src.col + d[i].col }
            if(isSafe(newDir.row, newDir.col) && !grid[newDir.row][newDir.col].visited && grid[newDir.row][newDir.col].safeToVisit) {
                grid[newDir.row][newDir.col].visited = true;
                q.push(newDir);
            }
        }
    }
    
    return false;
}

export default BFS