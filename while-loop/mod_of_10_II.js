/*
You are given a number stored in a variable with the namenum

Find out the value obtained from the expressioni % 10, whereiconsists of all the values from 1 to the value stored innum, includingnum


Input
The first and the only line of the input contains the value stored innum


Output
Print the value obtained after doing the operation,i % 10, whereirefers to all the values from 1 to the number stored innum, including that as well

Note : Print all the values on a new line

Sample Input 1 

7
Sample Output 1

1
2
3
4
5
6
7
*/

function modeof10(num) {
    var i=1;
    while(i<=num) {
        console.log(i%10);
        i++;
    }
}