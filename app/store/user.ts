import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({
  name: 'user',
  stateFactory: true
})
export default class extends VuexModule {
  user: defs.petstore.Pet[];

  @MutationAction
  async loadUser(userData: defs.petstore.User) {
    let user = await api.petstore.user.createUser.request(userData);
    return {
      user
    };
  }
}
