class Stack {
    constructor(max_length) {
        this.arr = []
        this.top = -1
        this.max_length = max_length
    }

    push(x) {
        if (this.top == this.max_length - 1) {
            return "Stack full";
        }
        this.top ++
        this.arr[this.top] = x
    }

    pop() {
        if (this.top == -1) {
            return "No Food";
        }
        var top_ele = this.arr[this.top]
        this.top--
        return top_ele
    }
}

var stk = new Stack()

console.log(stk.pop())
stk.push(5)
stk.push(7)
stk.push(9)
console.log(stk.pop())
console.log(stk.pop())