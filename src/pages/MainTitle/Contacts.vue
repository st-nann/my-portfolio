<template>
    <v-layout row wrap class="pa-4 mobile" v-if="!loading">
        <v-flex xs10 offset-xs1 sm10 offset-sm1 md10 offset-md1 xl8 offset-xl2>
            <v-layout row wrap>
                <v-flex xs12 sm5 md4 class="pr-0 mt-3 modify-padding">
                    <v-card class="pa-4 text-xs-left blue-grey darken-3 white--text" height="505px">
                        <v-layout row wrap>
                            <v-flex xs12 md12>
                                <span class="display-2">| </span>
                                <span class="display-1">Contacts</span>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap class="text-xs-center">
                            <v-flex xs12 md12>
                                <img class="image-style mt-5 mb-4" src="../../img/image/profile.svg"/>
                            </v-flex>
                            <v-flex xs12 md12>
                                <p class="title">Sanyanee Thawinvongrak</p>
                                <p class="body-2 mb-5">「サンヤニー」</p>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm7 md8 lg8 class="pl-0 mt-3 modify-padding">
                    <v-card class="text-xs-left pa-5" height="505px">
                        <v-layout row wrap class="pt-5 mobile-padding-top">
                            <v-flex xs12 md12 class="pt-4">
                                <div v-for="(item, index) in contacts_detail" :key="index">
                                    <v-layout row wrap class="pb-3">
                                        <v-flex xs12 sm5 md3>
                                            <img class="image-position mr-2" :src="item.icon" width="20px"/> {{item.title}} :
                                        </v-flex>
                                        <v-flex xs12 sm7 md9>
                                            <a v-if="item.title === 'Github' || item.title === 'LinkedIn' || item.title === 'Blog'" class="black--text text-wrap" style="text-decoration: none;" :href="item.description" target="_blank">{{item.description}}</a>
                                            <span v-else class="text-wrap">{{item.description}}</span>
                                        </v-flex>
                                    </v-layout>
                                </div>
                            </v-flex>
                            <v-flex xs12 md12 class="text-xs-right pt-5 signature">
                                <img src="../../img/image/signature.svg" width="200px"/>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-flex>
    </v-layout>
    <loading v-else></loading>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import loading from '@/components/loading'

  export default {
    data () {
      return {
        contacts_detail: [
          { icon: require('../../img/icon/email.svg'), title: 'E-mail', description: 'st.sanyanee@hotmail.com' },
          { icon: require('../../img/icon/tel.svg'), title: 'Tel', description: '081-415-9698' },
          { icon: require('../../img/icon/blog-icon.png'), title: 'Blog', description: 'https://medium.com/st-sanyanee' },
          { icon: require('../../img/icon/github.svg'), title: 'Github', description: 'https://github.com/st-nann' },
          { icon: require('../../img/icon/linkedin.svg'), title: 'LinkedIn', description: ' https://www.linkedin.com/in/sanyanee-thawinvongrak-628229144' }
        ]
      }
    },
    components: {
      loading
    },
    computed: {
      ...mapState({
        loading: state => state.loading.loading
      })
    },
    created () {
      this.doLoading()
    },
    methods: {
      ...mapActions('loading', [
        'showLoading', // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
        'noLoading' // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
      ]),
      doLoading: async function () {
        this.showLoading()
        if (this.loading) {
          let self = this
          setTimeout(function () {
            self.noLoading()
          }, 1000)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .image-style {
    width: 183px;
    border-radius: 50%;
  }

  .card {
    border-radius: 0px;
  }

  .image-position {
    vertical-align: text-bottom;
  }

  .text-wrap {
    word-wrap: break-word;
  }

  @media only screen and (max-width: 768px) {
    .signature {
      padding-top: 0px !important;
    }

    .mobile-padding-top {
      padding-top: 5px !important;
    }
  }

  @media only screen and (max-width: 414px) {
    .modify-padding {
      padding-left: 4px !important;
      padding-right: 4px !important;
    }
  }

  @media only screen and (max-width: 320px) {
    .mobile {
      padding: 0px 0px !important;
    }
  }
</style>
