/*
Dr. Strange has n distinct integers from 1 to n. He uses his mind power and time stone to calculate all the possible subsets using the given n integers. Generate all the possible subsets.


Input
The first line of the input contains one integer n (1 ≤ n ≤ 10).


Output
Print each possible subset in a new line.

Elements within the set must be in non-decreasing order. All the subsets must be distinct and sorted in ascending order or lexicographically. For an empty subset just print a blank line.


Sample Input 1 

3
Sample Output 1


1 
1 2 
1 2 3 
1 3 
2 
2 3 
3 
*/

function runProgram(input){
   input=input.split("\n");
   var n=+input[0].trim();
   var arr=[];
   strange,arr);
}
function strange(pos,n,arr){
    console.log(arr.join(" "));
    for(var i=pos;i<n;i++){
        arr.push(i+1);
        recur(i+1,n,arr);
        arr.pop();
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read="";
process.stdin.on("data",function(input){
    read+=input;
});
process.stdin.on("end",function(){
    read=read.replace(/\n$/, "");
    read=read.replace(/\n$/, "");
    runProgram(read);
});