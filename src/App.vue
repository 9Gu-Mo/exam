<template>
  <!-- header -->
  <v-card
    color="grey-lighten-4"
    flat
    height="56px"
    rounded="0"
    class="header"
  >
    <v-toolbar density="compact">
      <a href="http://localhost:8080/" class="logo">
        <!-- 절대 경로 -->
        <!-- <img :src="require('@/assets/images/top_logo_pc.png')"> -->
        
        <!-- 상대 경로 -->
        <img :src="require('./assets/images/top_logo_pc.png')" alt="로고">
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
      <!-- gnb -->
      <v-navigation-drawer
        v-model="drawer"
        permanent
      >
        <v-list density="compact" nav>
          <v-list-item href="http://localhost:8080/test" prepend-icon="mdi-home-city" title="grid" value="grid"></v-list-item>
          <v-list-item href="http://localhost:8080/test2" prepend-icon="mdi-account" title="sub2" value="sub2"></v-list-item>
          <v-list-item href="http://localhost:8080/test3" prepend-icon="mdi-account-group-outline" title="sub3" value="sub3"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 100vh">
        <!-- 라우터로 컴포넌트 연결한 컴포넌트를 불러옴 -->
        <router-view />
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    drawer: true,
    items: [
      { title: 'grid', icon: 'mdi-home-city'},
      { title: 'sub2', icon: 'mdi-account'},
      { title: 'sub3', icon: 'mdi-account-group-outline'},
    ],
  }),

  components: {
    
  },
}
</script>


<style lang="scss">
@import "@/styles/variables.scss";
</style>