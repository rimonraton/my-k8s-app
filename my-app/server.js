const http = require('http');
const port = 3000;
const version = process.env.APP_VERSION || 'v1.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1 style="color: purple; text-align: center; margin-top: 20%;">🚀 Hello from Node.js App (${version}) running on Kubernetes via ArgoCD & GitHub Actions!</h1>`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});