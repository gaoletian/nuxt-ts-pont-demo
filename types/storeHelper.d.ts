import Home from '~/store/home';
import Theme from '~/store/theme';
import User from '~/store/user';
import { VuexModule } from 'vuex-module-decorators';

interface Mutations {
  home: MutaionAction2Mutation<FunctionProperties<Home>>;
  theme: MutaionAction2Mutation<FunctionProperties<Theme>>;
  user: MutaionAction2Mutation<FunctionProperties<User>>;
}

interface Actions {
  home: AsyncFunctionProperties<Home>;
  theme: AsyncFunctionProperties<Theme>;
  user: AsyncFunctionProperties<User>;
}

interface Getters {
  home: Pick<User, ReadonlyKeys<Home>>;
  theme: Pick<User, ReadonlyKeys<Theme>>;
  user: Pick<User, ReadonlyKeys<User>>;
}

interface StoreHelper {
  getter: Getters;
  action: Actions;
  mutation: Mutations;
}

declare module 'vue/types/vue' {
  interface Vue {
    $storeHelper: StoreHelper;
  }
}

declare module '@nuxt/vue-app/types/index' {
  // extends Context interface
  interface Context {
    $storeHelper: StoreHelper;
  }
}
