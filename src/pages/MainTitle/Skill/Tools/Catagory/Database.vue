<template>
    <v-layout row wrap class="text-xs-center">
        <v-flex xs4 md3 v-for="(item, index) in database" :key="index">
            <img :src="item.image" :class="{ 'my-1': item.name === 'Microsoft SQL Server' }" width="40px"/>
            <p>{{item.name}}</p>
        </v-flex>
    </v-layout>
</template>

<script>
  import _ from 'lodash'
  import data from '@/../data/Skill'

  export default {
    computed: {
      database: function () {
        let listDatabase = []
        _.forEach(data.tools, function (item) {
          listDatabase = item.database
        })
        return listDatabase
      }
    }
  }
</script>
