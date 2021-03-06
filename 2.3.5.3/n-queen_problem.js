/*
The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Given an integer n, print the number of distinct solutions to the n-queens puzzle.

queens.png

Sample figure to understand the problem.


Input
The first line of the input contains one integer n (1 ≤ n ≤ 10).


Output
Print the number of distinct solutions possible.


Sample Input 1 

4
Sample Output 1

2
Sample Input 2 

1
Sample Output 2

1
Hint

There are two distinct solutions to the 4-queens puzzle as shown below.

[

[".Q..",  // Solution 1

"...Q",

"Q...",

"..Q."],

["..Q.",  // Solution 2

"Q...",

"...Q",

".Q.."]

]



So the count is 2.
*/

function runProgram(input) {
  input = +(input.trim().split(" "));
  var board = [];
  for (var i = 0; i < input; i++) {
    board[i] = [];
    for (var j = 0; j < input; j++) {
      board[i][j] = ".";
    }
  }
  var ans = [];
  nqueen(input, board, 0, ans);

  if (ans.length == 0)
    console.log(0);
  else
    console.log(ans.length);
}

function nqueen(size, b, col, ans) {
  if (col == size) {
    var al = [];
    for (var r = 0; r < size; r++) {
      var arr = b[r];
      var s = arr;
      al.push(s);
    }
    ans.push(al);
    return;
  }

  for (var r = 0; r < size; r++) {
    if (safeN(r, col, b, size)) {
      b[r][col] = 'Q';
      nqueen(size, b, col + 1, ans);
      b[r][col] = ".";
    }
  }
  return;
}

function safeN(i, j, b, size) {
  for (var col = 0; col < j; col++) {
    if (b[i][col] == 'Q') {
      return false;
    }
  }
  var row = i;
  var col = j;
  while (row >= 0 && col >= 0) {
    if (b[row][col] == 'Q') {
      return false;
    }
    row--;
    col--;
  }
  col = j;
  row = i;
  while (row < size && col >= 0) {
    if (b[row][col] == 'Q') {
      return false;
    }
    row++;
    col--;
  }
  return true;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    
    runProgram(read)
});