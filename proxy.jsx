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

// modify this port number if you have conflict with other opened port number.
app.listen(3001, () => {
	console.log(
		'You now use port 3001 for proxy. Library App port number will be 3000. See proxy.js file to modify proxy port number'
	);
});
