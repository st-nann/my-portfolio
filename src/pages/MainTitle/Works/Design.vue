<template>
    <v-card class="grey lighten-4 elevation-0 ma-4 mobile-bg-grey">
        <v-layout row wrap class="pa-5" v-if="works_design.length === 0">
            <v-flex xs12>
                <p class="headline black--text text-xs-center mb-0">No works</p>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="pa-5 mobile" v-else>
            <v-flex xs12 md12>
                <v-layout row wrap v-for="(item, index) in works_design" :key="index">
                    <v-flex xs12 sm6 md4 xl2>
                        <v-card class="elevation-1">
                            <v-card-media class="image-size" :src="item.image" height="200px"></v-card-media>
                            <div class="pa-3">
                                <div class="title grey--text text--darken-3 mb-0">{{item.title}} </div>
                                <span class="caption grey--text text--darken-1">{{item.subtitle}}</span>
                                <div class="caption grey--text mt-2 mb-0">
                                    {{item.description}}  <a v-show="image_design !== 0" class="clickable blue--text" @click.stop="openModal">view more</a>
                                </div>
                            </div>
                            <WorksDetail :modal="modal" :closeModal="closeModal" :image_design="image_design"></WorksDetail>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-card>
</template>

<script>
  import _ from 'lodash'
  import data from '@/../data/Works'
  import dataDetail from '@/../data/WorksDetail'
  import WorksDetail from '@/pages/MainTitle/Works/modal/WorksDetail'

  export default {
    data () {
      return {
        modal: false
      }
    },
    computed: {
      works_design: function () {
        return data.works_design
      },
      id: function () {
        let id = ''
        _.forEach(data.works_design, function (value) {
          id = value.id
        })
        return id
      },
      image_design: function () {
        let listImageDesign = []
        let self = this
        if (_.size(dataDetail.works_detail_design) === 0) {
          listImageDesign = 0
        } else {
          _.forEach(dataDetail.works_detail_design, function (value) {
            if (self.id === value.id && _.size(value.list_image) !== 0) {
              listImageDesign = value.list_image
            } else {
              listImageDesign = 0
            }
          })
        }
        return listImageDesign
      }
    },
    components: {
      WorksDetail
    },
    methods: {
      openModal: function () {
        this.modal = true
      },
      closeModal: function () {
        this.modal = false
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
