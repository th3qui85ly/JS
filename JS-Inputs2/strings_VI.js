/*
Multiple Test cases, such that each test case contains a sentence


Input
The first line of the test case containsT, the number of test case

The nextTlines contain a sentence each


Output
For each test case, print the sentence on a new line, as shown in the sample test case

Sample Input 1 

2
my name is ankush
my name is rutwik
Sample Output 1

my name is ankush
my name is rutwik
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