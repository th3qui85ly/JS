/*
You are given a number, stored in a variable with the namenum

Find the sum of all even numbers greater than zero, and less than or equal to the value stored innum

For example, if the value stored innum = 5, then all the even numbers smaller than or equal to 5, and greater than zero are

2
4
Therefore, the sum becomes,sum = 2 + 4 = 6, which is the required output


Input
The first and the only line of input contains the number stored in the variablenum


Output
Print the sum of all even numbers greater than zero, and less than or equal to the value stored innum


Sample Input 1 

6
Sample Output 1

12
*/

function evenSumBelowN(num) {
    var i=2;
    var sum=0;
    while(i<=num) {
        sum+=i;
        i+=2;
    }
    console.log(sum);
}