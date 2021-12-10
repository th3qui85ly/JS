/*
Rectangular Matrix - Single Test Case


Input
The first line of the input containsNandM, the dimensions of the matrix

The nextNline containsMspace separated integers, denoting the elements of the matrix


Output
Print the elements of the matrix, row by row, by adding 1 to each element, as shown in the sample input

Sample Input 1 

3 4
1 2 3 4
5 6 7 8
9 10 11 12
Sample Output 1

2 3 4 5
6 7 8 9
10 11 12 13
*/

function runProgram(input) {
  input = input.split("\n");
  let test = input[0].split(" ").map(Number); var row = test[0]; var col = test[1];
  let arr = [];
  for(let i = 0; i < row; i++) {
          arr[i] = [];
          var temp = input[i+1].split(" ").map(Number);
          arr[i] = temp;
  }
  console.log(rectMatrix(row, col, arr));
}

function rectMatrix(row, col, arr) {
    var str = "";
    for(let i = 0; i < row; i++) {
       for(let j = 0; j < col; j++) {
           str += arr[i][j]+1 + " ";
       }
       str += "\n";
   }
   return str;
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}