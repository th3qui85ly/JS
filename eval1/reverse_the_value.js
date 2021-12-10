/*
You are given a number stored in a variable with the namenum

You have to reverse the number

For example, the number stored in the variablenum = 971, then the required output will be179

Note : The number does not contain any leading zeroes

Input
The first and the only line of input contains the value stored in the variablenum


Output
Reverse the number, and print it, as given in the problem statement


Sample Input 1 

971
Sample Output 1

179
Hint

In the sample test case, the value stored innum = 971, therefore, the required output becomes,179
*/

function reverseTheValue(num) {
    var l=String(num);
    var arr=[];
    var rev = "";
    for(var i=0; i<l.length; i++) {
        arr.push(l[i]);
        num=num%(10**i+1);
    }
    for(var j=l.length-1; j>=0; j--) {
        rev+=arr[j];
    }
    console.log(rev);
}