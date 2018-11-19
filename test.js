// describe("pow", function() {
//
//   describe("raises x to power n", function() {
//
//     function makeTest(x) {
//       let expected = x * x * x;
//       it(`${x} in the power 3 is ${expected}`, function() {
//         assert.equal(pow(x, 3), expected);
//       });
//
//     }
//
//     for (let x = 1; x <= 5; x++) {
//       makeTest(x);
//     }
//
//   });
//
//   // ... more tests to follow here, both describe and it can be added
// });
// describe("ucFirst", function() {
//
//   describe("uppercase first character", function() {
//
//     it(`${str}`, function() {
//       assert.equal(ucFirst(str), str[0].toUpperCase() + str.slice(1));
//     });
//
//   });
//
//   // ... more tests to follow here, both describe and it can be added
// });
describe("checkSpam", function() {
  it('this is spam "buy ViAgRA now"', function() {
    assert.isTrue(checkSpam('buy ViAgRA now'));
  });

  it('this is spam "free xxxxx"', function() {
    assert.isTrue(checkSpam('free xxxxx'));
  });

  it('this is`t spam "innocent rabbit"', function() {
    assert.isFalse(checkSpam('innocent rabbit'));
  });
});
