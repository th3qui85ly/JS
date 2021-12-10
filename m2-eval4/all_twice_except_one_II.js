/*
You are given a numberN, and an array such that the array contains all the numbers from 1 to N including N twice, except for one, which is present only once

You have to find the number which is present only once, in the array


Input
The first line of the input containsT, the number of test cases

The first line of each test case, containsN, the value as explained in the problem statement

The next line contains2*N - 1, the number of elements in the array

Constraints

1 <= T <= 10

1 <= N <= 2 * 10^5

1 <= arr[i] <= N

Output
For each test case, print the number which is present only once, on a new line

Sample Input 1 

1
5
1 2 1 3 4 4 5 2 3
Sample Output 1

5
Hint

In the sample test case, all the numbers except for 5 are present twice. Therefore, the output is5
*/

function runProgram(input) {
    input = input.trim().split('\n');
    for (var i = 1; i < input.length; i+=2) {
        var n = +input[i];
        var arr = input[i+1].split(" ").map(Number);
        console.log(twoNum(arr, n));
    }
}

function twoNum(arr) {
    var m = {};
    var s1 = 0, s2 = 0;
    for (var i = 0; i < arr.length; i++) {
        if(!m[arr[i]]) {
            s1 += arr[i];
            m[arr[i]] = 1;
        }
        s2 += arr[i];
    }
    return (2 * (s1) - s2);
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