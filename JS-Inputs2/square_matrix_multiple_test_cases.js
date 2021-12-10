/*
Square Matrix With Multiple Test Cases


Input
The first line of the input containsT, the number of test cases

The first line of each test case containsN, the dimensions of the matrix

The nextNlines containNspace separated integers, denoting the elements of the matrix


Output
Print all the elements of the matrix row by row, by adding 1 to each element, on a new line, as shown in the sample output

Sample Input 1 

2
3
1 2 3
4 5 6
7 8 9
2
1 2
3 4
Sample Output 1

2 3 4
5 6 7
8 9 10
2 3 
4 5
*/

function runProgram(input) {
  input = input.split("\n");
  var cases = (+(input[0]));
  var row = (+(input[1]));
      for(var j = 1; j < input.length; j+=row+1) {
          var arr = [];
          var row = (+(input[j]));
          for(let k = 0; k < row; k++) {
              arr[k] = [];
              var temp = input[k+j+1].split(" ").map(Number);
              arr[k] = temp;
          }
           sqMatrix(row, arr);
      }
}

function sqMatrix(size, arr) {
    for(let i = 0; i < size; i++) {
        var str = "";
        for(var j = 0; j < size; j++) {
           str += arr[i][j]+1 + " ";
        }
        console.log(str);
   }
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