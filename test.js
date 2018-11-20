describe("filterRang", function() {
  it("The function does not change the arr", function() {
    let arr = [1, 3, 5, 7, 20];

    filterRang(arr, 1, 5);
    assert.deepEqual(arr, [1, 3, 5, 7, 20]);
  });

  it("returns a new array that contains only numbers from arr in the range from a to b", function() {
    let arr = [1, 3, 5, 7, 20];

    let newArr = filterRang(arr, 3, 20);
    assert.deepEqual(newArr, [3, 5, 7, 20]);
  });
});
