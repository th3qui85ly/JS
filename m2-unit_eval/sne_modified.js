/*
Andy and Mark are playing a game of arrays.
The game involves finding the smallest neighbor element to the left side for each element in the array
Andy counts the number of elements which do not have a smaller neighbor element to the left side. Help Andy find the count

Input
Input Format:

First line contains an integer N denoting the number of elements in the array (not necessarily distinct).

Second line contains N space separated integers denoting the elements of the array.

Constraints:

N <= 100000


Output
Print a single integer denoting the number of elements which do not have a smaller neighbor element to the left side


Sample Input 1 

8
39 27 11 4 24 32 32 1
Sample Output 1

5
Hint

The element at index0 1 2 3 & 7do not have any smaller neighbor elements to the left side. Therefore, the answer is 5
*/

function runProgram(input) {
    input = input.trim().split('\n');
    let n = +input[0];
    let arr = input[1].split(" ").map(Number);
    console.log(smallElem(arr, n));
}

function smallElem(arr, n) {
            var stack = [], res = [];
        for (var i = 0; i < n; i++){
            while (stack.length && stack[stack.length-1] >= arr[i]){
                stack.pop();
            }
            if (stack.length) {
                res.push(stack[stack.length-1]);
            }
            stack.push(arr[i]);
        }
        return (n - res.length);
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