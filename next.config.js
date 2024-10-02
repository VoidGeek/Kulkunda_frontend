const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://kulkunda-backend.onrender.com/api/:path*', // Replace with your backend server's address
      },
    ];
  },
  async serverMiddleware() {
    // Create a proxy for '/api' requests
    this.nuxt.hook('render:setupMiddleware', (app) => {
      app.use(
        '/api',
        createProxyMiddleware({
          target: 'https://kulkunda-backend.onrender.com', // Replace with your backend server's address
          changeOrigin: true,
          pathRewrite: { '^/api': '' },
        })
      );
    });
  },
};