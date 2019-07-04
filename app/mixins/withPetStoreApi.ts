import { Component, Vue } from 'nuxt-property-decorator';

@Component
export class withPetStoreApi extends Vue {
  get petApi() {
    return this.$api.petstore.pet;
  }

  get storeApi() {
    return this.$api.petstore.store;
  }

  get userApi() {
    return this.$api.petstore.user;
  }
}
