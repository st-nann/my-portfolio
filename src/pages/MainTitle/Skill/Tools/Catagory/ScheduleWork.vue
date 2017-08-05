<template>
    <v-layout row wrap class="text-xs-center">
        <v-flex xs4 md3 v-for="(item, index) in schedule" :key="index">
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
      schedule: function () {
        let listSchedule = []
        _.forEach(data.tools, function (item) {
          listSchedule = item.schedule
        })
        return listSchedule
      }
    }
  }
</script>
