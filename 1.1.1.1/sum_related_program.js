/*
You are given a numberN, you need to find sum of all the even numbers which are less than or equal to N.


Input
Input Format

First and the only line contains one number N.

Constraints

1 <= N <=10000


Output
Output Format

Output sum of all even number which are less than equal to N.


Sample Input 1 

4
Sample Output 1

6
Sample Input 2 

3
Sample Output 2

2
*/

function sumRelatedProblem(N) {
    var sum = 0;
    for(var i = 1; i <= N; i++) {
        if(i%2==0) {
            sum += i;
        }
    }
    console.log(sum);
}