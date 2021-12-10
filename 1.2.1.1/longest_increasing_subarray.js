/*
Given an arrayarrofnintegers.

You need to find out the length of the longest subarray which is strictly increasing i.e, every element is greater than it's the previous element in that subarray.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the number of elements in the array A.

The second line of each test case contains n integers (1 ≤ Ai ≤ 100).


Output
For each test case, print the answer: The length of the longest subarray.


Sample Input 1 

2
2
1 1
6
1 2 1 2 3 1
Sample Output 1

1
3
*/

function longestIncSubArr(n, A) {
  var max = 0, count = 0;
  for(var i = 1; i < n; i++) {
      if(A[i] > A[i-1]) {
          count++;
      } else {
          count = 0;
      }
      if(count > max) {
          max = count;
      }
  }
  console.log(max+1);
}