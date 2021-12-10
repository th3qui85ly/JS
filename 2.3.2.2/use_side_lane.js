/*
There are N trucks numbered from 1 to N. The trucks are coming on a road in a random manner.(by random, it means that any order of number: not sorted) There is a side lane which can be used to order the sequence of truck properly(1,2,3,..N)

Use these (Ref :https://imgur.com/a/yWLhQiK) images for better understanding of sample test case.

If it is possible to achieve using the side land, print "yes"

else print "no"



Note :The side street is so narrow that no two trucks can pass each other. Thus, the truck that enters the side street last must necessarily leave the side street first. Because the trucks  move up closely, a truck cannot drive back and re-enter the side street or the approach street.


Input
Input Format :

There are several test cases.

The first line of each test case contains a single number n, the number of trucks.

The second line contains the numbers 1 to n in an arbitrary order.

All the numbers are separated by single spaces. These numbers indicate the order in which the trucks arrive in the approach street.

Input ends with number 0

Constraints :

N < 1000


Output
For each test case your program has to output a line containing a single word "yes" if the trucks can be re-ordered with the help of the side lane, and a single word "no" in case it is not possible.


Sample Input 1 

5
5 1 2 4 3 
0
Sample Output 1

yes
*/

function runProgram(input) {
  input = input.split("\n");
  for (var i = 0; i < input.length; i+=2) {
      if (+input[i] != 0) {
          var n = +input[i];
          var arr = input[i+1].trim('0').split(" ").map(Number);
          cSort(arr, n);
      }
  }
}

function cSort(arr, n) {
    var st = [], a = 1;
    for (var i = 0; i < n; i++) {
        var b = 1;
        if (arr[i] === a) {
            while(st.length!==0 && arr[i]+b === st[st.length-1]){
                st.pop();
                b++;
                a++;
            }
            a++;
        } else {
            if (st[st.length - 1] < arr[i]) {
            console.log("no");
            return;
            }
            st.push(arr[i]);
        }
    }
    console.log("yes");
}


function checkSorted(arr, n)
{
    let st = [];
    let expected = 1;
    let fnt;

    while (arr.length != 0) {
        fnt = arr[0];
        arr.shift();

        if (fnt == expected)
            expected++;
        else { 
            if (st.length == 0) {
                st.push(fnt);
            } else if (st.length != 0 && st[st.length - 1] < fnt) {
                return false;
            } else
                st.push(fnt);
        }
        
        while (st.length != 0 && st[st.length - 1] == expected) {
            st.pop();
            expected++;
        }
    }
      
    if ((expected - 1) == n && st.length == 0)
        return true;
  
    return false;
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
    