// Partial amount array
function getSums(arr) {
  let result = [];
  if (!arr.length) return result;


  let totalSum = arr.reduce(function(sum, item) {
    result.push(sum);
    return sum + item;
  });
  result.push(totalSum);

  return result;
}

alert(getSums([1,2,3,4,5]));
alert(getSums([-2,-1,0,1]));
