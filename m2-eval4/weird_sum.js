/*
You are given an array of size N, which contains unique numbers. You need to find if there is a subsequence of an array whose sum is equal to the largest element in the array.

Note:- You cannot include the largest element while counting the sum.


Input
First-line contains T, no of test cases.

First-line of each test case contains the N size of the array.

Second-line of each test case contains N spaced integers

Constraints

1 <= T <= 10

1 <= N <= 20

0 <= A[i] <= 1005


Output
For each test case print "Yes" if you find such sum or else print "No".


Sample Input 1 

3
3
1 2 3
4
0 1 2 3
4
2 3 6 10
Sample Output 1

Yes
Yes
No
Hint

For 1st test case:- 1+2 = 3

For 2nd test case:- 1+2 = 3

For the 3rd test case:- We cannot form sum = 10 with any combination.
*/


function has_sum(arr, n, largest, cur_index, cur_sum) {
    if (cur_sum == largest) {
        return true
    }
    if (cur_index >= n) {
        return false
    }    
    return has_sum(arr, n, largest, cur_index + 1, cur_sum)
            || has_sum(arr, n, largest, cur_index + 1, cur_sum + arr[cur_index])
}

function doit(input) {
    let lines = input.split('\n')
    let t = parseInt(lines[0])
    let line = 1
    
    for (let i = 1;i <= t;i++) {
        let n = parseInt(lines[line])
        let arr = lines[line + 1].split(' ').map(Number)   
        line += 2
        let largest = arr[0]
        for (let j = 1;j < arr.length;j ++) {
            if (arr[j] > largest) {
                largest = arr[j]
            }
        }
        let new_arr = arr.filter(x => x != largest)
        if (has_sum(new_arr, n, largest, 0, 0)) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    
    doit(read)
});