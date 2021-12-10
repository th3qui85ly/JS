/*
Given a collection of numbers, return all possible permutations.

NOTE:

No two entries in the permutation sequence should be the same.

For the purpose of this problem, assume that all the numbers in the collection are unique.

USING BUILT-IN LIBRARY FUNCTION TO PERMUTE WILL LEAD TO DISQUALIFICATION

Note :Return the permutations in any order.


Input
The first line of input contain an integer n - denoting the size of array

The next line contain n distinct integers, A[1],A[2]...A[N]

Constraints:

1<= n <=6


Output
This is a function complete problem. Return the collection of permutations of the array.


Sample Input 1 

3
1 2 3
Sample Output 1

1 2 3 
1 3 2 
2 1 3 
2 3 1 
3 1 2 
3 2 1
*/

function runProgram(input) {
    input = input.trim().split('\n');
    var arr = input[1].split(" ").map(Number);
    var res = [];
    res = perm(arr);
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].join(" "));
    }
}

function perm(arr) {
    var res = [];
    if (arr.length === 0) return [];
    if (arr.length === 1) return [arr];
    
    for (var i = 0; i < arr.length; i++) {
        var curr = arr[i];
        var rem = arr.slice(0, i).concat(arr.slice(i + 1)); // 1 2 3  - null, 1 rem = undefinded1
        var remPerm = perm(rem);
        for (var j = 0; j < remPerm.length; j++) {
            var perArr = [curr].concat(remPerm[j]);
            res.push(perArr);
        }
    }
    return res;
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