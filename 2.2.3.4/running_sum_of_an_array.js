/*
You are given an arrayAcontaining N integers, find the running sum of the array.

The running sum of the array is defined as the sum of all the elements of the array that exists before the current element, including the current element

Refer the sample I/O for better understanding


Input
The first line of the input containsT, the number of test cases

For each test case, the first line containsN, the number of elements in the array

The next line containsNspace separated integers denoting the elements of the array

Constraints

1 <= T <= 10

1 <=N<= 10^6

1 <=A[i]<= 10^4


Output
For each test case, printNspace separated integers, denoting the running sum of the array, at different indexes in the array


Sample Input 1 

1
5
1 2 3 4 5
Sample Output 1

1 3 6 10 15 
Hint

In the sample test case, the array has 5 elements. For each element, we have to find the sum of all the elements that exist before it, and include the current element as well

Therefore, for all the elements, the sum becomes

index - 0->{1 = 1}

index - 1->{1 + 2 = 3}

index - 2->{1 + 2 + 3 = 6}

index - 3->{1 + 2 + 3 + 4 = 10}

index - 4->{1 + 2 + 3 + 4 + 5 = 15}
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
    var res = [], rem = 0, sum = 0;
    for(let i=0; i<size; i++) {
            sum += arr[i];
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