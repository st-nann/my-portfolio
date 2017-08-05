<template>
    <v-card class="my-2 pa-2 elevation-3 card-size" height="280px">
        <v-layout row wrap>
            <v-flex xs12>
                <v-card-text class="headline mx-2 mobile mb-3">Library</v-card-text>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="text-xs-center">
            <v-flex xs4 v-for="(item, index) in library" :key="index">
                <img :src="item.image" :class="{ 'mt-1': item.name === 'Lodash' }" width="40px"/>
                <p>{{item.name}}</p>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
  import data from '@/../data/Skill'

  export default {
    computed: {
      library: function () {
        return data.library
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 414px) {
    .mobile {
        margin: 0px 0px !important;
    }

    .card-size {
        height: 250px !important;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1099px) {
    .card-size {
        height: 350px !important;
    }
  }
</style>
