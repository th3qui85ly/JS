/*
Given a square matrix, you have to find the reverse U traversal of the matrix. Refer the sample I/O for better understanding. Refer the given figure for better understanding.

Note: No element should be visited more than once.

Image


Input
The first line of the input contains T, the number of test cases.

The next line contains N, the size of the square matrix.

The next N lines contains N space separated integers each denoting the values of the matrix.

Constraints

1 <= T <= 10

1 <= N <= 50

1 <= A[i][j] <= 50


Output
For each test case, print the elements that lie on the reverse U traversal, on a single line, on a new line.


Sample Input 1 

1
3
1 2 3
4 5 6
7 8 9
Sample Output 1

7 4 1 2 3 6 9 8 
Hint

The elements that lie on the circular traversal of the given matrix are - 7,4,1,2,3,6,9,8
*/

function runProgram(input) {
    input = input.trim().split('\n');
    var test = +input[0];
    let n = +input[1];
    for(var j = 1; j <input.length; j+=n+1) {
        var arr =[];
        n = +input[j];
        for (let i =0; i < n; i++) {
            arr[i] = [];
            var temp = input[i+j+1].split(" ").map(Number);
            arr[i] = temp;
        }
        console.log(spiral(arr, n));
    }
}

function spiral(arr, n) {
    var str = "";
    for(let i = n-1; i>0;i--) {
        str+=arr[i][0]+ " ";
    }
    arr[0].map((x)=>str+=x+" ");
    for(let l = 1; l < n; l++) {
        str+=arr[l][n-1]+ " ";
    }
    for(let m = n-2;m > 0; m--) {
        str+=arr[n-1][m]+ " ";
    }
    return str;
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