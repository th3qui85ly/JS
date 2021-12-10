/*
You are given a number stored in a variable with the nameN

You have to print the first N English smaller case alphabets, mapped with the values starting from 1 toN, including the value stored inN

For example, consider the value stored inN = 3, then the required output will be

a-1
b-2
c-3
Note : The value stored in N will always be less than or equal to 26, and greater than 0 

Input
The first and the only line of the input contains the value stored inN

Output
Print the output as shown in the problem statement

Sample Input 1 

5
Sample Output 1

a-1
b-2
c-3
d-4
e-5
*/

function mapChar(N) {
    var data = {};
    var char = "abcdefghijklmnopqrstuvwxyz";
    for(var i=0; i<N; i++) {
        var ch = char[i];
        data[i]=ch;
        console.log(data[i] + "-" + (i+1));
    }
}