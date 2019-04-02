// enable middleware you must setup pulgins at nuxt.config.js


const getState = (obj: object, paths: string | string[]) => {
  let _paths = paths;
  typeof _paths === 'string' && (_paths = _paths.split('/')) && _paths.pop();
  return _paths.length === 1 ? obj[_paths[0]] : getState(obj[_paths[0]], _paths.slice(1));
}

export default <Nuxt.Plugin>function(ctx, inject) {
  const storeHelper = {};
  const bindMap = { action: '_actions', mutation: '_mutations', getter: 'getters', state: '_modulesNamespaceMap' };
  
  Object.keys(bindMap).forEach(bindType => {
    Object.keys(ctx.store[bindMap[bindType]]).forEach(bindTypeItemKey => {
      let paths = bindTypeItemKey.split('/');
      const namespace = paths.slice(0, paths.length - 1).join('_');
      const keyName = paths.slice(-1)[0];

      // {user: {}, demo_cache: {}}
      !storeHelper[namespace] && (storeHelper[namespace] = {});
      // {user: {action: {}}, demo_cache: {action: {}}}
      !storeHelper[namespace][bindType] && (storeHelper[namespace][bindType] = {});
      switch (bindType) {
        case 'action':
          storeHelper[namespace][bindType][keyName] = (payload, option) =>
            ctx.store.dispatch(bindTypeItemKey, payload, option);
          break;
        case 'mutation':
          storeHelper[namespace][bindType][keyName] = (payload, option) =>
            ctx.store.commit(bindTypeItemKey, payload, option);
          break;
        case 'getter':
          Object.defineProperty(storeHelper[namespace][bindType], keyName, {
            get: function() {
              return ctx.store.getters[bindTypeItemKey];
            }
          });
          break;
        case 'state':
          Object.defineProperty(storeHelper[namespace], bindType, {
            get() {
              return getState(ctx.store.state, bindTypeItemKey);
            },
            // set() {
            //   // todo commit a setState mutation 
            //   console.log('====>', 'Not implemented')
            // }
          });
          break;
      }
    });
  });

  // @ts-ignore
  ctx.$storeHelper = storeHelper;
  inject('storeHelper', storeHelper);
};
