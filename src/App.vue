<template>
  <v-card
    color="grey-lighten-4"
    flat
    height="56px"
    rounded="0"
    class="header"
  >
    <v-toolbar density="compact">
      <a href="http://localhost:8080/" class="logo">
        <!-- <img :src="require('@/assets/images/top_logo_pc.png')"> -->
        <img :src="require('./assets/images/top_logo_pc.png')">
      </a>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        permanent
      >
        <v-list density="compact" nav>
          <v-list-item href="http://localhost:8080/test" prepend-icon="mdi-home-city" title="home" value="home"></v-list-item>
          <v-list-item href="http://localhost:8080/test2" prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item href="http://localhost:8080/test3" prepend-icon="mdi-account-group-outline" title="grid" value="grid"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import VueGridLayout from 'vue-grid-layout';

export default {
  name: 'App',

  data: () => ({
    drawer: true,
    items: [
      { title: 'Home', icon: 'mdi-home-city'},
      { title: 'My Account', icon: 'mdi-account'},
      { title: 'grid', icon: 'mdi-account-group-outline'},
    ],
  }),

  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
}
</script>

<style lang="scss">
@import "@/styles/variables.scss";
</style>