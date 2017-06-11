<template>
  <v-app id="app" style="height:100vh">
    <main class="ma-0">
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: 'Didact Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>

<style lang="stylus">
  @import './stylus/main'
</style>
