<template>
    <v-layout row wrap class="pa-4" v-if="!loading">
        <v-flex xs12 md10 offset-md1>
            <v-card class="pa-4 text-xs-left mobile">
                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <span class="display-2 ml-4 mobile-title">| </span>
                        <span class="display-1">Works</span>
                    </v-flex>
                    <v-flex xs12 md6 class="text-xs-right mt-2">
                        <v-btn :to="{ path: '/Works/Design' }" color="info" flat>Design</v-btn>
                        <v-btn :to="{ path: '/Works/Coding' }" color="info" flat>Coding</v-btn>
                    </v-flex>
                </v-layout>
                <transition name="fade">
                    <Design v-if="$route.path === '/Works/Design' || $route.path === '/Works'"></Design>
                    <Coding v-else-if="$route.path === '/Works/Coding'"></Coding>
                </transition>
            </v-card>
        </v-flex>
    </v-layout>
    <loading v-else></loading>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import loading from '@/components/loading'
  import Design from '@/pages/MainTitle/Works/Design'
  import Coding from '@/pages/MainTitle/Works/Coding'

  export default {
    components: {
      loading,
      Design,
      Coding
    },
    computed: {
      ...mapState({
        loading: state => state.loading.loading
      })
    },
    created () {
      this.doLoading()
    },
    methods: {
      ...mapActions('loading', [
        'showLoading', // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
        'noLoading' // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
      ]),
      doLoading: async function () {
        this.showLoading()
        if (this.loading) {
          let self = this
          setTimeout(function () {
            self.noLoading()
          }, 1000)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-nav {
    width: auto;
  }

  @media only screen and (max-width: 1024px) {
    .mobile {
      padding: 10px !important;
    }
  }

  @media only screen and (max-width: 320px) {
    .mobile {
      padding: 10px !important;
    }

    .mobile-title {
      margin-left: 0px !important;
    }
  }
</style>
