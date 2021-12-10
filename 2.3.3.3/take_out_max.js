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
    input = input.trim().split('\n');
    let ln = input[0].split(" ").map(Number);
    let n = ln[0]; let k = ln[1];
    let arr = input[1].split(" ").map(Number);
    console.log(maxSum(arr, n, k));
}

function maxSum(arr, n, k) {
    if (n < k)
        return -1;
    let res = 0;
    for (let i = 0; i < k; i++) 
        res += arr[i];
    let cur = res;
    for (let i = k; i < n; i++) {
        cur += arr[i] - arr[i - k];
        res = Math.max(res, cur);
    }
    return res;
}

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