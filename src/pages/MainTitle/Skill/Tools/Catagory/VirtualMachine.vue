<template>
    <v-layout row wrap class="text-xs-center">
        <v-flex xs4 md3 v-for="(item, index) in virtual_machine" :key="index">
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
      virtual_machine: function () {
        let listVirtualMachine = []
        _.forEach(data.tools, function (item) {
          listVirtualMachine = item.virtual_machine
        })
        return listVirtualMachine
      }
    }
  }
</script>
