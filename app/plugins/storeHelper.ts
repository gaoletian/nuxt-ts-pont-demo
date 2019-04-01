// enable middleware you must setup pulgins at nuxt.config.js
export default <Nuxt.Plugin>function(ctx, inject) {
  const storeHelper = {};
  const bindMap = { _actions: 'action', _mutations: 'mutation', getters: 'getter' };

  Object.keys(bindMap).forEach(bindType => {
    Object.keys(ctx.store[bindType]).forEach(bindTypeItemKey => {
      let paths = bindTypeItemKey.split('/');
      const namespace = paths.slice(0, paths.length -1).join('_');
      const keyName = paths.slice(-1)[0];

      // {user: {}, demo_cache: {}}
      !storeHelper[namespace] && (storeHelper[namespace] = {});
      // {user: {action: {}}, demo_cache: {action: {}}}
      !storeHelper[namespace][bindMap[bindType]] && (storeHelper[namespace][bindMap[bindType]] = {});
      switch (bindType) {
        case '_actions':
          storeHelper[namespace][bindMap[bindType]][keyName] = (payload, option) =>
            ctx.store.dispatch(bindTypeItemKey, payload, option);
          break;
        case '_mutations':
          storeHelper[namespace][bindMap[bindType]][keyName] = (payload, option) =>
            ctx.store.commit(bindTypeItemKey, payload, option);
          break;
        case 'getters':
          Object.defineProperty(storeHelper[namespace][bindMap[bindType]], keyName, {
            get: function() {
              return ctx.store.getters[bindTypeItemKey];
            },
            enumerable: true,
            configurable: false
          });
          break;
      }
    });
  });

  // @ts-ignore
  ctx.$storeHelper = storeHelper;
  inject('storeHelper', storeHelper);
};
