/*
You are given a string, whose size is stored in a variable with the nameN

You have to print all the characters in the string in reverse order, on a new line

For example, consider the string stored instr = "nrupul", and the value stored inN = 6, then the required output will be

l
u
p
u
r
n

Input
The first line of the input contains the value stored inN

The next line contains the value stored instr


Output
Print all the characters stored instr, in reverse order, one character per line


Sample Input 1 

6
ankush
Sample Output 1

h
s
u
k
n
a
*/

function printCharReverse(N,str) {
    for(var i=N-1; i>=0; i--) {
        console.log(str[i]);
    }
}