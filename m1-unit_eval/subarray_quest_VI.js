/*
Given an array A with N positive integers. Count the number of subarrays of length greater than 1, such that the sum of the start and end elements of the subarray is even.


Input
First line: Single integer denoting the value of T - the number of test cases.

For each test case:

First line: Single integer denoting the value of N.

Next line: N single space-separated integers denoting the elements of array A.

Constraints:

1 <= T <= 100
1 <= N<= 100

Any array elements is not greater than 100.


Output
For each test case, print in a new line, a single integer denoting the number of subarrays.


Sample Input 1 

1
5
1 2 3 4 5
Sample Output 1

4
Hint

Given test cases,

Test 1:
N = 5.
A: 1 2 3 4 5.
The following subarrays have an even sum of start and end elements :
1. 1 2 3
2. 1 2 3 4 5
3. 2 3 4
4. 3 4 5

Hence the answer is 4.
*/

function subArrV(N, A) {
  var count = 0, i = 0;
  while(i < N) {
      var j = i;
      while(j < N) {
          if((A[i] + A[j]) % 2 == 0 && i != j) {
              count++;
          }
          j++;
      }
      i++;
  }
  console.log(count);
}