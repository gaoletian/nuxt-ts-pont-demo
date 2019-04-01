/** this file is auto generator , please don't edit it*/

import Home from '~/store/home';
import DemoCache from '~/store/demo/cache';
import DemoTask from '~/store/demo/task';
import Theme from '~/store/theme';
import Cache from '~/store/cache';
import User from '~/store/user';

interface StoreHelper {
  home: {
    mutation: MutaionAction2Mutation<FunctionProperties<Home>>;
    action: AsyncFunctionProperties<Home>;
    getter: Pick<Home, ReadonlyKeys<Home>>;
  };

  demo_cache: {
    mutation: MutaionAction2Mutation<FunctionProperties<DemoCache>>;
    action: AsyncFunctionProperties<DemoCache>;
    getter: Pick<DemoCache, ReadonlyKeys<DemoCache>>;
  };

  demo_task: {
    mutation: MutaionAction2Mutation<FunctionProperties<DemoTask>>;
    action: AsyncFunctionProperties<DemoTask>;
    getter: Pick<DemoTask, ReadonlyKeys<DemoTask>>;
  };

  theme: {
    mutation: MutaionAction2Mutation<FunctionProperties<Theme>>;
    action: AsyncFunctionProperties<Theme>;
    getter: Pick<Theme, ReadonlyKeys<Theme>>;
  };

  cache: {
    mutation: MutaionAction2Mutation<FunctionProperties<Cache>>;
    action: AsyncFunctionProperties<Cache>;
    getter: Pick<Cache, ReadonlyKeys<Cache>>;
  };

  user: {
    mutation: MutaionAction2Mutation<FunctionProperties<User>>;
    action: AsyncFunctionProperties<User>;
    getter: Pick<User, ReadonlyKeys<User>>;
  };
}

declare module 'vue/types/vue' {
  interface Vue {
    $storeHelper: StoreHelper;
  }
}

declare module '@nuxt/vue-app/types/index' {
  interface Context {
    $storeHelper: StoreHelper;
  }
}
