/*
You are provided 3 integers: left, right and k. 
Your task is to write a program that finds out the count of all such numbers between lefts and right (both inclusive) which are divided by k.

Input
Input Format

First line contains 3 space separated integers which are left, right and k respectively.

Constraints

0 <= left, right, k <= 10000


Output
Output the count as mentioned in problem description.

Sample Input 1 

1 10 3
Sample Output 1

3
*/

function masaiDivisors(left, right, k) {
    var count=0;
    for(var i=left; i<=right; i++) {
        if(i%k==0) {
            count++;
        }
    }
    console.log(count);
}