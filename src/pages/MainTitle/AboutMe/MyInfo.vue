<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card class="grey darken-3 grey--text text--lighten-4 card-size">
                <v-layout row wrap>
                    <v-flex xs12>
                        <p class="display-1 pt-5"><b>My Info</b></p>
                    </v-flex>
                    <v-flex xs10 offset-xs1>
                        <v-divider class="grey lighten-4"></v-divider>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs10 offset-xs1>
                        <v-layout row wrap>
                            <v-flex xs6 sm4 md3 v-for="(item, index) in info" :key="index">
                                <v-card class="white text-xs-center mx-1 mt-5 elevation-5 pa-3 card-white-size" height="300px">
                                    <img class="mt-4 image-size" :src="item.icon" width="100px"/>
                                    <p class="headline my-4 text-style"><b>{{item.text}}</b></p>
                                    <v-btn class="white--text blue-grey darken-3 btn-style" :to="'/'+item.path" block large flat>View Detail</v-btn>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        info: [
          { text: 'Skill', icon: require('../../../img/icon/skill.svg'), path: 'Skill' },
          { text: 'Works', icon: require('../../../img/icon/ProfileOfWork.svg'), path: 'Works' },
          { text: 'Blog', icon: require('../../../img/icon/blog.svg'), path: 'Blog' },
          { text: 'Contact', icon: require('../../../img/icon/contact.svg'), path: 'Contact' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media only screen and (min-width: 768px) {
    .card-size {
      height: 500px !important;
    }
  }

  @media only screen and (max-width: 768px) {
    .card-size {
      height: 850px !important;
    }
  }

  @media only screen and (max-width: 414px) {
    .card-size {
      height: 550px !important;
    }

    .btn-style {
      font-size: 8px;
      height: 25px;
      margin-top: -25px;
    }

    .image-size {
      width: 50px;
      margin-top: 10px !important;
    }

    .card-white-size {
      height: 150px !important;
    }

    .text-style {
      font-size: 10px !important;
      margin-top: -5px !important;
    }
  }
</style>
