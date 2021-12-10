/*
Given an integerN, and a pattern. Print the pattern as given in the sample I/O.

Note: Please check for spaces.


Input
The first and the only line of the input contains the value ofN.

Constraints

1 <=N<= 25


Output
Print the pattern as given in the sample test case.



Sample Input 1 

5
Sample Output 1

* * * * *
*       *
*       *
*       *
*       *
*/

function patternPrintingIV(N) {
  for(var i = 01; i <= N; i++) {
      var str = "";
      for(var j = 1; j <= N; j++) {
          if(i == 1 || j == 1 || j == N) {
              str += "* ";
          } else {
              str += "  ";
          }
      }
      console.log(str);
  }
}