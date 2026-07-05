// Solution without meeting the reduce and concat requirements
let container = [];
let arrays1 = [[1, 2, 3], [4, 5], [6]];

function flatteningArray (x, y) {
    for (let i = 0; i < y.length; i++) {
        for (let j = 0; j < y[i].length; j++) {
            x.push(y[i][j])
        }
    }
    return x;
}
console.log(flatteningArray(container, arrays1));



// The correct solution that meets the requirements
let arrays2 = [[1, 2, 3], [4, 5], [6]];
let result = arrays2.reduce((x,y) => x.concat(y), []);
console.log(result);
