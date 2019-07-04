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
import { expect200 } from '~/libs/assert';

@Component({
  layout: 'console',
  name: 'login-page',
  auth: false,
})
export default class extends Vue {
  @Catch((vm, err) => vm.$confirm('登陆失败'))
  async Login() {
    const res = await this.$api.petstore.user.loginUser.request({ username: 'foo', password: 'bar' });
    expect200;
  }
}
</script>
