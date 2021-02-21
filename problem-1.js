function startMove(board, word) {
    // Equalize letter case
    word = word.toUpperCase();
    var upper = el => el.toUpperCase;
    board.map(arr => arr.map(upper));

    //Other constraints
    board.length < 1 || board.length > 200 ? false : true;
    board[0].length < 1 || board[0].length > 200 ? false : true;
    word.length < 1 || word.length > 10 ** 3 ? false : true;

    // Find start point to move forward
    const startPoint = findStartPoint(board, word[0]);
    for (let points of startPoint) {
        if (findNieghboors(board, points, word.slice(1),)) return true;
    }
    return false;
}

function findStartPoint(board, s) {
    let startArr = [];
    for (let r = 0; r < board.length; r++) {
        let index = -1;
        while (true) {
            index = board[r].indexOf(s, index + 1);
            if (index >= 0) startArr.push([r, index]);
            else break;
        }
    }
    return startArr;
}

// Prevent from moving outside the board
function movingSafe(y, x) {
    if (y < 0 || y >= board.length) return false;
    if (x < 0 || x >= board[0].length) return false;
    return true;
}

function findNieghboors(brd, pnts, wrd) {
    // Check if nieghboors have specific letter we need until word is 'sliced'
    if (wrd.length > 0) {
        let r = pnts[0], c = pnts[1]
        let arr = [];
        if (movingSafe(r - 1, c) && brd[r - 1][c] === wrd[0]) arr.push([r - 1, c]);

        if (movingSafe(r + 1, c) && brd[r + 1][c] === wrd[0]) arr.push([r + 1, c]);

        if (movingSafe(r, c - 1) && brd[r][c - 1] === wrd[0]) arr.push([r, c - 1]);

        if (movingSafe(r, c + 1) && brd[r][c + 1] === wrd[0]) arr.push([r, c + 1]);

        //'arr' - has all the matched nieghbour's letters, continue to find the rest
        for (let el of arr) {
            const found = findNieghboors(brd, el, wrd.slice(1));
            if (found) {
                return true;
            }
        }
        return false;
    } else {
        return true;
    }
}

board = [
    ["A", "B", "C", "E"],
    ["s", "F", "E", "S"],
    ["A", "D", "E", "E"]
];
word = "ABfes";
console.log(startMove(board, word));



































// const board = [["A", "B", "C", "E"], ["S", "F", "E", "S"], ["A", "D", "E", "E"]];
// const word = "SEE";

// let row = board.length; //3 columns
// let col = board[0].length; //4 rows

// function isInBoard(board, word) {
//     const start = findStartPoint(board, word[0]);
//     console.log(start);
//     goToNeighbors(start[0])
// }





// function findStartPoint(board, s) {
//     const answer = [];
//     for (let r = 0; r < board.length; r++) {
//         let index = -1;
//         while (true) {
//             index = board[r].indexOf(s, index + 1)
//             console.log(index);
//             if (index >= 0) answer.push([r, index]);
//             else break;
//             console.log(answer);
//         }
//     }
//     return answer;
// }


// function goToNeighbors(location) {
//     let y = location.y;
//     let x = location.x;
//     let allNeighbors = [];
//     //left
//     if (safeNeighbor(y, x - 1)) allNeighbors.push({ y: y, x: x - 1 });
//     //right
//     if (safeNeighbor(y, x + 1)) allNeighbors.push({ y: y, x: x + 1 });
//     //top
//     if (safeNeighbor(y - 1, x)) allNeighbors.push({ y: y - 1, x: x });
//     //bottom
//     if (safeNeighbor(y + 1, x)) allNeighbors.push({ y: y + 1, x: x });
//     // console.log(allNeighbors);
//     allNeighbors.filter(neighbor => {
//         for (let i = 0; i < word.length; i++) {
//             if (word[i] === board[neighbor.x][neighbor.y]) {
//                 console.log('true');
//                 // goToNeighbors([neighbor.x][neighbor.y]);
//             }
//         }
//     })
//     return allNeighbors;

// };

// function safeNeighbor(y, x) {
//     if (y < 0 || y >= row) return false;
//     if (x < 0 || x >= col) return false;
//     return true;
// };

// console.log(isInBoard(board, word));


