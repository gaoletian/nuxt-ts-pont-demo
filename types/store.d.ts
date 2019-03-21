import Home from '~/store/home';
import Theme from '~/store/theme';
import User from '~/store/user';

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

interface StoreHelper  {
  action: Actions;
  act: Actions;
  mutation: Mutations;
  mut: Mutations;
}

declare module 'vue/types/vue' {
  interface Vue {
    $storeHelper: StoreHelper;
  }
}


declare module '@nuxt/vue-app/types/index' {
  // extends Context interface
  interface Context {
    $storeHelper: StoreHelper
  }
}
