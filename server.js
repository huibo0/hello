const http = require('http');
const port = process.env.PORT || 3000;
const html = `<html lang="zh"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>小爪</title></head>
<body style="margin:0;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:-apple-system,sans-serif;background:#1f1d2b;color:#fff">
<div style="font-size:72px">🐾</div><h1 style="font-size:48px;margin:16px">你成功了！</h1><p style="opacity:.6">由小爪自动发布到 sdfeer.site</p></body></html>`;
http.createServer((req, res) => {
  if (req.url === '/api/health') { res.writeHead(200, {'Content-Type': 'application/json'}); return res.end('{"status":"ok"}'); }
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); res.end(html);
}).listen(port, () => console.log('hello listening on ' + port));
