/*
Given an array of integers of length n and a positive integer K, the task is to find the count of the longest possible subarrays with the sum of its elements not divisible by K.


Input
Input Format

First line contains n and k separated by space

Second line contains strings of length n.

Constraints

1 <= n <=10^6

1 <= k <= 100


Output
Print count of sub arrays.


Sample Input 1 

4 3
2 3 4 6
Sample Output 1

1
Hint

Sample 1 Explanation

There is only one longest possible subarray of size 3 i.e. {3, 4, 6} having a sum 13, which is not divisible by K = 3.
*/

function runProgram(input) {
  input = input.split("\n");
  let l1 = input[0].split(" "); let size = (+(l1[0])); let sum = (+(l1[1]));
  var arr = input[1].split(" ").map(Number);
  console.log(subarraySum(size, sum, arr));
}

function subarraySum(size, sum, arr) {
    let i, s = 0;
    for(i = 0; i < size; ++i)
    {
        s += arr[i];
    }
    if ((s % sum) != 0)
    {
        return 1;
    }
    else
    {
        let start = 0;
        while (start < size && arr[start] % sum == 0)
        {
            ++start;
        }
 
        let end = size - 1;
        while (end >= 0 && arr[end] % sum == 0)
        {
            --end;
        }
 
        let len, wsum = 0, count = 0;
        if (start == size)
        {
            return -1;
        }
        else
        {
            len = Math.max(size - 1 - start, end);
        }
 
        for(i = 0; i < len; i++)
        {
            wsum += arr[i];
        }
 
        if (wsum % sum != 0)
        {
            count++;
        }

        for(i = len; i < size; i++)
        {
            wsum += arr[i];
            wsum -= arr[i - len];
             
            if (wsum % sum != 0)
            {
                count++;
            }
        }
        return count;
    }
}

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}