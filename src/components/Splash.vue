<template>
  <div class="bg">
    <img class="mobile mt-5 pt-5" src="../img/background/Splash-nobg.png" width="60%">
    <v-layout>
      <v-flex xs12>
        <v-btn class="mt-4 px-5 white--text blue-grey darken-4" round dark>Enter Site</v-btn>
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
</style>
