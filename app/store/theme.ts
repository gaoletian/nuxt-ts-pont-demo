import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';
@Module({ name: 'theme', stateFactory: true })
export default class extends VuexModule {
  dark = false;
  @Mutation
  setDark() {
    this.dark = !this.dark;
  }
}
