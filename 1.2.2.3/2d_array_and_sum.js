/*
You are given an arraymatrixofnrows andmcolumns which contains positive integers and sums.

You need to find occurrences of the sum of three consecutive numbers (i.e x,y, and z ) whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.

Image


Input
Input Format

First line: Three integers n, m and s, where n denotes the number of rows, m denotes the number of columns in the matrix and s is the sum.

Next n lines: Each line contains m characters which contain positive integers only.

Constraints

1 <= n,m < 10

1 <= s <= 50


Output
Print the number of times the sum s appear in the matrix.


Sample Input 1 

3 3 6
3 2 1
2 2 2
1 5 1
Sample Output 1

4
Hint

Sample 1 Explanation

here s is 6 presents 4 times( 2 Horizontal + 1 Vertical + 1 Diagonal)
*/

function twoArrayAndSum(n, m, matrix, s){
    var count = 0;
 for(var i=0;i<n;i++){
   for(var j=0;j<m;j++){
       if(j<=m-3){
         temp = matrix[i][j] + matrix[i][j+1] + matrix[i][j+2]
           if(temp == s){
             count++;
           }
       }
              if( i<=n-3 && j<=m-3 ){
           temp = matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2]
             if(temp == s){
               count++;
             }
          }
          if(j<=m-3 && i>=2){
           temp = matrix[i][j] + matrix[i-1][j+1] + matrix[i-2][j+2]
             if(temp == s){
               count++
               }
         }
         if(i<=n-3){
           temp = matrix[i][j] + matrix[i+1][j] + matrix[i+2][j];
           if(temp==s){
             count++;
           }
         }
        
       }
     }
 console.log(count);
}