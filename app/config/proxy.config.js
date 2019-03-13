// 代理配置
// 参考 https://github.com/nuxt-community/proxy-module
// 参考 https://github.com/chimurai/http-proxy-middleware

export default {
  '/petstore': {
    target: 'https://petstore.swagger.io',

    // http-proxy-events handle
    // https://github.com/chimurai/http-proxy-middleware#http-proxy-events
    onProxyReq(proxyReq, req, res) {
      // proxyReq.setHeader('Authorization', global.__BearerToken__)
      // console.log('hello');
    },
    pathRewrite: {
      '^/petstore/': '/v2/'
    }
  }
};