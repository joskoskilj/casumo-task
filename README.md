# casumo-task

## Project Overview

**Technology Stack:** JavaScript, Mocha

**Test Scenarios:** Three main test scenarios were defined

1. Default response when sending a request to the base URL.
2. Verify the path variables (:input).
3. Rerun the test until it fails.

### Prerequisites

Before you begin, make sure you have the following prerequisites in place:

- Node.js: Ensure that you have Node.js installed on your system.
- Package Manager: You can use `npm` or `yarn` to install project dependencies.

### Getting Started

Clone this repository to your local machine:

`git clone https://github.com/joskoskilj/casumo-task.git`

Navigate to the project directory.

`cd casumo-task`

Install project dependencies.

`npm install`

### Test Scenarios

Scenario 1: Default Response
This scenario tests the default response when sending a request to the base URL. It checks if the service returns the expected response.

Scenario 2: Verify the Endpoint Response
This scenario verifies the response of the endpoint by sending various input data and checking if the service processes it correctly.

Scenario 3: Rerun the Test Until It Fails
This scenario is designed to repeatedly run the tests until a failure occurs. It is a stress test to ensure the reliability of the service.

### Usage

To run the tests, execute the following command:

`npx mocha`

Monitor the test results in the console.

Review the test code in the test directory for specific test implementations.

