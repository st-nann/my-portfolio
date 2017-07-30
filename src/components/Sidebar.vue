<template>
    <v-navigation-drawer
            v-if="$route.path !== '/AboutMe'"
            class="pb-0 pt-3"
            persistent
            absolute
            temporary
            height="100%"
            clipped
            enable-resize-watcher
            v-model="showSidebar"
    >
        <v-list dense>
            <template v-for="(item, i) in items">
                <v-layout
                    row
                    v-if="item.heading"
                    align-center
                    :key="i"
                >
                    <v-flex xs6>
                        <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
                    </v-flex>
                </v-layout>
                <v-list-group v-else-if="item.children" v-model="item.model" no-action>
                    <v-list-tile slot="item">
                        <v-list-tile-action>
                            <v-icon>{{ item.model ? item.icon : item['icon-alt'] }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.text }} </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile v-for="(child, i) in item.children" :key="i" :to="{ path: '/' + child.path }" @click.native.stop="toggleSidebar()">
                        <v-list-tile-action v-if="child.icon" class="ml-4">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>{{ child.text }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list-group>
                <v-list-tile v-else :to="{ path: '/' + item.path }" @click.native.stop="toggleSidebar()">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.text }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    data () {
      return {
        items: [
          { icon: 'account_circle', text: 'About me', path: 'AboutMe' },
          {
            icon: 'keyboard_arrow_up',
            'icon-alt': 'keyboard_arrow_down',
            text: 'My Info',
            model: false,
            children: [
              { icon: 'equalizer', text: 'Experience', path: 'Experience' },
              { icon: 'star_half', text: 'Skill', path: 'Skill' },
              { icon: 'business', text: 'Works', path: 'Works' },
              { icon: 'perm_phone_msg', text: 'Contacts', path: 'Contacts' }
            ]
          }
        ]
      }
    },
    computed: {
      ...mapState('layout', {
        showSidebar: state => state.showSidebar
      })
    },
    methods: {
      ...mapActions('layout', [
        'toggleSidebar' // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
      ])
    }
  }
</script>

<style>
  #navigation-1 a {
    text-decoration: none;
  }
</style>
