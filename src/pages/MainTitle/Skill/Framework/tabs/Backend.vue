<template>
    <div class="pb-3">
        <v-layout row wrap v-for="(item, index) in backend" :key="index">
            <v-flex xs12 sm4 md4>
                <p class="subheadline pl-4 mobile">{{item.name}}</p>
            </v-flex>
            <v-flex xs9 sm6 md6>
                <v-progress-linear
                    v-model="value[index]"
                    color-front="teal lighten-1"
                    color-back="teal lighten-4"
                    class="my-2 pl-4"
                ></v-progress-linear>
            </v-flex>
            <v-flex xs3 sm2 md2>
                <p class="mb-0 caption text-xs-center">{{item.value}} %</p>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
  import _ from 'lodash'
  import data from '@/../data/Skill'

  export default {
    data () {
      return {
        value: []
      }
    },
    computed: {
      backend: function () {
        let listBackend = []
        _.forEach(data.frameworks, function (item) {
          listBackend = item.backend
        })
        return listBackend
      }
    },
    created () {
      let self = this
      _.forEach(this.backend, function (item) {
        self.animationLoop(item.value)
      })
    },
    methods: {
      animationLoop: function (value) {
        setTimeout(() => {
          return (this.value.push(value))
        }, 300)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 320px) {
    .mobile {
      margin-bottom: 0px !important;
    margin-top: 10px !important;
    }
  }
</style>
