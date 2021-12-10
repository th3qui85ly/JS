/*
You are given six numbers, stored in the variables with the following names

one, two, three, four, five, six

Find the value ofsum1andsum2, such that

sum1 = one + two

sum2 = four + five

If both the following two conditions are true, printYes, else printNo

sum1 > three

sum2 > six


Input
First and the only line of input contains, the values stored inone, two, three, four, five, six


Output
PrintYes, if both the conditions given in the problem statement are true, else printNo


Sample Input 1 

1 2 3 4 5 6
Sample Output 1

No
*/

function twoSumsOneNumberII(one, two, three, four, five, six) {
    var sum1 = one + two;
    var sum2 = four + five;
    
    if(sum1 > three && sum2 > six) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}