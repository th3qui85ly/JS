/*
You are very good at playing chess since childhood and you knew the rules very much. You have a  10 X 10 chessboard and you want to explore all the possible squares on the board that the knight can be at in exactly N moves.It is placed at (i,j) coordinate initially. For a 10X10 chessboard (1,1) will be the top left corner and (10,10) will be the bottom right corner.

You can refer the following diagram, the knight can move to any of the squares marked as X in 1 move.

Image


Input
Input Format

Input will consist of three space seperated integers i,j and N

Constraints

N < 10


Output
Print a single integer denoting the number of blocks on the chessboard that the knight can be at in exactly N moves.


Sample Input 1 

3 3 1
Sample Output 1

8
*/

function count_it(curi, curj, cur_step, n, ma) {
    if (cur_step > n) {
        return 0
    }
    
    if (curi < 1 || curj < 1 || curi > 10 || curj > 10) {
        return 0
    }
    
    if (cur_step == n) {
        if (!([curi, curj] in ma)) {
            ma[[curi, curj]] = 1
            return 1
        }
        return 0
    }
    
    var ans = 0
    
    ans += count_it(curi + 1, curj + 2, cur_step + 1, n, ma)
    ans += count_it(curi + 1, curj - 2, cur_step + 1, n, ma)
    ans += count_it(curi - 1, curj + 2, cur_step + 1, n, ma)
    ans += count_it(curi - 1, curj - 2, cur_step + 1, n, ma)
    ans += count_it(curi + 2, curj + 1, cur_step + 1, n, ma)
    ans += count_it(curi + 2, curj - 1, cur_step + 1, n, ma)
    ans += count_it(curi - 2, curj + 1, cur_step + 1, n, ma)
    ans += count_it(curi - 2, curj - 1, cur_step + 1, n, ma)
    
    return ans
}

function doit(input) {
    var [i, j, n] = input.split(' ').map(Number)
    
    var ans = count_it(i, j, 0, n, {})
    
    console.log(ans)
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
