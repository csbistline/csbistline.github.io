<template>
  <v-hover v-slot="{ hover }">
    <v-icon
      class="my-3 mr-3"
      :color="hover ? highlightColor : baseColor"
      x-large
      @click="openLink"
    >
      {{ icon }}
    </v-icon>
  </v-hover>
</template>

<script>
  export default {
    name: 'BtnSocialIcon',
    props: {
      baseColor: {
        type: String,
        required: false,
        default: '#78909C',
      },
      highlightColor: {
        type: String,
        required: false,
        default: '#00B8D4',
      },
      link: {
        type: String,
        required: false,
        default: '#',
      },
      icon: {
        type: String,
        required: false,
        default: 'mdi-alert-circle-outline',
      },
    },
    data: () => ({}),
    computed: {},
    methods: {
      openLink () {
        window.open(this.link)
      },
    },
  }
</script>

<style scoped>
</style>
