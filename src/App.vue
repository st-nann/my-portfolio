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
  #app {
    background: #ffffff;
  }
  .clickable {
    cursor: pointer;
  }
  .dialog__content {
    z-index: 99999 !important;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
  img.logo {
    width: 50px !important;
  }
  .font-size-10 {
    font-size: 10px;
  }
  .text-decoration {
    border-bottom: 1.5px solid black;;
  }
</style>

<style lang="stylus">
  @import './stylus/main';
</style>
