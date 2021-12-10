/*
Square Matrix - Single Test Case


Input
The first line of the input containsN, the dimensions of the square matrix

The nextNlines containsNspace separated integers, denoting the elements of the matrix


Output
Print the elements of the matrix row by row, by adding 1 to each element, as shown in the sample test case

Sample Input 1 

3 
1 2 3
4 5 6
7 8 9
Sample Output 1

2 3 4
5 6 7
8 9 10
*/

function runProgram(input) {
  input = input.split("\n");
  let size = (+(input[0]));
  let arr = [];
  for(let i = 1; i < input.length; i++) {
      arr[i-1] = [];
      var temp = input[i].split(" ").map(Number);
      arr[i-1] = temp;
  }
  console.log(matrixPrint(size, arr));
}

function matrixPrint(size, arr) {
    var str = "";
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            str += (arr[i][j]+1) + " ";
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