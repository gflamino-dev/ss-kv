// index.js

const { DefaultAzureCredential } = require('@azure/identity');
const { SecretClient } = require('@azure/keyvault-secrets');

const KEY_VAULT_URI = process.env.KEYVAULT_URI;

/**
 * Fetch a secret from Azure Key Vault.
 * @param {string} secretName - The name of the secret.
 * @returns {Promise<string>} - The secret value.
 */
async function getSecret(secretName) {
    const credential = new DefaultAzureCredential();
    const client = new SecretClient(KEY_VAULT_URI, credential);
    try {
        const secret = await client.getSecret(secretName);
        return secret.value;
    } catch (error) {
        throw new Error(`Failed to fetch secret: ${error.message}`);
    }
}

module.exports = { getSecret };