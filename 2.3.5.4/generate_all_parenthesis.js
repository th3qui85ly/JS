/*
Generate all valid parenthesis of string length 2n.


Input
1<=T<=10

1<=N<=10


Output
output N, the size of the array

and for the next  N lines all valid parantheses as described

NOTE -> SORT THE LIST BEFORE PRINTING ( print in sorted lexicographical order)


Sample Input 1 

3
3
2
1
Sample Output 1

5
((()))
(()())
(())()
()(())
()()()
2
(())
()()
1
()
*/

function is_valid(s) {
    let stk = []
    for (let i = 0;i < s.length;i++) {
        if (s[i] == '(') {
            stk.push(s[i])
        } else {
            if (stk.length == 0) {
                return false
            }       
            stk.pop()
        }
    }  
    return stk.length == 0
}

function get_all(n, cur, all_s) {
    if (n == 0) {
        if (is_valid(cur)) {
            all_s.push(cur)
        }
        return
    }
    get_all(n - 1, cur + '(', all_s)
    get_all(n - 1, cur + ')', all_s)
}

function doit(input) {
    let lines = input.trim().split('\n')
    let t = parseInt(lines[0])
    for(let i = 1;i <= t;i++) {
        let n = parseInt(lines[i])        
        let ans = []
        get_all(2 * n, "", ans)
        console.log(ans.length)
        ans.sort()
        for(let j = 0;j < ans.length;j++) {
            console.log(ans[j])
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