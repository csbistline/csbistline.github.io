<template>
  <v-app>
    <AppFloatingMenu v-if="!drawer" />
    <AppNavDrawer v-else />

    <v-main>
      <v-container
        fluid
        class="pt-12 pl-9"
      >
        <MainAbout />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppFloatingMenu from './components/AppFloatingMenu'
  import AppNavDrawer from './components/AppNavDrawer'
  import MainAbout from './components/MainAbout'

  export default {
    name: 'App',
    components: {
      AppNavDrawer, MainAbout, AppFloatingMenu,
    },
    data: () => ({}),
    computed: {
      drawer () {
        return this.$vuetify.breakpoint.mdAndUp
      },
    },
  }
</script>
