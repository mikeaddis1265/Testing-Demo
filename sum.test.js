const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 2 + 2 to equal 5", () => {
  // This test will fail intentionally
  expect(sum(2, 2)).toBe(5);
});

test("adds multiple numbers 1 + 2 + 3 to equal 6", () => {
  expect(sum(1, 2, 3)).toBe(6);
});

test("returns 0 when no arguments are passed", () => {
  expect(sum()).toBe(0);
});

test("throws error when a non-number is passed", () => {
  expect(() => sum(1, "2", 3)).toThrow('All arguments must be numbers');
});
// Adding a trigger comment
