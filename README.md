# Testing Demo Project

This is a simple JavaScript project set up to demonstrate the bug tracker integration with GitHub Actions.

## Setup

1. Install dependencies:

   ```
   npm install
   ```

2. Run tests:
   ```
   npm test
   ```

## Bug Tracker Integration

This project includes a GitHub Actions workflow that sends failing test results to a bug tracker system. To use this integration:

1. Add the following secrets to your GitHub repository:

   - `BUG_TRACKER_URL`: The URL of your bug tracker (e.g., `https://your-bug-tracker.com`)
   - `BUG_TRACKER_API_KEY`: Your API key for authorization
   - `BUG_TRACKER_PROJECT_ID`: The ID of your project in the bug tracker

2. Push to the repository, and any failing tests will automatically create bugs in your bug tracker.

## Test Structure

The project includes intentionally failing tests to demonstrate the bug tracking functionality. In a real project, these would represent actual bugs that need to be fixed.
