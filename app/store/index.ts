import { getModule, Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { API, apitype } from '~/api';
const api = <apitype>API;

// @Module({ stateFactory: true })
@Module
export default class Root extends VuexModule {
  pets: API.petstore.Pet[] = [];
  currentStatus: 'sold' | 'pending' = 'sold';
  whell = 1;
  dark = false;

  @Mutation
  setDark() {
    this.dark = !this.dark;
  }

  // Defining a store by object and class is very different,
  // 1. in here nuxtServerInit first param is nuxt context,
  // 2. commit and dispath are encapsulated in this.context
  // 3. we can call other action just add await
  @Action
  async nuxtServerInit(ctx: Nuxt.Context) {
    if (!ctx.route || !ctx.route.name) return;
    try {
      await this.context.dispatch('getPets', 'sold');
    } catch (err) {}
  }

  @MutationAction
  async getPets(status: any) {
    let pets = await api.petstore.pet.findPetsByStatus.request({ status });
    return {
      pets,
      currentStatus: status
    };
  }
}
