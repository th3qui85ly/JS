/*
Given an array, find the nearest smaller element G[i] for every element A[i] in the array such that the element has an index smaller than i.

Mathematically,

G[i] for an element A[i] is an element A[j] such that

j is maximum possible AND

j < i AND

A[j] < A[i]

Note: Elements for which no smaller element exist, consider next smaller element as -1.


Input
Input Format:

First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

Second line contains N space separated integers denoting the elements of the array.

Constraints:

N <= 100000


Output
Print N space separated integers denoting the array G.


Sample Input 1 

8
39 27 11 4 24 32 32 1
Sample Output 1

-1 -1 -1 -1 4 24 24 -1
*/

function runProgram(input) {
  input = input.split("\n");
  var n = +input[0];
  var arr = input[1].split(" ").map(Number);
  console.log(smallNeighbour(arr, n).join(" "));
}

function smallNeighbour (arr, n){
        var stack = [], res = [];
        for (var i = 0; i < n; i++){
            while (stack.length && stack[stack.length-1] >= arr[i]){
                stack.pop();
            }
            if (stack.length) {
                res.push(stack[stack.length-1]);
            } else {
                res.push(-1);
            }
            stack.push(arr[i]);
        }
        return res;
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
 