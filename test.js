/**
 * @file test.js
 * @description This script tests the functionality of the `getSecrets` function from `index.js` using assertions to verify correct behavior.
 */

const { getSecrets } = require('./index');
const assert = require('assert');

/**
 * Object representing the expected result for a single secret.
 * @type {Object<string, string>}
 */
const obj1 = { testkey: 'ABC123xyz' };

/**
 * Object representing the expected result for multiple secrets with one missing.
 * @type {Object<string, (string|null)>}
 */
const obj2 = { testkey: 'ABC123xyz', testkey2: null };

(async () => {
    console.log("Starting test...");

    try {
        /**
         * Test fetching a single secret.
         * @type {Object<string, string>}
         */
        const secretsObj1 = await getSecrets('testkey');

        // Assert the result matches the expected value.
        assert.deepStrictEqual(obj1, secretsObj1);

        /**
         * Test fetching multiple secrets including a missing one.
         * @type {Object<string, (string|null)>}
         */
        const secretsObj2 = await getSecrets(['testkey', 'testkey2']);

        // Assert the result matches the expected value.
        assert.deepStrictEqual(obj2, secretsObj2);

        console.log("Test passed: Function returned the expected result.");
    } catch (error) {
        // Log errors for debugging purposes.
        console.error("Test failed:", error);
    }
})();
