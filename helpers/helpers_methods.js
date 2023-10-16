import assert from "assert";
import axios from "axios";

/**
 * Remove vowels from a string while preserving numbers and not special characters.
 * @param {string} str - The input string to process.
 * @returns {string} - The input string with vowels removed and numbers preserved.
 */
export function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, "");
}

/**
 * Test the response of a default base URL.
 * @param {string} base_url - The default base URL to test.
 * @param {string} base_url_response - The expected response for the base URL.
 */
export async function testDefaultBaseUrlResponse(base_url, base_url_response) {
  try {
    const response = await axios.get(base_url);
    assert.strictEqual(response.data, base_url_response);
    assert.strictEqual(response.status, 200);
  } catch (error) {
    assert.fail(error.message);
  }
}

/**
 * Verify  the response of an HTTP endpoint (without vowels)
 * @param {string} base_url - The base URL for the HTTP endpoint.
 * @param {string} endpoint - The specific endpoint to test.
 */
export async function testEndpointResponse(base_url, endpoint) {
  try {
    const response = await axios.get(base_url + endpoint);
    assert.strictEqual(response.data, removeVowels(endpoint));
  } catch (error) {
    assert.fail(error.message);
  }
}

/**
 * Test an HTTP endpoint repeatedly until failure.
 * @param {string} base_url - The base URL for the HTTP endpoint.
 * @param {string} endpoint - The specific endpoint to test.
 */
export async function testRetriesUntilFailure(base_url, endpoint) {
  while (true) {
    try {
      const response = await axios.get(base_url + endpoint);
      assert.strictEqual(response.status, 200);
      console.log(response.status);
    } catch (error) {
      console.log(error.response.status);
      assert.fail(error.message);
    }
  }
}

