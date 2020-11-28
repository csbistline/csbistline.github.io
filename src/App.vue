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
        <MainExperience
          id="experience"
          class="mb-12"
          @changeMenu="changeMenu"
        />
        <MainEducation
          id="education"
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
import MainExperience from "./components/MainExperience";
import MainEducation from "./components/MainEducation";

export default {
  name: "App",
  components: {
    AppNavDrawer,
    AppFloatingMenu,
    MainAbout,
    MainExperience,
    MainEducation
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
<style lang="scss" >
.main {
  max-width: 900px;
  position: absolute;
  left: 0;
  background-color: white;
}
.background {
  background-color: rgb(120, 144, 156);
}
.name {
  text-transform: uppercase;
  font-family: "Saira Extra Condensed";
  color: black;
  font-size: 7rem;
  font-weight: 700;
  line-height: 6rem;
}
.highlight {
  color: #78909c;
}
.accent-2 {
  color: #00b8d4 !important;
}
.no-decoration {
  text-decoration: none;
}
.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.5rem;
}
.lead {
  font-size: 1rem;
  font-weight: 400;
  color: black;
  margin-bottom: 0 !important;
}
.full-height {
  min-height: 100vh;
}

h2,
h3,
h4 {
  text-transform: uppercase;
  font-family: "Saira Extra Condensed", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
h2 {
  font-weight: 700;
  font-size: 3rem;
}
h3 {
  font-weight: 700;
  font-size: 1.75rem;
}
h4 {
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1rem;
  margin-bottom: 1rem;
}
</style>
