<template>
    <v-card class="my-2 pa-2 elevation-3 card-size" height="100%">
        <v-layout row wrap>
            <v-flex xs12 sm7 md7>
                <v-card-text class="headline mx-2 mobile mb-3">Tools</v-card-text>
            </v-flex>
            <v-flex xs12 sm4 md4 class="text-xs-right mx-4 mobile">
                <!--<v-select-->
                    <!--v-bind:items="menu"-->
                    <!--v-model="selected"-->
                    <!--item-text="name"-->
                    <!--item-value="value"-->
                    <!--single-line-->
                    <!--auto light-->
                    <!--hide-details-->
                <!--&gt;</v-select>-->
                <v-menu offset-y>
                    <v-btn class="text-xs-right mx-0 mt-3 mobile" slot="activator" color="info" flat>
                        {{catagory}} <v-icon info>keyboard_arrow_down</v-icon>
                    </v-btn>
                    <v-list style="cursor: pointer;">
                        <v-list-tile v-for="(item, index) in menu" :key="index" @click.native="selectCatagory(item.name, item.value)">
                            <v-list-tile-title >{{ item.name }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-flex>
        </v-layout>
        <Design v-if="selected === 'design'"></Design>
        <Editor v-else-if="selected === 'editor'"></Editor>
        <VisionControl v-else-if="selected === 'version_control'"></VisionControl>
        <VirtualMachine v-else-if="selected === 'virtual_machine'"></VirtualMachine>
        <ScheduleWork v-else-if="selected === 'schedule'"></ScheduleWork>
        <APITest v-else-if="selected === 'api'"></APITest>
        <Database v-else-if="selected === 'database'"></Database>
        <Network v-else-if="selected === 'network'"></Network>
        <TalkChanel v-else-if="selected === 'talk'"></TalkChanel>
        <Other v-else-if="selected === 'other'"></Other>
    </v-card>
</template>

<script>
  import Design from '@/pages/MainTitle/Skill/Tools/Catagory/Design'
  import Editor from '@/pages/MainTitle/Skill/Tools/Catagory/Editor'
  import VisionControl from '@/pages/MainTitle/Skill/Tools/Catagory/VisionControl'
  import VirtualMachine from '@/pages/MainTitle/Skill/Tools/Catagory/VirtualMachine'
  import ScheduleWork from '@/pages/MainTitle/Skill/Tools/Catagory/ScheduleWork'
  import APITest from '@/pages/MainTitle/Skill/Tools/Catagory/APITest'
  import Database from '@/pages/MainTitle/Skill/Tools/Catagory/Database'
  import Network from '@/pages/MainTitle/Skill/Tools/Catagory/Network'
  import TalkChanel from '@/pages/MainTitle/Skill/Tools/Catagory/TalkChanel'
  import Other from '@/pages/MainTitle/Skill/Tools/Catagory/Other'

  export default {
    data () {
      return {
        selected: 'design',
        catagory: 'Deisgn',
        menu: [
          { name: 'Deisgn', value: 'design' },
          { name: 'Editor', value: 'editor' },
          { name: 'Vision Control', value: 'version_control' },
          { name: 'Virtual Machine', value: 'virtual_machine' },
          { name: 'Schedule Work', value: 'schedule' },
          { name: 'API Test', value: 'api' },
          { name: 'Database', value: 'database' },
          { name: 'Network', value: 'network' },
          { name: 'Talk Chanel', value: 'talk' },
          { name: 'Other', value: 'other' }
        ]
      }
    },
    components: {
      Design,
      Editor,
      VisionControl,
      VirtualMachine,
      ScheduleWork,
      APITest,
      Database,
      Network,
      TalkChanel,
      Other
    },
    methods: {
      selectCatagory: function (name, value) {
        this.selected = value
        this.catagory = name
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media only screen and (max-width: 414px) {
    .mobile {
      margin-top: -10px !important;
      margin-bottom: 10px !important;
      margin-left: 0px !important;
      margin-right: 0px !important;
    }

    .card-size {
      height: 370px !important;
    }
  }
  @media only screen and (min-width: 1024px) and (max-width: 1099px) {
    .mobile {
      margin-left: 0px !important;
      margin-right: 0px !important;
    }

    .card-size {
      height: 350px !important;
    }
  }
</style>
