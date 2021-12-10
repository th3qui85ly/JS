/*
You are given a integernum.

You need to printYesif that integer is a palindrome or else printNo.

A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward, such asmadamorracecar.


Input
Input Format

First line containsnum, a integer.

Constraints

1 <= num <= 1000000


Output
PrintYesorNodepending upon the integer.


Sample Input 1 

1221
Sample Output 1

Yes
*/

function detectPalindrome(num){
    var str = num.split('');
    var arr = str.reverse();
    var rev = arr.join('');
    
    if(rev == num) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}