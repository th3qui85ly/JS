/*
You are given four numbers stored in variables with the following names

one, two, three, four

If the value of both the following expression is true, printYes, else printNo

1. one > two 

2. three > four


Input
The first and the only line of the input contains four numbers, the values stored in the variablesone, two, three, four


Output
If both the expressions 1 and 2, given in the problem statement are true, printYes, else printNo


Sample Input 1 

1 2 4 3
Sample Output 1

No
*/

function compareFourNumbers(one, two, three, four) {
    if(one > two && three > four) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}