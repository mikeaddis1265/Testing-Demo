const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("CRITICAL: Calculator returns wrong result for 2 + 2 (updated test)", () => {
  // This test will fail intentionally to trigger bug tracking system
  expect(sum(2, 2)).toBe(5);
});

// Adding a new test that will definitely fail
test("URGENT: Critical calculation error", () => {
  // This test is guaranteed to fail to trigger our bug tracking system
  expect(sum(3, 3)).toBe(100);
}); 