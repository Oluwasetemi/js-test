# js-test

> I'm enjoying learning [Jest](https://facebook.github.io/jest/).

How to get started with this project.

```bash
npm test
```

To run `sum.js`

```node
node sum.js
```

## [Using matchers](https://facebook.github.io/jest/docs/en/using-matchers.html)

| common matchers | Truthiness        | Numbers                    | Strings         | Arrays            | Exceptions |
| --------------- | ------------      | -------------------        | -----------     | -------------     | -----------|
| `toBe()`        | `toBeNull()`      | `toBeGreaterThan()`        | `toMatch()`     | `toContain()`     | `toThrow()`|
| `toEqual()`     | `toBeUndefined()` | `toBeGreaterThanOrEqual()` | `not.toMatch()` | `not.toContain()` |            |
| `not.toBe()`    | `toBeDefined()`   | `toBeLessThan()`           |                 |                   |            |
|                 | `toBeTruthy()`    | `toBeLessThanOrEqual()`    |                 |                   |            |
|                 | `toBeFalsy()`     | `toBeCloseTo()`             |

  > A further deep look at [Matchers (API Documentation)](https://facebook.github.io/jest/docs/en/api.html)

## [Test asynchronous code](https://facebook.github.io/jest/docs/en/asynchronous.html)

## [Setup and Tear down](https://facebook.github.io/jest/docs/en/setup-teardown.html)

## [Mock Functions](https://facebook.github.io/jest/docs/en/mock-functions.html)

## [Jest Platform](https://facebook.github.io/jest/docs/en/jest-platform.html)
