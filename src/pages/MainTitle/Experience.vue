<template>
    <v-layout row wrap class="pa-4" v-if="!loading">
        <v-flex xs12 md10 offset-md1>
            <v-card class="px-4 pt-4 pb-5 text-xs-left">
                <v-layout row wrap>
                    <v-flex xs12 md12 class="mb-5">
                        <span class="display-2 ml-4 mobile-title">| </span>
                        <span class="display-1">Experience</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap v-for="(item, index) in experience" :key="index">
                    <v-flex md8 offset-md2>
                        <v-card class="ma-0" flat>
                            <v-layout row wrap>
                                <v-flex xs3 class="text-xs-center">
                                    <v-icon>room</v-icon>
                                    <p>{{item.datetime}}</p>
                                </v-flex>
                                <v-flex xs1>
                                    <v-divider class="mt-3 grey lighten-1"></v-divider>
                                </v-flex>
                                <v-flex xs8 class="border-card">
                                    <v-card class="pa-3" flat>
                                        <p class="mb-0 subheading grey--text text--darken-2"><b>{{item.title}}</b></p>
                                        <p class="mb-0 caption grey--text text--darken-4">{{item.subtitle}}</p>
                                        <div class="grey--text text--darken-1 small mt-2">
                                            <p class="mb-0">{{item.description}}</p>
                                        </div>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
    <loading v-else></loading>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import loading from '@/components/loading'
  import data from '@/../data/Experience'

  export default {
    components: {
      loading
    },
    computed: {
      ...mapState({
        loading: state => state.loading.loading
      }),
      experience: function () {
        return data.experience
      }
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
  .border-card {
    border-left: solid 1px #9d9d9d;
    border-radius: 0;
  }

  @media only screen and (max-width: 320px) {
    .mobile-title {
      margin-left: 0px !important;
    }
  }
</style>
