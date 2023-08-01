var _board = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 0],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0]
  ];
  
  sudokuSolver(_board);
  print_board(_board);
  
  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (board[row][i] === num || board[i][col] === num || board[m][n] === num) {
        return false;
      }
    }
    return true;
  }
  
  function sudokuSolver(data) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValid(data, i, j, num)) {
              data[i][j] = num;
              if (sudokuSolver(data)) {
                return true;
              } else {
                data[i][j] = 0; // Fix the assignment operator here
              }
            }
          }
          return false;
        }
      }
    }
    return true;
  }
  
  function print_board(gameArr) {
    console.log();
    for (let i = 0; i < 9; i++) {
      let row = gameArr[i];
      if (i % 3 === 0) {
        console.log("|=======|=======|=======|");
      }
      console.log(
        "|",
        row[0],
        row[1],
        row[2],
        "|",
        row[3],
        row[4],
        row[5],
        "|",
        row[6],
        row[7],
        row[8],
        "|"
      );
    }
    console.log("|=======|=======|=======|");
  }
  