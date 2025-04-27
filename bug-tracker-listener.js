const http = require('http');
const https = require('https');
const url = require('url');

// Configuration
const PORT = 4000; // Port to listen on
const BUG_TRACKER_URL = 'http://localhost:3000/api/ci-report'; // Your local bug tracker URL
const BUG_TRACKER_API_KEY = process.env.BUG_TRACKER_API_KEY || 'your-api-key';
const GITHUB_WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET || 'your-webhook-secret';

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/webhook') {
    console.log('Received webhook from GitHub');
    
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        console.log('Event type:', payload.event_type);
        
        if (payload.event_type === 'create-bug') {
          createBug(payload.client_payload)
            .then(() => {
              res.statusCode = 200;
              res.end(JSON.stringify({ message: 'Bug created successfully' }));
            })
            .catch(error => {
              console.error('Failed to create bug:', error);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Failed to create bug' }));
            });
        } else {
          res.statusCode = 200;
          res.end(JSON.stringify({ message: 'Event type not handled' }));
        }
      } catch (error) {
        console.error('Error processing webhook:', error);
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
      }
    });
  } else {
    // Simple status page for other requests
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head><title>Bug Tracker Listener</title></head>
        <body>
          <h1>Bug Tracker Listener</h1>
          <p>Status: Running</p>
          <p>Listening for GitHub webhooks on port ${PORT}</p>
        </body>
      </html>
    `);
  }
});

// Function to create a bug in the local bug tracker
function createBug(payload) {
  return new Promise((resolve, reject) => {
    console.log('Creating bug in local bug tracker:', payload.bugTitle);
    
    const parsedUrl = url.parse(BUG_TRACKER_URL);
    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${BUG_TRACKER_API_KEY}`
      }
    };
    
    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('Bug created successfully:', data);
          resolve(data);
        } else {
          console.error('Error creating bug:', res.statusCode, data);
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
        }
      });
    });
    
    req.on('error', (error) => {
      console.error('Request error:', error);
      reject(error);
    });
    
    req.write(JSON.stringify(payload));
    req.end();
  });
}

// Start the server
server.listen(PORT, () => {
  console.log(`Bug tracker listener running at http://localhost:${PORT}`);
  console.log('Waiting for GitHub webhook events...');
}); 