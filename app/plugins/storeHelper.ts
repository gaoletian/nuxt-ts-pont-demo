// enable middleware you must setup pulgins at nuxt.config.js
export default <Nuxt.Plugin>function(ctx, inject) {
  //@ts-ignore   ["nuxtServerInit", "user/logout", "user/getUserInfo", "user/userLogin"]
  const _acts = Object.keys(ctx.store._actions)
  // @ts-ignore
  // ["cache/addTabview", "cache/delTabview", "cache/delAllTabview", "cache/delOtherTabview",
  // "cache/addWincall", "layout/RESET_STORE", "user/logout", "user/getUserInfo", "user/userLogin"]
  const _muts = Object.keys(ctx.store._mutations);

  let acts = {};
  let muts = {};
  _acts.forEach(act => {
    if (act !== 'nuxtServerInit') {
      let paths = act.split('\/');
      const modName = paths[0];
      const actionName = paths[1];

      !acts[modName] && (acts[modName] = {});

      acts[modName][actionName] = (payload, option) => {
        return ctx.store.dispatch(act, payload, option);
      };
    }
    
  })

  _muts.forEach(mut => {
    let paths = mut.split('/');
    const modName = paths[0];
    const mutationName = paths[1];

    !muts[modName] && (muts[modName] = {});

    muts[modName][mutationName] = (payload, option) => {
      ctx.store.commit(mut, payload, option);
    };
  })

  const storeHelper = {
    action: acts,
    mutation: muts
  };

  // @ts-ignore
  ctx.$storeHelper = storeHelper;
  inject('storeHelper', storeHelper);
};
