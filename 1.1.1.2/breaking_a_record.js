/*
You are provided the highest runs,N, ever scored in a cricket match till now, which is current highest record.

You are also given current runs,Mscored by Sachin (Tendulkar) in a today's match.

If Sachin breaks current record in that match, printBroken.
If Sachin could not break that record, printNot Yet.
If Sachin score exactly as current highest record, printWao.

Input
Input Format:

First line contains 2 space separated positive integers,N and M, representing the current highest score and score made by Sachin in that match respectively

Constraints:

1 <= N, M <= 10000


Output
Output one string based on the conditions mentioned


Sample Input 1 

264 200
Sample Output 1

Not Yet
*/

function breakingTheRecord(n, m) {
    if(n == m) {
        console.log("Wao");
    } else if(n < m) {
        console.log("Broken");
    } else {
        console.log("Not Yet");
    }
}