//Filter range
function filterRang(arr, a, b) {

  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= a && arr[i] <= b) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

let arr = [1, 3, 5, 7, 20];

let filter = filterRang(arr, 3, 7);

alert(filter);
