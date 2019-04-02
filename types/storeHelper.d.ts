/** this file is auto generator , please don't edit it*/
import { VuexModule } from 'vuex-module-decorators';
import Cache from '~/store/cache';
import DemoCache from '~/store/demo/cache';
import DemoTask from '~/store/demo/task';
import Demo from '~/store/demo';
import Hello from '~/store/hello';
import Home from '~/store/home';
import Theme from '~/store/theme';
import User from '~/store/user';

interface StoreHelper {
  cache: {
    mutation: MutaionAction2Mutation<FunctionProperties<Cache>>;
    action: AsyncFunctionProperties<Cache>;
    getter: Pick<Cache, ReadonlyKeys<Cache>>;
    state: Omit<Cache, (keyof VuexModule) | FunctionPropertyNames<Cache> | ReadonlyKeys<Cache>>;
  };

  demo_cache: {
    mutation: MutaionAction2Mutation<FunctionProperties<DemoCache>>;
    action: AsyncFunctionProperties<DemoCache>;
    getter: Pick<DemoCache, ReadonlyKeys<DemoCache>>;
    state: Omit<DemoCache, (keyof VuexModule) | FunctionPropertyNames<DemoCache> | ReadonlyKeys<DemoCache>>;
  };

  demo_task: {
    mutation: MutaionAction2Mutation<FunctionProperties<DemoTask>>;
    action: AsyncFunctionProperties<DemoTask>;
    getter: Pick<DemoTask, ReadonlyKeys<DemoTask>>;
    state: Omit<DemoTask, (keyof VuexModule) | FunctionPropertyNames<DemoTask> | ReadonlyKeys<DemoTask>>;
  };

  demo: {
    mutation: MutaionAction2Mutation<FunctionProperties<Demo>>;
    action: AsyncFunctionProperties<Demo>;
    getter: Pick<Demo, ReadonlyKeys<Demo>>;
    state: Omit<Demo, (keyof VuexModule) | FunctionPropertyNames<Demo> | ReadonlyKeys<Demo>>;
  };

  hello: {
    mutation: MutaionAction2Mutation<FunctionProperties<Hello>>;
    action: AsyncFunctionProperties<Hello>;
    getter: Pick<Hello, ReadonlyKeys<Hello>>;
    state: Omit<Hello, (keyof VuexModule) | FunctionPropertyNames<Hello> | ReadonlyKeys<Hello>>;
  };

  home: {
    mutation: MutaionAction2Mutation<FunctionProperties<Home>>;
    action: AsyncFunctionProperties<Home>;
    getter: Pick<Home, ReadonlyKeys<Home>>;
    state: Omit<Home, (keyof VuexModule) | FunctionPropertyNames<Home> | ReadonlyKeys<Home>>;
  };

  theme: {
    mutation: MutaionAction2Mutation<FunctionProperties<Theme>>;
    action: AsyncFunctionProperties<Theme>;
    getter: Pick<Theme, ReadonlyKeys<Theme>>;
    state: Omit<Theme, (keyof VuexModule) | FunctionPropertyNames<Theme> | ReadonlyKeys<Theme>>;
  };

  user: {
    mutation: MutaionAction2Mutation<FunctionProperties<User>>;
    action: AsyncFunctionProperties<User>;
    getter: Pick<User, ReadonlyKeys<User>>;
    state: Omit<User, (keyof VuexModule) | FunctionPropertyNames<User> | ReadonlyKeys<User>>;
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
