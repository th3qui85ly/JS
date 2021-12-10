/*
You are given five numbers, stored in the variables with the following names

one, two, three, four, five

Find the value ofsum1andsum2, such that

sum1 = one + two 

sum2 = three + four

If the value of both sum1 and sum2 is greater than the value stored in variablefive, printYes, else printNo


Input
The first and the only line of the input contains the value stored in variablesone, two, three, four, fiverespectively


Output
PrintYes, if the value ofsum1andsum2is both greater than the value stored infive, else printNo


Sample Input 1 

1 2 3 4 5 
Sample Output 1

No
*/

function twoSumsOneNumber(one, two, three, four, five) {
    var sum1 = one+two;
    var sum2 = three+four;
    
    if(sum1 > five && sum2 > five) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}