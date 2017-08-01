<template>
    <v-layout row wrap>
        <v-flex xs10 offset-xs1 class="my-5">
            <v-card class="text-xs-left pa-5">
               <v-layout row wrap class="mt-5">
                   <v-flex xs6 class="mt-5">
                       <img class="mt-5 pt-4 text-xs-right" src="../../img/icon/Error404.svg" width="500px"/>
                   </v-flex>
                   <v-flex xs5>
                       <v-card-text class="display-1 grey--text text--darken-2 pb-0"><b>Oops !</b></v-card-text>
                       <v-card-text class="title grey--text text--darken-2 pt-3 pb-0">You have some problems.</v-card-text>
                       <v-card-text class="body-2 grey--text text--darken-1 pt-1">The page you are looking for was moved, removed, renamed or might never existed.</v-card-text>
                       <v-btn class="ml-3 light-blue--text text--darken-3" :to="{ path: '/' }" outline>Go back</v-btn>
                   </v-flex>
               </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<style lang="scss" scoped>
  .text-style {
    border: 1px dashed #202020;
    border-radius: 50px;
    width: 150px;
  }
</style>
