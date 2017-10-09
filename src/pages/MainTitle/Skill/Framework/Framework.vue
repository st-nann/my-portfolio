<template>
    <v-card class="my-2 pa-2 elevation-3 card-size" height="100%">
        <v-layout row wrap>
            <v-flex xs12 sm3 md4>
                <v-card-text class="headline mx-2 mobile mb-3">Frameworks</v-card-text>
            </v-flex>
            <v-flex xs12 sm9 md8 class="text-xs-right mobile mt-3">
                <v-btn class="my-0 mobile" @click.native="selected = 'Frontend'" color="info" flat>Frontend</v-btn>
                <v-btn class="my-0 mobile" @click.native="selected = 'Backend'" color="info" flat>Backend</v-btn>
            </v-flex>
        </v-layout>
        <Frontend v-if="selected === 'Frontend'"></Frontend>
        <Backend v-else-if="selected === 'Backend'"></Backend>
    </v-card>
</template>

<script>
  import Frontend from '@/pages/MainTitle/Skill/Framework/tabs/Frontend'
  import Backend from '@/pages/MainTitle/Skill/Framework/tabs/Backend'

  export default {
    data () {
      return {
        selected: 'Frontend'
      }
    },
    components: {
      Frontend,
      Backend
    }
  }
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 414px) {
    .mobile {
      margin: 0px 0px !important;
    }

    .card-size {
      height: 440px !important;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1099px) {
    .mobile {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }
  }
</style>
