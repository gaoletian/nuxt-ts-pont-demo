import proxy from './app/config/proxy.config';

export default {
  server: {
    port: 8000, // default: 3000
  },
  //  nuxt 运行模式 默认支持 ssr
  mode: 'universal', // spa| universal
  // 页面切换动画
  transition: 'slide-left',
  // 指定nuxt应用的源码目录 如需更改目录，同时需修改 tsconfig.json 中的 'path'
  srcDir: 'app/',
  /**
   * html模板 head配置
   * 可以全局加载外部 js 或 css
   * 如需在page中加载 page/*.vue 中可以在 @Component 修饰器中添加 meta
   */
  head: {
    title: 'nuxt-ts-pont-demo',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
    ],
    script: [],
  },
  /*
   ** 进度条配置
   */
  loading: {
    color: '#00bcd4',
  },

  /*
   ** 全局 CSS
   */
  css: ['~/assets/css/global.less', '~/assets/var.scss'],
  /*
   ** 路由配置——可以覆盖nuxt自动生成的路由
   */
  router: {
    // middleware: ['demo'],
    linkExactActiveClass: 'active',
  },

  /*
   ** 模块配置——用于扩展nuxt核心功能
   */
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/proxy',
      {
        onProxyReq(proxyReq, req, res) {
          // common proxy event to do
          console.log('[proxy]: proxy to %s', proxyReq.url);
        },
        pathRewrite: {
          '^/.*?/api': '/api',
        },
      },
    ],
    'cookie-universal-nuxt',
  ],
  /*
   ** 插件配置——加载插件在挂载App之前
   */
  plugins: ['~/plugins/apiInject', '~/plugins/vuetify', '~/plugins/storeHelper'],

  /*
   ** 服务中间件——只运行于服务端比如 api接口
   */
  serverMiddleware: [
    {
      path: '/health',
      handler(req, res, next) {
        res.end('server alive');
      },
    },
  ],

  /*
   ** Axios 全局默认配置
   * See https://github.com/nuxt-community/axios-module/blob/master/docs/options.md
   * 也可以通过 this.app.$axios 提供的方法修改全局配置
   */
  axios: {
    // Adds interceptors to log request and responses.
    debug: false,
    baseUrl: '/',
    browserBaseURL: '/',
  },

  // 代理配置  详见config/nuxt.proxy.js
  proxy,

  // module/typescript 模块配置
  typescript: {
    formatter: 'default',
    checker: false,
  },

  /*
   ** 编译配置——主要用于webpack配置 例加 loader, plugin 等等
   */
  build: {
    /** 指定对node_modules下的某个package进行编译转换*/
    // transpile: [/^vuetify/],

    extend(config, options) {
      return Object.assign({}, config, {
        devtool: 'source-map',
      });
    },

    /** 提取css */
    // extractCSS: true,
    // 显示构建分析
    analyze: process.env.NODE_ENV === 'production',

    loaders: {
      // sass-loader option use sass replace node-saa
      // https://github.com/sass/node-sass/issues/2632
      scss: {
        implementation: require('sass'),
      },
    },

    bable: {
      presets: [
        [
          '@nuxtjs/bable-preset-app',
          {
            targets: {
              node: 8,
            },
          },
        ],
      ],
    },
  },

  // 自定义watch  监控文件更改自动触发nuxt重新编译
  watch: ['~/modules', '~/config'],
};
