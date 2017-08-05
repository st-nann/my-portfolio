<template>
    <transition name="fade">
        <div class="bg">
            <v-layout row wrap>
                <v-flex xs12 sm12 md12 lg10 class="px-5 pt-5">
                    <div class="bg-content">
                        <v-layout row wrap>
                            <v-flex xs12 sm12 md12>
                                <p class="white--text mb-0 content-title"> Sanyanee T. </p>
                            </v-flex>
                            <v-flex xs12 sm12 md12 class="mb-5">
                                <h6 class="white--text content-sub-title">
                                    <img src="../img/icon/mascot.svg"/>「サンヤニー」
                                </h6>
                            </v-flex>
                            <v-btn class="white--text btn-style" to="/AboutMe" block outline>Enter Site</v-btn>
                        </v-layout>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex sm12 md12>
                    <Footers class="footer-position hidden-md-and-up"></Footers>
                </v-flex>
            </v-layout>
        </div>
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
      /*!* Set up proportionate scaling *!*/
      min-width: 100%;
      min-height: 100%;

      /*!* Set up positioning *!*/
      position: fixed;
      top: 0;
      left: 0;
  }

  .bg {
    background: url("~@/img/background/background.svg");
    background-position: center bottom;
    background-size: cover;
    @extend .bg-style;
  }

  div.bg-content {
    background: rgba(0, 0, 0, 0.6);
    width: 50%;
    height: 420px;
    padding: 30px 30px;
    margin-left: 30px;
    margin-top: 50px;
  }

  .content-title {
    font-size: 75px;
    text-align: right;
  }

  .content-sub-title {
    font-size: 20px;
    text-align: right;
  }

  img {
    vertical-align: sub;
    width: 40px;
  }

  .btn-style {
    height: 45px;
    margin-top: 85px;
  }

  @media only screen and (max-width: 1024px) {
    .bg {
      background: url("~@/img/background/background-mobile.svg");
      background-position: center bottom;
      background-size: cover;

    }

    div.bg-content {
      width: 100%;
      height: 1270px;
      padding: 48px 48px;
      margin-left: 0px;
      margin-top: 0px;
    }

    .content-title {
      font-size: 110px;
      margin-top: 560px;
      text-align: left;
    }

    .content-sub-title {
      font-size: 40px;
      text-align: left;
    }

    img {
      width: 70px;
    }

    .btn-style {
      height: 100px;
      font-size: 30px;
      margin-top: 100px;
    }
  }

  @media only screen and (max-width: 768px) {
    div.bg-content {
      width: 100%;
      height: 890px;
      padding: 48px 48px;
      margin-left: 0px;
      margin-top: 0px;
    }

    .content-title {
      font-size: 80px;
      margin-top: 330px;
    }

    .content-sub-title {
      font-size: 30px;
    }

    img {
      width: 60px;
    }

    .btn-style {
      height: 80px;
      font-size: 25px;
      margin-top: 140px;
    }

    .footer-position {
      margin-top: 50px;
    }
  }

  @media only screen and (max-width: 414px) {
    div.bg-content {
      width: 113%;
      height: 635px;
      padding: 48px 25px;
      margin-left: -20px;
      margin-top: -20px;
    }

    .content-title {
      font-size: 50px;
      margin-top: -35px;
    }

    .content-sub-title {
      font-size: 20px;
      text-align: right;
    }

    img {
      width: 40px;
    }

    .btn-style {
      height: 55px;
      font-size: 16px;
      margin-top: 330px;
    }

    .footer-position {
      margin-top: 37px;
    }
  }

  @media only screen and (max-width: 375px) {
    div.bg-content {
      width: 122%;
      height: 585px;
      padding: 48px 20px;
      margin-left: -30px;
      margin-top: -30px;
    }

    .content-title {
      font-size: 45px;
      margin-top: -40px;
    }

    .content-sub-title {
      font-size: 18px;
    }

    img {
      width: 38px;
    }

    .btn-style {
      height: 50px;
      font-size: 15px;
      margin-top: 290px;
    }

    .footer-position {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 320px) {
    div.bg-content {
      width: 130%;
      height: 490px;
      padding: 30px 20px;
      margin-left: -35px;
      margin-top: -35px;
    }

    .content-title {
      font-size: 40px;
      margin-top: -20px;
    }

    .content-sub-title {
      font-size: 13px;
    }

    img {
      width: 30px;
    }

    .btn-style {
      height: 45px;
      font-size: 15px;
      margin-top: 230px;
    }
  }
</style>
