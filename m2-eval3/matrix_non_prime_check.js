/*
In this question, you are given a 2D array stored in a variable with the namearr

The number of rows in the matrix is stored in the variable with the nameN, while the number of columns stored in the matrix is stored in a variable with the nameM

You have to find and print the count of non prime numbers (numbers which are not prime) present in the matrix

For example, consider the value stored inN = 3, andM = 3, and

N = 3 M = 3

arr = [[1 2 3]
       [4 5 6]
       [7 8 9]]

The non prime numbers in the 2D array are1,4,6,8,9. Therefore, the required output is 5

Note : The 2D array may contain duplicate elements. Each instance of a non prime number should be counted separately


Input
The first line of the input contains the values stored inNandM

The next line contains the values stored inarr


Output
Print the count of non prime numbers present in the matrix, as shown in the problem statement

Sample Input 1 

3 3
1 2 3
4 5 6
7 8 9 
Sample Output 1

5
Hint

In the sample test case, consider the value stored inN = 3, andM = 3, and

N = 3 M = 3

arr = [[1 2 3]
       [4 5 6]
       [7 8 9]]

The non prime numbers in the 2D array are1,4,6,8,9. Therefore, the required output is 5
*/

function runProgram(input) {
    input = input.split('\n');
    var ln = input[0].split(" ");
    var n = ln[0]; 
    var m = ln[1];
    var arr = [];
    for (var i = 1; i < input.length; i++) {
        arr[i] = [];
        var it = input[i].split(" ").map(Number);
        arr[i] = it;
    }
    arr.shift();
    console.log(primeN(arr, n, m));
}

function primeN(arr, n, m) {
    var count = 0, isPrime = true;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            if (arr[i][j] < 2) {
                count++
            } else {
                for (var k = 2; k < arr[i][j]; k++) {
                    if(arr[i][j] % k == 0) {
                        count++
                    }
                }
            }
        }
    }
    return count;
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