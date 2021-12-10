/*
There is a long waiting line of integers waiting for their turn to buy ticket for a cricket match.

There are N operations that can be performed on this line. The operations are of following type:

E x : Integer x enters the queue (For such operation, print the new length of the queue.)

D: The integer at front buys ticket and leaves the queue (For such operations, print the element that left the queue and the new size of the queue separated by space. If there is no element in the queue then print -1 in place of deleted element.)


Input
Input Format :

First line consists of a single integer denoting N

Each of the following N lines contain one of the operation as described above.



Constraints :

1<=N<=100




Output
For each enqueue operation print the new size of the queue.

And for each dequeue operation print two integers, deleted element (-1, if queue is empty) and the new size of the queue.


Sample Input 1 

5
E 2
D
D
E 3
D
Sample Output 1

1
2 0
-1 0
1
3 0
*/

function runProgram(input) {
    input = input.trim().split('\n');
    var stk = new Queue();
    for (var i = 1; i < input.length; i++) {
        var ln = input[i].trim().split(" ");
        if( ln[0] == 'E') {
            stk.enqueue(+ln[1]);
            console.log(stk.len());
        } else if (ln[0] == 'D') {
            console.log(stk.dequeue() + ' ' + stk.len());
        }
    }
}


class Queue {
  constructor (size) {
    this.q = new Array();
    this.f = 0;
    this.r = 0;
  }

  isEmpty() {
      return this.f == this.r
  }    
    
  get_front() {
    if (this.isEmpty()){
        return '-1';
    }
    return this.q[this.f];
  }

  enqueue(x) {
    this.q[this.r] = x;
    this.r++
  }

  dequeue() {
    if (this.isEmpty()) {
        return -1;
    }
    var temp = this.q[this.f];
    this.f++;
    if (this.f == this.r) {
        this.f = 0;
        this.r = 0;
    }
    return temp;
  }
  
  len() {
      return this.r - this.f;
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
    
    runProgram(read)
});