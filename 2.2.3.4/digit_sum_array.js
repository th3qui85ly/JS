/*
You are given an arrayA, containingNintegers. Find the digit sum array for the given array.

The digit sum array for a given arrayA, contains the sum of the digits present in a given number, stored at the corresponding index inA.

Refer the sample I/O for better understanding.


Input
The first line of the input containsT, the number of test cases.

The first line of each test case, contains N, the number of elements in the array.

Next line containsNspace separated integers, denoting the elements of the array

Constraints

1 <=T<= 10

1 <=N<= 10000

1 <=A[i]<= 10000


Output
For each test case, print the elements in the digit sum array, on a single line, on a new line.


Sample Input 1 

2
5
12 14 16 17 29
6
1 2 3 4 5 51
Sample Output 1

3 5 7 8 11 
1 2 3 4 5 6 
*/

function runProgram(input) {
  input = input.split("\n");
  let test = (+(input[0]));
  for(let i = 1; i < input.length; i++) {
      if(i % 2 == 1) {
          var size = (+(input[i]));
          var arr = input[i+1].split(" ").map(Number);
          console.log(digitSum(size, arr).join(" "));
      } 
  }
}

function digitSum(size, arr) {
    var res = [], rem = 0;
    for(let i=0; i<size; i++) {
        var sum = 0;
           while(arr[i])
          {
            rem = arr[i]%10;
            sum = sum+rem;
            arr[i] = Math.floor(arr[i]/10);
          }
            res.push(sum);
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