/*
You are given a number stored in a variable with the namenum

You have to printMasai School, as many times as the number stored in the variablenum

Every time, printMasai Schoolon a new line


Input
The first and the only line of input contains a number stored in the variablenum


Output
PrintMasai School, as many times as the number stored in the variablenum, every time on a new line


Sample Input 1 

5
Sample Output 1

Masai School
Masai School
Masai School
Masai School
Masai School
*/

function printMasaiSchool(num) {
  while(num!=0) {
      console.log("Masai School");
      num-=1;
  }
}