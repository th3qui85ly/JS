/*
You are provided a stringS.

Write a program that returns length of the longest palindromic substring of that string.


Input
Input Format

First line contains S, a string.

Constraints

`1 <= Length of string <= 100


Output
Output Format

Output one number which is length of the longest substring which is a palindrome


Sample Input 1 

thisracecarisgood
Sample Output 1

7
Hint

Sample 1 Explanation

The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

Hence the output is 7
*/

function masaiPalSubString(S){
    var l = S.length;
    var maxl = 1, start = 0;
    for(var i = 0; i < l; i++) {
        for(var j = i; j < l; j++) {
            var flag = 1;
            for(var k = 0; k < (j-i+1)/2; k++) {
                if(S[i+k] != S[j-k]) flag = 0;
            }
            if(flag && (j-i+1) > maxl) {
                start = i;
                maxl = j-i+1;
            }
        }
    }
    console.log(maxl);
}