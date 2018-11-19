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
// describe("checkSpam", function() {
//   it('this is spam "buy ViAgRA now"', function() {
//     assert.isTrue(checkSpam('buy ViAgRA now'));
//   });
//
//   it('this is spam "free xxxxx"', function() {
//     assert.isTrue(checkSpam('free xxxxx'));
//   });
//
//   it('this is`t spam "innocent rabbit"', function() {
//     assert.isFalse(checkSpam('innocent rabbit'));
//   });
// });
// describe("truncate", function() {
//   it('cuts the string to the specified length (including the ellipsis)', function() {
//     assert.equal(truncate('Happy New Year New String old', 20), 'Happy New Year Ne...');
//   });
//
//   it('does not change short lines', function() {
//     assert.equal(truncate('Hello all!', 20), 'Hello all!');
//   });
//
// });
// describe("isEmpty", function() {
//
//   it("the object is now empty", function(){
//     assert.isTrue(isEmpty({}));
//   });
//
//   it("the object now is not empty", function(){
//     assert.isFalse(isEmpty({
//       anything: false
//     }));
//   });
//
// });
// describe("multiplyNumeric", function() {
//
//   it("Multiply numerical properties by 2", function(){
//     let menu = {
//       width: 200,
//       height: 300,
//       title: "My menu"
//     };
//     multiplyNumeric(menu);
//     assert.equal(menu.width, 400);
//     assert.equal(menu.height, 600);
//     assert.equal(menu.title, "My menu");
//   });
//
// });
