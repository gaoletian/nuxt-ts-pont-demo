import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';
@Module({
  name: 'home',
  stateFactory: true
})
export default class extends VuexModule {
  pets: defs.petstore.Pet[] = [];
  currentStatus: 'sold' | 'pending' = 'sold';

  @MutationAction
  async getPets(status: any) {
    let pets = await api.petstore.pet.findPetsByStatus.request({ status });
    return {
      pets,
      currentStatus: status
    };
  }
}
