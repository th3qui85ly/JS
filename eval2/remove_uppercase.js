/*
You are given a string, stored in a variable with the namestr, while the variableNstores the size of the string

You have to remove all the characters in the string which are uppercase English Alphabets, and print the resultant string

For example, consider the value stored instr = "MasAi", and N = 5

The charactersMandAare uppercase, and hence we remove them. Therefore, the required output becomesasi


Input
The first line of the input contains the value stored inN

The second line of the input contains the value stored instr


Output
Print the updated string after removing all the uppercase characters

Sample Input 1 

5
MasAi
Sample Output 1

asi
*/

function removeUppercase(N, str) {
    var res = "";
    for(var i = 0; i < N; i++) {
        if(str[i] !== str[i].toUpperCase()) {
            res += str[i];
        }
    }
    console.log(res);
  }