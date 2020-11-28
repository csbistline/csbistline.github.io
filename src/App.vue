<template>
  <v-app>
    <AppFloatingMenu v-if="!drawer" />
    <AppNavDrawer v-else />

    <v-main class="background">
      <v-container
        fluid
        class="pt-12 px-9 main"
      >
        <MainAbout />
        <MainAbout />
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
<style lang="scss" scoped>
.main {
  max-width: 600px;
  position: absolute;
  left: 0;
  background-color: white;
}
.background {
  background-color: rgb(120, 144, 156,);
}
</style>
