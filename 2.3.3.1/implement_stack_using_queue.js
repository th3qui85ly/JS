/*
Complete the function of push and pop and top for a stack, queue object names are Q1 and Q2.

Expected Time complexity is O(N) for push and O(1) for pop and top.


Input
This is a function complete problem. You just have to complete the function. The input format given below is just for your understanding.

The first line of the input contains Q, the number of queries to be executed.

Each query X is of type X = 0, X = 1 or X = 2.

Query X = 0 indicates, an element Y to be pushed into the stack.

Query X = 2 indicates, an element to be popped off the stack.

Query X = 1 indicates, an element to be peeked from the stack.


Output
For each query of type X = 1, print the value at the front of the queue.


Sample Input 1 

6
0 1
0 2
0 3
1 
2
1
Sample Output 1

3
2
*/


class Queue {
    constructor() {
        this.q = new Array(50005)
        this.f = 0
        this.r = 0
    }
    
    is_empty() {
        return this.f == this.r
    }
    
    get_front() {
        if (this.f == this.r) {
            return '-'
        }
        return this.q[this.f]
    }
    
    eq(x) {
        this.q[this.r] = x
        this.r++
    }
    
    dq() {
        var temp = this.q[this.f]
        this.f++
        
        if (this.f == this.r) {
            this.f = 0
            this.r = 0
        }
        
        return temp
    }
}

class Stack {
    constructor() {
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    pop() {
        return this.q1.dq()
    }

    push(x) {
        this.q2.eq(x)

        while(!this.q1.is_empty()) {
            this.q2.eq(this.q1.dq())
        }

        var temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
    }

    peek() {
        return this.q1.get_front()
    }
}