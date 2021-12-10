/*
Jack gave Jill a secret code, a sequence of numbers. Jill decided to encrypt the code. The encryption used by Jill is as follows.

Lets say the sequence of N numbers is a1, a2, a3, a4, ...... an-1.Jillwill encrypt it to [a1,a3,a5....  a6,a4,a2].

Jill mistakenly shared encrypted code with Romeo, but she is confident that Romeo won't be able to crack it. Can you help Romeo to get the secret code from the encrypted sequence?


Input
First-line contains T, no of test cases.

First-line contains N, no of numbers in sequence.

Second-line contains N spaced numbers, Encrypted code (sequence of numbers) by Jill.

Contraints

1 <= T <= 10

1 <= N <= 10^6

1 <= A[i] <= 10^6


Output
For each test output the original secret code, (sequence of numbers) on new line.


Sample Input 1 

2
5
1 3 5 4 2
6
1 3 5 6 4 2
Sample Output 1

1 2 3 4 5
1 2 3 4 5 6
*/

function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 1; i < input.length; i+=2) {
        let n = +input[i];
        let arr = input[i+1].split(" ").map(Number);
        console.log(dec(arr, n));
    }
}

function dec(arr, n) {
    var res = "";
    var i = 0, j = n-1;
    while(i <= j) {
        res += arr[i] + ' ';
        if(i == j)
            break;
        res += arr[j] + ' ';
        i++;
        j--;
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