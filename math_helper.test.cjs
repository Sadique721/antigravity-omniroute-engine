const { test } = require('node:test');
const assert = require('node:assert');

function sum(a, b) {
    return a + b;
}

test('verify sum function', () => {
    const result = sum(2, 3);
    assert.strictEqual(result, 5, `sum(2, 3) should equal 5 but got ${result}`);
});