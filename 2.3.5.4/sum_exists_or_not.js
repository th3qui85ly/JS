/*
/*
Given an array of non-negative integers, and a value 'sum', determine if there is a subset of the given set (array) with sum equal to given sum.

If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.


Input
Input Format :

The first line of input contains an integer N - denoting size of the array.

The second line contains the N space seperated integers.

The third line of input will contain S - the required Sum value.

Constraints :

1<=n<= 18

1<=A[i]<=10^9


Output
Print "yes" or "no" without quotes.


Sample Input 1 

9
1 2 3 4 5 6 7 8 9
5
Sample Output 1

yes
*/

function runProgram(input) {
    input = input.trim().split('\n');
    var n = +input[0];
    var arr = input[1].split(" ").map(Number);
    var sum = +input[2];
    if(isSubsetSum(arr, n, sum) === true)
        console.log("yes");
    else
        console.log("no");
}

function isSubsetSum(set, n, sum)
{
    if (sum == 0)
        return true;
    if (n == 0)
        return false;
    if (set[n - 1] > sum)
        return isSubsetSum(set, n - 1, sum);

    return isSubsetSum(set, n - 1, sum)
      || isSubsetSum(set, n - 1, sum - set[n - 1]);
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