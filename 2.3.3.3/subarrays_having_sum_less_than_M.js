/*
Given an array A of size n with positive numbers, find the total number of subarrays that have sum < m.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) and M as mentioned in the question.

The second line of the test case contains n integers (1 ≤ Ai ≤ 100).


Output
For each test case, print the answer: The number of subarrays.


Sample Input 1 

1
5 5
1 5 1 3 2
Sample Output 1

5
*/

function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 1; i < input.length; i+=2) {
        let ln = input[i].split(" ").map(Number);
        let n = ln[0]; let k = ln[1];
        let arr = input[i+1].split(" ").map(Number);
        console.log(minSum(arr, n, k));
    }
}

function minSum(arr, n, k) {
    let l = 0, r = 0;
    let count = 0, sum = arr[0];
    
    while (l < n && r < n) {
        if (sum < k) {
            r++;
            if (r >= l)
                count += r - l;
            if (r < n)
                sum += arr[r];
        } else {
            sum -= arr[l];
            l++;
        }
    }
    return count;
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