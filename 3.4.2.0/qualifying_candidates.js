/*
Recently Masai School organized a contest for admissions and thousand of candidates appeared for it. You are responsible for declaring the results out. Given an array, A of size n which contains the score of the n candidates who appeared for the test. You are also provided with a cutoff rank from Masai School up to which they would be taking candidates in their courses. Find the number of students who will be selected from this contest.

Note that candidates with equal scores will have equal ranks, but the candidate with the next lowest score will be ranked based on the position within the list of all candidates' scores.

For example, if there are five candidates, and four candidates tie for first place, their ranks would be 1,1,1,1 and 5.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains 2 integers n and k (1 ≤ n ≤ 100000, 1 ≤ k ≤ n) — the number of candidates and the cutoff rank.

The second line of each test case contains n integers (1 ≤ Ai ≤ 100) - The elements of the array A.


Output
For each test case, print the answer: The number of candidates selected.


Sample Input 1 

1
5 3
2 2 2 2 1
Sample Output 1

4
Hint
There are five candidates, and four candidates tie for first place, their ranks would be 1,1,1,1 and 5. Hence 4 people qualify.
*/

function runProgram(input) {
    input = input.trim().split('\n');
    for (let i = 1; i < input.length; i+=2) {
        let ln = input[i].split(" ").map(Number);
        let n = ln[0]; let k = ln[1];
        let arr = input[i+1].split(" ").map(Number);
        console.log(rankIt(arr, n, k));
    }
}

function rankIt(arr, n, k) {
    arr.sort(function(a, b) {return b-a;});
    
    let rank = 1, count = 0;
    let pre = arr[0];
    
    for (let sc of arr) {
        if (sc < pre)
            rank = count + 1;
        
        if (rank > k)
            break;
        
        count++;
        pre = sc;
    } 
    return count;
}


if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function(input) {
    read += input;
  });
  process.stdin.on("end", function() {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function() {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}