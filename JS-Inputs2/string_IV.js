/*
Strings with Multiple test case, such that the size of the string is not given


Input
The first line of the input containsT, the number of test cases

The nextTlines containing the input string


Output
For each test case, print the string on a new line, as shown in the sample test case

Sample Input 1 

2
aman
rutwik
Sample Output 1

aman
rutwik
*/

function runProgram(input) {
  input = input.split("\n");
  let test = (+(input[0]));
  for(let i = 1; i < input.length; i++) {
      console.log(input[i]);
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