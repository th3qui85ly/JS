/*
You are given an arrayAofNintegers.

Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.


Input
Input Format :

First line contains N, size of array A.

Second line contains N space separated integers which are elements of A

Constraints :

1 <= N <= 1000


Output
Output one number, total number of pairs pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.


Sample Input 1 

6
1 2 3 5 7 12
Sample Output 1

45
*/

function sumOfSpecialPairs(N,A){
    function prime(n){
        if(n <= 1) {
            return false;
        }
        for(var i = 2; i < n; i++) {
            if(n % i == 0) {
                return false;
            }
        }
        return true;
    }
        var sum = 0;
    for(var i = 0 ; i < N; i++) {
        for(var j = i+1; j < N; j++) {
            if(prime(j-i)) {
                sum += Math.abs(A[i]-A[j]);
            }
        }
    }
    console.log(sum);
}