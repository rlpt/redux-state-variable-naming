# Convenient redux state variable naming

Small reducer test to show we can safely reuse a variable name in a reducer without breaking rules of redux immutability.

To run first `npm install`

Then `npm test`

The reducer code lives in the same file as the test so all you need to look at is `reducer.test.js`

#### Quick example

```js
function reducer(state, action) { 
    let result = state;

    if (action.type === "FOO") {
        result = doStuff(result);
        result = moreStuff(result);

        return result;
    }

    return result;
}
```