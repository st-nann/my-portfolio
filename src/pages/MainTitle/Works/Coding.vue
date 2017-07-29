<template>
    <v-card class="grey lighten-4 elevation-0 ma-4 mobile-bg-grey">
        <v-layout row wrap class="pa-5" v-if="works_coding.length === 0">
            <v-flex xs12>
                <p class="headline black--text text-xs-center mb-0">No works</p>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="pa-5 mobile" v-else>
            <v-flex xs12 md12>
                <v-layout row wrap v-for="(item, index) in works_coding" :key="index">
                    <v-flex xs12 sm6 md4 lg2>
                        <v-card class="elevation-1">
                            <v-card-media class="image-size" :src="item.image" height="200px"></v-card-media>
                            <div class="pa-3">
                                <div class="title grey--text text--darken-3 mb-0">{{item.title}}</div>
                                <span class="caption grey--text text--darken-1">{{item.subtitle}}</span>
                                <div class="caption grey--text mt-2 mb-0">{{item.description}}</div>
                            </div>
                            <v-card-actions class="pt-0">
                                <v-btn flat class="orange--text">View</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
  export default {
    data () {
      return {
        works_coding: []
      }
    }
  }
</script>


<style lang="scss" scoped>
  @media only screen and (max-width: 1024px) {
    .mobile {
      padding: 20px !important;
    }
  }

  @media only screen and (max-width: 320px) {
    .mobile {
      padding: 30px !important;
    }

    .mobile-bg-grey {
      margin: 0px !important;
    }

    .image-size {
      height: 150px !important;
    }
  }
</style>

