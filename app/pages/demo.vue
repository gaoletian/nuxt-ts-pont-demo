<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { mixins } from 'vue-class-component';
@Component({
  // layout: 'default'
})
export default class extends Vue {
  created() {
    this.$storeHelper.getter.user.fullName;
  }
}
</script>
