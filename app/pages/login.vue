<template>
  <div style="width: 300px; margin: auto;" class="primary--text">
    <v-layout column class="pa-4" align-center justify-center>
      <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
      <div class="pt-4">正在登陆...</div>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Catch } from '~/libs/decorators';

@Component({
  layout: 'console',
  name: 'login-page',
  auth: false
})
export default class extends Vue {
  @Catch((ctx, err) => console.log(err))
  async Login() {
    const res = await this.$api.petstore.user.loginUser.request({ username: 'foo', password: 'bar' });
  }
}
</script>
