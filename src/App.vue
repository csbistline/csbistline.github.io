<template>
  <v-app>
    <AppNavbar v-if="!drawer" />

    <v-main>
      <v-container fluid> Main section content </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from "./components/AppNavbar"
export default {
  name: "App",

  components: {AppNavbar},

  data: () => ({     
    items: [
           { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" },
    ],
    right: null,
    group: null,
  }),
  computed: {
    drawer() {
      return this.$vuetify.breakpoint.smAndUp;
    },
  },
};
</script>
