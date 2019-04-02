import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'Hello', stateFactory: true })
export default class Hello extends VuexModule {
  foo = 'foo'

  @MutationAction
  async actionName(payload) {
    // call api here
    
    return {
      foo: 'bar12'
    };
  }
}
