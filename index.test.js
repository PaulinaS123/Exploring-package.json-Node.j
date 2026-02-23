function add(a, b) {
  return a + b;
}

// Normal cases
test("2 + 3 = 5", () => expect(add(2, 3)).toBe(5));
test("0 + 0 = 0", () => expect(add(0, 0)).toBe(0));
test("-1 + 1 = 0", () => expect(add(-1, 1)).toBe(0));

// Edge cases
test("Large numbers: 1e9 + 1e9 = 2e9", () => expect(add(1e9, 1e9)).toBe(2e9));
test("Negative large numbers: -1e9 + -1e9 = -2e9", () =>
  expect(add(-1e9, -1e9)).toBe(-2e9));
test("Adding zero: 123 + 0 = 123", () => expect(add(123, 0)).toBe(123));
