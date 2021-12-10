/*
Mr.Robot needs an encryption method, so Elliott was there to help him. At the same time, Richard wrote a paper on encryption. Elliott then started writing his algorithms with the help of paper from Richard but he needs your help in implementing. The algorithm is like this:

Given an input string, the encrypted string will start with the middle character of the string and will be formed henceforth with the middle characters of the left and right substrings (of the middle character of the word) and so on. Take a look at the explanation of the sample test case for better understanding.


Input
Input Format :

The first line contains an integer T denoting the number of TEST CASES. Each TEST CASE consists of 2 lines. The first line contains an integer N denoting the length of the word that needs to be encrypted. The second line contains the word that needs to be encrypted.

Constraints :

1 <= T <= 10

1 <= Length of the string <= 10000


Output
N lines where each line will contain the encrypted words


Sample Input 1 

3
3
abc
4
abcd
11
abcdefghijk
Sample Output 1

bac
bacd
fcabdeighjk
Hint

For abc, initially, ans is "",

1. Middle character for abc is b, so the answer becomes "b", and strings are a and c.

2. Now the middle character of the string "a" is a, so the answer becomes "ba".

3. Now the middle character of the string "c" is c, so the answer becomes "bac".
*/

function runProgram(input) {
    input = input.trim().split('\n');
    for (var i = 2; i < input.length; i+=2) {
        var str = input[i];
        console.log(encS(str));
    }
}

function encS(s) {
    if (s == "")
        return "";
    if (s.length == 1)
        return s;
    var mid = parseInt((s.length-1)/2);
    return s[mid] + encS(s.slice(0, mid)) + encS(s.slice(mid+1));
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
