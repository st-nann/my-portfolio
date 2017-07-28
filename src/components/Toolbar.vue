<template>
    <v-toolbar class="grey darken-3 elevation-5" dark dense>
        <v-toolbar-side-icon v-if="$route.path !== '/AboutMe'"></v-toolbar-side-icon>
        <v-toolbar-title> <b> Portfolio </b> | <span class="caption ml-2"> Sanyanee T.「サンヤニー」</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon to="/AboutMe" light>
            <img src="../img/icon/mascot.svg" width="35px"/>
        </v-btn>
    </v-toolbar>
</template>
