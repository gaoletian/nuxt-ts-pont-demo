import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'user', stateFactory: true })
export default class extends VuexModule {
  userInfo: defs.petstore.User = {};

  get email() {
    return this.userInfo.email
  }

  get fullName() {
    return this.userInfo.firstName + ' ' + this.userInfo.lastName
  }

  @MutationAction
  async loadUser(param: defs.petstore.user.getUserByName.Params) {
    let userInfo = await api.petstore.user.getUserByName.request(param);
    return {
      userInfo
    };
  }
}
