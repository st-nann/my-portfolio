<template>
    <v-toolbar class="white" fixed light flat>
        <v-toolbar-side-icon
          v-if="$route.path !== '/AboutMe'"
          class="black--text"
          @click.native.stop="toggleSidebar()"
        ></v-toolbar-side-icon>
        <v-toolbar-title class="ml-0">
          <img class="mt-2 logo" src="~@/img/icon/logo-minimal.png"/>
        </v-toolbar-title>
        <v-spacer></v-spacer>
         <v-toolbar-items v-for="(item, index) in menu" :key="index">
            <v-btn
              class="menu font-weight-bold"
              append :to="{path: item.route}"
              color="black"
              :ripple="false"
              flat
            >
              <span :class="{'text-decoration': $route.path === item.route}">{{item.name}}</span>
            </v-btn>
          </v-toolbar-items>
    </v-toolbar>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        menu: [
          { name: 'About me', value: 'about_me', route: '/AboutMe' },
          { name: 'Experience', value: 'experience', route: '/Experience' },
          { name: 'Skill', value: 'skill', route: '/Skill' },
          { name: 'Portfolio', value: 'portfolio', route: '/Works' },
          { name: 'Contacts', value: 'contacts', route: '/Contacts' }
        ]
      }
    },
    methods: {
      ...mapActions('layout', [
        'toggleSidebar', // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
        'hiddenSider' // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
      ])
    }
  }
</script>

<style lang="stylus">
  .menu.v-btn--active:before,
  .menu.v-btn:hover:before,
  .menu.v-btn:focus:before {
    background-color: transparent;
  }
</style>
