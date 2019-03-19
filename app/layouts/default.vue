<template>
  <v-app :dark="$store.state.theme.dark" :class="'custom--theme'">
    <v-container>
      <nuxt/>
    </v-container>
  </v-app>
</template>

