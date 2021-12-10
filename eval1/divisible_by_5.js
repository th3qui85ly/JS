/*
You are given a number stored in the variable, with the namenum

If the value is divisible by 5, printYes, else printNo

Note : A number is divisible by 5, if on dividing the number by 5, the remainder is 0

Input
The first and the only line of the input contains the value stored innum

Output
PrintYes, if the number is divisible by 5, else printNo

Sample Input 1 

45
Sample Output 1

Yes
Hint

In the sample test case, the value stored innum = 45

On dividing45 by 5, the remainder is 0. Therefore, we can be sure that the number is divisible by 5. Hence, the output isYes
*/

function divisibleBy5(num) {
    if(num % 5 ==0) {
        console.log("Yes");
    } else {
        console.log("No");
    }
  
}