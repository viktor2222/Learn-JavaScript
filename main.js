function searchArr(arr) {
  let maxSum = 0;

  for(let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;

    for (var j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( searchArr([-1, 2, 3, -9]) );
alert( searchArr([-1, 2, 3, -9, 11]) );
alert( searchArr([-2, -1, 1, 2]) );
alert( searchArr([1, 2, 3]) );
alert( searchArr([100, -9, 2, -3, 5]) );
