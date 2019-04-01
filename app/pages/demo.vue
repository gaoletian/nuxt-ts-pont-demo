<script lang="tsx">
import { Component, Vue, Getter, namespace } from 'nuxt-property-decorator';
@Component({
  // layout: 'default'
})
export default class extends Vue {
  created() {
    this.initUser();
  }

  clearUser() {
    this.$storeHelper.user.mutation.clearUser();
    this.$storeHelper.user.action.loadUser({username: 'gaoletian'})
    this.$storeHelper.theme.mutation.setDark()
  }
  initUser() {
    const {loadUser} = this.$storeHelper.user.mutation

    loadUser({
      userInfo: { email: 'gao@123.com', lastName: 'gao', firstName: 'letian' }
    });
  }

  render() {
    const { email, fullName } = this.$storeHelper.user.getter;
    const btn = [
      <v-btn small round on-click={this.clearUser}>
        clearUser
      </v-btn>,
      <v-btn small round on-click={this.initUser}>
        initUser
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
