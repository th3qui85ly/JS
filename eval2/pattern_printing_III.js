/*
You are given a number stored in a variable with the nameN

You have to print the pattern as shown below according to the value stored inN

For example, consider the value stored inN = 5, then the required pattern will be

* * * * *
        *
        *
        *
* * * * *

Note : Please check for spaces

Input
The first and the only line of the input contains the value stored in the variableN

Output
Print the pattern as shown in the problem statement, according to the value stored inN

Sample Input 1 

5
Sample Output 1

* * * * *
        *
        *
        *
* * * * *
*/

function patternPrinting3(N){
    var str = "";
    for(var i = 1; i <= N; i++) {
        for(var j = 1; j <= N; j++) {
            if(i==1 || i==N) {
                str += "* ";
            } else if(j==N){
                str += "* ";
            } else {
                str += "  ";
            }
        }
        str += "\n";
    }
    console.log(str);
}