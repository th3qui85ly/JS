/*
You are given an array, stored in a variable with the namearr

The size of the array is stored in a variable with the namesize

You have to print the reverse traversal of the array

For example, consider the value stored insize = 4, and the array isarr = [1 2 3 4]. Then, the required output will be

4 3 2 1

Input
The first line of the input contains the value stored insize

The next line of the input contains the values stored in the array. All the values are on a single line separated by space


Output
You have to print the reverse traversal of the array, as shown in the problem statement

Sample Input 1 

5
1 3 2 4 5
Sample Output 1

5 4 2 3 1
*/

function reverseArrayTraversal(n, arr){
    var newarr="";
    for(var i=n-1; i>=0; i--) {
        newarr+=arr[i]+" ";
    }
    console.log(newarr);
}