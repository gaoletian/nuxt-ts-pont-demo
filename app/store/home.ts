import { Module, Mutation, MutationAction, Action, VuexModule } from 'vuex-module-decorators';
import { api } from '~/api';

type Status = 'sold' | 'pending';
@Module({ name: 'Home', stateFactory: true })
export default class Home extends VuexModule {
  pets: defs.petstore.Pet[] = [];
  currentStatus: Status = 'sold';

  foo = 'foo';

  @MutationAction
  async getPets(status: Status) {
    let pets = await api.petstore.pet.findPetsByStatus.request({ status } as any);
    return {
      pets,
      currentStatus: status
    };
  }
}
