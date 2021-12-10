/*
Given a string, S. Find the length of the string using recursion.

Note: You are not allowed to use the length built-in property.


Input
Input Format

The single line  consists of string S

Constraints

1<= S length <= 200


Output
Print length of the given string S.


Sample Input 1 

masaischool
Sample Output 1

11
*/

function runProgram(input) {
    console.log(lenRec(input.trim()));
}    

function lenRec(s) {
    if (s == "")
        return 0;
    return lenRec(s.substring(1)) + 1;
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
