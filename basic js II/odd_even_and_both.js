/*
You are given two numbers, stored in the variable with the following names

one, two

If both the values are even, printEven

Else if both the values are odd, printOdd

else printEven-Odd


Input
The first and the only line of the input contains, the values stored inone, two


Output
If both the values are even, printEven

Else if both the values are odd, printOdd

else printEven-Odd


Sample Input 1 

3 6
Sample Output 1

Even-Odd
*/

function oddEvenBoth(one, two) {
    if(one%2==0 && two%2==0) {
        console.log("Even");
    } else if(one%2!=0 && two%2!=0) {
        console.log("Odd");
    } else {
        console.log("Even-Odd");
    }
}