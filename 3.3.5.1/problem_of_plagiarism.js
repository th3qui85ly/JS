/*
The University of Transylvania is conducting the coding fest for the Computer Programmers of the state. Again, because of his extraordinary managerial skills, Dracula is given the task to make arrangements for the competition.

Dracula came to know that N people, are going to participate in the fest, and so he has the job of arranging them on N places for the fest. He gave an ID from 1 to N to each participant, and formulated a strategy to prevent plagiarism.

He decided that all such permutations, in which the sum of IDs of participants, between two specific positions, L and R(L and R inclusive), are odd, need to be rejected. Find the total number of permutations, that will have to be rejected, according to Dracula’s strategy.


Input
The first line of input contains N, the number of people participating in the fest. All the people participating in the fest have ID’s from 1 to N.

The next line contains, the value of L and R, as described in the question.

Constraints
1 <= N <= 10

0 <= L, R <= N-1


Output
Print the number of permutations of N people, that will have to be rejected, according to Dracula’s strategy.


Sample Input 1 

3
0 1
Sample Output 1

4
Hint

The value of N is 3, so IDs of people participating in the fest is {1,2,3}.

All permutations of {1,2,3} where the sum of values between L = 0 and R = 1 are odd, are

{1,2,3}, {2,1,3}, {3,2,1}, {2,3,1},

In each permutation, the sum of all elements lying between index L and R (including L and R), are odd.

therefore the number of permutations that need to be rejected is 4.
*/

let count = 0

function doit(input) {
    let lines = input.split('\n')
    let n = parseInt(lines[0])
    let val = lines[1].split(" ").map(Number);
    let l = val[0]; let r = val[1];
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    
    all_permutations(l, r, arr, 0, [])
 
    console.log(count);
}

function all_permutations(l, r, arr, i, cur_arr) {
    if (i >= arr.length) {
        let ct = 0;
        for (let i = l; i <= r; i++)
            ct += cur_arr[i];
        
        if (ct % 2 === 1)
            count++;
        return
    }
    for (let j = 0; j < arr.length; j++) {
        if (!cur_arr.includes(arr[j])) {
            cur_arr.push(arr[j])
            all_permutations(l, r, arr, i + 1, cur_arr)
            cur_arr.pop()
        }
    }
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
read += input;
});
process.stdin.on("end", function () {
read = read.replace(/\n$/, "");
read = read.replace(/\n$/, "");
doit(read)
});