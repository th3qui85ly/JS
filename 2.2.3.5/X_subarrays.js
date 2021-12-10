/*
Given a array A having N positive integers. Count all the subarrays of A having length X, such that each subarray has no integer greater than K.


Input
First line: Single integer T denoting the number of test cases.
For each test case:
First line: Three space separated integers denoting the value of N, K and, X.
Next line : N single space separated integers denoting the elements of array A.
Constraints:
1 <= T<= 50
1<= N <= 1000000
1 <= A[ i ], K <= 100000
1 <= X <= N

Output
For each test case, print in a new line a single integer denoting the number of subarrays.


Sample Input 1 

1
5 3 2
1 3 2 5 1
Sample Output 1

2
Hint

Given for the only test case,
N = 5, K = 3, X = 2

The following subarrays of length 2 have no integer greater then 3 in them :
[ 1, 3 ], [ 3, 2 ].

No other subarray is possible.
*/

function runProgram(input) {
  input = input.split("\n");
  let test = (+(input[0]));
  for(let i = 1; i < input.length; i++) {
      if(i % 2 == 1) {
          var l1 = input[i].split(" ").map(Number);
          var size = l1[0]; var k = l1[1]; var x = l1[2];
          var arr = input[i+1].split(" ").map(Number);
          console.log(xSubArr(arr, size, x, k));
      } 
  }
}

function xSubArr(arr, n, x, k) {
     var index = 0
    var count = 0
   
    for(j = 0; j < n;j++){
        if(arr[j] <= k){
            index++
        }else{
            index = 0
        }
        if(index >= x){
            count++
        }
    }
    return count
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