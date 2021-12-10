/*
You are given a sorted array consisting of N integers. You need to count to the number of triplets such that the absolute difference between the maximum and minimum element of the triplet should be less than or equal to K.

Note:

A triplet is a group of three integers (a[i], a[j] ,a[k]) where i < j < k.


Input
The first line contains 2 space-separated positive integers N and K denoting the number of elements present in the array and the maximum allowed difference.

The second line contains N space-separated positive integers A[i] denoting the elements of the array.

Constraints

1 <= N <= 10^5

0 <= K <= 10^9

1 <= A[i] <= 10^9


Output
The single line of output should contain the number of triplets.


Sample Input 1 

4 2
-3 -2 -1 0
Sample Output 1

2
Sample Input 2 

4 3
1 2 3 4
Sample Output 2

4
Hint

Explanation for Sample 1

The triplets are {-3,-2,-1}, {-2,-1,0}.
*/

function runProgram(input) {
    input = input.trim().split('\n');
    let ln = input[0].split(" ").map(Number);
    let n = ln[0]; let k = ln[1];
    let arr = input[1].split(" ").map(Number);
    countTriplet(arr, n, k);
}

function countTriplet(arr, n, K) {
    var count = 0;
    var x = n-3;
    var y = n-1;
    while ((x+1) < y) {
        var sub = Math.abs(arr[y] - arr[x]);
        if (sub <= K) {
            let total = ((y-x-1) * (y-x)) / 2; 
            count+= total;
            x--;
        } else {
            y--;
        }
    }
    console.log(count);
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
process.on("SIGINT", function() {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});