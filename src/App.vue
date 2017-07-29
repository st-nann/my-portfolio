<template>
  <v-app id="app" style="height:auto">
    <template v-if="nolayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <Toolbar></Toolbar>
      <main class="ma-0">
        <Sidebar></Sidebar>
        <router-view></router-view>
      </main>
    </template>
  </v-app>
</template>

<script>
  import Toolbar from '@/components/Toolbar'
  import Sidebar from '@/components/Sidebar'

  export default {
    name: 'app',
    components: {
      'Toolbar': Toolbar,
      'Sidebar': Sidebar
    },
    computed: {
      nolayout () {
        return typeof this.$route.meta.nolayout === 'undefined' || this.$route.meta.nolayout === true
      }
    }
  }
</script>

<style lang="scss">
  @import './styles/font.scss';
  #app {
    /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    font-family: 'Didact Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  .toolbar {
    z-index: 9999;
    height: 65px;
  }

  .toolbar--dense .toolbar__content, .toolbar--dense .toolbar__extension {
    height: 65px !important;
  }

  .toolbar__title {
    text-overflow: clip !important;
  }
</style>

<style lang="stylus">
  @import './styles/main'
</style>
