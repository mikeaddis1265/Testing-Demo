#!/bin/bash

# Replace with your actual bug tracker URL
BUG_TRACKER_URL="https://4e74a1-3135.d9.code-live.app/dashboard/projects/webhook/00000/to/?bz"

# Replace with your actual API key or set it as an environment variable
API_KEY=${BUG_TRACKER_API_KEY:-"your-api-key-here"}

# Replace with your actual project ID or set it as an environment variable
PROJECT_ID=${BUG_TRACKER_PROJECT_ID:-"your-project-id-here"}

echo "Creating test bug in tracker at $BUG_TRACKER_URL"

# Create JSON payload
JSON_PAYLOAD=$(cat << EOF
{
  "projectId": "$PROJECT_ID",
  "commit": "manual-test",
  "branch": "main",
  "repository": "Testing-Demo",
  "bugTitle": "MANUAL TEST: Created using shell script",
  "testOutput": "VGhpcyBpcyBhIHRlc3QgYnVnIGNyZWF0ZWQgbWFudWFsbHkgdXNpbmcgYSBzaGVsbCBzY3JpcHQ=",
  "failedTests": "Manual test",
  "failureCount": "1"
}
EOF
)

# Make the API call
echo "Sending request..."
curl -v -X POST "$BUG_TRACKER_URL" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d "$JSON_PAYLOAD"

echo -e "\nRequest completed." 