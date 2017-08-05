<template>
    <v-layout row wrap class="text-xs-center">
        <v-flex xs4 md3 v-for="(item, index) in version_control" :key="index">
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
      version_control: function () {
        let listVersionControl = []
        _.forEach(data.tools, function (item) {
          listVersionControl = item.version_control
        })
        return listVersionControl
      }
    }
  }
</script>
