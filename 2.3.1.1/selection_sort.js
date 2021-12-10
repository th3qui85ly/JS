/*
You are given an array of N unsorted numbers. Your task is to write SELECTION SORT such that numbers present in the array gets sorted.

USING ANY OTHER ALGORITHM OR USING IN BUILT SORT FUNCTION WOULD LEAD TO YOUR DISQUALIFICATION


Input
Input Format:

First line of input contains N

Second line of input contains N numbers

Constraints:

N < 500


Output
Output the numbers given after sorting it in increasing order


Sample Input 1 

5
3 5 0 9 8
Sample Output 1

0 3 5 8 9
*/

function selectionSort(n,arr){
    for(var i = 0; i < n-1; i++) {
        var min = i;
        for(var j = i+1; j < n; j++) {
            if(arr[min] > arr[j]) min = j;
        }
        var temp = arr[i];
        arr[i]= arr[min];
        arr[min] = temp;
    }
    console.log(arr.join(" "));
}
