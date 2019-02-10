<template>
    <v-navigation-drawer
        v-model="showSidebar"
        height="100%"
        persistent
        absolute
        temporary
        clipped
        enable-resize-watcher
    >
      
      <v-layout row wrap class="text-xs-center mx-3">
        <v-flex xs12 class="pt-4">
          <v-avatar
            class="elevation-1"
            color="offwhite"
            size="130"
            >
            <img src="~@/img/icon/logo-minimal-notext.png" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex xs12 class="pt-3 font-weight-bold subheading">
          Sanyanee Thawinvongrak
        </v-flex>
        <v-flex xs12 class="font-weigh-medium grey--text text--darken-3 caption">
          ネン・サンヤーネィ・タビンボンラック
        </v-flex>
        <v-flex xs12 class="font-size-10 font-weigh-thin grey--text text--darken-1 caption">
          st.sanyanee@hotmail.com
        </v-flex>
        <v-flex xs12 class="pt-2">
          <v-btn
            color="cinnamon"
            :to="{path: '/'}"
            append round outline small
          >Home</v-btn>
        </v-flex>
        <v-flex xs12 class="pa-3">
          <v-divider></v-divider>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-around class="px-4">
        <v-flex xs5 v-for="(item, index) in menu" :key="index" class="text-xs-center">
          <v-card class="pa-3 mb-3" append :to="{path: item.route}">
            <v-icon color="grey darken-3" size="25">home</v-icon> 
            <div class="grey--text text--darken-3 text-xs-center caption">{{item.name}}</div>
          </v-card>
        </v-flex>
      </v-layout>
      <v-list dense></v-list>
    </v-navigation-drawer>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import data from '@/../data/Base'

  export default {
    data () {
      return {
        menu: data.menu
      }
    },
    computed: {
      ...mapState('layout', {
        showSidebar: state => state.showSidebar
      })
    },
    methods: {
      ...mapActions('layout', [
        'toggleSidebar' // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
      ])
    }
  }
</script>
