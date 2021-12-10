/*
You are given a number stored in a variable with the nameN

You have to map the following symbols starting from the valueN

The mapping is such that the difference between the values of two characters, is 2

'!','@','#','$','%','^','&','*'

For example, consider the value stored inN = 10, then the required output will be
!-10
@-12
#-14
$-16
%-18
^-20
&-22
*-24


Input
The first and the only line of the input contains the value stored inN

Output
Print the mapping for the symbols starting fromN, as shown in the problem statement

Sample Input 1 

20
Sample Output 1

!-20
@-21
#-22
$-23
%-24
^-25
&-26
*-27
*/
function mapSymbols(N) {
    var char = ['!','@','#','$','%','^','&','*'];
    var data = {};
    
    for(var i=0; i<char.length; i++) {
      data[char[i]] = N;
      N+=2;
    }
    for (k in data) {
      console.log(k + "-" + data[k]);
    }
}
