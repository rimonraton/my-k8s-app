const http = require('http');

const PORT = 3000;
const VERSION = process.env.APP_VERSION || "v1.0";

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: "Hello from Kubernetes via Spinnaker!",
    version: VERSION,
    timestamp: new Date()
  }));
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}, Version: ${VERSION}`);
});