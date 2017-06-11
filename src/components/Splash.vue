<template>
  <div class="bg">
    <img class="mt-5 elevation-5" src="../img/background/Splash-nobg.png">
    <v-layout row justify-center>
      <v-flex xs12>
        <v-btn class="mobile mt-4 px-5 white--text blue-grey darken-4" round dark>Enter Site</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<style scoped>
  .bg {
    background: url("~@/img/background/bg.jpg");
    background-position: center bottom;
    background-size: cover;

    /*!* Set up proportionate scaling *!*/
    width: 100%;
    height: 100%;

    /*!* Set up positioning *!*/
    position: fixed;
    top: 0;
    left: 0;
  }

  .flex-center {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 375px) {
    img {
      width: 80%;
    }

    .mobile {
      height: 20px;
      font-size: 8px;
      padding-left: 10px !important;
      padding-right: 10px !important;
    }
  }
</style>
