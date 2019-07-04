<script lang="tsx">
import { Component, Vue, State, Action } from 'nuxt-property-decorator';
import { Catch, Throttle } from '~/libs/decorators';

@Component({
  layout: 'console',
  async asyncData(ctx) {
    // when page first open or refresh call home/getPets Action
    // if (!ctx.store.state.home.pets.length) {
    //   process.server
    //     ? await ctx.$storeHelper.action.home.getPets('pending')
    //     : ctx.$storeHelper.action.home.getPets('pending');
    // }
  },
})
export default class HomePage extends Vue {
  get share() {
    const { currentStatus, pets } = this.$storeHelper.home.state;
    const { dark } = this.$storeHelper.theme.state;
    return { currentStatus, pets, dark };
  }

  page = 1;
  pageSize = 40;

  get pageCount() {
    return Math.ceil(this.share.pets.length / this.pageSize);
  }

  status = ['pending', 'sold'];

  // only run at client
  mounted() {}

  render() {
    const btns = this.status.map(item => {
      const color = this.share.currentStatus === item ? 'blue' : 'grey';
      return (
        <v-btn
          small
          color={color}
          dark
          key={item}
          round
          on-click={() => this.$storeHelper.home.action.getPets(item as any)}>
          {item}
        </v-btn>
      );
    });

    const storeActions = [
      <v-btn
        small
        round
        on-click={() =>
          this.$storeHelper.home.mutation.getPets({
            currentStatus: 'sold',
            pets: [] as any,
          })
        }>
        clear pets
      </v-btn>,
      <v-btn
        small
        round
        on-click={() =>
          this.$storeHelper.home.mutation.getPets({
            currentStatus: 'pending',
            pets: [{ name: 'foo' }, { name: 'bar' }, { name: 'baz' }] as any,
          })
        }>
        call mutation
      </v-btn>,
    ];

    const pets = this.share.pets.slice((this.page - 1) * this.pageSize, this.page * this.pageSize).map((pet, index) => {
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
            <v-flex xs6>
              {btns}
              {storeActions}
            </v-flex>
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

