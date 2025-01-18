// test.js

const { getSecret } = require('./index');
const assert = require('assert');

// Test script
(async () => {
    console.log("Starting test...");

    try {
        // Call the function and await its result
        const secret = await getSecret('EMAIL-HOST');
        // Test the result
        assert.strictEqual(secret, 'mail.sutterhealth.org', 'Secret must equal');
        console.log("Test passed: Function returned the expected result.");
    } catch (error) {
        // Handle errors
        console.error("Test failed:", error);
    }
})();