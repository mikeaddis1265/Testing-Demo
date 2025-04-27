# Testing Demo with Bug Tracking Integration

This repository demonstrates how to automatically create bugs in a tracking system when tests fail using GitHub Actions.

## How It Works

1. When you push code to the repository, GitHub Actions automatically runs your tests
2. If any tests fail, the workflow captures the failure information
3. The workflow then creates a bug in your bug tracking system via its API

## Setup

### 1. GitHub Secrets Configuration

For the integration to work, you need to set up the following secrets in your GitHub repository:

1. Go to your repository on GitHub
2. Click on Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `BUG_TRACKER_URL`: The URL of your bug tracking system (for public URLs)
   - `BUG_TRACKER_API_KEY`: Your API key for authentication
   - `BUG_TRACKER_PROJECT_ID`: Your project ID in the bug tracking system

### 2. Workflow Files

This repository includes two important workflow files:

- `.github/workflows/bug-tracker.yml`: Main workflow that runs tests and creates bugs
- `.github/workflows/debug.yml`: Debug workflow to help troubleshoot integration issues

### 3. Testing Locally

To test the bug creation functionality locally:

1. Edit the `create-test-bug.sh` script with your bug tracker details
2. Make it executable: `chmod +x create-test-bug.sh`
3. Run it: `./create-test-bug.sh`

## Troubleshooting

If bugs aren't being created in your tracking system:

1. Check the GitHub Actions logs for any error messages
2. Verify your secrets are correctly configured
3. Make sure your bug tracking system API endpoint is accessible from GitHub Actions
4. Try running the debug workflow by pushing to the repository
5. Test the API directly using the `create-test-bug.sh` script

## Files

- `sum.js`: A simple function with deliberate bugs for demonstration
- `sum.test.js`: Test file with tests that will intentionally fail
- `bug-tracker-listener.js`: A Node.js server that can handle GitHub webhooks (alternative approach)
- `create-test-bug.sh`: A shell script to test bug creation directly

## Common Issues

### URL Accessibility

If you're using a localhost URL, GitHub Actions won't be able to access it. Options:

- Use a public URL for your bug tracker
- Set up a service like ngrok to expose your local server
- Use the repository dispatch approach with a local listener

### API Format

Make sure the API request format matches what your bug tracking system expects.
