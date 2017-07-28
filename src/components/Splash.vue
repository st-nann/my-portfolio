<template>
  <div class="bg pa-5">
    <v-layout row wrap>
      <v-flex xs12 sm12 md12 lg10>
        <div class="bg-content">
          <v-layout row wrap>
            <v-flex xs12 sm12 md12>
              <p class="text-xs-right white--text mb-1 content-title"> Sanyanee T. </p>
            </v-flex>
            <v-flex xs12 sm12 md12 class="mb-5">
              <h6 class="text-xs-right white--text content-sub-title">
                <img src="../img/icon/mascot.svg"/>「サンヤニー」
              </h6>
            </v-flex>
            <v-btn class="white--text btn-style" block outline>Enter Site</v-btn>
          </v-layout>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<style lang="scss" scoped>
  .bg-style {
    background-position: center bottom;
    background-size: cover;

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
    @include .bg-style;
  }

  div.bg-content {
    background: rgba(0, 0, 0, 0.6);
    width: 50%;
    height: 450px;
    padding: 30px 30px;
    margin-left: 30px;
    margin-top: 50px;
  }

  .content-title {
    font-size: 75px;
  }

  .content-sub-title {
    font-size: 20px;
  }

  img {
    vertical-align: sub;
    width: 40px;
  }

  .btn-style {
    height: 45px;
     margin-top: 110px;
  }

  @media only screen and (max-width: 1024px) {
    .bg {
      background: url("~@/img/background/background-mobile.svg");
      background-position: center bottom;
      background-size: cover;

      /*!* Set up proportionate scaling *!*/
      min-width: 100%;
      min-height: 100%;

      /*!* Set up positioning *!*/
      position: fixed;
      top: 0;
      left: 0;
    }

    div.bg-content {
      background: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 1260px;
      padding: 48px 48px;
      margin-left: 0px;
      margin-top: 0px;
    }

    .content-title {
      font-size: 110px;
      margin-top: 630px;
    }

    .content-sub-title {
      font-size: 40px;
    }

    img {
      vertical-align: sub;
      width: 70px;
    }

    .btn-style {
      height: 100px;
      font-size: 25px;
      margin-top: 100px;
    }
  }

  @media only screen and (max-width: 768px) {
    .bg {
      background: url("~@/img/background/background-mobile.svg");
      background-position: center bottom;
      background-size: cover;

      /*!* Set up proportionate scaling *!*/
      min-width: 100%;
      min-height: 100%;

      /*!* Set up positioning *!*/
      position: fixed;
      top: 0;
      left: 0;
    }

    div.bg-content {
      background: rgba(0, 0, 0, 0.6);
      width: 100%;
      height: 940px;
      padding: 48px 48px;
      margin-left: 0px;
      margin-top: 0px;
    }

    .content-title {
      font-size: 80px;
      margin-top: 450px;
    }

    .content-sub-title {
      font-size: 30px;
    }

    img {
      vertical-align: sub;
      width: 60px;
    }

    .btn-style {
      height: 80px;
      font-size: 25px;
      margin-top: 70px;
    }
  }
</style>
