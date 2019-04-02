import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'Demo', stateFactory: true })
export default class Demo extends VuexModule {
  foo = 'foo'

  @MutationAction
  async actionName(payload) {
    // call api here
    let a = 1;
    return {
      foo: 'bar',
    };
  }
}
