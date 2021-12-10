/*
function runProgram(input) {
  input = input.split("\n");
  let test = input[0].split(" ").map(Number); var row = test[0]; var col = test[1];
  let arr = [];
  for(let i = 0; i < row; i++) {
          arr[i] = [];
          var temp = input[i+1].split(" ").map(Number);
          arr[i] = temp;
  }
  console.log(rectMatrix(row, col, arr));
}

function rectMatrix(row, col, arr) {
    var str = "";
    for(let i = 0; i < row; i++) {
       for(let j = 0; j < col; j++) {
           str += arr[i][j]+1 + " ";
       }
       str += "\n";
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
*/

function runProgram(input) {
  input = input.split("\n");
  var cases = (+(input[0]));
  let test = input[1].split(" ").map(Number); var row = test[0]; var col = test[1];
      for(var j = 1; j < input.length; j+=row+1) {
          var arr = [];
          test = input[j].split(" ").map(Number); var row = test[0]; var col = test[1];
          for(let k = 0; k < row; k++) {
              arr[k] = [];
              var temp = input[k+j+1].split(" ").map(Number);
              arr[k] = temp;
          }
           rectMatrix(row, col, arr);
      }
}

function rectMatrix(row, col, arr) {
    for(let i = 0; i < row; i++) {
        var str = "";
       for(let j = 0; j < col; j++) {
           str += arr[i][j]+1 + " ";
       }
       console.log(str);
   }
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