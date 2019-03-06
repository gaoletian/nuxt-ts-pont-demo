import { ActionTree, MutationTree } from 'vuex';
import API from '~/api/api';

interface RootState {
  pets: API.petstore.Pet[];
  currentStatus: 'sold' | 'pending';
}

export const state = (): RootState => ({
  pets: [] as API.petstore.Pet[],
  currentStatus: 'sold'
});

export const mutations: MutationTree<RootState> = {
  SET_PETS: function(state, pets) {
    state.pets = pets;
  },
  SET_CURRENT_STATUS: function(state, status) {
    state.currentStatus = status;
  }
};

export const getters = {};

export const actions: ActionTree<RootState, Nuxt.Context> = {
  /**
   * 如果在状态树中指定了 nuxtServerInit 方法，Nuxt.js 调用它的时候会将页面的上下文对象作为第2个参数传给它（服务端调用时才会酱紫哟）。
   * 当我们想将服务端的一些数据传到客户端时，这个方法是灰常好用的。
   * 举个例子，假设我们服务端的会话状态树里可以通过 req.session.user 来访问当前登录的用户。
   * 将该登录用户信息传给客户端的状态树，我们只需更新 store / index.js 如下：
   *
   * 	actions: {
   * 		nuxtServerInit({ commit }, { req }) {
   * 			if (req.session.user) {
   * 				commit('user', req.session.user)
   * 			}
   * 		}
   * 	}
   * 如果你使用状态树模块化的模式，只有主模块（即 store / index.js）适用设置该方法（其他模块设置了也不会被调用）。
   * 	nuxtServerInit 方法接收的上下文对象和 fetch 的一样，但不包括 context.redirect() 和 context.error() 。
   */
  async nuxtServerInit({ commit }, ctx: Nuxt.Context) {
    if (ctx.route && ctx.route.name) {
      try {
        // let pet = await ctx.$api.petstore.pet.getPetById.request({ petId: 1 });
        // console.log(pet);$
      } catch (err) {}
    }
  },

  async getPets({ commit }, status) {
    // @ts-ignore
    let pets = await this.$api.petstore.pet.findPetsByStatus.request({ status });
    commit('SET_CURRENT_STATUS', status);
    commit('SET_PETS', pets);
  }
};
