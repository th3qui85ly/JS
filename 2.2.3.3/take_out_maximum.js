/*
Given an array of integers and a number k, find the maximum sum of a subarray of size k.


Input
Input Format

First line consists of two integers n and k separated by space

Second line consists of n integers separated by spaces.

Constraints

1 <= n <= 10^7

1 <= k <= 10^6


Output
Print the maximum sum of a subarray of size k.


Sample Input 1 

10 3
-1 -1 -2 1 -2 4 1 9 3 9
Sample Output 1

21
*/

function runProgram(input) {
  input = input.split("\n");
  var f = input[0].split(" "); let len = (+(f[0]));
  let max = (+(f[1]));
  let arr = input[1].split(" ");
  arr = arr.map(Number);
  console.log(maxNum(len, max, arr));
}

function maxNum(len, max, arr) {
    var res = 0;
    var i = 0;
    while(i < max) {
        res += arr[i];
        i++;
    }
    var current = res;
    var j = max;
    while(j < len) {
        current += arr[j] - arr[j-max];
        res = Math.max(res, current);
        j++;
    }
    return res;
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