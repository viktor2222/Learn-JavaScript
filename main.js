// Array filtering "in place"
function filterRangeInPlace(arr, a, b) {

  for ( let i = 0; i < arr.length; i++) {
    if(a > arr[i] || arr[i] < b) {
      arr.splice(i--, 1);
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 2);

alert(arr);
