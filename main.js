//Array search
let arr = ["test", 2, 1.5, false];

function find(arr, value) {
  if(arr.indexOf) {
    return arr.indexOf(value)
  }

  for(let i = 0; i < arr.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}

let index = find(arr, false);

alert(index);
