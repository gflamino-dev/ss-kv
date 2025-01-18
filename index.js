// index.js

const { DefaultAzureCredential } = require('@azure/identity');
const { SecretClient } = require('@azure/keyvault-secrets');

const KEY_VAULT_URI = process.env.KEYVAULT_URI;

/**
 * Fetch one or many secrets from Azure Key Vault.
 * @param {string|string[]} secretNames - The name(s) of the secret(s).
 * @returns {Promise<Object[]>} - An array of objects containing key-value pairs of secret names and their values.
 */
async function getSecrets(secretNames) {
    const credential = new DefaultAzureCredential();
    const client = new SecretClient(KEY_VAULT_URI, credential);

    // Ensure secretNames is an array
    const secretsArray = Array.isArray(secretNames) ? secretNames : [secretNames];

    const results = await Promise.all(
        secretsArray.map(async (secretName) => {
            try {
                const secret = await client.getSecret(secretName);
                return { [secretName]: secret.value };
            } catch (error) {
                // Return null value if the secret is not found or any error occurs
                return { [secretName]: null };
            }
        })
    );

    return results;
}

module.exports = { getSecrets };