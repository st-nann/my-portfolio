<template>
    <v-layout row wrap class="text-xs-center">
        <v-flex xs4 md3 v-for="(item, index) in design" :key="index">
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
      design: function () {
        let listDesign = []
        _.forEach(data.tools, function (item) {
          listDesign = item.design
        })
        return listDesign
      }
    }
  }
</script>
