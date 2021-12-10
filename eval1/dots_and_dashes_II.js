/*
You are given a number, stored in a variableN

For all numbers in the range of [1,N], including the value stored inN, if the number is even print N_, without space, else if the number is even, print N*, without space, on a new line

For example, consider the value stored inN = 5, therefore, the output required will be

_____
*****
_____
*****
_____

Input
The first and the only line of the input contains the value stored inN

Output
Print the output as shown in the problem statement

Sample Input 1 

6
Sample Output 1

______
******
______
******
______
******
Hint

In the sample test case, the value stored inN = 6. Therefore, for all the values in the range [1,6]

Since, 1 is an odd number, therefore, we print 6_, without any space, and 2 is an odd number, so we print 6*, without space, and so on

Therefore, the output becomes

______
******
______
******
______
******
*/

function dotsAndDashesII(N) {
    for(var i=1; i<=N; i++) {
        var line = "";
        if(i%2!=0) {
            for(var j=1; j<=N; j++) {
                line+="_";
            }
        }
        else {
            for(var j=1; j<=N; j++) {
                line+="*";
            }            
        }
        console.log(line);
    }
}