/*
Array with Multiple Test Cases


Input
The first line of the input containsT, the number of test cases

The first line of each test case containsN, the size of the array

The next line of the input containsNspace separated integers referring the elements of the array


Output
Print elements of each array on a single line, by adding 1 to each element, for each test case

Sample Input 1 

2
5
1 2 3 4 5
4
1 2 3 4
Sample Output 1

2 3 4 5 6
2 3 4 5
*/

function runProgram(input) {
  input = input.split("\n");
  let test = (+(input[0]));
  for(let i = 1; i < input.length; i++) {
      if(i % 2 == 1) {
          var size = (+(input[i]));
          var arr = input[i+1].split(" ");
          arr = arr.map(Number);
          console.log(arrayPrint(size, arr));
      } 
  }
}

function arrayPrint(size, arr) {
    var str = "";
    for(let i=0; i<size; i++) {
       str += (arr[i]+1) + " ";
   }
   return str;
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}