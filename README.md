# Testing Demo

This repository demonstrates automated testing with Jest and integration with a bug tracking system using GitHub Actions.

## Features

- Automated tests using Jest
- GitHub Actions workflow to run tests on every commit
- Integration with bug tracking system to report test failures automatically

## Setup

1. Clone this repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`

## GitHub Secrets

This project requires the following GitHub secrets to be set:

- `BUG_TRACKER_URL`: URL of your bug tracking system API
- `BUG_TRACKER_API_KEY`: API key for authentication
- `BUG_TRACKER_PROJECT_ID`: ID of your project in the bug tracking system
