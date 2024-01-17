<template>
  <v-app class="no-scroll">
    <AppFloatingMenu
      v-if="!drawer"
      ref="AppFloatingMenu"
    />
    <AppNavDrawer
      v-else
      ref="AppNavDrawer"
    />

    <v-main>
      <v-container
        fluid
        class="pt-12 px-9 main carousel-width"
      >
        <v-row>
          <v-col
            cols="12"
            md="10"
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
            <MainSkills
              id="skills"
              class="mb-12"
              @changeMenu="changeMenu"
            />
            <MainInterests
              id="interests"
              class="mb-12"
              @changeMenu="changeMenu"
            />
          </v-col>
        </v-row>
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
import MainInterests from "./components/MainInterests";
import MainSkills from "./components/MainSkills";

export default {
  name: "App",
  components: {
    AppNavDrawer,
    AppFloatingMenu,
    MainAbout,
    MainExperience,
    MainEducation,
    MainInterests,
    MainSkills
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
      if (this.$refs.AppNavDrawer) {
        this.$refs.AppNavDrawer.selectedItem = index;
      } else {
        this.$refs.AppFloatingMenu.selectedItem = index;
      }
    }
  }
};
</script>
<style lang="scss" >
.main {
  height: 100%;
  position: absolute;
  left: 0;
  background-color: white;
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
  min-height: 110vh;
}
.description {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  margin-bottom: 0 !important;
}
.shadow {
  text-shadow: 1px 1px 3px black;
}
.carousel-width {
  max-width: 1000px;
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
  line-height: 1.25rem;
  margin-bottom: 1rem;
}
</style>
