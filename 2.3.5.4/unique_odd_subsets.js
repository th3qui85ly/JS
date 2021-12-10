/*
You are given an arrayAof sizeN, and an integerK

You have to find out if there is a subset in the arrayA, such that

1. The number of distinct elements in the subset is `K`
2. The sum of all the elements in the subset is odd
If the above two conditions are true, printTrue, else printFalse


Input
The first line of the input containsN, the size of the array

The next line containsNspace separated integers, denoting the elements in the array

The last line of the input containsK, as mentioned in the problem statement

Constraints

1 <=N<= 18

1 <=A[i]<= 100


Output
If a subset exists, such that both the conditions given in the problem statement is true, printTrue, else printFalse


Sample Input 1 

3 
1 2 3
2
Sample Output 1

True
Sample Input 2 

3
2 2 2
2
Sample Output 2

False
Hint

In the first sample test case, all the subsets of the given array are

[]
[1]
[1, 2]
[1, 2, 3]
[1, 3]
[2]
[2, 3]
[3]

The value ofK = 2. The subset [2,3] has 2 distinct elements, and the sum is 5. Hence, the answer isTrue

In the second test case, there is no subset with sum odd. Therefore, the answer isFalse
*/

function is_subset_possible(arr, k, i, cur_arr) {
    if (i >= arr.length) {
        
        let ma = {}
        let unique_numbers = 0
        let sum = 0
        
        for (let i = 0;i < cur_arr.length;i++) {
            sum += cur_arr[i]
            
            if (!(cur_arr[i] in ma)) {
                unique_numbers++
                ma[cur_arr[i]] = 1
            }
        }
        
        return sum % 2 == 1 && unique_numbers == k
    }
    
    return is_subset_possible(arr, k, i + 1, [...cur_arr, arr[i]]) || is_subset_possible(arr, k, i + 1, cur_arr)
}

function doit(input) {
    
    let lines = input.split('\n')
    
    let n = parseInt(lines[0])
    let arr = lines[1].trim().split(' ').map(Number)
    let k = parseInt(lines[2])
    
    console.log(is_subset_possible(arr, k, 0, []) ? "True" : "False")
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