import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'Task', stateFactory: true })
export default class Task extends VuexModule {
  foo: 'foo'
  @MutationAction
  async addTask(payload) {
    // call api here
    
    return {
      foo: 'bar'
    };
  }
}
