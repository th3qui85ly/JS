/*
You are given a string, whose size is stored in a variable with the nameN

The string is stored in a variable with the namestr

You have to printtrue, if the string contains at least one vowel, otherwise printfalse

For example, consider the value stored inN = 6, and the value stored instr = "nrupul", then the output will betrue, since the string contains the vowelutwice

Note : The string only contains lowercase English alphabets

Note : The vowels in the English Alphabet are considered the following - a,e,i,o,u

Input
The first line of the input contains the value stored inN

The next line contains the value stored instr


Output
Printtrue, if the value stored instrcontains at least one vowel, otherwise printfalse


Sample Input 1 

4
stvr
Sample Output 1

false
*/

function checkVowel(N, str) {
    var count=false;
  for(var i=0; i<N; i++) {
      if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u") {
          count=true;
      }
  }
  if(count) {
      console.log("true");
  } else {
      console.log("false");
  }
}