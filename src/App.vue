<template>
  <v-app>
    <AppNavbar v-if="!drawer" />
    <AppNavDrawer v-else />

    <v-main>
      <v-container
        fluid
        class="pt-12"
      >
        Main section content
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppNavbar from './components/AppNavbar'
  import AppNavDrawer from './components/AppNavDrawer'

  export default {
    name: 'App',
    components: { AppNavbar, AppNavDrawer },
    data: () => ({}),
    computed: {
      drawer () {
        return this.$vuetify.breakpoint.mdAndUp
      },
    },
  }
</script>
