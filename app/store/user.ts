import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'user', stateFactory: true })
export default class extends VuexModule {
  user: defs.petstore.User = {};

  @MutationAction
  async loadUser(param: defs.petstore.user.getUserByName.Params) {
    let user = await api.petstore.user.getUserByName.request(param);
    return {
      user
    };
  }
}
