/**
 * @file test.js
 * @description This script tests the functionality of the `getSecrets` function from `index.js` using assertions to verify correct behavior.
 */

const { getSecrets } = require('./index');
const assert = require('assert');

/**
 * Array representing the expected result for a single secret.
 * @type {Array<Object<string, string>>}
 */
const arr1 = [{ testkey: 'ABC123xyz' }];

/**
 * Array representing the expected result for multiple secrets with one missing.
 * @type {Array<Object<string, (string|null)>>}
 */
const arr2 = [{ testkey: 'ABC123xyz' }, { testkey2: null }];

(async () => {
    console.log("Starting test...");

    try {
        /**
         * Test fetching a single secret.
         * @type {Array<Object<string, string>>}
         */
        const secretsArray1 = await getSecrets('testkey');

        // Assert the result matches the expected value.
        assert.deepStrictEqual(arr1, secretsArray1);

        /**
         * Test fetching multiple secrets including a missing one.
         * @type {Array<Object<string, (string|null)>>}
         */
        const secretsArray2 = await getSecrets(['testkey', 'testkey2']);

        // Assert the result matches the expected value.
        assert.deepStrictEqual(arr2, secretsArray2);

        console.log("Test passed: Function returned the expected result.");
    } catch (error) {
        // Log errors for debugging purposes.
        console.error("Test failed:", error);
    }
})();