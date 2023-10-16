import {
  testDefaultBaseUrlResponse,
  testRetriesUntilFailure,
  testEndpointResponse,
} from "../helpers/helpers_methods.js";
import fixtures from "../helpers/test_data.json" assert { type: "json" };

describe("HTTP Request Test", function () {
  this.timeout(5000);
  it("Verify landing on Default page", async function () {
    //No failure on the default page.
    await testDefaultBaseUrlResponse(
      fixtures.BASE_URL,
      fixtures.default_response
    );
  });
  it("Verify that the response for the endpoint is correct", async function () {
    this.retries(1);
    // possible 500 failure.
    await testEndpointResponse(fixtures.BASE_URL, fixtures.input_endpoint);
  });

  it(`Rerun the test until it fails`, async function () {
    this.timeout(0);
    // Disable test timeout to rerun the test until it fails.
    await testRetriesUntilFailure(fixtures.BASE_URL, fixtures.input_endpoint);
  });
});

