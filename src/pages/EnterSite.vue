<template>
    <transition name="fade">
        <v-layout row wrap>
          <v-flex xs8>
            <img class="ma-2 logo" src="~@/img/icon/logo.png"/>
            <v-layout row wrap align-center>
              <v-flex xs8 offset-xs2>
                <div class="display-3 black--text font-weight-regular">sanyanee</div>
                <div>サンヤーネィ・タビンボンラック</div>
                <v-divider class="my-3 line"></v-divider>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs4 class="bg-color">
            <v-layout row wrap align-center fill-height>
              <v-flex xs12>
                <img class="bg-img" src="~@/img/image/home/home.jpg"/>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
    </transition>
</template>

<script>
  import Footers from '@/components/Footer'

  export default {
    components: {
      Footers
    }
  }
</script>

<style lang="scss" scoped>
  .bg-style {
    right: 0;
  }

  .bg-img {
    width: 90%;
    height: auto;
    border-top: 7px solid #ffffff;
    border-right: 7px solid #ffffff;
    border-bottom: 7px solid #ffffff;
    @extend .bg-style;
  }

  .bg-color {
    background: #e0b265;
    @extend .bg-style;
  }

  .line {
    border-width: thin 0px 2px 0;
    border-color: #5f5e5e;
    width: 60px;
  }
</style>
