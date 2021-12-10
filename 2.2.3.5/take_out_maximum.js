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
  let test = input[0].split(" ").map(Number);
  var size = test[0]; var k = test[1];
  var arr = input[1].split(" ").map(Number);
  console.log(maxArr(size, k, arr));
}

function maxArr(size, k, arr) {
    var max = 0, sum = 0;
    if(size < k) return null;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    for (let i = k; i < size; i++) {
        sum += arr[i] - arr[i - k];
        max = Math.max(max, sum);
    }
    return max;
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