export default <Nuxt.MiddleWare>function(ctx) {
  let log = (...arg) => console.log('\x1b[35m[middleware:finup-auth]\x1b[0m  ' + arg[0], ...arg.slice(1));
  const { auth, title } = ctx.route.matched[0].components.default['options'];
  // 这里过滤不需要鉴权的
  if (!ctx.route.name || auth === false) {
    log('filter-> %s , auth = %s , title = %s', ctx.route.path, auth, title);
    return 0;
  }
  log('check-> %s , auth = %s , title = %s', ctx.route.path, auth, title);

  // 开始鉴权
  if (process.server && !ctx.store.state.user) {
    // @ts-ignore
    const host = ctx.req.headers.host;
    const protocol = process.env.env === 'production' ? 'https' : 'http';
    const service = encodeURIComponent(`${protocol}://${host}/login`);
    const casLoginUrl = `/api/puhui-cas/login?service=${service}`;
    log('redirect to', casLoginUrl);
    ctx.redirect(casLoginUrl);
  }
};
