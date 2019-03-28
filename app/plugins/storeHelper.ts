// enable middleware you must setup pulgins at nuxt.config.js
export default <Nuxt.Plugin>function(ctx, inject) {
  const storeHelper = {};
  const bindMap = { _actions: 'action', _mutations: 'mutation', getters: 'getter' };

  Object.keys(bindMap).forEach(bindType => {
    const _bind = {};
    Object.keys(ctx.store[bindType]).forEach(bindTypeItemKey => {
      let paths = bindTypeItemKey.split('/');
      const modName = paths[0];
      const keyName = paths[1];

      !_bind[modName] && (_bind[modName] = {});

      switch (bindType) {
        case '_actions':
          _bind[modName][keyName] = (payload, option) => ctx.store.dispatch(bindTypeItemKey, payload, option);
          break;
        case '_mutations':
          _bind[modName][keyName] = (payload, option) => ctx.store.commit(bindTypeItemKey, payload, option);
          break;
        case 'getters':
          Object.defineProperty(_bind[modName], keyName, {
            get: function() {
              return ctx.store.getters[bindTypeItemKey];
            },
            enumerable: true,
            configurable: false
          });
          break;
      }
    });
    storeHelper[bindMap[bindType]] = _bind;
  });

  // @ts-ignore
  ctx.$storeHelper = storeHelper;
  inject('storeHelper', storeHelper);
};
