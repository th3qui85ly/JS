/*
Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

Units       Price
0-50        3
51-150      5
150 & above 10

Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

You are given total amount of bill, N , you need to find total unit consumed.


Input
Input Format:

First and the only line of input contains the bill amount

Constraints:

0 <= N <= 1000


Output
Print number of units consumed.


Sample Input 1 

930
Sample Output 1

170
*/

function unitsConsumed(n) {
    var units = 0;
    if(n <= 80) {
        conosole.log(units);
    } else if(n <= 230 && n >80) {
        units += (n-80)/3;
        //n -= units*3;
    } else if(n > 230 && n <= 730) {
        units += (50+(n-230)/5);
    } else {
        units += (150+(n-730)/10);
    }
    console.log(units);
}