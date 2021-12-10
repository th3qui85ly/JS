/*
You are given a number stored in a variable with the nameN

Print the required pattern, such that for all numbers in the range[1, N], includingN, if the number is odd, print a single_, else printN*without space, on a new line

For example, consider the value stored inN = 5. Therefore, the required output is

_
*****
_
*****
_

Input
The first and the only line of the input contains the value stored inN


Output
Print the required pattern as shown in the problem statement


Sample Input 1 

6
Sample Output 1

_
******
_
******
_
******
Hint

In the sample test case, the value stored inN = 6

Therefore, the required output will be

_
******
_
******
_
******
*/

function dotsAndDashes(N) {
    for(var i=1; i<=N; i++) {
        var line = "";
        if(i%2!=0) {
            console.log("_");
            continue;
        }
        else {
            for(var j=1; j<=N; j++) {
                line+="*";
            }
        }
        console.log(line);
    }
}