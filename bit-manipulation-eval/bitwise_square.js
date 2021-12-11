/*
Given a number N. Calculate the square of N without using *, / or inbuilt power function.


Input
First line: Single integer T denoting the number of test cases.
For each test case:
First line: Single integer denoting the value of N.
Constraints:
1 <= T <= 10
1<= N <= 1000000

Output
For each test case, print in a new line a single integer denoting the square of integer N.


Sample Input 1 

2
5
6
Sample Output 1

25
36
*/

function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 1; i < input.length; i++) {
        let n = +input[i];
        console.log(bitSq(n));
    }
}

function bitSq(n) {
    if (n == 0)
        return 0;
    if (n < 0)
        n = -n;
    let res = n>>1;
    if (n & 1)
        return ((bitSq(res)<<2) + (res << 2) + 1);
    else
        return (bitSq(res) << 2);
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function(input) {
    read += input;
  });
  process.stdin.on("end", function() {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function() {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}