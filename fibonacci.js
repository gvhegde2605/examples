const NUMBER = 5;  //Input number


const fibonacci = (n, memo={}) => { //pure fibonacci function with memoization
  if(n <= 0)
    return 0;
  if(n === 1)
    return 1;
  if(memo[n]) 
    return memo[n];
  return memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
};

const fib_sequence = (NUMBER) => { //returns fibonaccci sequence FROM 0 UPTO `NUMBER` 
  const memo = {};
  const seq = [];
  for(let i=0; i<= NUMBER; i++) {
    memo[i] = fibonacci(i,memo);
    seq[i] = memo[i];
  };
  return seq;
};


const sequence = fib_sequence(NUMBER);
const answer = fibonacci(NUMBER);

//console.log(sequence);
//console.log(answer);

