import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';
@Module({ name: 'Theme', stateFactory: true })
export default class Theme extends VuexModule {
  dark = false;

  @Mutation
  setDark() {
    this.dark = !this.dark;
  }
}
