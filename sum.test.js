const sum = require("./sum");

// This test should pass
test("correctly adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(4);
});

// This test will fail - expecting 4 but function returns 3
test("CRITICAL: Calculator returns wrong result for 2 + 2", () => {
  expect(sum(2, 2)).toBe(4);
});

// This test will fail - expecting 6 but function returns 7
test("URGENT: Critical calculation error for 3 + 3", () => {
  expect(sum(3, 3)).toBe(6);
});

// This test will fail - intentionally expecting wrong result
test("HIGH: Sum function should handle multiple numbers", () => {
  expect(sum(1, 2, 3, 4)).toBe(15); // Actual result is 10
}); 
