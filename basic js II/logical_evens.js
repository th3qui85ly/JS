/*
You are given two numbers, stored in the variable with the following names

one, two
If both the values are Even, printBoth, else printNo


Input
The only line of input contains two numbers, the values stored inone, two


Output
If both the values are Even, printBoth, else printNo


Sample Input 1 

4 7
Sample Output 1

No
*/

function logicalEvens(one, two) {
    if(one%2==0 && two%2==0) {
        console.log("Both");
    } else {
        console.log("No");
    }
}