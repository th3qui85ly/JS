/*
Given a square matrix of size N x N. Print the Z traversal of the matrix. Refer the figure given below for better understanding.

Image


Input
The first line of the input contains T, the number of test cases. The first line of each test case contains N, the dimension of the square matrix.

Next N lines contains N space separated integers, denoting the values of the matrix.

Constraints

1 <= T <= 10

1 <= N <= 500

1 <= A[i][j] <= 1000


Output
For each test case, print the elements that occur in the Z traversal of the matrix, on a new line.


Sample Input 1 

1
3
1 2 3
4 5 6
7 8 9
Sample Output 1

1 2 3 5 7 8 9 
*/

function zTraversal(N,arr){
    var str = "", i = 0;
  // vertical traversal
  var i = 0;
  while(i < N-1) {
      str += arr[0][i] + " ";
      i++;
    }
  // diagonal traversal in right-to-left
  var j = N-1, k = 0;
  while(j > 0) {
      while(k < N-1) {
          str += arr[k][j] + " ";
          j--;
          k++;
      }
  }
  // vertical traversal
  var l = 0;
  while(l < N) {
      str += arr[N-1][l] + " ";
      l++;
  }
  console.log(str);
}