/*
Given a string s of length n, find out the number of distinct substrings possible from the given string.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the length of the string.

The second line of each test case contains a string s of length n.


Output
For each test case, print the answer: The number of distinct substrings possible from given string.


Sample Input 1 

2
5
abcde
3
aaa
Sample Output 1

15
3
*/

function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 1; i < input.length; i+=2) {
        let n = +input[i];
        let s = input[i+1];
        console.log(countSubs(s, n));
    }
}

function countSubs(str, n) {
        let res = [];

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n - i; j++) {
                let elem = str.substring(j, j + (i+1));
                if (!res.includes(elem)) {
                    res.push(elem);
                }
            }
        }
        return res.length;
}


if (process.env.USER === "") {
  runProgram(``);
} else {
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
}