//function calls itself to solve smaller versions of the same problem.
// 1)Base case - stop conditons when to stop calling itself
// 2)recursive case - part where func calls itself.

//Q) Print n___to____1 using recursion.
//thought process? i have to print the value of n i want to print n, n-1 n-2 ---1 i want to call this in same sequence so i know the base condition wheere to stop
//base-if(n<1) return
//recusive call - print (--n) 0r n= n-1 print(n)

// Q) print 1 to x using recursive
//base case if (x>n) stop
// console.log(x)
//recusive call
// print(++x)
// print(1)

let n = 5;
function fun(x) {
  if (x > n) {
    return;
  }
  console.log(x);
  x = x + 1;
  fun(x);
}

fun(1);

//common mistakes
// 1)missing base case - stack overflow
// 2)not simplyfing the input - never reaches base case
// 3)too deep recusion-long inputs
// 4)keeping in mind the time complexity
