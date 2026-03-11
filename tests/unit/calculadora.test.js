const calculator = require("../../models/calculator");

const sumFnName = calculator.sum.name;

test(`${sumFnName}(): should return a value greater than zero`, () => {
  expect(calculator.sum(1, 2)).toBe(3);
});

test(`${sumFnName}(): should return a value lower than zero`, () => {
  expect(calculator.sum(-1, -2)).toBe(-3);
});

test(`${sumFnName}(): should return a value equal zero`, () => {
  expect(calculator.sum(-1, 1)).toBe(0);
});

test(`${sumFnName}(): should return 105`, () => {
  expect(calculator.sum(5, 100)).toBe(105);
});

test(`${sumFnName}(): "banana" + 100 should return NaN`, () => {
  expect(calculator.sum("banana", 100)).toBe(NaN);
});
