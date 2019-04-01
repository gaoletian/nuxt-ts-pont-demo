import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

@Module({ name: 'User', stateFactory: true })
export default class User extends VuexModule {
  userInfo: defs.petstore.User = {
    email: '',
    lastName: 'gao',
    firstName: 'letian'
  };

  get email() {
    return this.userInfo.email;
  }

  get fullName() {
    return this.userInfo.firstName + ' ' + this.userInfo.lastName;
  }

  @Mutation
  clearUser() {
    this.userInfo = {};
  }

  @MutationAction
  async loadUser(param: defs.petstore.user.getUserByName.Params) {
    let userInfo = await api.petstore.user.getUserByName.request(param);
    return {
      userInfo
    };
  }
}
