<template>
    <div v-if="!loading">
        <v-carousel icon="photo" cycle dark>
            <v-carousel-item v-for="(item, index) in items" :key="index" v-bind:src="item.src"></v-carousel-item>
        </v-carousel>
        <WhoAmI></WhoAmI>
        <MyInfo></MyInfo>
        <v-layout row wrap>
          <v-flex sm12 md12>
            <Footers></Footers>
          </v-flex>
        </v-layout>
    </div>
    <div v-else>
        <loading></loading>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import WhoAmI from '@/pages/MainTitle/AboutMe/WhoAmI'
  import MyInfo from '@/pages/MainTitle/AboutMe/MyInfo'
  import Footers from '@/components/Footer'
  import loading from '@/components/loading'

  export default {
    data () {
      return {
        items: [
          { src: require('../../img/image/image-4.svg') },
          { src: require('../../img/image/image-1.svg') },
          { src: require('../../img/image/image-2.svg') },
          { src: require('../../img/image/image-5.svg') },
          { src: require('../../img/image/image-3.svg') }
        ]
      }
    },
    components: {
      loading,
      WhoAmI,
      MyInfo,
      Footers
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
  .carousel {
    height: 600px;
  }
</style>
