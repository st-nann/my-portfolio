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
            <img src="~@/img/image/base/logo-minimal-notext.png" alt="avatar">
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
      <v-list dense class="hidden-sm-and-up">
        <v-list-tile
          v-for="(item, index) in menu" :key="index"
          :to="{path: item.route}"
          append
          >
            <v-list-tile-content class="mx-5">
              <v-list-tile-title class="grey--text text--darken-1">
                <v-icon
                  class="pr-1"
                  :class="{'font-weight-bold darkblue--text': item.route === $route.path}"
                  color="grey"
                  size="17"
                >mdi-{{ item.icon }}</v-icon>
                <span :class="{'font-weight-bold darkblue--text': item.route === $route.path}">{{ item.name }}</span>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
       <v-layout row wrap justify-space-around class="pa-4">
         <v-flex xs11>
           <v-layout row wrap>
            <v-flex xs4 v-for="(item, index) in imageList" :key="index">
              <img width="74px" height="97%" :src="getImage(item.src)"/>
            </v-flex>
           </v-layout>
         </v-flex>
      </v-layout>
      <v-layout row wrap class="text-xs-center mx-3">
        <v-flex xs12>
          <span class="font-size-10 grey--text">
            <v-icon size="10" color="grey">mdi-alpha-c-circle-outline</v-icon> Portfolio website v2.0.0
          </span>
        </v-flex>
      </v-layout>
    </v-navigation-drawer>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import data from '@/../data/Base'

  export default {
    data () {
      return {
        menu: data.menu,
        imageList: data.img_sidebar
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
      ]),
      getImage: function (name) {
        return require(`@/img/image/sidebar/${name}.png`)
      }
    }
  }
</script>
