<template>
    <transition name="fade">
      <v-layout row wrap>
        <v-flex xs7 sm5 lg6>
          <img class="ma-2 logo" src="~@/img/image/base/logo-minimal.png"/>
          <v-layout
            row wrap
            :align-center="!$vuetify.breakpoint.xs"
            :align-start="$vuetify.breakpoint.xs"
          >
            <v-flex xs8 offset-xs2 style="z-index: 1;">
              <div
                class="black--text font-weight-regular"
                :class="{
                  'display-2 mt-1': $vuetify.breakpoint.xs,
                  'display-4': $vuetify.breakpoint.smAndUp,
                  'mt-5 pt-5 display-4': $vuetify.breakpoint.lgAndUp
                }"
              >sanyanee</div>
              <div class="mt-3 pl-1" :class="{'caption': $vuetify.breakpoint.xs}">
                サンヤーネィ・タビンボンラック
              </div>
              <v-divider class="ml-1 my-3 line"></v-divider>
              <div class="hidden-md-and-down">
                <v-btn class="elevation-3 px-3 ml-1" append :to="{ path: '/AboutMe'}" color="darkblue" round dark>
                  KNOW MORE <v-icon class="pl-2" size="12">far fa-arrow-alt-circle-right</v-icon>
                </v-btn>
              </div>
              <img class="bg-img-mobile hidden-lg-and-up" src="~@/img/image/home/home.jpg" style="z-index: 1;"/>
              <v-layout row wrap class="pl-1 font-size-10 hidden-lg-and-up">
                <v-flex xs12>Sanyanee Thawinvongrak</v-flex>
                <v-flex xs12>DEVELOPER</v-flex>
              </v-layout>
              <div class="hidden-lg-and-up mt-2 mb-3">
                <v-btn class="elevation-3 px-3 ml-0" append :to="{ path: '/AboutMe'}" color="darkblue" round dark small>
                  KNOW MORE <v-icon class="pl-2" size="12">far fa-arrow-alt-circle-right</v-icon>
                </v-btn>
              </div>
              <v-layout row wrap class="pt-5 mt-5 text-xs-right hidden-md-and-down">
                <v-flex xs12 class="pt-5 mt-5">Sanyanee Thawinvongrak</v-flex>
                <v-flex xs12>DEVELOPER</v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs2 sm1 lg1>
          <v-layout
            row wrap fill-height
            :align-center="!$vuetify.breakpoint.xs"
            :align-end="$vuetify.breakpoint.xs"
          >
            <v-flex xs12 style="z-index: 1;" class="hidden-md-and-down">
              <img class="bg-img-desktop" src="~@/img/image/home/home.jpg"/>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs3 sm6 lg5 class="bg-color"></v-flex>
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
    border-top: 7px solid #ffffff;
    border-right: 7px solid #ffffff;
    border-bottom: 7px solid #ffffff;
    @extend .bg-style;
  }

  .bg-img-desktop {
    width: 400%;
    @extend .bg-img;
  }

  .bg-img-mobile {
    @extend .bg-img;
  }

  @media only screen and (max-width: 599px) {
    .bg-img-mobile {
      width: 200%;
    }
  }

  @media only screen and (min-width: 600px) {
    .bg-img-mobile {
      width: 300%;
    }
  }

  .bg-color {
    background: #e0b265;
    z-index: 0;
    @extend .bg-style;
  }

  .line {
    border-width: thin 0px 2px 0;
    border-color: #5f5e5e;
    width: 60px;
  }
</style>
