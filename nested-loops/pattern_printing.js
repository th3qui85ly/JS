/*
You are given a number, stored in a variable with the nameN

Print the pattern as shown below.

If the value stored inN = 4, then the pattern required will be

*
**
***
****

Input
The first and the only line of each test case contains the value stored in the variableN


Output
Print the pattern as shown in the problem statement


Sample Input 1 

2
Sample Output 1

*
**
Sample Input 2 

1
Sample Output 2

*
*/

function patternPrinting(N) {
    for(var i=1; i<=N; i++) {
        var line="";
        for(var j=1; j<=i; j++) {
            line = line + "*";
        }
    console.log(line);
    }
}