const assert = require("assert");
const calcul = require("./0-calcul.js");

const testCases = [
  { a: 12, b: 12, expected: 24 },
  { a: 12.4, b: 12.6, expected: 25 },
  { a: -1.5, b: 1.5, expected: 1 },
  { a: 0, b: 0, expected: 0 },
];

describe("Test for calculateNumber function", function () {
  testCases.forEach(({ a, b, expected }) => {
    it(`should return ${expected} for inputs ${a} and ${b}`, function () {
      const result = calcul.calculateNumber(a, b);
      assert.strictEqual(result, expected);
    });
  });
});

// const assert = require("assert");

// const calcul = require("../0-calcul.js");

// describe("test for calculate number function", function () {
//   it("should return the sum of two numbers after rounding them", function () {
//     const sum = calcul.calculateNumber(12, 12);
//     const sum_1 = calcul.calculateNumber(2.3, 2.3);
//     assert.equal(sum, 24);
//     assert.equal(sum_1, 4);
//   });
// });
