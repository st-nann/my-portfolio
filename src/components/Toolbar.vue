<template>
    <v-toolbar class="grey darken-3 elevation-5" dark dense>
        <v-toolbar-side-icon v-if="$route.path !== '/AboutMe'" @click.native.stop="toggleSidebar()"></v-toolbar-side-icon>
        <v-toolbar-title> <b> Portfolio </b> | <span class="caption ml-2"> Sanyanee T.「サンヤニー」</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn to="/" @click.native.stop="hiddenSider()" icon light>
            <img src="../img/icon/mascot.svg" width="35px"/>
        </v-btn>
    </v-toolbar>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    methods: {
      ...mapActions('layout', [
        'toggleSidebar', // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
        'hiddenSider' // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
      ])
    }
  }
</script>
