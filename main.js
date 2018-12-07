let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {

  return function(i) {
    return i >= a && i <= b;
  }

}
alert( arr.filter(inBetween(3, 5)) );

function inArray(arr) {

  return function(i) {
    return arr.includes(i);
  }

}
alert( arr.filter(inArray([1, 2, 10])) );
