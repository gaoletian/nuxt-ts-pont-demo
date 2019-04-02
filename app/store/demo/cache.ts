import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

interface CacheItem {
  name: string;
  data: object;
}

@Module({ name: 'Cache', stateFactory: true })
export default class Cache extends VuexModule {
  foo = 'foo';
  cacheData: CacheItem[] = [];

  @Mutation
  addCache(cacheItem: CacheItem) {
    this.cacheData.push(cacheItem);
  }

  @MutationAction
  async actionName({ foo }) {
    // call api here
    return {
      foo
    };
  }
}
