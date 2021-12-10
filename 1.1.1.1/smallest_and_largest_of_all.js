/*
Given an array,arrwhich hasNintegers.

You need to print the smallest and largest element present in the array each on new lines.


Input
Input Format

The first line contains an integerN.

The second line containsNspace separated integers, which are integers of arrayarr.

Constraints

1 <= N <= 100


Output
Output Format

One first line, print minimum of all elements.

On the second line, print the maximum of all elements.


Sample Input 1 

4
-2 0 8 4
Sample Output 1

-2
8
*/

function smallestAndLargestOfAll(n, arr){
    for(var i =0;i<arr.length;i++){
        for(var j= i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var swap = arr[i];
                arr[i] = arr[j];
                arr[j] = swap;
            }
        }
    }
    console.log(arr[0]);
    console.log(arr[n-1]);
}