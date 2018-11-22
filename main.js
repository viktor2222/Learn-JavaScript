//Random order in an array
let arr = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

arr.sort(compareRandom);

alert( arr );
