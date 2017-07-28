<template>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card class="grey lighten-3 grey--text text--darken-3" height="400px">
                <v-layout row wrap>
                    <v-flex xs12>
                        <p class="display-1 pt-5"><b>WHO AM I</b></p>
                    </v-flex>
                    <v-flex xs10 offset-xs1>
                        <v-divider class="grey lighten-1"></v-divider>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs3>
                        <v-icon class="display-4 pt-4 text-xs-right rotate-icon icon-left-style">format_quote</v-icon>
                    </v-flex>
                    <v-flex xs6 class="headline pt-5 text-xs-center text-style">
                        <span class="display-3"> H</span> ello My name is  <span class="light-blue--text text--darken-4"> Sanyanee Thawinvongrak (Nan). </span>
                        <p class="subheading sub-content-style"> I'm a web developer. I graduated from King Mongkut's Institute of Technology Ladkrabang in Bachelor Degree (Second Class Honors). Faculty of Science, Department of Computer Science. </p>
                    </v-flex>
                    <v-flex xs3 class="pt-5">
                        <v-icon class="display-4 pt-5 mt-5 text-xs-left icon-right-style">format_quote</v-icon>
                    </v-flex>
                </v-layout>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<style lang="scss" scoped>
  .rotate-icon {
    transform: rotate(180deg)
  }

  @media only screen and (max-width: 768px) {
    .text-style {
      margin-top: -30px !important;
    }

    .icon-right-style {
      margin-top: 90px !important;
    }
  }

  @media only screen and (max-width: 414px) {
    .text-style {
      font-size: 20px !important;
    }

    .sub-content-style {
      font-size: 10px !important;
      line-height: 2;
    }

    .icon-right-style {
      margin-top: 90px !important;
    }
  }

  @media only screen and (max-width: 375px) {
    .text-style {
      font-size: 15px !important;
      line-height: 1.3 !important;
    }

    .icon-left-style {
      font-size: 80px !important;
    }

    .icon-right-style {
      font-size: 80px !important;
      margin-top: 120px !important;
    }
  }
</style>
