# ss-kv

`ss-kv` is a lightweight Node.js library for securely fetching secrets from Azure Key Vault. It uses Azure's `DefaultAzureCredential` for authentication and integrates with Azure Key Vault's secret management capabilities.

## Installation

To use `ss-kv`, install it via npm:

```bash
npm install @gflamino-dev/ss-kv
```

## Prerequisites

- An Azure Key Vault instance.
- An Azure identity that has access to the Key Vault (e.g., a Managed Identity, Service Principal, or Azure CLI).
- The `KEYVAULT_URI` environment variable set to your Key Vault URI.

## Setup

Before using this library, ensure that your environment is properly configured to authenticate with Azure Key Vault.

### Authentication

`ss-kv` relies on Azure's `DefaultAzureCredential`, which supports several authentication methods:

- Managed Identity (Azure resources like VMs or App Services).
- Environment variables:
  - `AZURE_CLIENT_ID`
  - `AZURE_TENANT_ID`
  - `AZURE_CLIENT_SECRET`
- Azure CLI credentials (if logged in locally).

For more information on `DefaultAzureCredential`, refer to the [Azure SDK documentation](https://learn.microsoft.com/en-us/javascript/api/@azure/identity/defaultazurecredential).

## Usage

Here is an example of how to use `ss-kv` to fetch a secret from Azure Key Vault:

### Fetching a Secret

```javascript
const { getSecret } = require('ss-kv');

(async () => {
    try {
        const secretName = 'my-secret';
        const secretValue = await getSecret(secretName);
        console.log(`Secret value: ${secretValue}`);
    } catch (error) {
        console.error('Error fetching secret:', error.message);
    }
})();
```

### Environment Variable Configuration

Ensure you set the `KEYVAULT_URI` environment variable to your Key Vault's URI:

```bash
$env:KEYVAULT_URI = "https://kv-test-gil.vault.azure.net"
```

If `KEYVAULT_URI` is not set, the library will return an error.

## API

### `getSecret(secretName)`

Fetch a secret from Azure Key Vault.

#### Parameters
- `secretName` *(string)*: The name of the secret to retrieve.

#### Returns
- A `Promise<string>`: Resolves to the secret value.

#### Errors
Throws an error if the secret cannot be retrieved or if the Key Vault connection fails.

## Dependencies

The library depends on the following Azure SDK packages:

- `@azure/identity`: For authenticating with Azure.
- `@azure/keyvault-secrets`: For interacting with Azure Key Vault.

## Testing

You can test the library by running:

```bash
npm test
```

Ensure that the required environment variables are set before running the tests.

## License

This package is provided under the `UNLICENSED` license. Contact the author for more information on licensing terms.

## Author

Created by Gil Flamino (<gflamino@continuouscareapp.dev>).
