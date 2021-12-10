/*
Minions are of 26 types, from 'a' to 'z'. If two Minions of same type finds themselves besides each other, they will kill each other.

You are given a string of Minions. You need to find the final surviving string of Minions, after all the killings. i.e Further No Minion will kill other Minion.

If no Minion survived a after all the fighting, print "-1".


Input
Input Format

First Line contains 'N', size of strings of Minions.

Second Line contains S, string of Minions.

Constraints

1 <= N <= 10^6


Output
Single line with stable Minion string or "-1"


Sample Input 1 

5
aabbc
Sample Output 1

c
Sample Input 2 

12
abbabaadcbbc
Sample Output 2

bd
Sample Input 3 

2
aa
Sample Output 3

-1
Hint

1st Test case :-

aabbc => bbc => c

2nd Test Case:-

abbabaadcbbc => aabaadcbbc => aabdcbbc => aabdcc =>bdcc=> bd
*/

function runProgram(input) {
    input = input.trim().split("\n");
    var n = +input[0];
    var s = input[1];
    
    var st = [], i =0;
    while (i < s.length) {
        if(st.length == 0 || s[i] != st[st.length - 1]) {
            st.push(s[i]);
            i++;
        } else {
            st.pop();
            i++;
        }
    }
    
    if (st.length == 0) {
        console.log("-1");
    } else {
        var sht = "";
        while (st.length != 0) {
            sht = st[st.length-1] + sht;
            st.pop();
        }
        console.log(sht);
    }
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
