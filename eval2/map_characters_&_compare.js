/*
You are given a string, stored in a variablestr, and the length of the string is stored in the variableN

You are also given a number stored in a variable with the nameK

The string contains only lowercase English alphabets, such that each character is mapped to a number starting from 1, so that the mapping is as follows

a - 1
b - 2
c - 3
.
.
.
.
.
.
.
.
z - 26
You have to find the sum of all characters present in the string, and print the output according to the following conditions
1. If value of sum is greater than the value stored in K, print "True", without quotes

2. Else print "False", without quotes
For example, consider the value stored inN = 6, andstr = nrupul, andK = 45. Then, the sum of characters according to the mapping is
n - 14
r - 18
u - 21
p - 16
u - 21
l - 12

Therefore, sum = 14 + 18 + 21 + 16 + 21 + 12 = 102, which is greater than the value stored in K = 45, hence the output is True
Note : The string contains only lower case English Alphabets

Input
The first line of the input contains the value stored inN

The second line of the input contains the value stored instr

The third line of the input contains the value stored inK


Output
PrintTrueorFalseaccording to the condition, mentioned in the problem statement

Sample Input 1 

6
nrupul
45
Sample Output 1

True
*/

function mapCharAndCompare(N, str, K) {
    var data = [];
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var sum = 0;
    for(var i = 0; i < alpha.length; i++) {
        data[alpha[i]] = i+1;
    }
    for(var r = 0; r < alpha.length; r++) {
        for(var j = 0; j < N; j++) {
            if(str[j] === alpha[r]) {
                sum += data[alpha[r]];
            }
        }
    }
    if(sum > K*2) {
        console.log("Yes");
    } else {
        console.log("No");
    }
  }