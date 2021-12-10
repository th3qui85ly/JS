/*
You are given seven numbers, stored in the variable with the following names

a,b,c,d,e,f,g
You have to declare two variables,sum1andsum2, such thatsum1 = (a + b) * candsum2 = (d + e + f + g)

Print the output of the following operation

sum1 > sum2

Input
The first and the only line of input contains the seven numbers stored in the variable with the namesa,b,c,d,e,f,g


Output
Print the output of the operation, given in the problem statement

Sample Input 1 

1 2 3 4 5 6 7
Sample Output 1

false
*/

function compareSevenNumbers(a,b,c,d,e,f,g) {
    var sum1 = (a+b)*c;
    var sum2 = (d+e+f+g);
    console.log(sum1 > sum2);
}