/*
Given a stringSof all lowercase letters and each letter has a value of its own.

The value of the alphabetais1,b is 2,c is 3..... tillz is 26.

Now you have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string.



Input
Input Format

The first and only line of input contains the StringS.

Constraints

1 <= Length of S <= 1000


Output
Print the value of string.


Sample Input 1 

aba
Sample Output 1

4
*/

function stringValue(S) {
  var alpha = "abcdefghijklmnopqrstuvwxyz";
  var weight = 0;
  for(var i = 0; i < S.length; i++) {
      var elem = S[i];
      var temp = alpha.indexOf(elem);
      weight += (temp+1);
  }
    console.log(weight);
}