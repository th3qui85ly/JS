/*
You are givenTtest cases, each test case contains an arrayA, and a valueK

Print the values of the array, by adding the valueKto each element in the array

You have to do this for all the test cases


Input
The first line of the input containsT, the number of test cases

The first line of each test case containsNandK, as explained in the problem statement

The next line containsNspace separated integers, denoting the elements of the array


Output
For each test case, print the elements of the array after updating as explained in the problem statement

Sample Input 1 

2
3 2
1 2 3
3 1
1 2 3
Sample Output 1

3 4 5
2 3 4
*/

function runProgram(input) {
  input = input.split("\n");
  let test = (+(input[0]));
  for(let i = 1; i < input.length; i++) {
      if(i % 2 == 1) {
          var l1 = input[i].split(" ");
          var size = (+(l1[0])); var sum = (+(l1[1]));
          var arr = input[i+1].split(" ");
          arr = arr.map(Number);
          console.log(array(size, sum, arr));
      } 
  }
}

function array(size, sum, arr) {
    var str = "";
    for(var i = 0; i < size; i++) {
        str += arr[i]+sum + " ";
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