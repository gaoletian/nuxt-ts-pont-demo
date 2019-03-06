<script lang="tsx">
import { Component, Vue, State, Action } from 'nuxt-property-decorator';
import { mixins } from 'vue-class-component';
import { Catch, Throttle } from '~/libs/decorators';
@Component({
  layout: 'console'
  // async asyncData(ctx) {
  // }
})
export default class HomePage extends Vue {
  @State
  pets: API.petstore.Pet[];

  @State
  currentStatus;

  @Action getPets: (status: string) => void;

  page = 1;
  pageSize = 40;

  get pageCount() {
    return Math.ceil(this.pets.length / this.pageSize);
  }

  status = ['pending', 'sold'];

  mounted() {
    !this.pets.length && this.getPets('sold');
  }

  render() {
    const btns = this.status.map(item => {
      const color = this.currentStatus === item ? 'blue' : 'grey';
      return (
        <v-btn small color={color} dark key={item} round on-click={() => this.getPets(item)}>
          {item}
        </v-btn>
      );
    });

    const pets = this.pets.slice((this.page - 1) * this.pageSize, this.page * this.pageSize).map((pet, index) => {
      const isPic = /^https?:\/\/.+\.(jpe?g|gif|png)$/;
      const photoUrls =
        pet.photoUrls && pet.photoUrls.length && isPic.test(pet.photoUrls[0])
          ? pet.photoUrls[0]
          : require(`~/assets/imgs/pets/${index % 6}.jpeg`);

      return (
        <v-flex xs3 key={pet.name + index}>
          <v-card tile class="pa-2">
            <v-img src={photoUrls}>
              <v-layout align-end fill-height pa-3 white--text>
                <div class="title font-weight-light">Explore our beaches</div>
              </v-layout>
            </v-img>
            <v-divider />
            <v-chip dark>{pet.name}</v-chip>
          </v-card>
        </v-flex>
      );
    });

    const layoutName = this.$nuxt.layoutName === 'default' ? 'console' : 'default';

    return (
      <v-card flat>
        <v-card-actions>
          <v-layout row class="pt-3">
            <v-flex xs6>{btns}</v-flex>
            <v-flex xs6 class="text-xs-right">
              <v-btn small color="pink" round dark on-click={() => this.$nuxt.setLayout(layoutName)}>
                change layout
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-actions>
        <v-container grid-list-lg text-xs-center fluid>
          <v-pagination length={this.pageCount} on-input={value => (this.page = value)} value={this.page} />
          <v-layout row wrap>
            {pets}
          </v-layout>
          <v-pagination length={this.pageCount} on-input={value => (this.page = value)} value={this.page} />
        </v-container>
      </v-card>
    );
  }
}
</script>

