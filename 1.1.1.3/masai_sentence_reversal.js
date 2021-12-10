/*
You are given a strings.

You need to write a program that reverses the order/sequence in which words are present in the sentence keeping the case of each character preserved (upper case character should remain upper and lower case character is lower case).

(Refer to the sample test case for better understanding)


Input
Input Format

You are given a stringson first line

Constraints

There is at-least one word present in this string.


Output
Print resultant reversed string as mentioned in description.


Sample Input 1 

A Transformation in education
Sample Output 1

education in Transformation A
*/

function masaiSentenceReverse(s) {
    var a = s.split(' ');
    a.reverse();
    console.log(a.join(" "));
}