/*
Single Line Multiple Integers


Input
The first and the only line of the input contains the 4 integers, given as input


Output
Print each integer given as input, on a new line as output by adding 1 to it


Sample Input 1 

1 2 3 4
Sample Output 1

2
3
4
5
*/

function runProgram(input) {
    input = input.split(' ').map(Number);
    printArr(input);
  }
  
  function printArr(arr) {
      for(var i = 0; i < arr.length; i++) {
          console.log(arr[i] + 1);
      }
  }
  
  if (process.env.USERNAME === '') {
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