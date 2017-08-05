<template>
    <div class="pb-3">
        <v-layout row wrap v-for="(item, index) in general" :key="index">
            <v-flex xs12 sm4 md4>
                <p class="subheadline pl-4 mobile-content">{{item.name}}</p>
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
      general: function () {
        let listPrograming = []
        _.forEach(data.languages, function (item) {
          listPrograming = item.general
        })
        return listPrograming
      }
    },
    created () {
      let self = this
      _.forEach(this.general, function (item) {
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
  @media only screen and (max-width: 414px) {
    .mobile-content {
      margin-bottom: 0px !important;
      margin-top: 15px !important;
    }
  }
</style>
