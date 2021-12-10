/*
You are provided an arrayarrwhich hasnintegers.

You need to find the count of all such integers in array which are larger than its neighbours.

Neighbours of a integer in array are its adjacent integers. Check hint for more understanding.


Input
Input Format :

First line of input contains N which is the number of elements present in the array.

Second line contains N integer which are the elements of the array A.

Constraints :

2 <= N <= 100


Output
Output one integer which is the count of such integers.


Sample Input 1 

8
1 2 3 4 2 1 6 5
Sample Output 1

2
*/

function competeWithNeighbour(n, arr){
    var count = 0;
    for(var i = 0; i < n; i++) {
        if(i==0 && arr[i] > arr[i+1]) {
            count++;
        }
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
            count++;
        }
        if(i==n-1 && arr[i] > arr[i-1]) {
            count++;
        }
    }
    console.log(count);
}