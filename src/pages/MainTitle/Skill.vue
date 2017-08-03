<template>
    <div v-if="!loading">
        <v-layout row wrap class="pa-4">
            <v-flex xs12 md10 offset-md1>
                <v-card class="px-5 py-4 text-xs-left blue-grey darken-1">
                    <v-layout row wrap>
                        <v-flex xs12 md12 class="mb-4 white--text">
                            <span class="display-2 mobile-title">| </span>
                            <span class="display-1">Skill</span>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <OperatingSystem></OperatingSystem>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
    <div v-else>
        <loading></loading>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import loading from '@/components/loading'
  import OperatingSystem from '@/pages/MainTitle/Skill/OS/OperatingSystem'

  export default {
    data () {
      return {
        value: 10
      }
    },
    components: {
      loading,
      OperatingSystem
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
