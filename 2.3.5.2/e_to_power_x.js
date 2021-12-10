/*

One famous series says

e^x = 1 + x + x^2/2! + x^3/3! + x^4/4! + ...
    = n=0(SIGMA)(inf) { x^n/ n! }

Using the below explanation for n-th term of e^x, calculate the value of e^x given x and n. Do not calculate it directly using the formula and do not write any iterative code.

Tn(x) = 1 + x + 1(x^2)/2! + 1(x^3)/3! + ... + 1(x^n)/n!


Input
Input Format

First and the only line of code contains x and n respectively

Constraints

x <= 14

n <= 12


Output
Print the value to 4 places after the decimal. For example, 13.1310 is a valid answer but 13.131 is not. Also, 12 is not a valid answer but 12.0000 is a valid answer


Sample Input 1 

4 2
Sample Output 1

13.0000
*/

function runProgram(input) {
    var [x, n] = input.trim().split(" ").map(Number);
    console.log(getSum(x, n).toFixed(4));
}

function getSum(x, n) {
    if (n == 0)
        return 1;
    return ((1/fact(n)) * Math.pow(x, n)) + getSum(x, n-1);
}

function fact(n) {
    if (n == 1)
        return 1;
    return n * fact(n-1);
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
