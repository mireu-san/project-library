const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
	'/works',
	createProxyMiddleware({
		target: 'https://openlibrary.org',
		changeOrigin: true,
		onProxyRes: function (proxyRes, req, res) {
			proxyRes.headers['Access-Control-Allow-Origin'] = '*';
		},
	})
);

app.listen(3001, () => {
	console.log('Proxy server listening on port 3001');
});
