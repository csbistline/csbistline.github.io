<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-hover v-slot="{ hover }">
        <v-icon
          class="my-3 mr-3"
          :color="hover ? highlightColor : baseColor"
          x-large
          v-bind="attrs"
          v-on="on"
        >
          {{ icon }}
        </v-icon>
      </v-hover>
    </template>
    <span v-html="text" />
  </v-tooltip>
</template>

<script>
export default {
  name: "BtnSkillIcon",
  props: {
    baseColor: {
      type: String,
      required: false,
      default: "#78909C"
    },
    highlightColor: {
      type: String,
      required: false,
      default: "#00B8D4"
    },
    icon: {
      type: String,
      required: false,
      default: "mdi-alert-circle-outline"
    },
    text: {
      type: String,
      required: false,
      default: ""
    }
  },
  data: () => ({}),
  computed: {},
  methods: {}
};
</script>

