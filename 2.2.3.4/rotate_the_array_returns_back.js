/*
You are given an array of n elements and an integer k, you need to rotate the array by k units.



Input
First-line contains t, which is the number of test cases

For each test cases, first-line has n & k - the number of elements in the array and the number of times the array has to be rotated

The second line of each test case contains n numbers which represent the elements of the array

Constraints

1<=T<=20

1<=N<=50000, 0<=K<=1000000000

1 <= Ai <= 1000000


Output
out put N elements, elements of the array , rotated by K units



Sample Input 1 

3
2 1
1 2
2 2
1 2
3 1
1 2 3
Sample Output 1

2 1
1 2
3 1 2
*/

function runProgram(input) {
  input = input.split("\n");
  let test = (+(input[0]));
  for(let i = 1; i < input.length; i++) {
      if(i % 2 == 1) {
          var l1 = input[i].split(" ");
          var size = (+(l1[0])); var k = (+(l1[1]));
          var arr = input[i+1].split(" ").map(Number);
          console.log(rotArr(size, k, arr).join(" "));
      } 
  }
}

function rotArr(size, k, arr) {
    var c = k % size
    for(j = 0;j < c;j++){
        arr.unshift(arr.pop())
    }
    return arr;
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