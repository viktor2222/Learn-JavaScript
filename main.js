//Rewrite loop using map
let arr = ["qwr", "qwerty", "q1w2e3r4", "q"];

let arrLength = arr.map(function(i){
  return i.length;
});

alert( arrLength );
