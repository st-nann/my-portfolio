<template>
    <v-layout row justify-center>
        <v-dialog v-model="modal" width="700px" persistent scrollable>
            <Modal
                title="Detail"
                description=""
                button="Close"
                :closeModal="closeModal"
            >
                <div slot="body">
                    <v-card flat>
                        <v-container fluid grid-list-xs>
                            <v-layout row wrap>
                                <v-flex xs12 sm4 md4 v-for="(item, index) in image_design" :key="index">
                                    <v-card flat tile>
                                        <v-card-media
                                            class="image-size"
                                            :src="item.image"
                                            height="150px"
                                        >
                                        </v-card-media>
                                    </v-card>
                                </v-flex>
                                <v-flex xs12 sm4 md4 v-for="(item, index) in image_coding" :key="index">
                                    <v-card flat tile>
                                        <v-card-media
                                            class="image-size"
                                            :src="item.image"
                                            height="150px"
                                        >
                                        </v-card-media>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </div>
            </Modal>
        </v-dialog>
    </v-layout>
</template>

<script>
  import Modal from '@/components/Modal'

  export default {
    props: ['modal', 'closeModal', 'image_design', 'image_coding'],
    components: {
      Modal
    }
  }
</script>

<style lang="scss" scoped>
  .image-size {
    object-fit: cover;
  }
</style>
