/*
You are given a string stored in a variable with the namestr, and the size of the string is stored in a variable with the nameN

You have to create another string from the given string, such that the characters present at only the odd indexes are considered, in the same order as they are present instr

If the new string formed by using the characters present at odd positions in the stringstr, is a palindrome, printyes, else printno

For example, consider the value stored inN = 6, and the value stored instr = abcdeb. Therefore, the characters present at odd positions areb,d,b. Therefore, the new string formedbdbis a palindrome. Hence, the output becomesyes

Note : The string contains only smaller case English alphabets. Also, the indexing in the string starts from 0

Input
The first line of the input contains the value stored inN

The next line of the input contains the value stored instr


Output
Print the output as per the condition, as mentioned in the problem statement

Sample Input 1 

6
abcdeb
Sample Output 1

yes
*/

function oddPalindrome(N, str){
    var newstr = "";
    for(var i = 0; i < N; i++) {
        if(i % 2 == 1) {
            newstr += str[i];
        }
    }
    var newa = newstr.split('');
    newa = newa.reverse();
    if(newa.join('') == newstr) {
        console.log("yes");
    } else {
        console.log("no");
    }
}