<template>
  <v-app class="background">
    <AppFloatingMenu
      v-if="!drawer"
      ref="AppFloatingMenu"
    />
    <AppNavDrawer
      v-else
      ref="AppNavDrawer"
    />

    <v-main
      class="background"
    >
      <v-container
        fluid
        class="pt-12 px-9 main"
      >
        <MainAbout
          id="about"
          class="mb-12"
          @changeMenu="changeMenu"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { menuItems } from "./db/db";
import AppFloatingMenu from "./components/AppFloatingMenu";
import AppNavDrawer from "./components/AppNavDrawer";
import MainAbout from "./components/MainAbout";

export default {
  name: "App",
  components: {
    AppNavDrawer,
    MainAbout,
    AppFloatingMenu
  },
  data: () => ({}),
  computed: {
    drawer() {
      return this.$vuetify.breakpoint.mdAndUp;
    }
  },
  methods: {
    changeMenu(anchor) {
      const anchors = menuItems.map(item => item.anchor);
      const index = anchors.indexOf(anchor);
      this.$refs.AppNavDrawer.selectedItem = index;
    },
    onScroll(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="scss" scoped>
.main {
  max-width: 600px;
  position: absolute;
  left: 0;
  background-color: white;
}
.background {
  background-color: rgb(120, 144, 156);
}
</style>
