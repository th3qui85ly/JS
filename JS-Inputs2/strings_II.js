/*
Strings with multiple test case, such as the size of each string is given


Input
The first line of the test case containsT, the number of test case

The first line of each test case, containsN, the size of the string

The next line contains the string itself


Output
Print each string on a new line, as shown in the sample test case

Sample Input 1 

2
4
aman
6
rutwik
Sample Output 1

aman
rutwik
*/

function runProgram(input) {
  input = input.split("\n");
  let test = (+(input[0]));
  for(let i = 1; i < input.length; i++) {
      if(i % 2 == 1) {
          console.log(name(test, input[i+1]));
      } 
  }
}

function name(size, str) {
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