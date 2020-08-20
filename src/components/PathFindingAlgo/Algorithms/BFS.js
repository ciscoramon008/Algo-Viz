const obComp = (ob1, ob2) => ob1.x === ob2.x && ob2.y === ob1.y
const d = [ { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 0, y: -1 } ]
const isSafe = ({x, y}) => x >=0 && x < 20 && y >= 0 && y < 60

const BFS = (grid, start, end) => {
    let a = []
    // let path = []
    let q = [start]
    grid[start.x][start.y].visited = true

    while(q.length) {
        const src = q.shift()

        for(const dir of d) {
            const newDir = { x: src.x+dir.x, y: src.y+dir.y }
            if(obComp(newDir, end)) {
                grid[end.x][end.y].from = src;
                return { isPathFound: true, nodesVisited: a, path: getPath(grid, start, end) }
            }
            if(isSafe(newDir) && !grid[newDir.x][newDir.y].visited && grid[newDir.x][newDir.y].safeToVisit) {
                a.push(newDir)
                q.push(newDir)
                grid[newDir.x][newDir.y].from = src
                grid[newDir.x][newDir.y].visited = true
            }
        }
    }

    return { isPathFound: false, nodesVisited: a, path: [] }
}

const getPath = (grid, src, dest) => {
    let path = []

    while(!obComp(grid[dest.x][dest.y].from, {x: -1, y: -1})) {
        path.push(grid[dest.x][dest.y].from);
        dest = grid[dest.x][dest.y].from;
    }

    return path;
}


export default BFS