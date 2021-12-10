/*
For each test case, you are given N integers and K, your task is to write a program that prints "1" (without quotes) if there are 2 integers present in the array whose sum is K. Else print "-1" (without quotes).


Input
10^6Input Format :

First line contains T, no of test cases.

First line of each test case contains 2 space separated integers: N & K

Second line of each test case contains **N** space separated integers

Constraints :

1 <= T <= 10

1 <= N <=1000000

1 <= abs(A[i]) <=10^6<= abs(K) <= 2*10^6




Output
Output 1/-1 depending on the condition for each test case on new line


Sample Input 1 

1
5 2
3 4 0 2 7
Sample Output 1

1
*/

function runProgram(input) {
    input = input.split("\n");
  let test = (+(input[0]));
  for(let i = 1; i < input.length; i+=2) {
          var line = input[i].split(" ").map(Number); var n = line[0]; var k = line[1];
          var arr = input[i+1].split(" ").map(Number);
          console.log(suchPairs(arr, n, k));
  }
}

function suchPairs(arr, n, k) {
    arr.sort(function(a, b) {
        return a - b;
    });
    
    var i = 0
    var j = n -1 
    while (i < j)
    {
       if(arr[i] + arr[j] == k)
         return 1;
       else if(arr[i] + arr[j] < k)
         i++
       else
         j--
    } 
 return -1;
    
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