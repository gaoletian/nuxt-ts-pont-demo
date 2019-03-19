import { Module, Action, VuexModule } from 'vuex-module-decorators';

@Module
export default class extends VuexModule {
  // Defining a store by object and class is very different,
  // 1. at here nuxtServerInit first param is nuxt context,
  // 2. commit and dispath are encapsulated in this.context
  // 3. we can call other action just add await
  @Action
  async nuxtServerInit(ctx: Nuxt.Context) {
    if (!ctx.route || !ctx.route.name) return;
    try {
      // so you do someing  when fist open or page refresh
      // like get user info
      await this.context.dispatch('home/getPets', 'solid');
      return true;
    } catch (err) {}
  }
}
