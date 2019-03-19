<template>
  <v-app :dark="dark" :class="'custom--theme'">
    <v-container>
      <nuxt/>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, namespace } from 'nuxt-property-decorator';
import { mixins } from 'vue-class-component';

const mod = namespace('theme');

@Component({
  // layout: 'default'
})
export default class extends Vue {
  @mod.State
  dark;
}
</script>

