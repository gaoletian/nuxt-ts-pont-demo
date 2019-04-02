<script lang="tsx">
import { Component, Vue, Getter, namespace } from 'nuxt-property-decorator';
@Component({
  // layout: 'default'
})
export default class extends Vue {
  //@ts-ignore
  dark = this.$storeHelper.theme.state.dark;

  created() {
    this.initUser();
  }

  clearUser() {
    const {theme, user, demo_cache, demo_task, cache} = this.$storeHelper
    user.mutation.clearUser();
  }
  initUser() {
    const {loadUser} = this.$storeHelper.user.mutation

    loadUser({
      userInfo: { email: 'gao@123.com', lastName: 'gao', firstName: 'letian' }
    });
  }

  test() {
    this.$storeHelper.demo_cache.mutation.addCache({name: '', data: {}})
  }

  render() {
    const { email, fullName } = this.$storeHelper.user.getter;
    const btn = [
      <v-btn small round on-click={this.clearUser}>
        clearUser
      </v-btn>,
      <v-btn small round on-click={this.initUser}>
        initUser
      </v-btn>,
      <v-btn small round on-click={this.$storeHelper.theme.mutation.setDark}>
        dark theme
      </v-btn>
    ];

    const body = (
      <v-container>
        <p>{fullName}</p>
        <p>{email}</p>
      </v-container>
    );

    return (
      <v-card>
        {btn} {body}
      </v-card>
    );
  }
}
</script>
