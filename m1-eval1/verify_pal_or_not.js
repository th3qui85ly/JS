/*
You are given two strings stored in variablesstr1andstr2respectively

The length of both the strings is same, and stored in a variable with the nameN

You have to create a new string out of the two strings such that the new string is the concatenated string ofstr1andstr2

Therefore,new_string=str1+str2

Ifnew_stringis a palindrome, printyes, else printno

For example, consider the value stored inN = 3, andstr1 = abc, andstr2 = cba. Then, the value stored innew_string = abccba, which is a palindrome. Therefore, the output isyes

Note : Both the strings contain only lowercase English Alphabets

Input
The first line contains the value stored inN

The second line contains the value stored instr1

The third line contains the value stored instr2


Output
Printyesorno, based on the conditions as mentioned in the problem statement

Sample Input 1 

3
abc
def
Sample Output 1

no
Sample Input 2 

4
abba
abba
Sample Output 2

yes
*/

function verifyPal(N,str1,str2){
    var newstr = str1+str2;
    var arr = newstr.split('');
    var revarr = arr.reverse();
    var res = revarr.join('');
    if(res == newstr) {
        console.log("yes");
    } else {
        console.log("no");
    }
}