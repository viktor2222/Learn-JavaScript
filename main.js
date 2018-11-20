// Sieve of Eratosthenes
let arr = [];

for (let i = 2; i < 100; i++) {
  arr[i] = true;
}

let p = 2;

do {

  for(i = 2 * p; i < 100; i += p) {
    arr[i] = false;
  }

  for(i = p + 1; i < 100; i++) {
    if(arr[i]) break;
  }

  p = i;
} while (p * p < 100) {}

let sum = 0;

for(i = 0; i < arr.length; i++) {
  if(arr[i]){
    sum += i;
  }
}

alert(sum);
