/*
You are give a strings.

Your task is to write a program that counts the number of consonants (non-vowels characters) present in the string.


Input
Input Format:

First-line contains a stringS

Constraints:

1 <= length of (S) <= 100


Output
Output one number which is the count of number of consonants present in the string.


Sample Input 1 

masaischool
Sample Output 1

6
*/

function countConsonants(s) {
    var vowels = ["a","e","i","o","u"];
    var cons = 0;
    for(var i = 0; i < s.length; i++) {
        if(!vowels.includes(s[i])) {
        cons++;
      }
    }
    console.log(cons);
}