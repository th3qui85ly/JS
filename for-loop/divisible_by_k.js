/*
You are given two numbers stored in the variable with the following names,
num, K
You have to print all the numbers in the range[1,num], such that for each number, the operationi % K == 0, whereirefers to the numbers present in that range

Print each number on a new line


Input
The first and the only line of input contains two values, stored innum, Krespectively


Output
You have to print all the numbers in the range[1,num], such that for each number, the operationi % K == 0, whereirefers to the numbers present in that range

Sample Input 1 

7 2
Sample Output 1

2
4
5
*/

function divisibleByK(num,k) {
    for(var i=1; i<=num; i++) {
        if(i%k==0) {
            console.log(i);
        }
    }
}