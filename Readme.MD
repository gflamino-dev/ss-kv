# @gflamino-dev/ss-kv

## Overview

`@gflamino-dev/ss-kv` is a Node.js library designed to fetch secrets from Azure Key Vault. This library uses the `@azure/identity` and `@azure/keyvault-secrets` packages to securely authenticate and retrieve secrets from your Azure Key Vault instance.

## Installation

To install this library, you need to have access to GitHub's npm registry. Use the following command:

```bash
npm install @gflamino-dev/ss-kv --registry=https://npm.pkg.github.com
```

Ensure that your `.npmrc` file includes the following configuration to properly route packages from GitHub's npm registry:

```bash
registry=https://registry.npmjs.org/
@gflamino-dev:registry=https://npm.pkg.github.com
```

## Usage

Here’s an example of how to use the library to fetch secrets from Azure Key Vault:

### Fetching a Single Secret

```javascript
const { getSecrets } = require('@gflamino-dev/ss-kv');

(async () => {
    const secretName = 'exampleSecret';
    const result = await getSecrets(secretName);
    console.log(result); // Output: [{ exampleSecret: 'secretValue' }]
})();
```

### Fetching Multiple Secrets

```javascript
const { getSecrets } = require('@gflamino-dev/ss-kv');

(async () => {
    const secretNames = ['exampleSecret1', 'exampleSecret2'];
    const result = await getSecrets(secretNames);
    console.log(result);
    // Output: [{ exampleSecret1: 'value1' }, { exampleSecret2: 'value2' }]
})();
```

### Handling Missing Secrets

If a secret is not found, the library will return an object with the secret name and a `null` value:

```javascript
const { getSecrets } = require('@gflamino-dev/ss-kv');

(async () => {
    const secretNames = ['validSecret', 'missingSecret'];
    const result = await getSecrets(secretNames);
    console.log(result);
    // Output: [{ validSecret: 'value1' }, { missingSecret: null }]
})();
```

## Testing

To run the tests for this library, use the following command:

```bash
npm test
```

The test script (`test.js`) verifies the correctness of the `getSecrets` function, including scenarios for:

- Fetching a single secret.
- Fetching multiple secrets.
- Handling missing secrets.

### Example Test Cases

#### Single Secret Test

```javascript
assert.deepStrictEqual(await getSecrets('testkey'), [{ testkey: 'ABC123xyz' }]);
```

#### Multiple Secrets Test

```javascript
assert.deepStrictEqual(await getSecrets(['testkey', 'testkey2']), [
    { testkey: 'ABC123xyz' },
    { testkey2: null }
]);
```

## Configuration

Make sure to set the `KEYVAULT_URI` environment variable to the URI of your Azure Key Vault instance before using this library:

```bash
$env:KEYVAULT_URI = "https://kv-test-gil.vault.azure.net"
```

## Dependencies

This library depends on the following packages:

- [`@azure/identity`](https://www.npmjs.com/package/@azure/identity): For Azure authentication.
- [`@azure/keyvault-secrets`](https://www.npmjs.com/package/@azure/keyvault-secrets): For interacting with Azure Key Vault secrets.

## License

This project is licensed as `UNLICENSED`.

## Author

Created and maintained by **Gil Flamino** (<gflamino@continuouscareapp.dev>).

## Repository

[GitHub Repository](https://github.com/gflamino-dev/ss-kv)

