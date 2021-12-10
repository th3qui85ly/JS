/*
India & Australia just finished a Test Series, which was part of the inaugural world test championship. The points earned by the two teams are stored in the variable with the nameIndPoints, AusPoints, respectively

You are also given the matches played by the two teams, stored in variables with the namesIndMatches, AusMatchesrespectively

Now, you have to print the winner between the two teams based on the following conditions`

If the points scored by India are greater than the points scored by Australia, print "India", without quotes

If the points scored by Australia are greater than the points scored by India, print "Australia", without quotes

If the points of the two teams are same, and India has played lesser matches then Australia, print "India", without quotes

If the points of the two teams are same, and Australia has played lesser matches then India, print "Australia", without quotes

If the points of the two teams are same, and the number of matches played by the two teams are also same, then print "Play another game!", without quotes

`


Input
The first line of the input contains the value stored in the variable with the nameIndPoints

The second line of the input contains the value stored in the variable with the nameAusPoints

The third line of the input contains the value stored in the variable with the nameIndMatches

The fourth line of the input contains the value stored in the variable with the nameAusMatches


Output
Print the output, as per the conditions as mentioned in the problem statement

Sample Input 1 

580
500
12 
10
Sample Output 1

India
Sample Input 2 

500
500
12 
12
Sample Output 2

Play another game!
*/

function worldTestChampion(IndPoints, AusPoints, IndMatches, AusMatches) {
  if(IndPoints > AusPoints) {
      console.log("India");
  } else if (IndPoints < AusPoints) {
      console.log("Australia");
  } else if(IndPoints == AusPoints && IndMatches < AusMatches) {
      console.log("India");
  } else if(IndPoints == AusPoints && IndMatches > AusMatches) {
      console.log("Australia");
  } else {
      console.log("Play another game!");
  }
}