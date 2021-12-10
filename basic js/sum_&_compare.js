/*
You are given five numbers, stored in the variables with the following name

 one, two, three, four, five
You have to declare another variablesum1, such thatsum1 = one + two + three

Also, you have to declare another variablesum2, such thatsum2 = four + five

Finally, you have to print the output of the following operation

 sum1 > sum2 (This operation prints true, if sum1 is greater than sum2, else it prints false)

Input
The first and the only line of input contains the values stored inone, two, three, four, five


Output
Print the result of the operation, after finding the values ofsum1andsum2, as explained in the problem statement


Sample Input 1 

1 2 3 4 5
Sample Output 1

false
*/

function sumAndCompare(one, two, three, four, five) {
    var sum1 = one+two+three;
    var sum2 = four+five;
    console.log(sum1 > sum2);
}