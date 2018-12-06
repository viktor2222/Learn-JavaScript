function sumTo(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert(sumTo(100));

function sumTo(n) {
  if(n == 1) {
    return n;
  } else {
    return n = n + sumTo(n-1);
  }

}

alert(sumTo(1));

function factorial(n) {
  if(n == 1) {
    return n;
  } else {
    return n = n * factorial(n - 1);
  }
}
alert(factorial(5));

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(3) );
alert( fib(7) );
alert( fib(77) );
