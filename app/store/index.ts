import { Module, Mutation, Action, VuexModule } from 'vuex-module-decorators';
import { API, apitype } from '~/api';
const api = <apitype>API;

@Module
export default class extends VuexModule {
  pets: API.petstore.Pet[] = [];
  currentStatus: 'sold' | 'pending' = 'sold';
  whell = 1;
  dark = false;

  @Mutation
  setPets(payload: any) {
    this.pets = payload;
  }

  @Mutation
  setCurrentStatus(status: any) {
    this.currentStatus = status;
  }
  @Mutation
  setDark() {
    this.dark = !this.dark;
  }

  // todo nuxtServerInit has proplem
  // @Action
  // async nuxtServerInit({ commit }, ctx: Nuxt.Context) {
  //   if (!ctx.route || !ctx.route.name) return;

  //   // try {
  //   //   // let pets = await ctx.$api.petstore.pet.findPetsByStatus.request({ status: 'sold' });
  //   //   this.context.commit('setPets', [1, 2]);
  //   // } catch (err) {}
  // }

  @Action
  async getPets(status: any) {
    let pets = await api.petstore.pet.findPetsByStatus.request({ status });
    this.context.commit('setPets', pets);
    this.context.commit('setCurrentStatus', status);
  }
}
