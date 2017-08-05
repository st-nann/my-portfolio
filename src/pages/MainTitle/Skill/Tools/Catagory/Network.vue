<template>
    <v-layout row wrap class="text-xs-center">
        <v-flex xs4 md3 v-for="(item, index) in network" :key="index">
            <img :src="item.image" width="40px"/>
            <p>{{item.name}}</p>
        </v-flex>
    </v-layout>
</template>

<script>
  import _ from 'lodash'
  import data from '@/../data/Skill'

  export default {
    computed: {
      network: function () {
        let listNetwork = []
        _.forEach(data.tools, function (item) {
          listNetwork = item.network
        })
        return listNetwork
      }
    }
  }
</script>
