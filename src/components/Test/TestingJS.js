const ob = {row: 1, col: 1};
const ob2 = {row: 1, col: 1};
const ob3 = {row: 2, col: 1};

// const obCompare = (ob1, ob2) => ob1.row === ob2.row && ob1.col === ob2.col

const newOb = { row: ob.row + ob3.row, col: ob.col + ob3.col }

console.log(newOb)

// console.log(obCompare(ob3, ob2))