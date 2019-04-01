import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'Cache', stateFactory: true })
export default class Cache extends VuexModule {
  foo: 'foo'
  @MutationAction
  async actionName(payload) {
    // call api here
    
    return {
      foo: 'bar'
    };
  }
}
