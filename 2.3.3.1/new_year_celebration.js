/*
New Year Celebration is coming near and DG is hosting a party for it, To make sure the party goes well she wants order in the party.There are two counters one of ice-cream and other for Cold-drinks.

On ice-cream counter the line was formed in form of Queue and on drinks counter the line was formed in order of Stacks.

She gave the management of the party to NV, NV made a plan to ask the manager following types of query.

Query types:

1 X : Number X enter the Queue.

2 X : Number X enter the Stack.

3: Output whoever is in-front of the queue.

4: Output whoever is on-top of the stack

5: Which person is in-front of queue get out of queue and enters the stack.

Note: If the Queue or Stack is empty then output "-1"


Input
Input Format :

The first line of input will contain Q, which is the number queries.

The next Q lines will different queries based upon query types given.



Constraints :

1<=Q<=10^5

1<=X<=10^9


Output
Output will consist of integers based upon Query types.If Query type is 3 then Output whoever is in-front of the queue, if Query type is 4 Output whoever is on-top of the stack.


Sample Input 1 

7
1 4
2 3
1 2
3
4
5
4
Sample Output 1

4
3
4
*/

function runProgram(input) {
    input = input.split("\n");
    var n = +input[0];
    var que = new Queue();
    var st = new Stack();
    for (var i = 1; i < input.length; i++) {
        var line = input[i].split(" ").map(Number);
        if (line[0] == 1) {
            que.enqueue(line[1]);
        } else if (line[0] == 2) {
            st.push(line[1]);
        } else if (line[0] == 3) {
            console.log(que.get_front());
        } else if (line[0] == 4) {
            console.log(st.peek());
        } else if (line[0] == 5) {
            var item = que.dequeue();
            st.push(item);
        } else if (que.isEmpty() == true || st.isEmpty() ==  true) {
            console.log("-1");
        }
    }
  }
  
  class Stack {
          constructor() {
              this.arr = [];
          }
          
          push(ele) {
              this.arr[this.arr.length] = ele;
          }
          
          pop() {
              if(this.arr.length > 0) {
                  this.arr.length--;
              } else {
                  return -1;
              }
          }
          
          peek() {
              if(this.arr.length == 0){
                  return -1;
              }
              return this.arr[this.arr.length - 1];
          }
          
          isEmpty() {
              if(this.arr.length == 0) {
                  return true;
              }
              return false;
          }
  }
      
  class Queue {
    constructor () {
      this.Q = [];
      this.max_size = 100000;
      this.front = -1;
      this.rear = 0;
    }
  
    get_front() {
      if (this.Q.length == 0) {
        return -1;
      }
      return this.Q[0];
    }
  
    enqueue(x) {
      this.Q.push(x);
    }
  
    dequeue() {
      if (this.Q.length == 0) {
          return -1;
      }
      return this.Q.shift();
    }
    
    isEmpty() {
        return this.Q.length == 0;
    }
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
  
  