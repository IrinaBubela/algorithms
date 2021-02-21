const boardSudoku = [
    [5, 3, '.', '.', 7, '.', '.', '.', '.'],
    [6, '.', '.', 1, 9, 5, '.', '.', '.'],
    ['.', 9, 8, '.', '.', '.', '.', 6, '.'],
    [8, '.', '.', '.', 6, '.', '.', '.', 3],
    [4, '.', '.', 8, '.', 3, '.', '.', 1],
    [7, '.', '.', '.', 2, '.', '.', '.', 6],
    ['.', 6, '.', '.', '.', '.', 2, 8, '.'],
    ['.', '.', '.', 4, 1, 9, '.', '.', 5],
    ['.', '.', '.', '.', 8, '.', '.', 7, 9],
];

const boardSudoku1 =
    [[".", ".", ".", ".", "6", ".", ".", ".", "."],
    [".", "5", ".", ".", ".", ".", "9", "7", "."],
    [".", ".", "2", ".", ".", "5", ".", ".", "."],
    [".", ".", ".", "2", ".", ".", ".", "8", "."],
    [".", "7", "4", ".", ".", ".", ".", ".", "."],
    [".", "8", "5", ".", "4", ".", "2", ".", "1"],
    [".", ".", "1", ".", ".", "7", ".", ".", "."],
    ["6", ".", ".", ".", ".", "4", ".", ".", "."],
    ["9", "2", ".", "6", ".", ".", "1", ".", "."]
    ]

const boardSudoku2 = [
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", "9", ".", "."],
    ["9", "7", ".", "3", ".", ".", ".", ".", "."],
    [".", "1", ".", ".", "6", ".", "5", ".", "."],
    [".", ".", "4", "7", ".", "8", ".", ".", "2"],
    [".", ".", ".", ".", ".", "2", ".", ".", "6"],
    [".", "3", "1", ".", ".", "4", ".", ".", "."],
    [".", ".", ".", "8", ".", ".", "1", "6", "7"],
    [".", "8", "7", ".", ".", ".", ".", ".", "."]
]




function move(board) {
    for (let y = 0; y < 9; y++) {
        for (let x = 0; x < 9; x++) {
            // If cell is '.' put a number in there
            if (board[y][x] === '.') {
                for (let n = 1; n <= 9; n++) {
                    if (checkVerticalHorizontal(board, n, y, x)) {
                        board[y][x] = n;
                        if (move(board)) return board;
                    }
                }
                board[y][x] = '.';
                return false;
            }

        }
    }
    return board;
}


function stringBoardToInt(board) {
    var innArr = el => el === '.' ? '.' : parseInt(el);
    board = board.map(arr => arr.map(innArr));
    return move(board)
}

function checkVerticalHorizontal(board, n, y, x) {
    // Checking horizontal(x) and vertical sides(y)
    for (let i = 0; i < 9; i++) {
        if (board[y][i] === n || board[i][x] === n) {
            return false;
        }
    }
    cheakSquare(board, n, y, x);
    return true;
}

function cheakSquare(board, n, y, x,) {
    // Checking square (3 cells from [x][y])
    const newx = Math.floor(x / 3) * 3;
    const newy = Math.floor(y / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[newy + i][newx + j] === n) {
                return false;
            }
        }
    }
}

console.log(move(boardSudoku));
console.log(stringBoardToInt(boardSudoku1));
console.log(stringBoardToInt(boardSudoku2));