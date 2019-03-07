import { getModule, Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { API, apitype } from '~/api';
const api = <apitype>API;

// @Module({ stateFactory: true })
@Module
export default class extends VuexModule {
  pets: API.petstore.Pet[] = [];
  currentStatus: 'sold' | 'pending' = 'sold';

  // nuxt call nuxtServerInit only in store/index.ts, so we don't need it here
  // @Action
  // async nuxtServerInit(ctx: Nuxt.Context) {
  // }

  @MutationAction
  async getPets(status: any) {
    let pets = await api.petstore.pet.findPetsByStatus.request({ status });
    return {
      pets,
      currentStatus: status
    };
  }
}
