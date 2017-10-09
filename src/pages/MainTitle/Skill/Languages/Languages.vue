<template>
    <v-card class="my-2 pa-2 elevation-3 card-size" height="100%">
        <v-layout row wrap>
            <v-flex xs12 sm3 md4>
                <v-card-text class="headline mx-2 mobile mb-3">Languages</v-card-text>
            </v-flex>
            <v-flex xs12 sm9 md8 class="text-xs-right mobile mt-3">
                <v-btn class="my-0 mobile" @click.native="selected = 'Programing'" flat info>Programing</v-btn>
                <v-btn class="my-0 mobile" @click.native="selected = 'General'" flat info>General</v-btn>
            </v-flex>
        </v-layout>
        <Programing v-if="selected === 'Programing'"></Programing>
        <General v-else-if="selected === 'General'"></General>
    </v-card>
</template>

<script>
  import Programing from '@/pages/MainTitle/Skill/Languages/tabs/Programing'
  import General from '@/pages/MainTitle/Skill/Languages/tabs/General'

  export default {
    data () {
      return {
        selected: 'Programing'
      }
    },
    components: {
      Programing,
      General
    }
  }
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 414px) {
    .mobile {
      margin: 0px 0px !important;
    }

    .card-size {
      height: 550px !important;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1099px) {
    .mobile {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }
  }
</style>
