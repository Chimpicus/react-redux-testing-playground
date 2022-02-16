/* eslint-disable */

const fizzbuzz = require("./fizzbuzz");

test("Fizzbuzz words are returned", () => {
  expect(fizzbuzz).toContain("Fizz", "Buzz", "FizzBuzz");
});

test("Mutliples of five and 3 are absent", () => {
  expect(fizzbuzz).not.toContain(3, 5, 12, 15, 18, 20, 21)
});