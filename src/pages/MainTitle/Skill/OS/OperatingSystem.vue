<template>
    <v-card class="pa-2 elevation-3">
        <v-card-text class="headline mx-2 mb-3">Operating System (OS)</v-card-text>
        <v-layout row wrap class="text-xs-center">
            <v-flex xs12 sm4 md4 v-for="(item, index) in os" :key="index">
                <v-progress-circular
                    v-bind:size="150"
                    v-bind:width="15"
                    v-bind:rotate="-90"
                    v-bind:value="value[index]"
                    class="light-blue--text text--lighten-3"
                >
                    <div>
                        <img :src="item.image" width="80px"/>
                    </div>
                </v-progress-circular>
                <v-card-text class="subheading mb-1">{{item.name}} ({{ item.value }}%)</v-card-text>
            </v-flex>
        </v-layout>
    </v-card>
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
      os: function () {
        return data.os
      }
    },
    created () {
      let self = this
      _.forEach(this.os, function (item) {
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
