const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("CRITICAL: Calculator returns wrong result for 2 + 2 (updated test)", () => {
  // This test will fail intentionally with a more descriptive name
  // This failure is designed to trigger our bug tracking system
  // Adding another comment to trigger a commit
  expect(sum(2, 2)).toBe(5);
}); 