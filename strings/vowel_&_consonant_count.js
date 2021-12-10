/*
You are given a string, stored in a variable with the name,str

The size of the string is stored in another variable with the nameN

You have to find the count of vowels, and consonants in the string, and print it

For example, consider the value stored instr = "nrupul", and the value stored inN = 6, then the vowels, in the string isu, which is present twice. Therefore, the count of vowels becomes 2, and the rest of the characters are consonants, so the count of consonants becomes 4. Therefore, the required output will be

2 4
Note : All characters in the string are lowercase English alphabets

Note : The vowels in the English alphabet are the following - a,e,i,o,u. All the characters are considered as consonants

Input
The first line of the input contains the value stored inN

The next line contains the value stored instr


Output
Print the number of vowels, and number of consonants, present in the string stored instr

Sample Input 1 

6
ankush
Sample Output 1

2 4
*/

function vowelAndConsonantCount(N, str) {
  let vows = "aeiou";
  let consonants = "bcdgfhjklmnpqrstvwxyz"
  let vCount = 0;
  let cCount = 0;
  for(let it=0; it<str.length; it++){
      for(let i=0; i<vows.length;i++){
          if(str[it]==vows[i])vCount++;
      }
      for(let j=0; j<consonants.length; j++){
          if(str[it]==consonants[j])cCount++;
    }   
  }
  console.log(vCount,cCount);
}