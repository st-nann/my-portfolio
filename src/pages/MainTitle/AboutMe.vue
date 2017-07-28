<template>
    <div>
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
</template>

<script>
  import WhoAmI from '@/pages/MainTitle/AboutMe/WhoAmI'
  import MyInfo from '@/pages/MainTitle/AboutMe/MyInfo'
  import Footers from '@/components/Footer'
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
      WhoAmI,
      MyInfo,
      Footers
    }
  }
</script>

<style lang="scss" scoped>
  .carousel {
    height: 600px;
  }
</style>
