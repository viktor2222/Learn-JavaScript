let arr = [5, 2, 1, -10, 8];

function compareReversed(a, b) {
  return b - a;
}

arr.sort(compareReversed);

alert( arr );

let arrays = ["HTML", "JavaScript", "CSS"];

let arrSorted = arrays.slice().sort();

arrSorted.reverse();

alert( arrSorted );
alert( arrays );
