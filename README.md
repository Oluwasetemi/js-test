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

 Callbacks
 ```js
  test('the data is peanut butter', done => {
    function callback(data) {
      expect(data).toBe('peanut butter');
      done();
    }
    fetchData(callback);
  });
 ```
  Promises
  ```js
  test('the data is peanut butter', () => {
    expect.assertions(1);
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });
  ```
  If you expect a promise to to be rejected use the `.catch` method.
  ```js
  test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(e => expect(e).toMatch('error'));
  });
  ```
  `.resolves / .rejects`
  ```js
  test('the data is peanut butter', () => {
    expect.assertions(1);
    return expect(fetchData()).resolves.toBe('peanut butter');
  });
  ```
  ```js
  test('the fetch fails with an error', () => {
    expect.assertions(1);
    return expect(fetchData()).rejects.toMatch('error');
  });
 ```
 Async/await
 ```js
 test('the data is peanut butter', async () => {
    expect.assertions(1);
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });

  test('the fetch fails with an error', async () => {
    try {
      expect.assertions(1);
      await fetchData();
    } catch (e) {
      expect(e).toMatch('error');
    }
  });
 ```
  Combining `async` and `await` with `.resolves` or `.rejects`
  ```js
  test('the data is peanut butter', async () => {
    expect.assertions(1);
    await expect(fetchData()).resolves.toBe('peanut butter');
  });

  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    await expect(fetchData()).rejects.toMatch('error');
  });
  ```

 Dealing with Network request in a Test using `__mock__` and promise **An Async Example**

 -`.resolves`
 -`async/await`
 -`Error handling`
 -`.rejects`

## [Setup and Tear down](https://facebook.github.io/jest/docs/en/setup-teardown.html)

## [Mock Functions](https://facebook.github.io/jest/docs/en/mock-functions.html)

## [Jest Platform](https://facebook.github.io/jest/docs/en/jest-platform.html)
