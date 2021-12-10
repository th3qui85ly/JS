/*
Given two integers a and b, we need to find the value of a^b recursively.

Expected Time Complexity - O(logb).


Input
The first line of the input contains two integers a and b (1 ≤ a ≤ 10) and (0 ≤ b ≤ 9).


Output
For each test case, print the answer: The value of a^b.


Sample Input 1 

2 4
Sample Output 1

16
*/

function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    console.log(powRec(input[0], input[1]));
}

function powRec(x, y){
    if(y == 0){
        return 1
    }
    return x * powRec(x, y - 1);
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