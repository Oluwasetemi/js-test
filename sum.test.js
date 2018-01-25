const sum = require("./sum");

test("addd 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
test("expect 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4);
});
test("two plus two", () => {
  const value = sum(2,2);
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('but there is a "stop" in Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  
  test('the shopping list has beer on it', () => {
    expect(shoppingList).toContain('beer');
  });