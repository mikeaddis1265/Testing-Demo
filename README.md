# Testing Demo with Bug Tracking Integration

This repository demonstrates how to automatically create bug reports when tests fail.

## How it Works

1. Tests run automatically on every push through GitHub Actions
2. The workflow captures test failures
3. Failed tests trigger automatic bug creation in your bug tracking system

## Required Secrets

Set these in your GitHub repository settings under Secrets:

- `BUG_TRACKER_URL`: Your bug tracking system API endpoint
- `BUG_TRACKER_API_KEY`: Authentication key
- `BUG_TRACKER_PROJECT_ID`: Your project identifier
